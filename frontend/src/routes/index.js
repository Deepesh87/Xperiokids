import React from "react";
import { Route, Routes } from "react-router-dom"; 
import { BrowserRouter } from "react-router-dom";
import UnderConstruction from "../views/UnderConstruction/UnderConstruction";
import FalseRoute from "../common/FalseRoute";
import Main from "../views/LandingPg/Main"


function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstruction/>} />
        <Route path="/home" element={<Main/>} />
        <Route path="*" element={<FalseRoute/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
