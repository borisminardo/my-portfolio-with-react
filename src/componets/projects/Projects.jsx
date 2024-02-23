import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={require("../../assets/dgs.png")}
                  alt="project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Ingest
              </h2>
              <div className="btn-container">
                <p>Sections, Tables, for DGS</p>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={require("../../assets/enav.png")}
                  alt="project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Edip
              </h2>
              <div className="btn-container">
                <p>Modals, Tables, for Enav and Technosky</p>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={require("../../assets/Gestione.png")}
                  alt="project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Project Edip
              </h2>
              <div className="btn-container">
                <p>Sections, Forms, Tables, for Enav and Technosky</p>
              </div>
            </div>
          </div>
        </div>
        <a href="#contacts">
          <img
            src={require("../../assets/arrow.png")}
            alt="Arrow icon"
            className="icon arrow"
          />
        </a>
      </section>
    </>
  );
};

export default Projects;
