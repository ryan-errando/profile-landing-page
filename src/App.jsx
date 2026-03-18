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

  const handleNavigate = (page) => {
    if (page === activePage || isAnimating) return;
    
    setIsAnimating(true);
    setActivePage(page);

    // After the curtain drops (halfway through animation), swap the content
    setTimeout(() => {
      setDisplayPage(page);
    }, 600); // Wait for drop down

    // After the curtain goes back up, finish animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 1200); // Total animation duration
  };

  return (
    <main className="main-container">
      {/* Theatre Curtain Overlay */}
      <div className={`curtain-overlay ${isAnimating ? 'animate' : ''}`}>
        <div className="curtain-panel left"></div>
        <div className="curtain-panel right"></div>
        <div className="curtain-text">
          {activePage.toUpperCase()}
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
            <Portfolio />
          </div>
        )}
        
        {displayPage === 'contact' && (
          <div className="fade-in">
            <Contact />
          </div>
        )}
      </div>

      <SideNav activePage={activePage} onNavigate={handleNavigate} />
    </main>
  );
}

export default App;
