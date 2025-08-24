import React, { useEffect, useState } from 'react';

const CursorEffect: React.FC = () => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let id = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: id++
      };
      
      setTrail(prev => [...prev.slice(-10), newTrail]);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    const cleanup = setInterval(() => {
      setTrail(prev => prev.slice(1));
    }, 50);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-3 h-3 rounded-full bg-cyan-400 animate-ping"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            opacity: (index + 1) / trail.length * 0.6,
            transform: `scale(${(index + 1) / trail.length})`,
            animationDelay: `${index * 0.05}s`
          }}
        />
      ))}
    </div>
  );
};

export default CursorEffect;