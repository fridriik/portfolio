import React, { forwardRef} from "react";
import './Skills.css'

const Skills = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="skills">
      <h2 className='header2'>SKILLS</h2>
        <div className='skills-divided'>
            <div className='skills-external-container-1'>
                <h3 className="header3">SYSTEM ANALYST</h3>
                <div className='skills-internal-container'>
                    <h4 className="header4">JIRA</h4>
                    <h4 className="header4">UML</h4>
                    <h4 className="header4">SQL</h4>
                </div>
            </div>
            <div className='skills-external-container'>
                <h3 className="header3">FRONT-END DEV</h3>
                <div className='skills-internal-container'>
                    <h4 className="header4">HTML-CSS</h4>
                    <h4 className="header4">JS-TS</h4>
                    <h4 className="header4">JAVA</h4>
                </div>
            </div>
            <div className='skills-external-container'>
                <h3 className="header3">UX/UI DESIGNER</h3>
                <div className='skills-internal-container'>
                    <h4 className="header4">FIGMA</h4>
                    <h4 className="header4">GIMP</h4>
                    <h4 className="header4">ILLUSTRATOR</h4>
                </div>
            </div>
        </div>
    </div>
    );
});

export default Skills;
