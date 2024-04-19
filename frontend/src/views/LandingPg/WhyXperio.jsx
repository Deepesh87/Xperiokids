import React from "react";
import Style from "./WhyXperio.module.css";
import lab from "../../assets/lab1.jpg";
import goals from "../../assets/goals1.jpg";

function WhyXperio() {
  return <div className={Style.main}>
    <h1>Why learn with Xperiokids?</h1>
    <div className={Style.together}>
      <img width={"100%"} height={"100%"} src={lab} alt="toghther"/>
      <div id={Style.txt}>
         <h2>Laboratory, not just a Classroom</h2>
         <p>We go beyond the textbooks. Xperio Kids Learn by doing, So be it Exploring the Plant Kingdom under a
          microscope or performing Chemistry experiments in a test tube, Or becoming Little Elon Musks and
          testing the Laws of Physics. Our hands-on approach encourages children to actively participate
           in the learning process, fostering critical thinking skills, creativity, and confidence.
          <strong> Please visit our Centre on Haralur Road, Bangalore or call us today to learn more.</strong>
          </p>
      </div>
    </div>

    <div className={Style.together}  id={Style.reverse_img} >
      <div id={Style.txt}>
         <h2>Courses Offered</h2>
         <p>For students upto grade K-10, we provide regular tuitons in all subjects. For students in
           grades 11-12, as well as those preparing for Medical | Engineering entrance exams, we offer specialized Chemistry & Biology classes.
           Our Tuitions also include a lot of practical experiments in addition to theory. We also provide 1:1 classes on request.</p>
      </div>
      <img  width={"100%"} height={"100%"} src={goals} alt="toghther"/>
    </div>
</div>;
}

export default WhyXperio;
