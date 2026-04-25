import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-v3 section-padding">
      <div className="contact-grid">
        <div className="contact-left">
          <span className="label">GET IN TOUCH</span>
          <h2 className="title-big">LEVEL UP <br/>YOUR <span className="stroke">NARRATIVE</span></h2>
          
          <div className="contact-info-list">
            <div className="info-item">
              <span className="info-label">REACH OUT TO</span>
              <p className="info-value">Divya Limbasia</p>
            </div>
            <div className="info-item">
              <span className="info-label">EMAIL US</span>
              <a href="mailto:divya@orangehivestudio.com" className="info-value">divya@orangehivestudio.com</a>
            </div>
            <div className="info-item">
              <span className="info-label">CALL US</span>
              <a href="tel:+919769673582" className="info-value">+91 97696 73582</a>
            </div>
          </div>
        </div>
        
        <div className="contact-right">
          <form className="contact-form-v3">
            <div className="form-group-v3">
              <input type="text" placeholder="YOUR NAME" />
            </div>
            <div className="form-group-v3">
              <input type="email" placeholder="EMAIL ADDRESS" />
            </div>
            <div className="form-group-v3">
              <textarea placeholder="TELL US ABOUT THE PROJECT" rows="4"></textarea>
            </div>
            <button type="submit" className="submit-btn-v3">
              SEND MESSAGE <ArrowRight size={24} />
            </button>
          </form>
        </div>
      </div>
      
      <footer className="footer-v3">
        <div className="footer-logo">O.H. STUDIO</div>
        <div className="footer-links">
          <a href="#">INSTAGRAM</a>
          <a href="#">LINKEDIN</a>
          <a href="#">VIMEO</a>
        </div>
        <div className="copyright">© 2024 ORANGE HIVE STUDIO. ALL RIGHTS RESERVED.</div>
      </footer>
    </section>
  );
};

export default Contact;
