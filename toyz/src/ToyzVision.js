import React, { useState, useEffect } from 'react';
import './ToyzVision.css';
import sahanaImg from './assets/sahana.jpeg';
import woleImg from './assets/wole.jpeg';
import taylorImg from './assets/taylor.jpeg';

const ToyzVision = ({ showHeroAnimation }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [heroFlying, setHeroFlying] = useState(showHeroAnimation);

  useEffect(() => {
    if (showHeroAnimation) {
      setHeroFlying(true);
      const timer = setTimeout(() => setHeroFlying(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showHeroAnimation]);

  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight * 0.6 && rect.bottom >= windowHeight * 0.4) {
          setActiveSection(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="vision-container">
      <div className="cosmic-bg"></div>
      <div className="particles"></div>
      
      {heroFlying && (
        <div className="flying-superhero">
          <svg viewBox="0 0 100 120" width="80" height="96">
            {/* Cape */}
            <path d="M 35 35 Q 20 50, 25 80 L 35 75 Z" fill="#ff1493" opacity="0.8"/>
            <path d="M 65 35 Q 80 50, 75 80 L 65 75 Z" fill="#ff1493" opacity="0.8"/>
            {/* Body */}
            <ellipse cx="50" cy="55" rx="18" ry="25" fill="#667eea"/>
            {/* Head */}
            <circle cx="50" cy="30" r="12" fill="#ffd700"/>
            {/* Mask */}
            <ellipse cx="50" cy="28" rx="14" ry="6" fill="#000"/>
            {/* Arms extended forward */}
            <ellipse cx="35" cy="50" rx="8" ry="4" fill="#ffd700" transform="rotate(-30 35 50)"/>
            <ellipse cx="65" cy="50" rx="8" ry="4" fill="#ffd700" transform="rotate(30 65 50)"/>
            {/* Legs */}
            <rect x="42" y="75" width="6" height="20" fill="#667eea"/>
            <rect x="52" y="75" width="6" height="20" fill="#667eea"/>
            <ellipse cx="45" cy="95" rx="4" ry="3" fill="#ff6b6b"/>
            <ellipse cx="55" cy="95" rx="4" ry="3" fill="#ff6b6b"/>
            {/* Belt */}
            <rect x="35" y="65" width="30" height="4" fill="#ffd700"/>
            {/* Logo */}
            <circle cx="50" cy="50" r="6" fill="#ffd700"/>
            <text x="50" y="54" fontSize="8" fill="#667eea" textAnchor="middle" fontWeight="bold">T</text>
          </svg>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="logo-container">
            <div className="logo-glow"></div>
            <h1 className="logo-text">
              <span className="toyz-logo">TOYZ</span>
              <span className="electronics-logo">ELECTRONICS</span>
            </h1>
          </div>
          
          <h2 className="hero-tagline">
            Where Students Become <span className="superhero-text">STEM Superheroes</span>
          </h2>
          
          <div className="hero-description">
            <p>Transforming STEM Education Through Gaming, Mentorship & Real-World Experience</p>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
          <span>Discover Our Vision</span>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="vision-statement">
        <div className="statement-card">
          <div className="card-border"></div>
          <h2 className="section-title">Our Revolutionary Vision</h2>
          <div className="vision-grid">
            <div className="vision-point">
              <div className="point-icon">
                <svg viewBox="0 0 100 100" width="60" height="60">
                  <rect x="20" y="40" width="60" height="35" rx="8" fill="#667eea" stroke="#fff" strokeWidth="2"/>
                  <circle cx="35" cy="55" r="6" fill="#4d9fff"/>
                  <rect x="58" y="50" width="8" height="3" rx="1" fill="#ff6b6b"/>
                  <rect x="63" y="55" width="3" height="8" rx="1" fill="#ff6b6b"/>
                  <rect x="15" y="50" width="8" height="15" rx="3" fill="#667eea" stroke="#fff" strokeWidth="2"/>
                  <rect x="77" y="50" width="8" height="15" rx="3" fill="#667eea" stroke="#fff" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Gaming Meets Learning</h3>
              <p>Build your superhero avatar and embark on STEM adventures that make learning an epic quest</p>
            </div>
            <div className="vision-point">
              <div className="point-icon">
                <svg viewBox="0 0 100 100" width="60" height="60">
                  <path d="M 35 35 Q 25 45, 30 65 L 35 60 Z" fill="#ff1493"/>
                  <path d="M 65 35 Q 75 45, 70 65 L 65 60 Z" fill="#ff1493"/>
                  <circle cx="50" cy="35" r="12" fill="#ffd700"/>
                  <ellipse cx="50" cy="33" rx="13" ry="5" fill="#000"/>
                  <ellipse cx="50" cy="60" rx="15" ry="20" fill="#667eea"/>
                  <rect x="45" y="80" width="5" height="12" fill="#667eea"/>
                  <rect x="50" y="80" width="5" height="12" fill="#667eea"/>
                </svg>
              </div>
              <h3>Your Superhero Story</h3>
              <p>Create your unique origin story, develop powers (skills), and level up through real STEM challenges</p>
            </div>
            <div className="vision-point">
              <div className="point-icon">
                <svg viewBox="0 0 100 100" width="60" height="60">
                  <circle cx="35" cy="30" r="10" fill="#ffd700"/>
                  <ellipse cx="35" cy="55" rx="12" ry="15" fill="#667eea"/>
                  <circle cx="65" cy="35" r="10" fill="#ffd700"/>
                  <ellipse cx="65" cy="60" rx="12" ry="15" fill="#4d9fff"/>
                  <circle cx="50" cy="25" r="10" fill="#ffd700"/>
                  <ellipse cx="50" cy="50" rx="12" ry="15" fill="#ff6b6b"/>
                </svg>
              </div>
              <h3>Real Mentorship</h3>
              <p>Connect with industry professionals and university professors who guide your journey</p>
            </div>
            <div className="vision-point">
              <div className="point-icon">
                <svg viewBox="0 0 100 100" width="60" height="60">
                  <path d="M 55 10 L 35 50 L 50 50 L 45 90 L 75 40 L 60 40 Z" fill="#ffd700" stroke="#ffed4e" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Passion-Driven Growth</h3>
              <p>Learn through excitement, not obligation. Every challenge fuels your superhero evolution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="difference-section">
        <h2 className="section-title">More Than Just Another Platform</h2>
        
        <div className="comparison-grid">
          <div className="comparison-card negative">
            <div className="card-icon">
              <svg viewBox="0 0 100 100" width="50" height="50">
                <circle cx="50" cy="50" r="40" fill="#ff6b6b" stroke="#fff" strokeWidth="3"/>
                <line x1="30" y1="30" x2="70" y2="70" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
                <line x1="70" y1="30" x2="30" y2="70" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>NOT Another LinkedIn</h3>
            <p>We're not about collecting connections. We're about building real relationships with mentors who actively guide your growth</p>
          </div>
          
          <div className="comparison-card negative">
            <div className="card-icon">
              <svg viewBox="0 0 100 100" width="50" height="50">
                <circle cx="50" cy="50" r="40" fill="#ff6b6b" stroke="#fff" strokeWidth="3"/>
                <line x1="30" y1="30" x2="70" y2="70" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
                <line x1="70" y1="30" x2="30" y2="70" stroke="#fff" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>NOT Another Online Course</h3>
            <p>Forget passive video watching. We offer immersive, interactive experiences with real-time guidance and hands-on projects</p>
          </div>
          
          <div className="comparison-card positive">
            <div className="card-icon">
              <svg viewBox="0 0 100 100" width="50" height="50">
                <path d="M 50 10 L 55 40 L 85 45 L 55 50 L 50 80 L 45 50 L 15 45 L 45 40 Z" fill="#ffd700" stroke="#ffed4e" strokeWidth="2"/>
                <circle cx="50" cy="45" r="8" fill="#fff"/>
              </svg>
            </div>
            <h3>A Living, Breathing Community</h3>
            <p>Real people with real experience actively participating in your STEM journey every step of the way</p>
          </div>
          
          <div className="comparison-card positive">
            <div className="card-icon">
              <svg viewBox="0 0 100 100" width="50" height="50">
                <ellipse cx="50" cy="65" rx="12" ry="30" fill="#667eea" stroke="#fff" strokeWidth="2"/>
                <circle cx="50" cy="35" r="15" fill="#ff6b6b"/>
                <polygon points="38,70 35,90 45,80" fill="#ffd700"/>
                <polygon points="62,70 65,90 55,80" fill="#ffd700"/>
                <circle cx="50" cy="50" r="5" fill="#fff"/>
                <path d="M 45 20 Q 50 10, 55 20" fill="none" stroke="#ffd700" strokeWidth="2"/>
              </svg>
            </div>
            <h3>An Epic Adventure</h3>
            <p>Your education becomes a thrilling video game where you're the hero, and every lesson unlocks new superpowers</p>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="experience-section">
        <h2 className="section-title">The Toyz Experience</h2>
        
        <div className="experience-timeline">
          <div className={`timeline-item ${activeSection === 0 ? 'active' : ''}`}>
            <div className="timeline-number">1</div>
            <div className="timeline-content">
              <h3>Create Your Superhero</h3>
              <p>Design your avatar, choose your STEM superpower specialty, and craft your origin story. Are you a Code Crusader? A Robotics Ranger? A Biology Blazer?</p>
              <div className="feature-icons">
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <rect x="25" y="25" width="50" height="40" rx="5" fill="#ff6b6b"/>
                  <rect x="35" y="35" width="10" height="10" fill="#ffd700"/>
                  <rect x="55" y="35" width="10" height="10" fill="#4d9fff"/>
                  <path d="M 40 55 Q 50 60, 60 55" stroke="#fff" strokeWidth="2" fill="none"/>
                </svg>
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <circle cx="50" cy="30" r="12" fill="#ffd700"/>
                  <ellipse cx="50" cy="55" rx="15" ry="20" fill="#667eea"/>
                  <path d="M 35 30 Q 25 40, 30 55" fill="#ff1493"/>
                  <path d="M 65 30 Q 75 40, 70 55" fill="#ff1493"/>
                </svg>
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <path d="M 55 20 L 40 55 L 50 55 L 45 80 L 70 45 L 60 45 Z" fill="#ffd700"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className={`timeline-item ${activeSection === 1 ? 'active' : ''}`}>
            <div className="timeline-number">2</div>
            <div className="timeline-content">
              <h3>Meet Your Mentor League</h3>
              <p>Connect with industry professionals, university professors, and STEM leaders who become your personal advisory team, guiding you through missions and challenges</p>
              <div className="feature-icons">
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <circle cx="50" cy="30" r="12" fill="#ffd700"/>
                  <ellipse cx="50" cy="55" rx="15" ry="20" fill="#667eea"/>
                  <rect x="25" y="60" width="50" height="3" fill="#fff"/>
                  <polygon points="40,30 30,40 30,50 40,55 50,55" fill="#4d9fff"/>
                </svg>
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <rect x="30" y="40" width="40" height="30" rx="3" fill="#764ba2"/>
                  <rect x="45" y="35" width="10" height="8" fill="#764ba2"/>
                  <line x1="35" y1="50" x2="45" y2="50" stroke="#ffd700" strokeWidth="2"/>
                  <circle cx="55" cy="55" r="3" fill="#ffd700"/>
                </svg>
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <rect x="40" y="25" width="20" height="25" fill="#667eea"/>
                  <polygon points="50,20 40,25 40,30 50,35 60,30 60,25" fill="#ffd700"/>
                  <rect x="30" y="50" width="40" height="8" fill="#667eea"/>
                  <circle cx="50" cy="35" r="5" fill="#fff"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className={`timeline-item ${activeSection === 2 ? 'active' : ''}`}>
            <div className="timeline-number">3</div>
            <div className="timeline-content">
              <h3>Embark on STEM Quests</h3>
              <p>Complete interactive missions that teach real skills. Build apps, design circuits, solve scientific mysteries, all while earning experience points and unlocking new abilities</p>
              <div className="feature-icons">
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#ff6b6b" strokeWidth="3"/>
                  <circle cx="50" cy="50" r="25" fill="none" stroke="#ffd700" strokeWidth="3"/>
                  <circle cx="50" cy="50" r="15" fill="none" stroke="#4d9fff" strokeWidth="3"/>
                  <circle cx="50" cy="50" r="5" fill="#ffd700"/>
                </svg>
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <ellipse cx="50" cy="60" rx="25" ry="15" fill="#667eea"/>
                  <rect x="35" y="35" width="8" height="30" fill="#667eea"/>
                  <rect x="57" y="35" width="8" height="30" fill="#667eea"/>
                  <circle cx="39" cy="30" r="8" fill="#4d9fff"/>
                  <circle cx="61" cy="30" r="8" fill="#4d9fff"/>
                </svg>
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <rect x="30" y="35" width="40" height="30" rx="3" fill="#667eea"/>
                  <rect x="35" y="45" width="12" height="8" rx="1" fill="#4d9fff"/>
                  <rect x="53" y="45" width="12" height="8" rx="1" fill="#4d9fff"/>
                  <rect x="38" y="55" width="24" height="2" fill="#ffd700"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className={`timeline-item ${activeSection === 3 ? 'active' : ''}`}>
            <div className="timeline-number">4</div>
            <div className="timeline-content">
              <h3>Level Up & Transform Lives</h3>
              <p>Watch your superhero evolve as you master new skills, complete projects, and join a community of fellow STEM heroes changing the world</p>
              <div className="feature-icons">
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <polyline points="20,70 35,55 50,65 65,45 80,30" fill="none" stroke="#4d9fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="70" r="4" fill="#ffd700"/>
                  <circle cx="35" cy="55" r="4" fill="#ffd700"/>
                  <circle cx="50" cy="65" r="4" fill="#ffd700"/>
                  <circle cx="65" cy="45" r="4" fill="#ffd700"/>
                  <circle cx="80" cy="30" r="4" fill="#ffd700"/>
                </svg>
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <circle cx="50" cy="50" r="35" fill="#4d9fff" stroke="#667eea" strokeWidth="3"/>
                  <path d="M 30,45 L 35,50 Q 40,55 45,50 L 50,45 Q 55,40 60,45 L 65,50 Q 70,55 75,50" fill="none" stroke="#6bcf7f" strokeWidth="2"/>
                  <circle cx="50" cy="70" r="3" fill="#ffd700"/>
                  <circle cx="35" cy="65" r="2" fill="#ffd700"/>
                  <circle cx="65" cy="65" r="2" fill="#ffd700"/>
                </svg>
                <svg viewBox="0 0 100 100" width="40" height="40">
                  <polygon points="50,20 60,40 80,45 65,60 68,80 50,70 32,80 35,60 20,45 40,40" fill="#ffd700" stroke="#ffed4e" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2 className="section-title">Transforming Lives, One Student at a Time</h2>
        
        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Potential</span>
            </div>
            <p>Every student has unlimited potential waiting to be unlocked through the right guidance and passion</p>
          </div>
          
          <div className="impact-card">
            <div className="impact-stat">
              <svg viewBox="0 0 100 100" width="60" height="60" className="stat-icon">
                <path d="M 50 15 L 58 45 L 90 50 L 60 65 L 65 95 L 50 75 L 35 95 L 40 65 L 10 50 L 42 45 Z" fill="#ffd700" stroke="#ffed4e" strokeWidth="2"/>
                <circle cx="50" cy="50" r="12" fill="#fff"/>
              </svg>
            </div>
            <h3>Real Mentorship</h3>
            <p>Industry professionals and professors investing their time to guide the next generation of STEM leaders</p>
          </div>
          
          <div className="impact-card">
            <div className="impact-stat">
              <svg viewBox="0 0 100 100" width="60" height="60" className="stat-icon">
                <rect x="20" y="40" width="60" height="35" rx="8" fill="#667eea" stroke="#fff" strokeWidth="3"/>
                <circle cx="35" cy="55" r="7" fill="#4d9fff" stroke="#fff" strokeWidth="2"/>
                <rect x="58" y="50" width="10" height="4" rx="1" fill="#ff6b6b"/>
                <rect x="63" y="55" width="4" height="10" rx="1" fill="#ff6b6b"/>
              </svg>
            </div>
            <h3>Fun Learning</h3>
            <p>Education shouldn't feel like a chore. It should feel like an adventure you can't wait to continue</p>
          </div>
          
          <div className="impact-card">
            <div className="impact-stat">
              <svg viewBox="0 0 100 100" width="60" height="60" className="stat-icon">
                <ellipse cx="50" cy="55" rx="15" ry="35" fill="#667eea" stroke="#fff" strokeWidth="3"/>
                <circle cx="50" cy="30" r="18" fill="#ff6b6b"/>
                <polygon points="35,65 30,85 40,75" fill="#ffd700" stroke="#fff" strokeWidth="2"/>
                <polygon points="65,65 70,85 60,75" fill="#ffd700" stroke="#fff" strokeWidth="2"/>
                <circle cx="50" cy="45" r="6" fill="#fff"/>
              </svg>
            </div>
            <h3>Future-Ready Skills</h3>
            <p>Preparing students not just for tests, but for real careers and meaningful contributions to the world</p>
          </div>
        </div>
        
        <div className="mission-statement">
          <div className="mission-border"></div>
          <h3>This is more than education.</h3>
          <h3>This is transformation.</h3>
          <h3>This is the future of STEM learning.</h3>
          <p className="mission-footer">And together, we're making it happen.</p>
        </div>
      </section>

      {/* Team Commitment */}
      <section className="team-section">
        <div className="team-card">
          <h2 className="team-title">The Dream Team</h2>
          <div className="team-members">
            <div className="team-member">
              <div className="member-avatar">
                <img src={sahanaImg} alt="Sahana" className="member-photo" />
              </div>
              <h3>Sahana</h3>
              <p className="member-role">Core Developer</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src={woleImg} alt="Wole Idowu" className="member-photo" />
              </div>
              <h3>Wole Idowu</h3>
              <p className="member-role">CTO • Tech Architect</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src={taylorImg} alt="Taylor Weddington" className="member-photo" />
              </div>
              <h3>Taylor Weddington</h3>
              <p className="member-role">Product Manager</p>
            </div>
          </div>
          <div className="team-commitment-text">
            <p>United by a shared vision to revolutionize STEM education and empower the next generation of innovators, creators, and leaders.</p>
            <p className="commitment-promise">Together, we will make this vision a reality. 🚀</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToyzVision;
