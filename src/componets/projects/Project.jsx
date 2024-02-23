import React, { useState } from "react";
import Modal from "react-modal";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
const Project = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [selectedImage, setSelectedImage] = useState(null);
  const projects = [
    {
      img: require("../../assets/enav.png"),
      title: "Edip",
      desc: "Modals, Tables, for Enav and Technosky",
    },
    {
      img: require("../../assets/Gestione.png"),
      title: "Edip",
      desc: "Sections, Forms, Tables for Enav and Technosky",
    },

    {
      img: require("../../assets/accord.png"),
      title: "Edip",
      desc: "Tables, Action, Accordion for Enav and Technosky",
    },
    {
      img: require("../../assets/det.png"),
      title: "Edip",
      desc: "Sections, Details, for Travel Enav ",
    },
    {
      img: require("../../assets/timecard.png"),
      title: "Edip",
      desc: "Sections, Timecards, for Travel Enav and Technosky",
    },
    {
      img: require("../../assets/report.png"),
      title: "Edip",
      desc: "Sections, Reports, for Travel Enav and Technosky",
    },
    {
      img: require("../../assets/dgs.png"),
      title: "Ingest",
      desc: "Sections, Tables for DGS",
    },
    {
      img: require("../../assets/tables.png"),
      title: "Ingest",
      desc: "Tables, Actions for DGS",
    },
    {
      img: require("../../assets/accordion.png"),
      title: "Ingest",
      desc: "Sections, Accordion, Details for DGS",
    },

    {
      img: require("../../assets/luminance.png"),
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
              className="projects-container color-container"
              key={index}
              onClick={() => openModal(img, title, desc)}
            >
              <div className="article-container">
                <img src={img} alt={title} className="project-img" />
              </div>
              <div className="btn-container">{desc}</div>
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
            <h3>{selectedImage.title}</h3> <p>{selectedImage.desc}</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Project;
