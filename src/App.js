import "./App.css";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";

import { About, Experience, Projects, Contacts } from "./componets";
import { Header, Body, Footer } from "./containers";
import { Outlet, useLocation, useNavigate, useRoutes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-awesome-slider/dist/styles.css";

const App = () => {
  AOS.init();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(location.pathname);
  }, [location.pathname, navigate]);

  return (
    <>
      <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
      <div className="App">
        <Header />
        <Body>
          <Router>
            <Routes>
              <Route path="/about" component={About} />
              <Route path="/experience" component={Experience} />
              <Route path="/projects" component={Projects} />
              <Route path="/contacts" component={Contacts} />
            </Routes>
          </Router>
        </Body>
        <Footer />
      </div>
    </>
  );
};

export default App;
