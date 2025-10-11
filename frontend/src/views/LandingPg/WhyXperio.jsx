import React from "react";
import Style from "./WhyXperio.module.css";
import lab from "../../assets/science_thumb3.webp";
import voice from "../../assets/voicemasters5.webp";
import hobby3 from "../../assets/robotics3.webp";
import finance from "../../assets/finance.webp";

function WhyXperio() {
const sections = [
  {
    id: "robotics",
    img: hobby3,
    link: "/robotics-for-children",
    alt: "Robotics and Coding Course for Kids",
    label: "Engineer with Code, Sensors & Logic",
  },
  {
    id: "science",
    img: lab,
    link: "/science",
    alt: "Children doing hands-on science experiments",
    label: "Experiment with Ideas, Curiosity & Wonder",
  },
  {
    id: "speaking",
    img: voice,
    link: "/public-speaking-for-children",
    alt: "Public speaking program for students",
    label: "Express Ideas, Emotions & Stories",
  },
    {
    id: "finance",
    img: finance,
    link: "/finance-for-kids",
    alt: "Financial literacy for Children",
    label: "Smart Money habits start early",
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
<article className={Style.cardContainer}>
  {section.id === "finance" && (
    <div className={Style.comingSoonTag}>Coming Soon</div>
  )}
  {section.id === "speaking" && (
    <div className={Style.aiTag}>AI powered⚡</div>
  )}
  <div className={Style.card}>
    <div className={Style.cardInner}>
      <div className={Style.cardFront}>
        <img src={section.img} alt={section.alt} />
      </div>
      <div className={`${Style.cardBack} ${Style["cardBack_" + section.id]}`}>
        <p>{section.label}</p>
      </div>
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
