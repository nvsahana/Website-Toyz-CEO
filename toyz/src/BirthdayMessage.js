import React, { useState } from 'react';
import './BirthdayMessage.css';
import CandleBlowing from './CandleBlowing';
import damolaImg from './assets/damola.jpeg';
import sahanaImg from './assets/sahana.jpeg';
import woleImg from './assets/wole.jpeg';
import taylorImg from './assets/taylor.jpeg';

const BirthdayMessage = ({ onNavigateToVision }) => {
  const [showCandles, setShowCandles] = useState(false);

  const handleGiftClick = () => {
    setShowCandles(true);
  };

  const handleCandleComplete = () => {
    setShowCandles(false);
    onNavigateToVision();
  };

  return (
    <div className="birthday-container">
      <div className="birthday-content">
        <div className="superhero-badge">
          <div className="badge-glow"></div>
          <span className="badge-text">TOYZ ELECTRONICS</span>
        </div>
        
        <div className="ceo-photo-container">
          <div className="photo-glow"></div>
          <img src={damolaImg} alt="CEO Damola" className="ceo-photo" />
          <div className="photo-frame"></div>
        </div>
        
        <h1 className="birthday-title">
          <span className="title-line">Happy Birthday</span>
          <span className="ceo-name">CEO Damola!</span>
        </h1>
        
        <div className="birthday-card">
          <div className="card-shine"></div>
          <div className="message-content">
            <p className="main-message">
              Your vision to empower students to navigate STEM as superheroes—
              learning through games, passion, and guidance from industry 
              professionals and university professors—is truly inspiring.
            </p>
            
            <div className="team-commitment">
              <h3 className="commitment-title">Our Promise to You</h3>
              <p className="commitment-text">
                With <strong>Wole Idowu</strong> (CTO), <strong>Sahana</strong>, 
                and <strong>Taylor Weddington</strong> (Product Manager) by your side, 
                we are committed to making this vision a reality.
              </p>
            </div>
            
            <div className="success-wish">
              <div className="wish-icon">
                <svg viewBox="0 0 100 100" width="60" height="60">
                  <ellipse cx="50" cy="65" rx="15" ry="30" fill="#667eea" stroke="#fff" strokeWidth="2"/>
                  <circle cx="50" cy="35" r="15" fill="#ff6b6b"/>
                  <polygon points="38,70 35,90 45,80" fill="#ffd700"/>
                  <polygon points="62,70 65,90 55,80" fill="#ffd700"/>
                  <circle cx="50" cy="50" r="5" fill="#fff"/>
                  <path d="M 45 20 Q 50 10, 55 20" fill="none" stroke="#ffd700" strokeWidth="2"/>
                </svg>
              </div>
              <p className="wish-text">
                We wish you all the success in the world and promise that together, 
                in due time, we will achieve this incredible vision and transform 
                countless lives!
              </p>
            </div>
            
            <div className="longevity-wish">
              <div className="star-burst">
                <svg viewBox="0 0 100 100" width="70" height="70" className="burst-icon">
                  <path d="M 50 10 L 55 40 L 85 45 L 55 50 L 50 80 L 45 50 L 15 45 L 45 40 Z" fill="#ffd700">
                    <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="3s" repeatCount="indefinite"/>
                  </path>
                  <circle cx="50" cy="45" r="15" fill="#fff" opacity="0.8">
                    <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </div>
              <h3 className="longevity-title">Our Heartfelt Wishes</h3>
              <p className="longevity-text">
                May all your dreams come true in the year ahead! We wish you a life filled with 
                longevity, boundless success, health, and happiness. Your leadership continues 
                to inspire us every day!
              </p>
            </div>

            <div className="signature">
              <div className="team-photos">
                <div className="team-photo-item">
                  <img src={woleImg} alt="Wole" className="team-photo" />
                  <p className="photo-name">Wole</p>
                </div>
                <div className="team-photo-item">
                  <img src={sahanaImg} alt="Sahana" className="team-photo" />
                  <p className="photo-name">Sahana</p>
                </div>
                <div className="team-photo-item">
                  <img src={taylorImg} alt="Taylor" className="team-photo" />
                  <p className="photo-name">Taylor</p>
                </div>
              </div>
              <p>With love and dedication,</p>
              <p className="team-names">Wole Idowu</p>
              <p className="team-motto">Together with Sahana & Taylor - The Toyz Electronics Dream Team</p>
            </div>
          </div>
        </div>
        
        <button className="gift-button" onClick={handleGiftClick}>
          <svg className="gift-svg" viewBox="0 0 100 100" width="80" height="80">
            {/* Gift box */}
            <rect x="25" y="50" width="50" height="40" fill="#ff6b6b" stroke="#fff" strokeWidth="2"/>
            {/* Ribbon horizontal */}
            <rect x="15" y="45" width="70" height="10" fill="#ffd700" stroke="#fff" strokeWidth="2"/>
            {/* Plus sign vertical */}
            <rect x="47" y="50" width="6" height="40" fill="#ffd700"/>
            {/* Plus sign horizontal */}
            <rect x="25" y="67" width="50" height="6" fill="#ffd700"/>
            {/* Bow top left */}
            <path d="M 40 40 Q 30 35, 35 45 L 40 45 Z" fill="#ff1493" stroke="#fff" strokeWidth="1"/>
            {/* Bow top right */}
            <path d="M 60 40 Q 70 35, 65 45 L 60 45 Z" fill="#ff1493" stroke="#fff" strokeWidth="1"/>
            {/* Bow center */}
            <circle cx="50" cy="42" r="5" fill="#fff"/>
          </svg>
          <span className="gift-button-text">Open Your Gift!</span>
        </button>
        
        <div className="floating-icons">
          <div className="icon icon-1">
            <svg viewBox="0 0 100 100" width="60" height="60">
              <circle cx="50" cy="45" r="15" fill="#ffd700"/>
              <rect x="35" y="60" width="30" height="35" rx="5" fill="#ff6b6b"/>
              <path d="M 40 60 L 35 50 L 45 50 Z" fill="#4d9fff"/>
              <path d="M 60 60 L 65 50 L 55 50 Z" fill="#4d9fff"/>
              <rect x="45" y="95" width="5" height="10" fill="#ff6b6b"/>
              <rect x="50" y="95" width="5" height="10" fill="#ff6b6b"/>
            </svg>
          </div>
          <div className="icon icon-2">
            <svg viewBox="0 0 100 100" width="60" height="60">
              <path d="M 50 10 L 60 40 L 50 35 L 40 40 Z" fill="#ffd700"/>
              <path d="M 50 35 L 60 65 L 50 60 L 40 65 Z" fill="#ffed4e"/>
              <path d="M 50 60 L 60 90 L 50 85 L 40 90 Z" fill="#ffd700"/>
            </svg>
          </div>
          <div className="icon icon-3">
            <svg viewBox="0 0 100 100" width="60" height="60">
              <rect x="20" y="30" width="60" height="40" rx="5" fill="#667eea"/>
              <rect x="35" y="45" width="10" height="10" rx="2" fill="#4d9fff"/>
              <rect x="55" y="45" width="10" height="10" rx="2" fill="#4d9fff"/>
              <circle cx="40" cy="50" r="3" fill="#ffd700"/>
              <circle cx="60" cy="50" r="3" fill="#ffd700"/>
            </svg>
          </div>
          <div className="icon icon-4">
            <svg viewBox="0 0 100 100" width="60" height="60">
              <path d="M 50 20 L 55 45 L 80 50 L 55 55 L 50 80 L 45 55 L 20 50 L 45 45 Z" fill="#ffd700" stroke="#ffed4e" strokeWidth="2"/>
            </svg>
          </div>
          <div className="icon icon-5">
            <svg viewBox="0 0 100 100" width="60" height="60">
              <circle cx="50" cy="50" r="30" fill="#ff6b6b" stroke="#fff" strokeWidth="3"/>
              <circle cx="50" cy="50" r="20" fill="#fff" stroke="#ff6b6b" strokeWidth="3"/>
              <circle cx="50" cy="50" r="10" fill="#ff6b6b"/>
              <circle cx="50" cy="50" r="3" fill="#ffd700"/>
            </svg>
          </div>
          <div className="icon icon-6">
            <svg viewBox="0 0 100 100" width="60" height="60">
              <circle cx="50" cy="60" r="20" fill="#ffd700"/>
              <path d="M 50 20 L 45 45 L 50 40 L 55 45 Z" fill="#ffd700"/>
              <line x1="30" y1="50" x2="20" y2="45" stroke="#ffd700" strokeWidth="3"/>
              <line x1="70" y1="50" x2="80" y2="45" stroke="#ffd700" strokeWidth="3"/>
              <line x1="35" y1="70" x2="25" y2="75" stroke="#ffd700" strokeWidth="3"/>
              <line x1="65" y1="70" x2="75" y2="75" stroke="#ffd700" strokeWidth="3"/>
            </svg>
          </div>
        </div>
      </div>

      {showCandles && <CandleBlowing onComplete={handleCandleComplete} />}
    </div>
  );
};

export default BirthdayMessage;
