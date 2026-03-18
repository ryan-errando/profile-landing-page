import React from 'react';
import './Contact.css';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaLinkedinIn, 
  FaInstagram, 
  FaTwitter, 
  FaGithub, 
  FaPaperPlane 
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1 className="bg-text">CONTACT</h1>
        <h2 className="fg-text">GET IN <span>TOUCH</span></h2>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>LET'S CONNECT</h3>
          <p>
            Feel free if you have a question, an exciting project, 
            or just want to say hello, don't hesitate to reach out. 
            I'm always open to exploring new collaborations, 
            brainstorming ideas, and bringing visions to life. 
            Looking forward to hearing from you!
          </p>
          
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span className="info-detail">Alam Sutera, Pacific Garden Square</span>
          </div>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span className="info-detail">errandoryan@gmail.com</span>
          </div>
          
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span className="info-detail">+6285218485547</span>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaGithub /></a>
          </div>
        </div>

        <div className="contact-form">
          <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
            <div className="form-row">
              <input type="text" name="name" placeholder="YOUR NAME" required />
              <input type="email" name="email" placeholder="YOUR EMAIL" required />
            </div>
            <input type="text" name="subject" placeholder="YOUR SUBJECT" required />
            <textarea name="message" placeholder="YOUR MESSAGE" rows="8" required></textarea>
            
            <button type="submit" className="send-btn">
              <span className="btn-text">SEND MESSAGE</span>
              <span className="btn-icon"><FaPaperPlane /></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
