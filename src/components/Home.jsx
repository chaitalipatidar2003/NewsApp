import React from "react";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { faCogs, faCode, faBuilding, faFileAlt, faProjectDiagram, faShareAlt } from '@fortawesome/free-solid-svg-icons';
function Home() {
  return (
    <div className="home-container">
      {/* <div className="home-content"> */}
        <div className="left-section">

          <img src="./images/profile1.jpeg" alt="photo" className="profile-photo" />
          <h1>Chaitali Patidar</h1>
          <p>An Engineering Undergraduate</p>
          <a href="/education">
            <button className="navigate-button"><Link to="/education">Explore My Education</Link></button>
          </a>
          {/* <div className="engineering-icons">
          <FontAwesomeIcon icon={faCogs} className="icon" />
          <FontAwesomeIcon icon={faCode} className="icon" />
          <FontAwesomeIcon icon={faBuilding} className="icon" />
        </div> */}
        </div>
        <div className="right-section">
          <p>
            I'm Chaitali Patidar, and I work as a front-end developer. I have developed a few websites
            using my front-end skills.
            <br />
            You are welcome to go over my projects and get a sense of my skills.
            I'm eager to learn more and expand my horizons in my area of expertise.
          </p>

          <div className="navigation-buttons">

            <button className="navigate-button">
              <Link to="/skills">Skills</Link></button>


            <button className="navigate-button">
              <Link to="/projects">Projects</Link></button>


            <button className="navigate-button">
              <Link to="/social-links"> Social Links</Link></button>

          </div>
        </div>
      </div>
    // </div>

  );
}

export default Home;
