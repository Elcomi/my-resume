import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";

import LandingPage from "./landingpage";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Routes>
    <Route exact path="/" element={<LandingPage />} />
    <Route path="/portfolio/projects" element={<Projects />} />
    <Route path="/portfolio/resume" element={<Resume />} />
  </Routes>
);

export default Main;
