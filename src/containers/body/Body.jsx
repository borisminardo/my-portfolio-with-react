import React from "react";
import {
  Profile,
  Banner,
  About,
  Experience,
  Projects,
  Contacts,
} from "../../componets";
const Body = () => {
  return (
    <div>
      <Profile />

      <About />
      <Experience />
      <Banner />
      <Projects />
      <Contacts />
    </div>
  );
};

export default Body;
