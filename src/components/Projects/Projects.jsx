import React, { forwardRef, useState } from "react";
import './Projects.css';

const Projects = forwardRef((props, ref) => {
  //const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const dimaiaDesc = `
  A system that uses AI models to predict possible diseases, serving as 
  an assistant for doctors when making diagnoses and making it easier 
  for image diagnosis technicians to generate their reports. SAFe and 
  Scrum were used as methodologies within the project and Jira for 
  project management and issues tracking. Figma was employed for 
  UX/UI design. GIMP and Illustrator were used to create the product's 
  brand. UML was used to model user flow diagrams. Angular and 
  TypeScript were employed for component development and 
  consuming APIs REST.
`;
  const vivianDesc = `
  A JavaScript prototype for plant care, management, store promotion
  and weather verification. HTML and CSS were used for the user
  interfaces, and APIs REST consumption was employed for the creation
  of weather widgets and forecasts. UML was used to model class
  diagrams, use cases, architecture, and a Gantt chart for project
  planning using ProjectLibre.
`;
  const styleBusDesc = `
  A JavaScript prototype simulating the purchase of tickets and travel
  packages in several cities from Argentina. HTML and CSS were
  employed for the user interfaces, while UML was used to model
  class, activity and sequence diagrams. Testing involved the utilization
  of equivalence class tables, decision tables, and finally Selenium for
  automated tests.
`;
  const mentalDesc = `
  This Data Science and Machine Learning project employs Python, Jupyter Notebook, 
  Google Colab, and Streamlit. It revolves around exploring fundamental concepts 
  like Artificial Intelligence, Machine Learning, and Deep Learning. The project's 
  goal is to address mental health and suicide prevention using a dataset from the 
  National University of Córdoba. Utilizing both supervised and unsupervised 
  learning models, the project places a strong emphasis on interpreting results.
`;

  const projectList = [
    {
      projectName: "DIMAIA",
      image: `${process.env.PUBLIC_URL}/assets/img/dimaia.webp`,
      description: dimaiaDesc,
    },
    {
      projectName: "VIVIAN",
      image: `${process.env.PUBLIC_URL}/assets/img/vivian.webp`,
      description: vivianDesc,
    },
    {
      projectName: "STYLEBUS",
      image: `${process.env.PUBLIC_URL}/assets/img/stylebus.webp`,
      description: styleBusDesc,
    },
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

  /*const toggleContent = (index) => {
    setSelectedProjectIndex(selectedProjectIndex === index ? null : index);
  };*/

  return (
    <div ref={ref} className="projects">
      <h2 className="header2">PROJECTS</h2>
      <div className="project-external-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-internal-container">
            <h3 className="header3">{project.projectName}</h3>
            {/*<div className="content">
              <a href="/" onClick={(e) => { e.preventDefault(); toggleContent(index); }}>
                {selectedProjectIndex === index ? (
                  <div className="description">
                    <p className="paragraph1">{project.description}</p>
                  </div>
                ) : (
                  <img id={`image1_${index}`} src={project.image} alt="" />
                )}
              </a>
            </div>*/}
            <div className="content">
            <a href="/" onClick={(e) => { e.preventDefault(); openModal(project); }}>
                <img id={`image1_${index}`} src={project.image} alt="" />
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
