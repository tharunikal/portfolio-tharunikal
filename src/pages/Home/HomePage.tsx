import React, { useState, useEffect, useRef } from 'react';
import styles from './HomePage.module.css';


interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

function HomePage() {
  const [typedText, setTypedText] = useState('');
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clickEffect, setClickEffect] = useState<{ active: boolean; x: number; y: number }>({ active: false, x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const name = 'Tharunika L';
  const typingSpeed = 150;

  // Typing effect
  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < name.length) {
        setTypedText(name.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [name, typingSpeed]);

  // Sparkle trail effect
  useEffect(() => {
    if (!containerRef.current) return;

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
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

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

  // Click effect
  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClickEffect({ active: true, x, y });

    setTimeout(() => {
      setClickEffect({ active: false, x: 0, y: 0 });
    }, 700);
  };

  return (
    <div className={styles.homePage} ref={containerRef} onClick={handleClick}>
      {/* Sparkle particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.sparkle}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Click ripple effect */}
      {clickEffect.active && (
        <div
          className={styles.clickEffect}
          style={{
            left: `${clickEffect.x}px`,
            top: `${clickEffect.y}px`,
          }}
        />
      )}

      <h1>hey there, it's</h1>
      <h2 className={styles.typing}>
        {typedText}
        <span className={styles.cursor}>|</span>
      </h2>
      <p className={styles.subtitle}>Software Developer • Machine Learning Engineer</p>
      
    </div>
    
  );
}

export default HomePage;
