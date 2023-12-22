import React, { useRef } from 'react';
import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import './global.scss';

const App = () => {
  const welcomeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main>
      <Welcome ref={welcomeRef} />
      <Navbar
        welcomeRef={welcomeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />
      <div>
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} />
      </div>
      <AnimatedBackground />
    </main>
  );
};

export default App;
