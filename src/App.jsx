import React, { useState, useEffect } from 'react';
import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import './global.scss';


const App = () => {
  const [mostrarMensaje, setMostrarMensaje] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setMostrarMensaje(false);
      } else {
        setMostrarMensaje(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); //Vacío para que solo se ejecute una vez

  return (
    <main>
      {mostrarMensaje && (
        <Welcome/>
      )}

      {!mostrarMensaje && (
        <div>
          <Navbar />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      )}
    </main>
  );
};

export default App;
