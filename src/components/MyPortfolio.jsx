// Example usage in your main page or portfolio
import React from 'react';
import Project from './Project';

const MyPortfolio = () => {
  return (<div className='center'>
    <div className='project'>
      {/* Example project card */}
      <Project
        imageSrc="/images/tindogss.png"
        projectName="Tindog Website"
        languagesUsed="HTML, CSS, JavaScript"
        websiteLink="https://chaitalipatidar2003.github.io/Dice-project/"
      />
      <Project
        imageSrc="/images/dicess.png"
        projectName="Dice game Website"
        languagesUsed="HTML, CSS, JavaScript"
        websiteLink="https://chaitalipatidar2003.github.io/Dice-project/"
      />
      <Project
        imageSrc="/images/Youtubecloness.png"
        projectName="Youtube-Clone Website"
        languagesUsed="HTML, CSS, JavaScript"
        websiteLink="https://chaitalipatidar2003.github.io/YouTubeclone/"
      />

      {/* Add more Project components for each project */}
    </div>
    </div>
  );
};

export default MyPortfolio;
