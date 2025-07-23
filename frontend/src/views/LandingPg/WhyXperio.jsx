import React from "react";
import Style from "./WhyXperio.module.css";
import lab from "../../assets/science_thumb3.png";
import voice from "../../assets/voicemasters5.png";
import hobby3 from "../../assets/robotics3.png";

function WhyXperio() {
  const sections = [
    {
      img: hobby3,
      link: "/robotics",
      alt: "Robotics and Coding Course for Kids",
    },
    {
      img: lab,
      link: "/science",
      alt: "Children doing hands-on science experiments",
    },
    {
      img: voice,
      link: "/voicemasters",
      alt: "Public speaking program for students",
    },
  ];

  return (
    <section className={Style.main} aria-label="Xperio Learning Programs">
      <div className={Style.gridContainer}>
        {sections.map((section, index) => (
          <article className={Style.card} key={index}>
            <a href={section.link} aria-label={`Explore ${section.alt}`}>
              <img src={section.img} alt={section.alt} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyXperio;
