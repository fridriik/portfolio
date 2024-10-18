import React, { forwardRef, useState } from "react";
import './About.css';

const About = forwardRef((props, ref) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRol, setSelectedRol] = useState(null);

  const uxUiDescription = `
    Adopto un enfoque centrado en el usuario para crear flujos intuitivos e interfaces amigables. 
    Realizo investigaciones exhaustivas de UX mediante entrevistas, encuestas y pruebas de usabilidad 
    para identificar y resolver los desafíos específicos de los usuarios. Utilizo Figma para 
    desarrollar prototipos interactivos y aplico principios de Atomic Design para construir 
    componentes modulares y reutilizables, asegurando una interfaz coherente y escalable. 
    Implemento principios de diseño Mobile First para optimizar la experiencia en dispositivos 
    y aplico Design Systems para mantener la consistencia visual y funcional en toda la aplicación. 
    Además, desarrollo y creo estrategias de branding para fortalecer la identidad visual del producto.
  `;
  
  const fullStackDescription = `
    Diseño e implemento aplicaciones completas utilizando tecnologías como Java, Spring, JavaScript, 
    TypeScript, Angular y React, abarcando tanto el frontend como el backend. En el backend, 
    desarrollo arquitecturas escalables y seguras con Spring Framework, mientras que en el 
    frontend construyo interfaces interactivas y responsivas aplicando diseño modular. 
    Creo y gestiono APIs REST, asegurando una comunicación eficiente entre sistemas y 
    validando sus funcionalidades con Postman. Realizo pruebas unitarias y de integración con JUnit y 
    Mockito para garantizar la calidad del código, abarcando todo el ciclo de desarrollo, 
    desde la arquitectura hasta el despliegue, adaptándome a metodologías ágiles para una 
    entrega continua y flexible.
  `;

  const analisisFuncionalDescription = `
    Gestiono, interpreto requerimientos y colaboro con equipos técnicos para garantizar una implementación 
    efectiva y adaptar los requerimientos funcionales a soluciones técnicas. Utilizo UML para diseñar 
    diagramas que ayudan a visualizar y comunicar la arquitectura del sistema y los procesos clave. 
    Implemento metodologías ágiles como SAFe y Scrum para coordinar el desarrollo, asegurando una 
    entrega oportuna de funcionalidades y una respuesta flexible a los cambios en los requisitos. 
    Herramientas como JIRA me permiten organizar y monitorear el progreso del proyecto de manera efectiva. 
    Mi capacidad para traducir requerimientos en soluciones prácticas y comunicar hallazgos a 
    audiencias técnicas y no técnicas es crucial para crear productos alineados con las expectativas del 
    usuario y los objetivos del negocio.
  `;

  const rolList = [
    {
      rolName: "DISEÑADOR",
      description: uxUiDescription,
    },
    {
      rolName: "DESARROLLADOR",
      description: fullStackDescription,
    },
    {
      rolName: "ANALISTA",
      description: analisisFuncionalDescription,
    },
  ];

  const openModal = (rol) => {
    setSelectedRol(rol);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div ref={ref} className='about'>
      <h2 className="header2">SOBRE MÍ</h2>
      <p className='paragraph1'>
        Apasionado por el diseño UX/UI, desarrollo fullstack y análisis funcional, con una sólida 
        formación en la Universidad Nacional de General Sarmiento, estudiante de la Licenciatura en Sistemas. 
        Mi experiencia en diversos proyectos me ha permitido desarrollar una perspectiva integral que abarca 
        el diseño centrado en el usuario, la creación de soluciones tecnológicas completas y la gestión 
        eficiente de requerimientos funcionales.
      </p>

      {/* Lista de roles */}
      <div className="about-external-container">
        {rolList.map((rol, index) => (
          <div key={index} className="about-internal-container">
            <h4 className="header4" onClick={() => openModal(rol)} style={{cursor:  'pointer'}}>_{rol.rolName}_</h4>
          </div>
        ))}
      </div>

      {/* Modal que se abre al hacer clic en un rol */}
      {isModalOpen && selectedRol && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={closeModal}>
            <h3 className="header3">{selectedRol.rolName}</h3>
            <p className="paragraph1">{selectedRol.description}</p>
          </div>
        </div>
      )}
    </div>
  );
});

export default About;