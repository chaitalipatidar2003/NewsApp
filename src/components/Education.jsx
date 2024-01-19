// Education.js

import React from 'react';
import './Education.css'; // Import your custom styles

const Education = () => {
  return (
    <div className="education-container">
      <h2>Education</h2>

      {/* Present College */}
      <div className="education-item">
        <h3>Present College:</h3>
        <p>Year of Studying: 2021-2025</p>
        <p>Name of Organization: <a href='https://www.ietdavv.edu.in/'>IET DAVV, Indore</a></p>
        <p>CGPA: 7.72</p>
      </div>

      {/* Senior Secondary School */}
      <div className="education-item">
        <h3>Senior Secondary School</h3>
        <p>Year of Studying: 2020 - 2021</p>
        <p>Name of Organization:<a href='https://www.shrikanwartara.net/'>Shri Kanwartara Public Higher Secondary School, Mandleshwar</a> </p>
        <p>Percentage: 95%</p>
      </div>

      {/* Higher Secondary School */}
      <div className="education-item">
        <h3>Higher Secondary School</h3>
        <p>Year of Studying: 2018 - 2019</p>
        <p>Name of Organization: <a href='https://www.shrikanwartara.net/'>Shri Kanwartara Public Higher Secondary School, Mandleshwar</a></p>
        <p>Percentage: 94%</p>
      </div>
    </div>
  );
};

export default Education;
