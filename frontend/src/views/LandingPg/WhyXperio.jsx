import React from "react";
import Style from "./WhyXperio.module.css";
import lab from "../../assets/lab1.jpg";
import goals from "../../assets/goals1.jpg";
import voice from "../../assets/voicemasters.jpeg";


function WhyXperio() {
  return <div className={Style.main}>
    <h1>Why learn with Xperiokids?</h1>
    <div className={Style.together}>
      <img width={"100%"} height={"100%"} src={lab} alt="toghther"/>
      <div id={Style.txt}>
         <h2>Laboratory, not just a Classroom</h2>
         <p>We extend beyond traditional textbooks at Xperio Kids. 
          Our methodology revolves around hands-on learning, where students engage in 
          experiments covering a wide range of subjects, including Physics, Chemistry, 
          Biology, and Geography. This interactive approach promotes active participation,
           nurtures critical thinking, sparks creativity, and instills confidence in children.
          {/* <strong> Please visit our Centre on Haralur Road, Bangalore or call us today to learn more.</strong> */}
          </p>
      </div>
    </div>

    <div className={Style.together}  id={Style.reverse_img} >
      <div id={Style.txt}>
         <h2>Xperiokids Birthday Bash! 🎉</h2>
         <p> Celebrate your child's special day with Xperiokids Birthday Bash! Immerse them in a world of science
           wonder with mind-blowing experiments, customizable themes, and unforgettable memories. Book now for an
            extraordinary celebration like no other!
        <strong> Click <a className={`${Style.menu__link}`} href="/bday" target="_blank">
          here</a> to know more.</strong>
 </p>
      </div>
      <img  width={"100%"} height={"100%"} src={goals} alt="toghther"/>
    </div>



    <div className={Style.together}>
      <div id={Style.txt}>
         <h2>VoiceMasters for Public Speaking 🎤</h2>
         <p> Unlock your child's potential with VoiceMasters by XperioKids, where we cultivate confident
           communicators and inspiring leaders through fun and engaging public speaking and
            leadership programs. Join us to empower your child with skills for success and personal growth.
        <strong> Click <a className={`${Style.menu__link}`} href="/voicemasters" target="_blank">
          here</a> to know more.</strong>
 </p>
      </div>
      <img  width={"100%"} height={"100%"} src={voice} alt="toghther"/>
    </div>



</div>;
}

export default WhyXperio;
