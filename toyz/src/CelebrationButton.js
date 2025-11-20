import React, { useState } from 'react';
import './CelebrationButton.css';

const CelebrationButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [balloons, setBalloons] = useState([]);

  const handleCelebrate = () => {
    setIsLoading(true);
    
    // Loading animation for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
      setShowCelebration(true);
      
      // Generate balloons
      const newBalloons = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 3 + Math.random() * 2,
        color: ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d9fff', '#c44dff', '#ff1493', '#00ffff'][Math.floor(Math.random() * 7)],
        size: 60 + Math.random() * 40
      }));
      setBalloons(newBalloons);
      
      // Reset after celebration
      setTimeout(() => {
        setShowCelebration(false);
        setBalloons([]);
      }, 5000);
    }, 3000);
  };

  return (
    <>
      <div className="celebration-container">
        <button 
          className={`celebration-btn ${isLoading ? 'loading' : ''}`}
          onClick={handleCelebrate}
          disabled={isLoading || showCelebration}
        >
          <div className="ribbon ribbon-left"></div>
          <div className="ribbon ribbon-right"></div>
          <div className="ribbon ribbon-top"></div>
          <div className="ribbon ribbon-bottom"></div>
          
          {isLoading ? (
            <div className="loading-animation">
              <div className="loading-spinner">
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
                <div className="spinner-ring"></div>
              </div>
              <span className="loading-text">Preparing Celebration...</span>
            </div>
          ) : (
            <span className="btn-text">
              <svg className="gift-icon" viewBox="0 0 100 100" width="40" height="40">
                <rect x="35" y="45" width="30" height="35" fill="#ff6b6b" stroke="#fff" strokeWidth="2"/>
                <rect x="20" y="35" width="60" height="15" fill="#ffd93d" stroke="#fff" strokeWidth="2"/>
                <path d="M 50 15 Q 40 20, 40 30 L 50 35" fill="#ff1493" stroke="#fff" strokeWidth="2"/>
                <path d="M 50 15 Q 60 20, 60 30 L 50 35" fill="#ff1493" stroke="#fff" strokeWidth="2"/>
                <circle cx="50" cy="15" r="5" fill="#fff"/>
                <rect x="48" y="35" width="4" height="45" fill="#ffd93d"/>
                <rect x="20" y="42" width="60" height="4" fill="#ffd93d"/>
              </svg>
              Click to Celebrate!
            </span>
          )}
          
          <div className="btn-shine"></div>
        </button>
      </div>

      {showCelebration && (
        <div className="celebration-overlay">
          <div className="confetti-container">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  backgroundColor: ['#ff6b6b', '#ffd93d', '#6bcf7f', '#4d9fff', '#c44dff', '#ff1493'][Math.floor(Math.random() * 6)]
                }}
              />
            ))}
          </div>
          
          <div className="balloons-container">
            {balloons.map((balloon) => (
              <div
                key={balloon.id}
                className="balloon"
                style={{
                  left: `${balloon.left}%`,
                  animationDelay: `${balloon.delay}s`,
                  animationDuration: `${balloon.duration}s`,
                }}
              >
                <svg viewBox="0 0 100 125" width={balloon.size} height={balloon.size * 1.25}>
                  <ellipse cx="50" cy="60" rx="35" ry="45" fill={balloon.color} stroke="#fff" strokeWidth="2"/>
                  <path d="M 50 105 Q 45 110, 50 115 Q 55 110, 50 105" fill={balloon.color} stroke="#fff" strokeWidth="1"/>
                  <line x1="50" y1="115" x2="50" y2="145" stroke="#666" strokeWidth="1.5"/>
                  <ellipse cx="50" cy="50" rx="15" ry="20" fill="rgba(255,255,255,0.3)"/>
                </svg>
              </div>
            ))}
          </div>
          
          <div className="celebration-message">
            <h2 className="celebration-title">🎉 HAPPY BIRTHDAY! 🎉</h2>
            <p className="celebration-subtitle">Let's Make Dreams Reality!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CelebrationButton;
