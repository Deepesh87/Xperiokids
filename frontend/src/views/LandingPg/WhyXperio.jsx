import React from "react";
import Style from "./WhyXperio.module.css";
import lab from "../../assets/lab1.jpg";
import goals from "../../assets/goals1.jpg";
import voice from "../../assets/voicemasters.jpeg";
import hobby3 from "../../assets/robotics.png";
import hobby2 from "../../assets/hobbies2.png";

function WhyXperio() {
  return (
    <div className={Style.main}>
      <h1>Why choose Xperio Learning!</h1>
      <div className={Style.together}>
      <a href="/robotics" target="_blank">
          <img width={"100%"} height={"100%"} src={hobby3} alt="Robotics" />
        </a>
        <div id={Style.txt}>
          <h2>Robotics & Coding 🤖</h2>
          <p>
            In today's tech-driven world, learning robotics is essential. Kids
            who explore robotics now become tomorrow's innovators and
            problem-solvers. Build, explore, and shape the future today!
          </p>
        </div>

      </div>

      <div className={Style.together}>
        <a href="https://www.xperiolearning.com/" >
          <img width={"100%"} height={"100%"} src={lab} alt="Laboratory" />
        </a>
        <div id={Style.txt}>
          <h2>Laboratory, not just a Classroom</h2>
          <p>
            At Xperio Learning, we go beyond textbooks with hands-on learning.
            Students engage in experiments across subjects like Robotics,
            Coding, Physics, Chemistry, and Biology. This interactive approach
            fosters critical thinking, creativity, and confidence.

          </p>
        </div>
      </div>

      <div className={Style.together} >

      <a href="/bday" target="_blank">
          <img width={"100%"} height={"100%"} src={goals} alt="Birthday Bash" />
        </a>
        
        <div id={Style.txt}>
          <h2>Xperiokids Birthday Bash! 🎉</h2>
          <p>
            Celebrate your child's special day with an unforgettable Xperiokids
            Birthday Bash! Enjoy science-filled experiments, customizable
            themes, and lasting memories. Book now for a unique celebration!
          </p>
        </div>

      </div>

      <div className={Style.together}>
        <a href="/voicemasters" target="_blank">
          <img
            width={"100%"}
            height={"100%"}
            src={voice}
            alt="VoiceMasters"
          />
        </a>
        <div id={Style.txt}>
          <h2>VoiceMasters for Public Speaking 🎤</h2>
          <p>
            Imagine your child excelling in presentations, interviews, and
            collaborative projects, all thanks to the foundational skills they
            will gain with VoiceMasters. Join us to empower your child with
            skills for success and personal growth.
          </p>
        </div>
      </div>

      <div className={Style.together}>
      <a href="https://www.xperiolearning.com/" >
          <img width={"100%"} height={"100%"} src={hobby2} alt="Teach Space" />
        </a>
        <div id={Style.txt}>
          <h2>Want to Teach Something? Use our Space</h2>
          <p>
            Do you have a skill or a hobby that you want to present to young
            minds. Call us today, and we will make all arrangements for a
            seamless classroom experience. We are currently looking for folks
            who can do workshops on Pottery, DIY Crafts, Photography, Abacus.
            Dont hestitate to call/mail us!
          </p>
        </div>

      </div>
    </div>
  );
}

export default WhyXperio;
