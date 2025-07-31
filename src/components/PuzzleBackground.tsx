import { useEffect, useState } from "react";

const PuzzleBackground = () => {
  const [animationState, setAnimationState] = useState<'scattered' | 'approaching' | 'connected' | 'separating'>('scattered');

  useEffect(() => {
    const animationSequence = async () => {
      // Start scattered for 2 seconds
      setAnimationState('scattered');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Approach and connect over 3 seconds
      setAnimationState('approaching');
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Stay connected for 2 seconds
      setAnimationState('connected');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Separate over 2 seconds
      setAnimationState('separating');
      await new Promise(resolve => setTimeout(resolve, 2000));
    };

    const runSequence = () => {
      animationSequence().then(() => {
        // Restart the sequence
        setTimeout(runSequence, 1000);
      });
    };

    runSequence();
  }, []);

  const PuzzlePiece = ({ 
    piece,
    scatteredPos,
    connectedPos,
    color,
    shape,
    delay = 0 
  }: {
    piece: number;
    scatteredPos: { x: number; y: number; rotation: number };
    connectedPos: { x: number; y: number; rotation: number };
    color: string;
    shape: string;
    delay?: number;
  }) => {
    const getPosition = () => {
      switch (animationState) {
        case 'scattered':
          return {
            x: scatteredPos.x,
            y: scatteredPos.y,
            rotation: scatteredPos.rotation,
            scale: 0.9,
            opacity: 0.3
          };
        case 'approaching':
          return {
            x: connectedPos.x,
            y: connectedPos.y,
            rotation: connectedPos.rotation,
            scale: 1,
            opacity: 0.4
          };
        case 'connected':
          return {
            x: connectedPos.x,
            y: connectedPos.y,
            rotation: connectedPos.rotation,
            scale: 1,
            opacity: 0.5
          };
        case 'separating':
          return {
            x: scatteredPos.x,
            y: scatteredPos.y,
            rotation: scatteredPos.rotation + 180,
            scale: 0.8,
            opacity: 0.2
          };
        default:
          return {
            x: scatteredPos.x,
            y: scatteredPos.y,
            rotation: scatteredPos.rotation,
            scale: 0.9,
            opacity: 0.3
          };
      }
    };

    const pos = getPosition();
    const isConnected = animationState === 'connected';

    return (
      <div
        className="absolute transition-all duration-[2500ms] ease-out"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: `translate(-50%, -50%) rotate(${pos.rotation}deg) scale(${pos.scale})`,
          opacity: pos.opacity,
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: animationState === 'approaching' ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
          filter: isConnected ? 'drop-shadow(0 0 20px hsl(var(--primary) / 0.6))' : 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
        }}
      >
        <div 
          className={`transition-all duration-300 ${isConnected ? 'animate-pulse' : ''}`}
          style={{
            transform: animationState === 'scattered' ? `translateY(${Math.sin(Date.now() / 1000 + piece) * 3}px)` : 'none'
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 120 120"
            className={`transition-all duration-500 ${isConnected ? 'brightness-110' : ''}`}
          >
            <defs>
              <linearGradient id={`grad-${piece}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={color} stopOpacity="0.8" />
                <stop offset="100%" stopColor={color} stopOpacity="0.4" />
              </linearGradient>
              <filter id={`glow-${piece}`}>
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d={shape}
              fill={`url(#grad-${piece})`}
              stroke={isConnected ? 'hsl(var(--primary))' : 'rgba(255,255,255,0.3)'}
              strokeWidth={isConnected ? "2" : "1"}
              filter={isConnected ? `url(#glow-${piece})` : 'none'}
            />
            {/* Connection indicator */}
            {isConnected && (
              <circle
                cx="60"
                cy="60"
                r="4"
                fill="hsl(var(--primary))"
                className="animate-ping"
              />
            )}
          </svg>
        </div>
      </div>
    );
  };

  const FloatingParticle = ({ x, y, delay, size = 20 }: { x: number; y: number; delay: number; size?: number }) => (
    <div
      className="absolute animate-float-gentle opacity-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: '8s',
      }}
    >
      <div 
        className="rounded-full bg-primary/30"
        style={{ width: size, height: size }}
      />
    </div>
  );

  // Connection lines that appear when pieces are connected
  const ConnectionLines = () => {
    if (animationState !== 'connected') return null;
    
    return (
      <>
        {/* Horizontal connection */}
        <div
          className="absolute transition-all duration-1000 opacity-30"
          style={{
            left: '35%',
            top: '40%',
            width: '30%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), hsl(var(--primary)), transparent)',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }}
        />
        {/* Vertical connection */}
        <div
          className="absolute transition-all duration-1000 opacity-30"
          style={{
            left: '50%',
            top: '25%',
            width: '2px',
            height: '30%',
            background: 'linear-gradient(180deg, transparent, hsl(var(--primary)), hsl(var(--primary)), transparent)',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }}
        />
        {/* Central glow */}
        <div
          className="absolute transition-all duration-1000"
          style={{
            left: '50%',
            top: '40%',
            width: '8px',
            height: '8px',
            background: 'hsl(var(--primary))',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 20px hsl(var(--primary) / 0.8)',
            animation: 'pulse-bright 1.5s ease-in-out infinite',
          }}
        />
      </>
    );
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      <FloatingParticle x={15} y={20} delay={0} size={16} />
      <FloatingParticle x={85} y={25} delay={2} size={12} />
      <FloatingParticle x={20} y={75} delay={4} size={18} />
      <FloatingParticle x={80} y={80} delay={1} size={14} />
      <FloatingParticle x={10} y={50} delay={3} size={10} />
      <FloatingParticle x={90} y={55} delay={5} size={15} />

      {/* Main puzzle pieces */}
      <PuzzlePiece
        piece={1}
        scatteredPos={{ x: 15, y: 20, rotation: -45 }}
        connectedPos={{ x: 42, y: 35, rotation: 0 }}
        color="hsl(var(--primary))"
        shape="M20,20 L80,20 C90,15 100,25 90,35 L90,50 C100,50 110,60 100,70 C90,70 90,85 80,80 L20,80 L20,70 C10,70 0,60 10,50 C20,50 20,35 10,25 C0,15 10,15 20,20 Z"
        delay={0}
      />
      
      <PuzzlePiece
        piece={2}
        scatteredPos={{ x: 85, y: 15, rotation: 180 }}
        connectedPos={{ x: 58, y: 35, rotation: 0 }}
        color="hsl(var(--primary))"
        shape="M20,20 L80,80 L20,80 C10,85 0,75 10,65 L10,50 C0,50 -10,40 0,30 C10,30 10,15 20,20 Z"
        delay={200}
      />
      
      <PuzzlePiece
        piece={3}
        scatteredPos={{ x: 20, y: 80, rotation: 90 }}
        connectedPos={{ x: 42, y: 50, rotation: 0 }}
        color="hsl(var(--primary))"
        shape="M20,20 L80,20 C90,15 100,25 90,35 L90,80 L20,80 L20,65 C10,65 0,55 10,45 C20,45 20,30 20,20 Z"
        delay={400}
      />
      
      <PuzzlePiece
        piece={4}
        scatteredPos={{ x: 90, y: 75, rotation: -90 }}
        connectedPos={{ x: 58, y: 50, rotation: 0 }}
        color="hsl(var(--primary))"
        shape="M20,20 L80,20 L80,35 C90,35 100,45 90,55 C80,55 80,70 80,80 L20,80 L20,65 C10,70 0,60 10,50 C20,50 20,35 10,25 C0,15 10,15 20,20 Z"
        delay={600}
      />

      {/* Secondary accent pieces */}
      <PuzzlePiece
        piece={5}
        scatteredPos={{ x: 5, y: 45, rotation: 135 }}
        connectedPos={{ x: 35, y: 60, rotation: 0 }}
        color="hsl(var(--accent))"
        shape="M30,30 L70,30 C80,25 90,35 80,45 L80,70 L30,70 Z"
        delay={800}
      />
      
      <PuzzlePiece
        piece={6}
        scatteredPos={{ x: 95, y: 40, rotation: -135 }}
        connectedPos={{ x: 65, y: 60, rotation: 0 }}
        color="hsl(var(--accent))"
        shape="M30,30 L70,70 L30,70 C20,75 10,65 20,55 L20,40 C10,40 0,30 10,20 C20,20 20,25 30,30 Z"
        delay={1000}
      />

      {/* Connection lines and effects */}
      <ConnectionLines />
    </div>
  );
};

export default PuzzleBackground;