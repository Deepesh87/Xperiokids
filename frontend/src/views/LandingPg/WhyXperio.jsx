import React from "react";
import Style from "./WhyXperio.module.css";

function WhyXperio() {
  return <div className={Style.main}>
    <h1>Why learn with Xperiokids?</h1>
    <div className={Style.together}>
      <img width={"100%"} height={"100%"} src="https://img.freepik.com/free-photo/diverse-people-using-their-phones_53876-95104.jpg?w=1380&t=st=1706609573~exp=1706610173~hmac=8a454240c9147971f88c6ed1a8e7b363273babfcfd4c1f683cb5995e6759b9df" alt="toghther"/>
      <div id={Style.txt}>
         <h2>Laboratory, not just a Classroom</h2>
         <p>We go beyond the textbooks. Xperio Kids Learn by Doing, So be it Exploring the Plant Kingdom under a
          microscope or performing Chemistry experiments in a test tube, Or becoming Little Elon Musks and
          confirming Physics Laws. Teachers at Experiokids dont just teach but also show students what they teach.
          <strong> Please visit our Centre on Haralur Road, Bangalore or call us today to learn more.</strong>
          </p>
      </div>
    </div>
    <div className={Style.together}  id={Style.reverse_img} >
      <div id={Style.txt}>
         <strong>COURSES CREATED BY EXPERTS</strong>
         <h2>Learn with confidence</h2>
         <p>Make real improvements, get real results. Be prepared for real-world interactions by building solid foundations with plenty of speaking, listening, reading and writing practice.</p>
      </div>
      <img  width={"100%"} height={"100%"} src="https://img.freepik.com/free-vector/reading-achieve-goals-education-success-concept-vector-flat-illustration-man-with-flag-award-standing-top-books-stack-staircase-books-leading-win_107791-11835.jpg?size=626&ext=jpg&uid=R135795550&ga=GA1.1.905453276.1706342616&semt=ais" alt="toghther"/>
    </div>
    <div className={Style.together} >
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
  </div>;
}

export default WhyXperio;
