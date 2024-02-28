import React from "react";
import "./projects.css";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <div data-aos="fade-up" data-aos-easing="ease" data-aos-duration="400">
          <p className="section__text__p1">Browse My Recent</p>
          <h1 className="title">Projects</h1>
          <p className="section__text__p1">
            In the past years I have been developing multiple projects. These
            are just some screenshots of real code I have been working on
            collaboratively within the team to achieve company objectives.
            Developing with passion and dedication focusing on delivery a solid
            UI with Angular and React.
          </p>
          <div className="experience-details-container">
            <div className="projects-containers">
              <Project />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
