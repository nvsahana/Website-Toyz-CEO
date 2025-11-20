import React, { useState } from 'react';
import './App.css';
import BirthdayMessage from './BirthdayMessage';
import ToyzVision from './ToyzVision';

function App() {
  const [currentView, setCurrentView] = useState('birthday');
  const [showHeroAnimation, setShowHeroAnimation] = useState(false);

  const handleNavigateToVision = () => {
    setCurrentView('vision');
    setShowHeroAnimation(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setTimeout(() => {
      setShowHeroAnimation(false);
    }, 4000);
  };

  const handleNavButtonClick = () => {
    setCurrentView('vision');
    setShowHeroAnimation(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setTimeout(() => {
      setShowHeroAnimation(false);
    }, 4000);
  };

  return (
    <div className="App">
      <nav className="navigation">
        <button 
          className={`nav-btn ${currentView === 'birthday' ? 'active' : ''}`}
          onClick={() => setCurrentView('birthday')}
        >
          <svg viewBox="0 0 100 100" width="24" height="24" className="nav-icon">
            <rect x="30" y="50" width="10" height="30" fill="#ffd700"/>
            <rect x="45" y="40" width="10" height="40" fill="#ffd700"/>
            <rect x="60" y="50" width="10" height="30" fill="#ffd700"/>
            <path d="M 35 48 Q 35 40, 40 40" stroke="#ff6b6b" strokeWidth="2" fill="none"/>
            <path d="M 50 38 Q 50 30, 55 30" stroke="#ff6b6b" strokeWidth="2" fill="none"/>
            <path d="M 65 48 Q 65 40, 70 40" stroke="#ff6b6b" strokeWidth="2" fill="none"/>
            <ellipse cx="50" cy="85" rx="35" ry="5" fill="#667eea"/>
          </svg>
          Birthday Message
        </button>
        <button 
          className={`nav-btn ${currentView === 'vision' ? 'active' : ''}`}
          onClick={handleNavButtonClick}
        >
          <svg viewBox="0 0 100 100" width="24" height="24" className="nav-icon">
            <path d="M 50 20 L 60 45 L 50 40 L 40 45 Z" fill="#ffd700"/>
            <ellipse cx="50" cy="60" rx="20" ry="25" fill="#ff6b6b"/>
            <rect x="35" y="85" width="12" height="8" fill="#667eea"/>
            <rect x="53" y="85" width="12" height="8" fill="#667eea"/>
            <path d="M 30 55 L 20 50 L 25 60 Z" fill="#4d9fff"/>
            <path d="M 70 55 L 80 50 L 75 60 Z" fill="#4d9fff"/>
          </svg>
          Our Vision
        </button>
      </nav>

      {currentView === 'birthday' ? (
        <BirthdayMessage onNavigateToVision={handleNavigateToVision} />
      ) : (
        <ToyzVision showHeroAnimation={showHeroAnimation} />
      )}
    </div>
  );
}

export default App;
