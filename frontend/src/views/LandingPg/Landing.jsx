import React from "react";
import Style from "./Landing.module.css";
import experiment from "../../assets/experiment.png";
import Typewriter from "typewriter-effect";

function Landing() {
  return (
    <>
      <div className={Style.main}>
        <div className={Style.content}>
          <div>
            <h1>
              {" "}
              Unlocking the World of 
              {
                <Typewriter
      options={{
        strings: [
            '<span style="color: #FF9843;">Science</span>',
            '<span style="color: #756AB6;">Geography</span>',
            '<span style="color: #D24545;">Astronomy</span>',
            '<span style="color: #789461;">Public Speaking</span>',
          ],
        autoStart: true,
        loop: true,
      }}
    />
              }{" "}
              through Playful Exploration!
            </h1>
            <p>
              Get access to compact lessons from the experts and <br /> connect
              with a community of native speakers to help you <br /> master
              words faster.
            </p>
          </div>
          <button>Learn for free</button>
        </div>
        <div className={Style.experiment}>
          <img width={"100%"} height={"100%"} src={experiment} />
        </div>
      </div>
    </>
  );
}

export default Landing;
