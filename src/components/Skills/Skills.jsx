import React, { forwardRef} from "react";
import './Skills.css'

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="skills">
      <h2 className='header2'>HABILIDADES</h2>
        <div className='skills-divided'>
          <div>
            <div className="rol">
              <h4 className="header4">UX RESEARCH</h4>
              <h4 className="header4">UCD</h4>
              <h4 className="header4">DESIGN THINKING</h4>
              <h4 className="header4">PROTOTIPOS</h4>
            </div>
          </div>
          <div>
            <div className="rol">
              <h4 className="header4">FIGMA</h4>
              <h4 className="header4">ATOMIC DESIGN</h4>
              <h4 className="header4">DESIGN SYSTEMS</h4>
              <h4 className="header4">RESPONSIVE DESIGN</h4>
            </div>
          </div>
          <div>
            <div className="rol">
              <h4 className="header4">JAVASCRIPT</h4>
              <h4 className="header4">TYPESCRIPT</h4>
              <h4 className="header4">ANGULAR</h4>
              <h4 className="header4">REACT</h4>
            </div>
          </div>
          <div>
          <div className="rol">
            <h4 className="header4">JAVA</h4>
            <h4 className="header4">SPRING</h4>
            <h4 className="header4">API REST</h4>
            <h4 className="header4">POSTMAN</h4>
          </div>
          </div>
          <div>
            <div className="rol">
              <h4 className="header4">PYTHON</h4>
              <h4 className="header4">SQL</h4>
              <h4 className="header4">GIT</h4>
              <h4 className="header4">JIRA</h4>
            </div>
          </div>
        </div>
    </div>
    );
});

export default Skills;
