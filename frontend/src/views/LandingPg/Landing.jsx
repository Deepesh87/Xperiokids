import CurvedSlider from "./CurvedSlider";
import Style from "./Landing.module.css";
import React from "react";
import KPI from "./KPI";

function Landing() {
  return (
    <>
      <div className={Style.main}>
        <div className={Style.content}>
          <div>
          <h1>
  <span className={Style.catchyLine}>
    <span className={Style.highlight}>Science</span>
    <span className={Style.highlight}>Robotics</span>
    <span className={Style.highlight}>Public Speaking</span>
    <span className={Style.kpiValue}>& more!</span>
  </span>
</h1>

          </div>
        </div>
        {/* <div className={Style.experiment}>
          <img src={experiment} alt="Experiment" />
        </div> */}

        {/* ⬇️ Image Slider Here ⬇️ */}
        <CurvedSlider />
        
      </div>
      <KPI />
    </>
  );
}

export default Landing;