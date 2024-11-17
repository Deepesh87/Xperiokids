import React from "react";
import Style from "./Landing.module.css";
import experiment from "../../assets/dp1.png";
import Typewriter from "typewriter-effect";

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
                  <span className={Style.highlight}> Coding</span>, & More!
                </span>
              </h1>
              <p>Empowering young minds to explore, create, and innovate.</p>
            </div>
          </div>

        <div className={Style.experiment}>
          <img src={experiment} alt="Experiment" />
        </div>
      </div>
    </>
  );
}

export default Landing;
