import React, { forwardRef} from "react";
import './Projects.css'

const Projects = forwardRef((props, ref) => {
  const projectList = [
    {
      projectName: "DIMAIA",
      image: `${process.env.PUBLIC_URL}/assets/img/dimaia.webp`,
    },
    {
      projectName: "VIVIAN",
      image: `${process.env.PUBLIC_URL}/assets/img/vivian.webp`,
    },
    {
      projectName: "STYLEBUS",
      image: `${process.env.PUBLIC_URL}/assets/img/stylebus.webp`,
    },
    {
      projectName: "MENTAL",
      image: `${process.env.PUBLIC_URL}/assets/img/mental.webp`,
    },
  ];

  return (
    <div ref={ref} className="projects">
      <h2 className="header2">PROJECTS</h2>
      <div className="project-external-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-internal-container">
            <h3 className="header3">{project.projectName}</h3>
            <div className="image-container">
              <a href="/">
                <img id={`image1_${index}`} src={project.image} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
