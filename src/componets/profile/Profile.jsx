import React from "react";
import "./profile.css";
import "./animations.css";

const Profile = () => {
  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img
            className="section__pic bn roll-in-left"
            src={require("../../assets/borisgif5.gif")}
            alt="Boris Maria Minardo Incitti profile picture"
          />
          <div className="section__text fade-in-text">
            <p className="section__text__p1">Hello, I'm</p>
            <h1 className="title">Boris</h1>
            <p className="section__text__p2">Front End Developer</p>
            <div className="btn-container">
              <a
                href={require("../../assets/resume.pdf")}
                download="resume.pdf"
              >
                <button className="btn btn-color-2">Download CV</button>{" "}
              </a>
              <a href="#contact">
                <button className="btn btn-color-1">Contact Info</button>
              </a>
            </div>
            <div id="socials-container">
              <div>
                <a href="https://www.linkedin.com/in/boris-maria-minardo-incitti-2b42a0160/">
                  <img
                    src={require("../../assets/linkedin.png")}
                    alt="My Linkedin"
                    className="icon"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/borisminardo">
                  <img
                    src={require("../../assets/github.png")}
                    alt="My Github"
                    className="icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
