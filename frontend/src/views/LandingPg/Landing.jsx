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
              <span>
              Experience the wonders of  
              {
              <Typewriter
      options={{
        strings: [
            '<span style="color: #21654E;">Science!</span>',
            '<span style="color: #21654E;">Geography!</span>',
            '<span style="color: #21654E;">Computer Science!</span>',
            '<span style="color: #21654E;">Public Speaking!</span>',
          ],
        autoStart: true,
        loop: true,
      }}
    />
              }{" "}
              through Experiential Learning!
              </span>
            </h1>
            
            <p>
              Learn in a batch of 4-6 students. Xperiokids focuses on Practicals <br />
              as much as on Theory! We dont just teach a concept, we show them!<br />
              Visit, Whatsapp or call us to know more!
            </p>
          </div>
          <button>Visit us today</button>
        </div>
        <div className={Style.experiment}>
          <img width={"100%"} height={"100%"} src={experiment} />
        </div>
      </div>
    </>
  );
}

export default Landing;
