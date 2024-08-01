import React, { forwardRef, useState } from "react";
import './Projects.css';

const Projects = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const concordia = `
  Diseño de app organizativa para pacientes oncológicos, ayudantes de los mismos y/o profesionales de la salud. 
  Se hizo el research tanto cuantitativo como cualitativo, analizando los datos y volcarlos en prototipos en Figma, 
  para luego hacer pruebas de usabilidad y definir la estructura final, tanto desde la parte visual como la de 
  experiencia del usuario, incluyendo Atomic Design, patrones de diseño, guidelines y branding.
`;
  const dimaiaDesc = `
  Sistema que utiliza modelos de IA que predicen posibles enfermedades que sirva de asistente para médicos a la hora de 
  realizar diagnósticos y que a técnicos en imágenes les sea más fácil realizar sus informes. 
  Dentro del proyecto se utilizó SAFe y Scrum como metodologias y Jira para gestión de tareas y seguimiento de incidencias. 
  Se utilizó Figma e Illustrator para UX/UI y crear la marca del producto. UML para modelar diagramas de flujo de usuarios. 
  Se utilizó Angular y TypeScript para la creación de componentes y consumir APIs REST.
`;
  /*
  const styleBusDesc = `
  A JavaScript prototype simulating the purchase of tickets and travel
  packages in several cities from Argentina. HTML and CSS were
  employed for the user interfaces, while UML was used to model
  class, activity and sequence diagrams. Testing involved the utilization
  of equivalence class tables, decision tables, and finally Selenium for
  automated tests.
`;*/
  const mentalDesc = `
  Este proyecto de Ciencia de Datos y Aprendizaje Automático emplea Python, Jupyter Notebook, Google Colab y Streamlit. 
  Se centra en explorar conceptos fundamentales como la Inteligencia Artificial, el Aprendizaje Automático y el Aprendizaje Profundo. 
  El objetivo del proyecto es abordar la salud mental y la prevención del suicidio utilizando un conjunto de datos de la 
  Universidad Nacional de Córdoba. Utilizando modelos de aprendizaje supervisado y no supervisado, 
  el proyecto pone un fuerte énfasis en la interpretación de los resultados.
`;

  const projectList = [
    {
      projectName: "CONCORDIA",
      image: `${process.env.PUBLIC_URL}/assets/img/concordia.webp`,
      description: concordia,
    },
    {
      projectName: "DIMAIA",
      image: `${process.env.PUBLIC_URL}/assets/img/dimaia.webp`,
      description: dimaiaDesc,
    },
    /*
    {
      projectName: "STYLEBUS",
      image: `${process.env.PUBLIC_URL}/assets/img/stylebus.webp`,
      description: styleBusDesc,
    },*/
    {
      projectName: "MENTAL",
      image: `${process.env.PUBLIC_URL}/assets/img/mental.webp`,
      description: mentalDesc,
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div ref={ref} className="projects">
      <h2 className="header2">PROYECTOS</h2>
      <div className="project-external-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-internal-container">
            <h3 className="header3">{project.projectName}</h3>
            <div className="content">
            <a href="/" onClick={(e) => { e.preventDefault(); openModal(project); }}>
                <img id={`image1_${index}`} src={project.image} alt={`${project.projectName}`} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="header3">{selectedProject.projectName}</h3>
            <p className="paragraph1">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
});

export default Projects;
