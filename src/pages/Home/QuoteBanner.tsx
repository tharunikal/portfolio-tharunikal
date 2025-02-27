import React from 'react';
import styles from './QuoteBanner.module.css';

interface SparkleProps {
  top: number;
  left: number;
  delay: number;
}

const Sparkle: React.FC<SparkleProps> = ({ top, left, delay }) => {
  return (
    <div 
      className={styles.sparkle}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${delay}s`
      }}
    />
  );
};

interface QuoteBannerProps {
  className?: string;
}

const QuoteBanner: React.FC<QuoteBannerProps> = ({ className }) => {
  // Create an array of random sparkles
  const sparkles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 3
  }));

  return (
    <div className={`${styles.quoteBanner} ${className || ''}`}>
      <div className={styles.quoteContainer}>
        {/* Random sparkles in the background */}
        {sparkles.map(sparkle => (
          <Sparkle 
            key={sparkle.id}
            top={sparkle.top}
            left={sparkle.left}
            delay={sparkle.delay}
          />
        ))}
        
        <p className={styles.quoteText}>
          "Gather ye rosebuds while ye may,<br />
          Old Time is still a-flying."
        </p>
        <div className={styles.decorativeLine}></div>
        <p className={styles.quoteAuthor}>— Robert Herrick</p>
      </div>
    </div>
  );
};

export default QuoteBanner;