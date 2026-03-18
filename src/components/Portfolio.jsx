import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const dummyProjects = [1, 2, 3, 4, 5, 6];

  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h1 className="bg-text">WORKS</h1>
        <h2 className="fg-text">MY <span>PROJECTS</span></h2>
      </div>

      <div className="portfolio-content">
        <h3 className="section-subtitle">LATEST WORK</h3>
        
        <div className="projects-grid">
          {dummyProjects.map((num) => (
            <div key={num} className="project-card-dummy">
              <span className="dummy-number">{num}</span>
            </div>
          ))}
        </div>

        <div className="more-coming">
          <h4>MORE WILL COMING</h4>
          <h4 className="soon-text">SOON</h4>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
