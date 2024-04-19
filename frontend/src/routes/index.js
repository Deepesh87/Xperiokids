import React from "react";
import { Route, Routes } from "react-router-dom"; 
import { BrowserRouter } from "react-router-dom";
//import UnderConstruction from "../views/UnderConstruction/UnderConstruction";
import FalseRoute from "../common/FalseRoute";
import Main from "../views/LandingPg/Main"
import About from "../views/About us/About";
import Calandly from "../views/Calandly/Calandly";
import Camp from "../views/summercamp/camp";
import Terms from "../views/terms/terms";


function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/demo" element={<Calandly/>} />
        <Route path="/camp" element={<Camp/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="*" element={<FalseRoute/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
