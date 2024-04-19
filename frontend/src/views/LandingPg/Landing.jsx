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
              Experience  
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
            Join small classes of 6-10 students at Xperiokids, 
            where we emphasize practical learning alongside theory.
             Experience hands-on demonstrations and comprehensive education.
              Visit, WhatsApp, or call us for more details!
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
