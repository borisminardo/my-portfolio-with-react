import React from "react";
import "./experience.css";
import "./animations.css";

const Experience = () => {
  var experiences = [
    { title: "HTML", vote: "Experienced" },
    { title: "CSS", vote: "Experienced" },
    { title: "Typescript", vote: "Experienced" },
    { title: "Angular", vote: "Experienced" },
    { title: "React", vote: "Experienced" },
    { title: "Git", vote: "Experienced" },
    { title: "Rest API", vote: "Experienced" },
    { title: "Test", vote: "Experienced" },
    { title: "Bug fix", vote: "Experienced" },
  ];
  return (
    <>
      <section id="experience">
        <div className="jello-horizontal">
          <p className="section__text__p1 ">Explore My</p>
          <h1 className="title ">Experience</h1>{" "}
        </div>

        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title bounce-in-top">
                Front End Development
              </h2>
              <div className="article-container">
                {experiences.map((el) => (
                  <article key={el.title} className="puff-in-center">
                    <img
                      src={require("../../assets/checkmark.png")}
                      alt="experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>{el.title}</h3>
                      <p>{el.vote}</p>
                    </div>
                  </article>
                ))}{" "}
              </div>
            </div>
          </div>
        </div>
        <a href="#projects">
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

export default Experience;
