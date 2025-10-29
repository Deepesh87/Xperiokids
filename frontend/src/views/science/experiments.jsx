import React, { useState } from "react";
import styles from "./robotics-senior.module.css"; // you can duplicate your existing CSS as this file
import Nav from "../../components/Navbar/Nav";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import s2 from "../../assets/r1.webp";
import s8 from "../../assets/akarsh.webp";
import s18 from "../../assets/kit_2.webp";
import s11 from "../../assets/leds_seq.webp";


export default function RoboticsSenior() {
const [faqOpen, setFaqOpen] = useState(false);
const faqs = [
{
question: "What is Robotics?",
answer:
"Robotics for kids is a hands-on way for children to learn about STEM. It involves designing, programming, and building robots, helping kids develop problem-solving, creativity, and critical thinking skills. The Course at Xperio Learning is designed to be fun and engaging, making complex concepts accessible to young learners.",
},
{
question: "What prior knowledge is required for this course?",
answer:
"No prior knowledge is required. The course is beginner-friendly and designed to teach you from scratch. We start with the basics of robotics and programming, ensuring that all students, regardless of their background, can follow along and learn effectively.",
},
{
question: "What materials or tools are needed?",
answer:
"All materials, including a very cool Robotics Kit, will be provided. The kit includes everything needed for the course, such as sensors, motors, and a microcontroller. Students will also need a laptop to run the programming software, which we will guide you on how to set up.",
},
{
question: "How can Robotics benefit young children?",
answer:
"Robotics enhances interest in Maths and Science, leading to better academic performance. It also develops critical skills like problem-solving, creativity, and teamwork. Kids learn to think logically and work collaboratively, which are essential skills for the future.",
},
{
question: "What is the future of Robotics?",
answer:
"Fields like medicine, agriculture, and law enforcement will increasingly rely on robotics. AI + Robotics can make wonders!",
},
{
question: "Is Robotics and Programming doable by Children?",
answer:
"Yes! Our course breaks concepts into easy chunks. Kids love it, and so do the parents. We have seen students as young as 8 years old successfully complete the course and build their own robots.",
},
{
question: "What if I miss a few days of class?",
answer:
"We'll try to accommodate with catchups on alternate days at your convenience or extending the course slightly. ",
},
{
question: "What id the duration of the course?",
answer:
"The Course duration is about 30 hours, spread over 7-8 weekends with 2-hour sessions each Sat and Sundays.",
},
];

return (
<>
<Helmet>
<title>Senior Robotics (Grade 4+) – Xperio Learning</title>
<meta
name="description"
content="Build and program robots with Arduino (C++). Sensors, motors, and weekly projects in Bengaluru."
/>
<link rel="canonical" href="https://www.xperiolearning.com/robotics/senior" />
</Helmet>
<Nav />

<section className={styles["demo-page"]}>
<div className={styles.about}>
<div className={styles.text}>
<h1 className={styles.title}>Weekend Beginners Batch – Grade 4 onwards</h1>
<p className={styles.subtitle}>
📍 Ongoing Batch: 🗓️ Aug – Oct | Sundays only<br />
📍 Upcoming Batch: 🗓️ Nov - Jan | Sat & Sundays
</p>
<p className={styles.description}>
This course will introduce students to the exciting world of robotics and programming. They will learn how to build and program robots using a variety of sensors and motors. The course is designed to be hands-on, with students working individually to complete projects and challenges. Programming will be in C++ using Arduino IDE. All materials, including a very cool Robotics Kit, will be provided.
</p>


<br />
<strong>
<a
className={styles.menu__link}
href="https://drive.google.com/file/d/1mmJm3-rBnXNYe6L4SvluVxoozq225ZxM/view?usp=sharing"

target="_blank"
rel="noreferrer"
>
Download Brochure
</a>
</strong>

<div className={styles.galleryGrid}>
<img className={styles.galleryImg} src={s2} alt="Certificate" />
<img className={styles.galleryImg} src={s8} alt="Child with Robot" />
<img className={styles.galleryImg} src={s18} alt="Child Building" />
<img className={styles.galleryImg} src={s11} alt="LED Project" />
</div>


<div className={styles.videoContainer}>
<div className={styles.videoWrapper}>
<iframe
src="https://www.youtube.com/embed/vEpjvq6E3pM"
title="Robotics YouTube Shorts"
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
></iframe>
</div>
</div>
</div>
</div>
</section>
{/* add the return to robotics homepage button here */}
<div className={styles.backButtonWrapper}>
  <button className={styles.backButton} onClick={() => window.location.href = "/robotics-for-children"}>
    ← Robotics Home page
  </button>
</div>

<section className={styles.faqSection}>
<button onClick={() => setFaqOpen(!faqOpen)} className={styles.faqToggle}>
❓ Frequently Asked Questions <span>{faqOpen ? "▲" : "▼"}</span>
</button>
{faqOpen && (
<div className={styles.faqList}>
{faqs.map((faq, i) => (
<div key={i} className={styles.faqItem}>
<div className={styles.faqButton}>{faq.question}</div>
<p className={styles.faqAnswer}>{faq.answer}</p>
</div>
))}
</div>
)}
</section>



<Footer />
</>
);
}

