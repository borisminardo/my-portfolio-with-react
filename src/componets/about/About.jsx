import React from "react";
import "./about.css";
import "./animations.css";
const About = () => {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div
          className="section-container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="section__pic-container">
            <img
              src={require("../../assets/boris2.png")}
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container ">
                <img
                  src={require("../../assets/experience.png")}
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  3+ years <br />
                  Front End Development
                </p>
              </div>
              <div className="details-container ">
                <img
                  src={require("../../assets/education.png")}
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  Diploma Computer Science <br />
                  Specialization IT
                </p>
              </div>
            </div>
            <div>
              <p>
                I have been focusing on developing Front End applications using
                Angular and React for big companies in Rome, Italy since 2020,
                helping them to create new features, aswell as editing existing
                ones, fixing bugs and testing. Feel free to contact me.
              </p>
            </div>
          </div>
        </div>
        <a href="#experience">
          <img
            src={require("../../assets/arrow.png")}
            alt="Arrow icon"
            className="icon arrow"
          />{" "}
        </a>
      </section>
    </>
  );
};

export default About;
