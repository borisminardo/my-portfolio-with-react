import React, { useState } from "react";
import Modal from "react-modal";
import "./project.css";
const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const projects = [
    {
      img: require("../../assets/projectsImages/timecard.png"),
      title: "Edip",
      desc: "Timecard, Tables",
    },
    {
      img: require("../../assets/projectsImages/Gestione.png"),
      title: "Edip",
      desc: "Sections, Forms, Tables",
    },

    {
      img: require("../../assets/projectsImages/accord.png"),
      title: "Edip",
      desc: "Tables, Action, Accordion",
    },
    {
      img: require("../../assets/projectsImages/det.png"),
      title: "Edip",
      desc: "Sections, Details",
    },

    {
      img: require("../../assets/projectsImages/report.png"),
      title: "Edip",
      desc: "Form, Reports",
    },
    {
      img: require("../../assets/projectsImages/reportTable.png"),
      title: "Edip",
      desc: "Table, Reports",
    },
    {
      img: require("../../assets/projectsImages/dgs.png"),
      title: "Ingest",
      desc: "Sections, Tables",
    },
    {
      img: require("../../assets/projectsImages/tables.png"),
      title: "Ingest",
      desc: "Tables, Actions",
    },
    {
      img: require("../../assets/projectsImages/accordion.png"),
      title: "Ingest",
      desc: "Sections, Accordion, Details",
    },
    {
      img: require("../../assets/projectsImages/ecommerce.png"),
      title: "Personal E-commerce",
      desc: "E-commerce, Product list, Cart",
    },
    {
      img: require("../../assets/projectsImages/luminance.png"),
      title: "Luminance I-Forge",
      desc: "Personal project for I-Forge",
    },
  ];
  const openModal = (img, title, desc) => {
    setSelectedImage({ img, title, desc });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
      <div className="box">
        {projects.map(({ img, title, desc, index }) => {
          return (
            <div
              className="projects-container color-container  "
              key={img}
              onClick={() => openModal(img, title, desc)}
            >
              <div className="article-container  ">
                <img src={img} alt={title} className="project-img hover-box" />
              </div>
              <div className="btn-container" style={{ marginTop: "1px" }}>
                {desc}
              </div>{" "}
              <br></br>
            </div>
          );
        })}
      </div>
      <Modal
        isOpen={selectedImage !== null}
        onRequestClose={closeModal}
        style={{
          content: {
            width: "70%",
            height: "80%",
            margin: "auto",
            overflow: "hidden",
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Set the background color of the modal content to be semi-transparent
            borderRadius: "20px",
            border: "none",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add a subtle shadow to the modal
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Set the overlay to have a semi-transparent background
              backdropFilter: "blur(10px)",
            },
          },
        }}
      >
        {selectedImage && (
          <div className="modal-image-container">
            <img
              src={selectedImage.img}
              alt="Selected"
              style={{
                maxWidth: "100%",
                maxHeight: "90%",
                objectFit: "contain",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <p>{selectedImage.desc}</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Project;
