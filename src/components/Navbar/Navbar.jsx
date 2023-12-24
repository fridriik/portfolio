import React, {useState, useEffect} from 'react';
import './Navbar.css';

const Navbar = ({ welcomeRef, aboutRef, projectsRef, skillsRef, contactRef }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const rect = navbar.getBoundingClientRect();
      setScrolled(rect.top <= 0);
    }
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
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  }; 

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'open' : ''}`}>
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
