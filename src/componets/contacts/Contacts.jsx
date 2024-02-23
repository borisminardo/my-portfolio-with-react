import React from "react";
import "./contacts.css";
const Contacts = () => {
  return (
    <>
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contat Me</h1>
        <div
          className="contact-info-upper-container"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="contact-info-container">
            <img
              src={require("../../assets/email.png")}
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:borisminardo1@gmail.com">
                Borisminardo1@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-info-container">
            <img
              src={require("../../assets/linkedin.png")}
              alt="Linkedin icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/boris-maria-minardo-incitti-2b42a0160/">
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
