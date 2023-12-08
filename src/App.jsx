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
    const handleWheel = (event) => {
      const deltaY = event.deltaY;
      console.log('Rueda del mouse utilizada:', deltaY);
      if (deltaY > 0) {
        setMostrarMensaje(false);
      } else {
        setMostrarMensaje(true);
      }
    };
    window.addEventListener('wheel', handleWheel );
    return () => {
      window.removeEventListener('wheel', handleWheel );
    };
  }, []); //Vacío para que solo se ejecute una vez

  return (
    <main>
      {mostrarMensaje && (
        console.log("Mostrando mensaje de bienvenida"),
        <Welcome/>
      )}

      {!mostrarMensaje && (
        <div>
        {console.log("Muestro el resto")}
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
