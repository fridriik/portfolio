import React, { forwardRef } from "react";
import './About.css';

const About = forwardRef((props, ref) => {
  
  return (
    <div ref={ref} className='about'>
        <h2 className="header2">SOBRE MÍ</h2>
        <p className='paragraph1'>
        Apasionado por el diseño UX/UI, la creación de productos y el desarrollo fullstack, aporto una perspectiva completa en el desarrollo de soluciones centradas en el usuario.
        Estudiante de la Licenciatura en Sistemas de la Universidad Nacional de General Sarmiento. Mi experiencia trabajando en varias disciplinas me brindó habilidades como trabajo en equipo, adaptabilidad, inteligencia emocional, un compromiso incansable y una perspectiva única que me ha permitido abordar desafíos mediante diferentes enfoques, siempre disfrutando de trabajar en equipo y afrontando nuevos desafíos.
        He trabajado en research cuantitativo y cualitativo, creando prototipos en Figma y definiendo estructuras finales con un enfoque en UX/UI, Atomic Design y branding. 
        Tengo conocimientos en frontend con JavaScript, TypeScript, Angular, React, HTML y CSS. 
        Además, en backend y desktop tengo conocimientos en Java, Spring Framework, Python, SQL y NoSQL. 
        También adquirí conocimientos en análisis funcional, gestión de productos y metodologías como Agile, Scrum y SAFe y herramientas de gestión como Jira y diseño de diagramas con UML
        </p>
    </div>
  );
});

export default About;
