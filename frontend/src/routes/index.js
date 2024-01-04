import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../views/LandingPg/Landing";
import { BrowserRouter } from "react-router-dom";
import UnderConstruction from "../views/UnderConstruction/UnderConstruction";
import FalseRoute from "../common/FalseRoute";


function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction/>} />
        <Route path="/home" element={<Landing />} />
        <Route path="*" element={<FalseRoute/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
