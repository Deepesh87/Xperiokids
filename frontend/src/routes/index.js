import React from "react";
import { Route, Routes } from "react-router-dom"; 
import { BrowserRouter } from "react-router-dom";
//import UnderConstruction from "../views/UnderConstruction/UnderConstruction";
import FalseRoute from "../common/FalseRoute";
import Main from "../views/LandingPg/Main"
import About from "../views/About us/About";
import Gallery from "../views/gallery/gallery";
import Calandly from "../views/Calandly/Calandly";
import Voice from "../views/voicemasters/voicemasters";
import Camp from "../views/summercamp/camp";
import Sudoku from "../views/sudoku/sudoku";
import Terms from "../views/terms/terms";
import Bday from "../views/bday/bday";


function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/demo" element={<Calandly/>} />
        <Route path="/voicemasters" element={<Voice/>} />
        <Route path="/camp" element={<Camp/>} />
        <Route path="/sudoku" element={<Sudoku/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/bday" element={<Bday/>} />
        <Route path="*" element={<FalseRoute/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
