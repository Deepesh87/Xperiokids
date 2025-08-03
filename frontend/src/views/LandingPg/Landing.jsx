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
<h1 className={Style.catchyLine}>
  <span className={`${Style.highlight} ${Style.science}`}>Science</span>
  <span className={`${Style.highlight} ${Style.robotics}`}>Robotics</span>
  <span className={`${Style.highlight} ${Style.publicSpeaking}`}>Public&#8209;Speaking</span>
  <span className={`${Style.highlight} ${Style.finance}`}>Financial Literacy</span>
  <span className={`${Style.highlight} ${Style.more}`}>& more!</span>
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