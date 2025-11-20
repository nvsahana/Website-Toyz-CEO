import React, { useState } from 'react';
import './CandleBlowing.css';

const CandleBlowing = ({ onComplete }) => {
  const [isBlowing, setIsBlowing] = useState(false);
  const [candlesOut, setCandlesOut] = useState([false, false, false]);

  const handleBlow = () => {
    if (isBlowing) return;
    setIsBlowing(true);
    
    // Blow out candles one by one
    setTimeout(() => setCandlesOut([true, false, false]), 300);
    setTimeout(() => setCandlesOut([true, true, false]), 600);
    setTimeout(() => setCandlesOut([true, true, true]), 900);
    
    // Complete animation and reveal gift
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="candle-blowing-overlay">
      <div className="candle-container">
        <h2 className="blow-instruction">Make a Wish & Blow the Candles! 🎂</h2>
        <button className="blow-button" onClick={handleBlow} disabled={isBlowing}>
          {isBlowing ? 'Blowing...' : 'Click to Blow! 💨'}
        </button>
        
        <div className="candles-wrapper">
          {/* Candle 1 */}
          <div className="candle">
            <div className={`flame ${candlesOut[0] ? 'out' : ''}`}>
              <svg viewBox="0 0 40 60" width="40" height="60">
                <ellipse cx="20" cy="15" rx="8" ry="12" fill="url(#flameGradient1)">
                  <animate attributeName="ry" values="12;14;12" dur="0.5s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="20" cy="18" rx="5" ry="8" fill="#ffd700" opacity="0.8">
                  <animate attributeName="ry" values="8;10;8" dur="0.4s" repeatCount="indefinite"/>
                </ellipse>
                <defs>
                  <radialGradient id="flameGradient1">
                    <stop offset="0%" stopColor="#ffed4e"/>
                    <stop offset="50%" stopColor="#ff6b6b"/>
                    <stop offset="100%" stopColor="#ff1493"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="wick"></div>
            <div className="candle-body candle-red"></div>
          </div>

          {/* Candle 2 */}
          <div className="candle">
            <div className={`flame ${candlesOut[1] ? 'out' : ''}`}>
              <svg viewBox="0 0 40 60" width="40" height="60">
                <ellipse cx="20" cy="15" rx="8" ry="12" fill="url(#flameGradient2)">
                  <animate attributeName="ry" values="12;15;12" dur="0.6s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="20" cy="18" rx="5" ry="8" fill="#ffd700" opacity="0.8">
                  <animate attributeName="ry" values="8;11;8" dur="0.5s" repeatCount="indefinite"/>
                </ellipse>
                <defs>
                  <radialGradient id="flameGradient2">
                    <stop offset="0%" stopColor="#ffed4e"/>
                    <stop offset="50%" stopColor="#ff6b6b"/>
                    <stop offset="100%" stopColor="#ff1493"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="wick"></div>
            <div className="candle-body candle-blue"></div>
          </div>

          {/* Candle 3 */}
          <div className="candle">
            <div className={`flame ${candlesOut[2] ? 'out' : ''}`}>
              <svg viewBox="0 0 40 60" width="40" height="60">
                <ellipse cx="20" cy="15" rx="8" ry="12" fill="url(#flameGradient3)">
                  <animate attributeName="ry" values="12;13;12" dur="0.7s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="20" cy="18" rx="5" ry="8" fill="#ffd700" opacity="0.8">
                  <animate attributeName="ry" values="8;9;8" dur="0.6s" repeatCount="indefinite"/>
                </ellipse>
                <defs>
                  <radialGradient id="flameGradient3">
                    <stop offset="0%" stopColor="#ffed4e"/>
                    <stop offset="50%" stopColor="#ff6b6b"/>
                    <stop offset="100%" stopColor="#ff1493"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="wick"></div>
            <div className="candle-body candle-purple"></div>
          </div>
        </div>
        
        {isBlowing && (
          <div className="wind-animation">
            <svg viewBox="0 0 200 100" width="200" height="100">
              <path d="M 10 50 Q 50 30, 90 50" stroke="#4d9fff" strokeWidth="3" fill="none" opacity="0.7">
                <animate attributeName="d" values="M 10 50 Q 50 30, 90 50;M 10 50 Q 50 40, 90 50;M 10 50 Q 50 30, 90 50" dur="0.5s" repeatCount="indefinite"/>
              </path>
              <path d="M 10 60 Q 50 40, 90 60" stroke="#4d9fff" strokeWidth="3" fill="none" opacity="0.6">
                <animate attributeName="d" values="M 10 60 Q 50 40, 90 60;M 10 60 Q 50 50, 90 60;M 10 60 Q 50 40, 90 60" dur="0.6s" repeatCount="indefinite"/>
              </path>
              <path d="M 10 70 Q 50 50, 90 70" stroke="#4d9fff" strokeWidth="3" fill="none" opacity="0.5">
                <animate attributeName="d" values="M 10 70 Q 50 50, 90 70;M 10 70 Q 50 60, 90 70;M 10 70 Q 50 50, 90 70" dur="0.7s" repeatCount="indefinite"/>
              </path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandleBlowing;
