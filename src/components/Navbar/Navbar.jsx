import React, { useRef, useState, useEffect} from 'react';
import './Navbar.css';

const Navbar = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (ref) => {
    console.log('Scrolling to section:', ref);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    console.log('Navbar component mounted:', aboutRef.current);
  }, []);
  

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <button onClick={() => scrollToSection(aboutRef)}>
          <h3 className="header3">ABOUT ME</h3>
        </button>
        <div onClick={() => scrollToSection(projectsRef)}>
          <h3 className="header3">PROJECTS</h3>
        </div>
        <div onClick={() => scrollToSection(skillsRef)}>
          <h3 className="header3">SKILLS</h3>
        </div>
        <div onClick={() => scrollToSection(contactRef)}>
          <h3 className="header3">CONTACT</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
