import React from "react";
import Navbar from "./Navbar";
import SkillItem from "./SkillItem";

function Skills(){
    return(
        <div className="card">
    
            <div className="card-container">
                <div className="card-item">
             
                <SkillItem
          imageSrc="\images\html.jpg" // Replace with your image source
          heading="HTML"
          description="Building the structure of web pages."
        />

        <SkillItem
          imageSrc="\images\css.jpg" // Replace with your image source
          heading="CSS"
          description="Styling and layout of web pages."
        />
         <SkillItem
          imageSrc="\images\js.jpg" // Replace with your image source
          heading="Javascript"
          description="making intraction of web pages."
        />
                </div>
            </div>
        </div>
    )
}

export default Skills;