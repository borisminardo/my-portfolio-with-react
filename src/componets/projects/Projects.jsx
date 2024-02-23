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
          <div className="experience-details-container">
            <div className="projects-containers">
              <Project />
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
