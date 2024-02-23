import "./App.css";
import React from "react";

import { Header, Body, Footer } from "./containers";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  AOS.init();

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
};

export default App;
