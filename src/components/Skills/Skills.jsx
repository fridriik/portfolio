import React, { forwardRef} from "react";
import './Skills.css'

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="skills">
      <h2 className='header2'>HABILIDADES</h2>
        <div className='skills-divided'>
          <h4 className="header4">FIGMA</h4> 
          <h4 className="header4">ILLUSTRATOR</h4>
          <h4 className="header4">TAILWIND</h4>
          <h4 className="header4">JAVASCRIPT</h4>
          <h4 className="header4">TYPESCRIPT</h4>
          <h4 className="header4">ANGULAR</h4>
          <h4 className="header4">REACT</h4>
          <h4 className="header4">JAVA</h4>
          <h4 className="header4">SPRING</h4>
          <h4 className="header4">PYTHON</h4>
          <h4 className="header4">API REST</h4>
          <h4 className="header4">SQL</h4>
          <h4 className="header4">MONGODB</h4>
          <h4 className="header4">GIT</h4>
          <h4 className="header4">JIRA</h4>
          <h4 className="header4">AGILE</h4>
          <h4 className="header4">SCRUM</h4>
          <h4 className="header4">UML</h4>
        </div>
    </div>
    );
});

export default Skills;
