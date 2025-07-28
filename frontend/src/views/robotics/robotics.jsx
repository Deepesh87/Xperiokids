import React, { useState } from "react";
import styles from "./robotics.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import s2 from "../../assets/r1.jpg";
import s8 from "../../assets/akarsh.jpeg";
import s18 from "../../assets/kit_2.jpeg";
import s11 from "../../assets/leds_seq.jpeg";



function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        {question} <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className={styles.faqAnswer}>{answer}</p>}
    </div>
  );
}

function Robotics() {
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
      answer: "All materials, including a very cool Robotics Kit, will be provided. The kit includes everything needed for the course, such as sensors, motors, and a microcontroller. Students will also need a laptop to run the programming software, which we will guide you on how to set up.",
    },
    // {
    //   question: "Can I pay the course fee in installments?",
    //   answer: "Yes, fee can be paid in two installments. Contact us for details.",
    // },
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
  ];

  return (
    <>
      <Nav />
      
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
            {/* <h5>
              <span>Robotics Camp 2025:</span>
            </h5> */}


          <h1 className={styles.title}>Weekend Sunday Batch Grade 4 onwards..</h1>
          <p className={styles.subtitle}>
            📍 Ongoing Batch: 🗓️ July - Sept | Sundays Only<br/>
            📍 Upcoming Batch: 🗓️ October<br/>
          </p>
          <p className={styles.description}>
            This course will introduce students to the exciting world of robotics and programming. They will learn how to build and program robots using a variety of sensors and motors. The course is designed to be hands-on, with students working individually to complete projects and challenges.
            Programming will be in C++ using Arduino IDE, which is a great way to learn programming concepts in a fun and engaging way. Students will also learn about the different types of robots and how they are used in various industries. All materials, including a very cool Robotics Kit, will be provided.

          </p>


            <br />
            <strong>
              <a
                className={styles.menu__link}
                href="https://drive.google.com/file/d/1OfbF9o7VFz_dj_GBG0libGEg6nhzp5f4/view?usp=sharing"
                target="_blank"
              >
                Download Brochure <br />
              </a>
            </strong>

            <div className={styles.galleryGrid}>
              {/* <img className={styles.galleryImg} src={s1} alt="Robotics Kit" /> */}
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

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>

      {/* <a href="/summer" className={styles.floatingBackButton}>
        ← Back to Summer Camp
      </a> */}

      <Footer />
    </>
  );
}

export default Robotics;