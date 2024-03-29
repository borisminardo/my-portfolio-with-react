import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
      <svg
        className="first-band"
        xmlns={"http://www.w3.org/2000/svg"}
        viewBox="0 0 1440 320"
      >
        <path
          fill="#e7e7e7"
          fillOpacity="1"
          d="M0,96L1440,160L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
