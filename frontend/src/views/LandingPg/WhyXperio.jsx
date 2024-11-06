import React from "react";
import Style from "./WhyXperio.module.css";
import lab from "../../assets/lab1.jpg";
import goals from "../../assets/goals1.jpg";
import voice from "../../assets/voicemasters.jpeg";
import hobby3 from "../../assets/robotics.png";
import hobby2 from "../../assets/hobbies2.png";


function WhyXperio() {
  return <div className={Style.main}>
    <h1>Why learn with Xperiokids?</h1>

    <div className={Style.together}  id={Style.reverse_img} >
      <div id={Style.txt}>
         <h2>Robotics & Coding 🤖</h2>
         <p> In a world driven by technology, learning robotics is more than just fun—it's essential.
           Kids who dive into robotics today become the creators, problem-solvers,
            and innovators of tomorrow. Equip yourself with the tools to build,
             explore, and shape a future where anything is possible. Start building now!
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
