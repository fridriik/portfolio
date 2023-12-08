import React, { useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <nav className='navbar'>
      <div ref={aboutRef}>
        <h3 className="header3">ABOUT ME</h3>
      </div>
      <div ref={projectsRef}>
        <h3 className="header3">PROJECTS</h3>
      </div>
      <div ref={skillsRef}>
        <h3 className="header3">SKILLS</h3>
      </div>
      <div ref={contactRef}>
        <h3 className="header3">CONTACT</h3>
      </div>
    </nav>
  );
};

export default Navbar;
