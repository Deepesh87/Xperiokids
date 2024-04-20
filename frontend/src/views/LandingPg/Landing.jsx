import React from "react";
import Style from "./Landing.module.css";
import experiment from "../../assets/dp.png";
import Typewriter from "typewriter-effect";

function Landing() {
  return (
    <>
      <div className={Style.main}>
        <div className={Style.content}>
          <div>
            <h1>
              <span>
              Experiment, Explore, Experience   
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
              </span>
            </h1>
            
            <p>
             Our small classes, limited to just 8-10 students, ensure personalized attention. 
             We believe in the power of practical learning alongside theory, allowing children 
             to experience hands-on demonstrations and receive comprehensive education.
              Lay the foundation for a successful future with us at Xperiokids.
             
            </p>
          </div>
        </div>
        <br/>
        <div className={Style.experiment}>
          <img width={"100%"} height={"100%"} src={experiment} />
        </div>
      </div>
    </>
  );
}

export default Landing;
