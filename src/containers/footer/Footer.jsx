import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer id="contacts" className="nav__container">
        <nav>
          <div className="nav-links-container  ">
            <ul className="nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </nav>
        <p>
          Copyright &#169;; 2024 Boris Maria Minardo Incitti. All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
