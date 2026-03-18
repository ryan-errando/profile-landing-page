import React from 'react';
import './About.css';
import ProfileImage from './ProfileImage';
import { 
  FaDownload, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaLaravel,
  FaGraduationCap,
  FaBriefcase
} from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

const SkillCircle = ({ skill, percentage, Icon, color }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="skill-item">
      <div className="skill-circle-container">
        <svg className="skill-svg" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={radius} className="skill-circle-bg" />
          <circle 
            cx="40" 
            cy="40" 
            r={radius} 
            className="skill-circle-progress" 
            style={{ 
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              stroke: color || 'var(--accent-color)'
            }}
          />
        </svg>
        <div className="skill-percentage">{percentage}%</div>
      </div>
      {Icon ? <Icon className="skill-icon" /> : <div className="skill-name">{skill}</div>}
    </div>
  );
};

const TimelineItem = ({ year, title, subtitle, icon }) => (
  <div className="timeline-item">
    <div className="timeline-marker">
      {icon === 'education' ? <FaGraduationCap /> : <FaBriefcase />}
    </div>
    <div className="timeline-content">
      <span className="timeline-year">{year}</span>
      <h4 className="timeline-title">{title}</h4>
      {subtitle && <div className="timeline-subtitle">{subtitle}</div>}
    </div>
  </div>
);

const About = () => {
  // Calculate age based on birthdate
  const calculateAge = (birthday) => {
    const today = new Date();
    const birthDateObj = new Date(birthday);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const m = today.getMonth() - birthDateObj.getMonth();
    
    // If the birth month hasn't occurred yet this year, or
    // if it is the birth month but the day hasn't occurred yet
    if (m < 0 || (m === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge('2004-08-18');

  return (
    <section className="about-section">
      <div className="about-header">
        <h1 className="bg-text">RESUME</h1>
        <h2 className="fg-text">ABOUT <span>ME</span></h2>
      </div>

      <div className="personal-info-card">
        <div className="profile-container-about">
          <ProfileImage />
        </div>
        <div className="info-content">
          <h3>PERSONAL INFORMATION</h3>
          <div className="info-grid">
            <p><span>Name:</span> Ryan Errando</p>
            <p><span>Phone:</span> +6285218485547</p>
            <p><span>Age:</span> {age} Years Old</p>
            <p><span>Email:</span> errandoryan@gmail.com</p>
            <p><span>Nationality:</span> Indonesian</p>
            <p><span>Languages:</span> Indonesia, English</p>
          </div>
          <button className="download-btn">DOWNLOAD CV <FaDownload /></button>
        </div>
      </div>

      <div className="skills-section">
        <h3>SOFT SKILLS</h3>
        <div className="skills-grid soft-skills">
          <SkillCircle skill="Problem Solving" percentage={85} />
          <SkillCircle skill="Teamwork" percentage={88} />
          <SkillCircle skill="Creativity" percentage={80} />
          <SkillCircle skill="Communication" percentage={90} />
        </div>
      </div>

      <div className="skills-section">
        <h3>TECHNICAL SKILLS</h3>
        <div className="skills-grid tech-skills-top">
          <SkillCircle percentage={75} Icon={FaHtml5} color="#E34F26" />
          <SkillCircle percentage={78} Icon={FaCss3Alt} color="#1572B6" />
          <SkillCircle percentage={70} Icon={FaJs} color="#F7DF1E" />
          <SkillCircle percentage={65} Icon={FaReact} color="#61DAFB" />
        </div>
        <div className="skills-grid tech-skills-bottom">
          <SkillCircle percentage={80} Icon={SiSpringboot} color="#6DB33F" />
          <SkillCircle percentage={40} Icon={FaLaravel} color="#FF2D20" />
          <SkillCircle percentage={75} Icon={BiLogoPostgresql} color="#336791" />
        </div>
      </div>

      <div className="timeline-section">
        <h3>EDUCATION & EXPERIENCE</h3>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <TimelineItem 
            year="2025 - PRESENT" 
            title="Junior Backend Developer" 
            subtitle="Appfuxion Consulting Indonesia" 
            icon="work" 
          />
          
          <TimelineItem 
            year="2022 - 2025" 
            title="Marketing Team Promotion" 
            subtitle="BINUS University @AlamSutera" 
            icon="work" 
          />

          <TimelineItem 
            year="2022 - 2026" 
            title="Bina Nusantara University - Computer Science" 
            icon="education" 
            subtitle={
              <>
                • GPA: 3.9<br/>
                • Scholarship Mentor of Computer Science 2023/2024 (odd semester)<br/>
                • Scholarship Mentor of Computer Science 2023/2024 (even semester)
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default About;
