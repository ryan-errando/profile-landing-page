import React from 'react';
import './HeroContent.css';
import { FaInfo } from 'react-icons/fa';

const HeroContent = ({ onNavigate }) => {
  return (
    <div className="hero-content">
      <div className="hero-headings">
        <h1 className="hero-title">
          - I'M <span className="highlight">RYAN ERRANDO.</span><br/>
          JUNIOR BACKEND DEVELOPER -
        </h1>
      </div>
      <p className="hero-description">
        I'am a Computer Science student at Bina Nusantara University specializing in software engineering, with a strong interest in backend development. I have experience developing RESTful APIs, managing databases, and implementing business logic in scalable applications. I am continuously improving my skills to deliver robust and efficient backend solutions.
      </p>
      <button className="primary-btn" onClick={() => onNavigate && onNavigate('about')}>
        <span className="btn-text">MORE ABOUT ME</span>
        <span className="btn-icon">
          <FaInfo />
        </span>
      </button>
    </div>
  );
};

export default HeroContent;
