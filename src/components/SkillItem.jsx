import React from "react";
import './SkillItem.css'; // Import your styling

function SkillItem({ imageSrc, heading, description }) {
  return (
    <div className="skill-item">
      <img src={imageSrc} alt={heading} className="skill-image" />
      <h2 className="skill-heading">{heading}</h2>
      <p className="skill-description">{description}</p>
    </div>
  );
}

export default SkillItem;