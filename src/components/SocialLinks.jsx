// SocialLinks.js

import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SocialLinks.css'; // Import your custom styles
import Footer from './Footer';

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <h2>Connect with Me</h2>
      <p>Explore my professional profiles and get in touch!</p>
      <div className="social-links">
        <Link to="https://www.linkedin.com/in/chaitali-patidar-20a1b2228" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon linkedin" />
        </Link>
        <Link to="https://github.com/chaitalipatidar2003" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon github" />
        </Link>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="social-icon gmail" />
        </a>
      </div>
      <div className="extra-items">
        <h3>Additional Information</h3>
        <ul>
          <li>Web Developer</li>
          <li>Passionate about coding</li>
          <li>Open source contributor</li>
        </ul>

        {/* <img src='\images\software-engineer.png'/> */}
      </div>
      
    {/* <Footer/> */}
    </div>
  
  );
};

export default SocialLinks;
