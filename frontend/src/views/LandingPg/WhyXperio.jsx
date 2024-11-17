import React from "react";
import Style from "./WhyXperio.module.css";
import lab from "../../assets/lab1.jpg";
import goals from "../../assets/goals1.jpg";
import voice from "../../assets/voicemasters.jpeg";
import hobby3 from "../../assets/robotics.png";
import hobby2 from "../../assets/hobbies2.png";


function WhyXperio() {
  return <div className={Style.main}>
    <h1>Why choose Xperio Learning!</h1>

    <div className={Style.together}  id={Style.reverse_img} >
      <div id={Style.txt}>
         <h2>Robotics & Coding 🤖</h2>
         <p> In today's tech-driven world, learning robotics is essential. Kids who explore robotics
           now become tomorrow's innovators and problem-solvers. Build, explore, and shape the future today!
        <strong> Click <a className={`${Style.menu__link}`} href="/robotics" target="_blank">
          here</a> to know more.</strong>
 </p>
      </div>
      <img  width={"100%"} height={"100%"} src={hobby3} alt="toghther"/>
    </div>

    <div className={Style.together}>
      <img width={"100%"} height={"100%"} src={lab} alt="toghther"/>
      <div id={Style.txt}>
         <h2>Laboratory, not just a Classroom</h2>
         <p>At Xperio Learning, we go beyond textbooks with hands-on learning. Students engage 
          in experiments across subjects like Robotics, Coding, Physics, Chemistry, and 
          Biology. This interactive approach fosters critical thinking, creativity, and confidence.
          {/* <strong> Please visit our Centre on Haralur Road, Bangalore or call us today to learn more.</strong> */}
          </p>
      </div>
    </div>

    <div className={Style.together}  id={Style.reverse_img} >
      <div id={Style.txt}>
         <h2>Xperiokids Birthday Bash! 🎉</h2>
         <p> Celebrate your child's special day with an unforgettable Xperiokids Birthday 
          Bash! Enjoy science-filled experiments, customizable themes, and lasting 
          memories. Book now for a unique celebration!
        <strong> Click <a className={`${Style.menu__link}`} href="/bday" target="_blank">
          here</a> to know more.</strong>
 </p>
      </div>
      <img  width={"100%"} height={"100%"} src={goals} alt="toghther"/>
    </div>



    <div className={Style.together}>
    <img width={"100%"} height={"100%"} src={voice} alt="toghther"/>
      <div id={Style.txt}>
         <h2>VoiceMasters for Public Speaking 🎤</h2>
         <p> Imagine your child excelling in presentations, interviews,
           and collaborative projects, all thanks to the foundational skills they will gain with VoiceMasters. 
           Join us to empower your child with skills for success and personal growth.
        <strong> Click <a className={`${Style.menu__link}`} href="/voicemasters" target="_blank">
          here</a> to know more.</strong>
 </p>
      </div>
      {/* <img  width={"100%"} height={"100%"} src={voice} alt="toghther"/> */}
    </div>


    <div className={Style.together} >
      <div id={Style.txt}>
         <h2>Want to Teach Something? Use our Space</h2>
         <p> Do you have a skill or a hobby that you want to present to young minds. Call us today, and we will make
          all arrangements for a seamless classroom experience. We are currently looking for 
          folks who can do workshops on Pottery, DIY Crafts, Photography, Abacus. Dont hestitate to call/mail us!
 </p>
      </div>
      <img  width={"100%"} height={"100%"} src={hobby2} alt="toghther"/>
    </div>



</div>;
}

export default WhyXperio;
