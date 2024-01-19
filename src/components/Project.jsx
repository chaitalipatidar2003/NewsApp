// Project.js

import React from 'react';
import './Project.css'; // Import your custom styles

const Project = ({ imageSrc, projectName, languagesUsed, websiteLink }) => {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={projectName} className="project-image" />
      <div className="project-details">
        <h3 className="project-name">{projectName}</h3>
        <p className="languages-used">{languagesUsed}</p>
        <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="visit-website-button">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default Project;
