import React from "react";
import Style from "./WhyXperio.module.css";
import lab from "../../assets/science_thumb3.png";
import voice from "../../assets/voicemasters5.png";
import hobby3 from "../../assets/robotics3.png";

function WhyXperio() {
const sections = [
  {
    id: "robotics",
    img: hobby3,
    link: "/robotics",
    alt: "Robotics and Coding Course for Kids",
    label: "Coding & Robotics",
  },
  {
    id: "science",
    img: lab,
    link: "/science",
    alt: "Children doing hands-on science experiments",
    label: "Science",
  },
  {
    id: "speaking",
    img: voice,
    link: "/voicemasters",
    alt: "Public speaking program for students",
    label: "Public Speaking",
  },
];



  return (
    <section className={Style.main} aria-label="Xperio Learning Programs">

<div className={Style.gridContainer}>
  {sections.map((section, index) => (
    <a
      href={section.link}
      key={index}
      className={Style.cardWrapper}
      aria-label={`Explore ${section.alt}`}
    >
      <article className={Style.card}>
        <div className={Style.cardInner}>
          <div className={Style.cardFront}>
            <img src={section.img} alt={section.alt} />
          </div>
          <div className={`${Style.cardBack} ${Style["cardBack_" + section.id]}`}>
            <p>{section.label}</p>
          </div>
        </div>
      </article>
    </a>
  ))}
</div>



    </section>
  );
}

export default WhyXperio;
