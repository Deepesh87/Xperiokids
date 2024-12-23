import React from "react";
import Style from "./Landing.module.css";
import experiment from "../../assets/dp1.png";
import KPI from "./KPI";

function Landing() {
  return (
    <>
      <div className={Style.main}>
        <div className={Style.content}>
          <div>
            <h1>
              <span className={Style.catchyLine}>
                Unlock Your Child’s Full Potential with 
                <span className={Style.highlight}> Science</span>, 
                <span className={Style.highlight}> Robotics</span>, 
                <span className={Style.highlight}> Public Speaking</span> & More!
              </span>
            </h1>
            <p>Empowering young minds to Xperiment, Xplore and Xperience</p>
          </div>
        </div>
        <div className={Style.experiment}>
          <img src={experiment} alt="Experiment" />
        </div>
      </div>
      <KPI />
    </>
  );
}

export default Landing;
