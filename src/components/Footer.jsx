// Footer.js

import React from 'react';
import './Footer.css'; // Import your custom styles
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/chaitali-patidar-20a1b2228" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a href="https://github.com/chaitalipatidar2003" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon github" />
          </a>
          <a href="mailto:chaitalip2003@gmail.com">
            <FaEnvelope className="social-icon email" />
          </a>
        </div>
        <p>&copy; 2023 Chaitali Patidar | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
