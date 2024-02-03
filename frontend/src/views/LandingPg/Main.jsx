import React from "react";
import Landing from "./Landing";
import Responsive from "./Carousel";
import WhyXperio from "./WhyXperio";
import Nav from "../../components/Navbar/Nav";

function Main() {
  return <div >
  <Nav/>
    <Landing/>
    <Responsive/>
    <WhyXperio/>
  </div>;
}

export default Main;
