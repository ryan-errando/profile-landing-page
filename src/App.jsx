import React, { useState, useEffect } from 'react';
import ProfileImage from './components/ProfileImage';
import HeroContent from './components/HeroContent';
import About from './components/About';
import SideNav from './components/SideNav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayPage, setDisplayPage] = useState('home');
  const [curtainText, setCurtainText] = useState('home');

  const showProjects = import.meta.env.VITE_SHOW_PROJECTS === 'true';

  const handleNavigate = (page) => {
    if (page === activePage || isAnimating) return;
    
    setIsAnimating(true);
    setActivePage(page);
    setCurtainText(page);

    // After the curtain drops (halfway through animation), swap the content
    setTimeout(() => {
      setDisplayPage(page);
    }, 600); // Wait for drop down

    // After the curtain goes back up, finish animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 1200); // Total animation duration
  };

  const handleMessageSent = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurtainText('MESSAGE SENT');

    setTimeout(() => {
      setIsAnimating(false);
      setCurtainText(activePage); // Reset stealthily after animation is over
    }, 1200);
  };

  return (
    <main className="main-container">
      {/* Theatre Curtain Overlay */}
      <div className={`curtain-overlay ${isAnimating ? 'animate' : ''}`}>
        <div className="curtain-panel left"></div>
        <div className="curtain-panel right"></div>
        <div className="curtain-text">
          {curtainText.toUpperCase()}
        </div>
      </div>

      <div className="content-wrapper">
        {displayPage === 'home' && (
          <div className="hero-section fade-in">
            <ProfileImage />
            <HeroContent onNavigate={handleNavigate} />
          </div>
        )}
        
        {displayPage === 'about' && (
          <div className="fade-in">
            <About />
          </div>
        )}

        {displayPage === 'work' && (
          <div className="fade-in">
            {showProjects ? (
              <Portfolio />
            ) : (
              <h1 style={{ color: '#aaa', textAlign: 'center', marginTop: '6rem', fontStyle: 'italic' }}>
                Projects are currently being updated. Coming soon!
              </h1>
            )}
          </div>
        )}
        
        {displayPage === 'contact' && (
          <div className="fade-in">
            <Contact onMessageSent={handleMessageSent} />
          </div>
        )}
      </div>

      <SideNav activePage={activePage} onNavigate={handleNavigate} />
    </main>
  );
}

export default App;
