import React from 'react';
import './SideNav.css';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const SideNav = ({ activePage, onNavigate }) => {
  return (
    <nav className="side-nav">
      <button 
        onClick={() => onNavigate('home')} 
        className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
        aria-label="Home"
      >
        <FaHome />
        <span className="nav-label">HOME</span>
      </button>
      <button 
        onClick={() => onNavigate('about')} 
        className={`nav-item ${activePage === 'about' ? 'active' : ''}`}
        aria-label="About"
      >
        <FaUser />
        <span className="nav-label">ABOUT</span>
      </button>
      <button 
        onClick={() => onNavigate('work')} 
        className={`nav-item ${activePage === 'work' ? 'active' : ''}`}
        aria-label="Work"
      >
        <FaBriefcase />
        <span className="nav-label">PORTFOLIO</span>
      </button>
      <button 
        onClick={() => onNavigate('contact')} 
        className={`nav-item ${activePage === 'contact' ? 'active' : ''}`}
        aria-label="Contact"
      >
        <FaEnvelope />
        <span className="nav-label">CONTACT</span>
      </button>
    </nav>
  );
};

export default SideNav;
