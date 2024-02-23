import React from "react";
import "./navbar.css";

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };
  return (
    <>
      <nav id="desktop-nav" className="nav__container">
        <div className="logo">Boris Maria Minardo Incitti</div>
        <div className="">
          <ul className="nav-links">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Project</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav" className="nav__container hamburger-hidden">
        <div className="logo">My Portfolio</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Project
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={toggleMenu}>
                Contacts
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
