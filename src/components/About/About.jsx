import React, { forwardRef } from "react";
import './About.css';

const About = forwardRef((props, ref) => {
  
  return (
    <div ref={ref} className='about'>
        <h2 className="header2">SOBRE MÍ</h2>
        <p className='paragraph1'>
        ¡Hola! Me llamo Federico Farias, diseñador UX/UI y desarrollador fullstack, apasionado por todo lo 
        relacionado a producto y gestión de proyectos, estudiante de la Licenciatura en Sistemas en la 
        Universidad Nacional de General Sarmiento. 
        Mi experiencia trabajando en otros rubros me brindó habilidades como trabajo en equipo, adaptabilidad, 
        inteligencia emocional, un compromiso incansable y una perspectiva única que me ha permitido abordar 
        desafíos mediante diferentes enfoques. 
        </p>
    </div>
  );
});

export default About;
