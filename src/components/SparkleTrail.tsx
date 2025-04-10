// src/components/SparkleTrail.tsx

import React, { useEffect, useRef, useState } from 'react';
import './SparkleTrail.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const SparkleTrail: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createSparkle = (x: number, y: number): Particle => {
      const colors = ['var(--primary-color)', 'var(--secondary-color-2)', 'var(--tertiary-color-2)'];
      return {
        id: Math.random(),
        x,
        y,
        size: Math.random() * 6 + 2,
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (Math.random() > 0.7) {
        setParticles((prev) => [...prev.slice(-20), createSparkle(x, y)]);
      }
    };

    const fadeInterval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({ ...p, opacity: p.opacity - 0.05 })).filter((p) => p.opacity > 0)
      );
    }, 50);

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(fadeInterval);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
      {particles.map((p) => (
        <div
          key={p.id}
          className="sparkle"
          style={{
            top: p.y,
            left: p.x,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default SparkleTrail;
