import React, {useState} from 'react';
import './Navbar.css';

const Navbar = ({ welcomeRef, aboutRef, projectsRef, skillsRef, contactRef }) => {
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

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <div onClick={() => scrollToSection(welcomeRef)}>
          <h3 className="header-link">F</h3>
        </div>
        <div onClick={() => scrollToSection(aboutRef)}>
          <h3 className="header-link">ABOUT ME</h3>
        </div>
        <div onClick={() => scrollToSection(projectsRef)}>
          <h3 className="header-link">PROJECTS</h3>
        </div>
        <div onClick={() => scrollToSection(skillsRef)}>
          <h3 className="header-link">SKILLS</h3>
        </div>
        <div onClick={() => scrollToSection(contactRef)}>
          <h3 className="header-link">LINKS</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
