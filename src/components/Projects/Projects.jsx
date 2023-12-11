import React, { forwardRef } from "react";
import './Projects.css'

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects">
    <h2 className='header2'>PROJECTS</h2>
      <div className='project-external-container'>
        <h3 className="header3">DIMAIA</h3>
        <p className='paragraph1'>
        A system that uses AI models to predict possible diseases, serving as
        an assistant for doctors when making diagnoses and making it easier
        for image diagnosis technicians to generate their reports. SAFe and
        Scrum were used as a methodologies within the project and Jira for
        project managment and issues tracking. Figma was employed for
        UX/UI design. GIMP and Illustrator were used to create the product's
        brand. UML was used to model user flow diagrams. Angular and
        TypeScript were employed for component development and
        consuming APIs REST.
        </p>
      </div>
      <div className='project-external-container'>
        <h3 className="header3">GREENHOUSE</h3>
        <p className='paragraph1'>
        A JavaScript prototype for plant care, management, store promotion
        and weather verification. HTML and CSS were used for the user
        interfaces, and APIs REST consumption was employed for the creation
        of weather widgets and forecasts. UML was used to model class
        diagrams, use cases, architecture, and a Gantt chart for project
        planning using ProjectLibre.
        </p>
      </div>
      <div className='project-external-container'>
        <h3 className="header3">VACCINATION CENTER</h3>
        <p className='paragraph1'>
        A Java prototype simulating management of a vaccination center in my university.
        The system generates vaccination appointments based on the available vaccines and 
        the aforementioned priority order. Starting from a specified date, appointments are 
        scheduled consecutively according to the university's daily vaccination capacity until 
        either the available vaccines are depleted or the registered population that has not yet been vaccinated.
        </p>
      </div>
      <div className='project-external-container'>
        <h3 className="header3">CREDIT CARDS</h3>
        <p className='paragraph1'>
        A prototype developed in Go using SQL in a PostgreSQL database to
        simulate purchase transactions and creation of monthly credit
        card statements, all managed through a Command Line Interface for
        testing purposes.
        </p>
      </div>
    </div>
  );
});

export default Projects;
