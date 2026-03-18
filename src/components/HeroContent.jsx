import React from 'react';
import './HeroContent.css';
import { FaInfo } from 'react-icons/fa';

const HeroContent = ({ onNavigate }) => {
  return (
    <div className="hero-content">
      <div className="hero-headings">
        <h1 className="hero-title">
          - I'M <span className="highlight">RYAN ERRANDO.</span><br/>
          COMPUTER SCIENCE STUDENT -
        </h1>
      </div>
      <p className="hero-description">
        I’m a Computer Science student at Bina Nusantara University, specializing in software engineering. With a strong foundation in coding and development, I focus on building innovative software solutions and applying my technical skills to solve real-world challenges.
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
