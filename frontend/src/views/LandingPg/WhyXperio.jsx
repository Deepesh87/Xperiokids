import React from "react";
import Style from "./WhyXperio.module.css";
import lab from "../../assets/lab.jpg";

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
           Our Tuitons also include a lot of practical experiments in addition to theory. We also provide 1:1 classes on request.</p>
      </div>
      <img  width={"100%"} height={"100%"} src="https://img.freepik.com/free-vector/reading-achieve-goals-education-success-concept-vector-flat-illustration-man-with-flag-award-standing-top-books-stack-staircase-books-leading-win_107791-11835.jpg?size=626&ext=jpg&uid=R135795550&ga=GA1.1.905453276.1706342616&semt=ais" alt="toghther"/>
    </div>
    {/* <div className={Style.together} >
      <img  width={"100%"} height={"100%"} src="https://img.freepik.com/free-vector/career-path-concept-illustration_114360-13664.jpg?size=626&ext=jpg&uid=R135795550&ga=GA1.1.905453276.1706342616&semt=ais" alt="toghther"/>
      <div id={Style.txt}>
         <strong>LESSONS FEATURING REAL PEOPLE</strong>
         <h2>Learn for real life</h2>
         <p>Say goodbye to outdated phrases and hello to skills that take you places. Learn language for every day with regularly updated content, video flashcards with real people and helpful cultural insights.</p>
      </div>
    </div>
    <div className={Style.together} id={Style.reverse_img}>
      <div id={Style.txt} >
         <strong>SELF-LED LEARNING</strong>
         <h2>Learn your way</h2>
         <p>Whatever your reason for learning a language, we’ve got you covered. Learn for any goal with simplified courses and short, but focused lessons. You’re in control.</p>
      </div>
      <img width={"100%"} height={"100%"} src="https://img.freepik.com/free-vector/flat-university-concept-background_23-2148189344.jpg?size=626&ext=jpg&uid=R135795550&ga=GA1.1.905453276.1706342616&semt=ais" alt="toghther"/>
    </div>
  </div>; */}

</div>;
}

export default WhyXperio;
