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

const Contact = ({ onMessageSent }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meervqpq", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        form.reset();
        if (onMessageSent) {
          onMessageSent();
        }
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    }
  };

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
            <a href="https://www.linkedin.com/in/ryan-errando-re180804/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/ryan.errando/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
            <a href="https://github.com/ryan-errando" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
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
