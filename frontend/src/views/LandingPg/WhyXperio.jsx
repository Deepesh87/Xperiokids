import React from "react";
import Style from "./WhyXperio.module.css";
import lab from "../../assets/lab1.jpg";
import goals from "../../assets/goals1.jpg";
import voice from "../../assets/voicemasters3.png";
import voice2 from "../../assets/voicemasters_new.jpeg";
import hobby3 from "../../assets/robotics.png";

function WhyXperio() {

  const sections = [
    {
      title: "Robotics & Coding 🤖 for Children",
      description:
        "In today's tech-driven world, learning robotics is essential. Kids who explore robotics now become tomorrow's innovators and problem-solvers. Build, explore, and shape the future today!",
      img: hobby3,
      link: "/robotics",
      alt: "Robotics",
    },
    {
      title: "Laboratory, not just a Classroom",
      description:
        "At Xperio Learning, we go beyond textbooks with hands-on learning. Students engage in experiments across subjects like Robotics, Coding, Physics, Chemistry, and Biology. This interactive approach fosters critical thinking, creativity, and confidence.",
      img: lab,
      link: "https://www.xperiolearning.com/science",
      alt: "Laboratory",
    },
    {
      title: "Xperiokids Birthday Bash! 🎉",
      description:
        "Celebrate your child's special day with an unforgettable Xperiokids Birthday Bash! Enjoy science-filled experiments, customizable themes, and lasting memories. Book now for a unique celebration!",
      img: goals,
      link: "/bday",
      alt: "Birthday Bash",
    },
    {
      title: "VoiceMasters for Public Speaking 🎤",
      description:
        "Imagine your child excelling in presentations, interviews, and collaborative projects, all thanks to the foundational skills they will gain with VoiceMasters. Join us to empower your child with skills for success and personal growth.",
      img: voice2,
      link: "/voicemasters",
      alt: "VoiceMasters",
    },
  ];

  return (
    <div className={Style.main}>
      {/* <h1>Why Xperio!</h1> */}
      <div className={Style.gridContainer}>
        {sections.map((section, index) => (
          <div className={Style.card} key={index}>
            <img src={section.img} alt={section.alt} />
            <div className={Style.cardContent}>
              <h2>{section.title}</h2>
              <p>{section.description.slice(0, 80)}...</p>
              <a className={Style.knowMoreBtn} href={section.link} target="_blank" rel="noopener noreferrer">
                Know More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyXperio;
