// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaGraduationCap, FaCode, FaProjectDiagram } from 'react-icons/fa'; // Import icons from react-icons library
import { FaUser, FaLinkedin, FaGithub, FaEnvelope,FaInfoCircle } from 'react-icons/fa';
import './Navbar.css'; // Import your custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul>
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/education"><FaGraduationCap /> Education</Link></li>
          <li><Link to="/skills"><FaCode /> Skills</Link></li>
          <li><Link to="/projects"><FaProjectDiagram /> Projects</Link></li>
        </ul>
      </div>
      <div className="navbar-center">
        <div className="logo">
          <FaUser /> My Portfolio
        </div>
      </div>
      <div className="navbar-right">
        <ul>
        <li>
  <a href="\images\Resume for Chaitali_final.pdf" target="_blank" rel="noopener noreferrer"> Resume</a>
</li>

          <li>
            <a href="https://www.linkedin.com/in/chaitali-patidar-20a1b2228" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/chaitalipatidar2003" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </li>
          <li>
            <a href="mailto:chaitalip2003@gmail.com">
            <FaInfoCircle className="info-icon" /><Link to="/social-links"> Contact Me</Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
