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
            <h1 className={Style.heading}>
              <span className={Style.catchyLine}>
                <span className={Style.highlight}>Science</span>
                <span className={Style.highlight}>Robotics</span>
                <span className={Style.highlight}>Public Speaking</span>
                <span className={Style.highlight}>& more!</span>
              </span>
            </h1>
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
