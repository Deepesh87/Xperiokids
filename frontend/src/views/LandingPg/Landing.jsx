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
              Learn in a batch of 4-8 students. Xperiokids focuses on Practicals
              as much as on Theory! We dont just teach a concept, we show them!
              Visit our Centre at
              <a target = "_blank" href="https://maps.app.goo.gl/tpDbkzeaULD5LWj37"><u> Haralur Road, near Fisherman's Wharf </u></a>
               or Whatsapp/call us at 890 474 9795 to know more!
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
