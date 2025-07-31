import { useEffect, useState } from "react";

const PuzzleBackground = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const PuzzlePiece = ({ id, initialX, initialY, targetX, targetY, delay, color }: {
    id: number;
    initialX: number;
    initialY: number;
    targetX: number;
    targetY: number;
    delay: number;
    color: string;
  }) => (
    <div
      className="absolute opacity-20 transition-all duration-[3s] ease-in-out"
      style={{
        left: animationPhase >= 2 ? `${targetX}%` : `${initialX}%`,
        top: animationPhase >= 2 ? `${targetY}%` : `${initialY}%`,
        transform: `rotate(${animationPhase * 90}deg) scale(${animationPhase >= 2 ? 1 : 0.8})`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 100 100"
        className="drop-shadow-lg"
      >
        <path
          d="M20,20 L80,20 C85,15 95,15 95,25 C95,35 85,35 80,30 L80,50 C85,50 95,50 95,60 C95,70 85,70 80,70 L80,80 L20,80 L20,70 C15,70 5,70 5,60 C5,50 15,50 20,50 L20,30 C15,30 5,30 5,20 C5,10 15,10 20,15 Z"
          fill={color}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="rgba(255,255,255,0.4)"
          className="animate-pulse"
        />
      </svg>
    </div>
  );

  const FloatingPiece = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
    <div
      className="absolute opacity-10"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animation: `float 6s ease-in-out infinite ${delay}s`,
      }}
    >
      <svg width="40" height="40" viewBox="0 0 100 100">
        <path
          d="M30,30 L70,30 C75,25 85,25 85,35 C85,45 75,45 70,40 L70,70 L30,70 Z"
          fill="hsl(var(--primary))"
          opacity="0.3"
        />
      </svg>
    </div>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating background pieces */}
      <FloatingPiece delay={0} x={10} y={15} />
      <FloatingPiece delay={1} x={85} y={25} />
      <FloatingPiece delay={2} x={15} y={75} />
      <FloatingPiece delay={3} x={80} y={80} />
      <FloatingPiece delay={4} x={50} y={10} />
      
      {/* Main puzzle pieces that connect */}
      <PuzzlePiece
        id={1}
        initialX={10}
        initialY={20}
        targetX={40}
        targetY={35}
        delay={0}
        color="hsl(var(--primary))"
      />
      <PuzzlePiece
        id={2}
        initialX={85}
        initialY={15}
        targetX={55}
        targetY={35}
        delay={500}
        color="hsl(var(--primary))"
      />
      <PuzzlePiece
        id={3}
        initialX={15}
        initialY={80}
        targetX={40}
        targetY={50}
        delay={1000}
        color="hsl(var(--primary))"
      />
      <PuzzlePiece
        id={4}
        initialX={90}
        initialY={75}
        targetX={55}
        targetY={50}
        delay={1500}
        color="hsl(var(--primary))"
      />
      
      {/* Secondary layer with different colors */}
      <PuzzlePiece
        id={5}
        initialX={5}
        initialY={50}
        targetX={25}
        targetY={60}
        delay={2000}
        color="hsl(var(--accent))"
      />
      <PuzzlePiece
        id={6}
        initialX={95}
        initialY={45}
        targetX={75}
        targetY={60}
        delay={2500}
        color="hsl(var(--accent))"
      />

      {/* Connecting light beams */}
      <div
        className={`absolute transition-all duration-1000 ${
          animationPhase >= 2 ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          left: '47.5%',
          top: '42.5%',
          width: '5%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, hsl(var(--primary)), transparent)',
          transform: 'rotate(0deg)',
        }}
      />
      <div
        className={`absolute transition-all duration-1000 ${
          animationPhase >= 2 ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          left: '47.5%',
          top: '42.5%',
          width: '2px',
          height: '5%',
          background: 'linear-gradient(180deg, transparent, hsl(var(--primary)), transparent)',
        }}
      />

      {/* Add keyframes to index.css instead */}
    </div>
  );
};

export default PuzzleBackground;