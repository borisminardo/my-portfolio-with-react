import "./App.css";
import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Header, Body, Footer } from "./containers";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light",
      primary: {
        main: "#808080",
      },
      secondary: {
        main: "#808080",
      },
    },
  });
  AOS.init();
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>

      <div className="App">
        <Header />
        {/* <Switch
          checked={toggleDarkMode}
          onChange={toggleDarkTheme}
          color="secondary"
  /> */}
        <Body />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
