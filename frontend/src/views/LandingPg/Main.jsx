import React from "react";
import Landing from "./Landing";
import Responsive from "./Carousel";
import WhyXperio from "./WhyXperio";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
// import ReactGA from "react-ga";

// const TRACKING_ID= "" // google analytics tracking ID
// ReactGA.initialize(TRACKING_ID)

function Main() {
  return <div >
  <Nav/>
    <Landing/>
    {/* <Responsive/> */}
    <WhyXperio/>
    <Footer/>
  </div>;
}

export default Main;
