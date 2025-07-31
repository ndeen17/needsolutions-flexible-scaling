import { useEffect, useState } from "react";

const PuzzleBackground = () => {
  const [animationState, setAnimationState] = useState<'scattered' | 'approaching' | 'connected' | 'separating'>('scattered');

  useEffect(() => {
    const animationSequence = async () => {
      // Start scattered for 3 seconds
      setAnimationState('scattered');
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Approach and connect over 4 seconds (slower)
      setAnimationState('approaching');
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      // Stay connected for 3 seconds
      setAnimationState('connected');
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Separate over 4 seconds (slower)
      setAnimationState('separating');
      await new Promise(resolve => setTimeout(resolve, 4000));
    };

    const runSequence = () => {
      animationSequence().then(() => {
        // Restart the sequence with longer pause
        setTimeout(runSequence, 2000);
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
        className="absolute transition-all duration-[4000ms] ease-out"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
          transform: `translate(-50%, -50%) rotate(${pos.rotation}deg) scale(${pos.scale})`,
          opacity: pos.opacity,
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: animationState === 'approaching' 
            ? 'cubic-bezier(0.23, 1, 0.32, 1)' 
            : animationState === 'separating'
            ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            : 'cubic-bezier(0.4, 0, 0.2, 1)',
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
            left: '43%',
            top: '45%',
            width: '14%',
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
            top: '38%',
            width: '2px',
            height: '14%',
            background: 'linear-gradient(180deg, transparent, hsl(var(--primary)), hsl(var(--primary)), transparent)',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }}
        />
        {/* Central glow */}
        <div
          className="absolute transition-all duration-1000"
          style={{
            left: '50%',
            top: '45%',
            width: '6px',
            height: '6px',
            background: 'hsl(var(--primary))',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 15px hsl(var(--primary) / 0.6)',
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

      {/* Main puzzle pieces - designed to interlock perfectly */}
      {/* Top-left piece with right knob and bottom knob */}
      <PuzzlePiece
        piece={1}
        scatteredPos={{ x: 15, y: 20, rotation: -45 }}
        connectedPos={{ x: 45, y: 40, rotation: 0 }}
        color="hsl(var(--primary))"
        shape="M20,20 L50,20 L50,35 C55,30 65,30 70,35 C65,40 55,40 50,35 L50,50 L35,50 C30,55 30,65 35,70 C40,65 40,55 35,50 L20,50 L20,20 Z"
        delay={0}
      />
      
      {/* Top-right piece with left socket and bottom knob */}
      <PuzzlePiece
        piece={2}
        scatteredPos={{ x: 85, y: 15, rotation: 180 }}
        connectedPos={{ x: 55, y: 40, rotation: 0 }}
        color="hsl(var(--primary))"
        shape="M50,20 L80,20 L80,50 L65,50 C70,55 70,65 65,70 C60,65 60,55 65,50 L50,50 L50,35 C45,40 35,40 30,35 C35,30 45,30 50,35 L50,20 Z"
        delay={100}
      />
      
      {/* Bottom-left piece with right knob and top socket */}
      <PuzzlePiece
        piece={3}
        scatteredPos={{ x: 20, y: 80, rotation: 90 }}
        connectedPos={{ x: 45, y: 50, rotation: 0 }}
        color="hsl(var(--primary))"
        shape="M20,50 L35,50 C30,45 30,35 35,30 C40,35 40,45 35,50 L50,50 L50,65 C55,60 65,60 70,65 C65,70 55,70 50,65 L50,80 L20,80 L20,50 Z"
        delay={200}
      />
      
      {/* Bottom-right piece with left socket and top socket */}
      <PuzzlePiece
        piece={4}
        scatteredPos={{ x: 90, y: 75, rotation: -90 }}
        connectedPos={{ x: 55, y: 50, rotation: 0 }}
        color="hsl(var(--primary))"
        shape="M50,50 L65,50 C70,45 70,35 65,30 C60,35 60,45 65,50 L80,50 L80,80 L50,80 L50,65 C45,70 35,70 30,65 C35,60 45,60 50,65 L50,50 Z"
        delay={300}
      />

      {/* Connection lines and effects */}
      <ConnectionLines />
    </div>
  );
};

export default PuzzleBackground;