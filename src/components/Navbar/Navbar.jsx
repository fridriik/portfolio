import React, {useState, useEffect} from 'react';
import './Navbar.css';

const Navbar = ({ welcomeRef, aboutRef, projectsRef, skillsRef, contactRef }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <nav className={`navbar ${scrollPosition >= 632 ? 'scrolled' : ''} ${isMenuOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <div onClick={() => scrollToSection(welcomeRef)}>
          <img src="/assets/img/ff3.png" alt="" className='logo'/>
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
