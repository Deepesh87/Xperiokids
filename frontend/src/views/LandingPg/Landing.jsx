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
              <span>
              Xperiment,<br/> Xperience  
               {/*<br/>  Xplore, */}
              {
              <Typewriter
      options={{
        strings: [
            '<span style="color: #21654E;">Science!</span>',
            '<span style="color: #21654E;">Robotics!</span>',
            '<span style="color: #21654E;">Coding!</span>',
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
            Join us today and witness the positive change in your child!          
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
