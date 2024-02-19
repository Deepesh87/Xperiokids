import React from "react";
import Landing from "./Landing";
import Responsive from "./Carousel";
import WhyXperio from "./WhyXperio";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";

function Main() {
  return <div >
  <Nav/>
    <Landing/>
    <Responsive/>
    <WhyXperio/>
    <Footer/>
  </div>;
}

export default Main;
