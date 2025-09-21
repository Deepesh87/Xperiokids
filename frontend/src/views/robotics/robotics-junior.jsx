import React, { useState } from "react";
import styles from "./robotics-junior.module.css";
import Nav from "../../components/Navbar/Nav";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import s2 from "../../assets/r1.webp";
import s8 from "../../assets/akarsh.webp";
import s18 from "../../assets/kit_2.webp";
import s11 from "../../assets/leds_seq.webp";

export default function RoboticsJunior() {
  const [faqOpen, setFaqOpen] = useState(false);
  const faqs = [
    {
      question: "What is Junior Robotics?",
      answer:
        "Junior Robotics is a playful, hands-on introduction to engineering for Grades 1–3. Children explore simple machines—wheels, axles, gears, levers—through guided builds that spark curiosity and confidence.",
    },
    {
      question: "Do children need any prior knowledge?",
      answer:
        "No prior experience needed. Activities are step-by-step and age-appropriate, focusing on observation, following simple instructions, and making creative choices.",
    },
    {
      question: "What materials or tools are needed?",
      answer:
        "All building kits (Engino/LEGO-style parts) are provided by us in class. No laptop is required for Junior Robotics.",
    },
    {
      question: "Are the kits take-home?",
      answer:
        "Kits are used during class time only so we can reuse complete sets for all students. Projects are photographed or recorded to celebrate progress.",
    },
    {
      question: "How does this help young children?",
      answer:
        "Junior Robotics builds fine-motor skills and introduces early science ideas like force, balance, and motion. Kids practice creativity, teamwork, and clear communication.",
    },
    {
      question: "Is there any screen time or coding?",
      answer:
        "Screen time is minimal or optional at this level. We focus on physical builds and concept play. Light, unplugged coding logic may be introduced as games.",
    },
    {
      question: "What if my child misses a class?",
      answer:
        "We’ll try to help them catch up in the following session or offer a brief recap so they can rejoin comfortably.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Junior Robotics (Grades 1–3) – Xperio Learning</title>
        <meta
          name="description"
          content="Playful, hands-on robotics for Grades 1–3: simple machines, creative builds, and early science concepts. No laptop needed."
        />
        <link rel="canonical" href="https://www.xperiolearning.com/robotics/junior" />
      </Helmet>
      <Nav />

      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
            <h1 className={styles.title}>Junior Robotics – Grades 1 to 3</h1>
            <p className={styles.subtitle}>
              📍 Haralur / HSR / Sarjapur Road • Weekend batches • Small groups
            </p>
            <p className={styles.description}>
              This program introduces young learners to the exciting world of
robotics through hands-on building and experimentation. Using
Engino kits, students will strengthen their understanding of core
science concepts—especially in physics—while developing critical
thinking and problem-solving skills. It’s a fun and engaging first step
into robotics, designed to spark curiosity and nurture the engineering
mindset in young minds.

            </p>

            <br />
            <strong>
              <a
                className={styles.menu__link}
                href="https://drive.google.com/file/d/1Ftk2iYn07_dUd5YxT7fjLX1uOhtGvefT/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Download Junior Brochure
              </a>
            </strong>

            <div className={styles.galleryGrid}>
              <img className={styles.galleryImg} src={s18} alt="Junior build in progress" />
              <img className={styles.galleryImg} src={s8} alt="Child with simple machine model" />
              <img className={styles.galleryImg} src={s2} alt="Robotics class moment" />
              <img className={styles.galleryImg} src={s11} alt="Mechanism demonstration" />
            </div>

            <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/vEpjvq6E3pM"
                  title="Junior Robotics – class glimpse"
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

      <section className={styles.blogSection}>
        <h2 className={styles.blogHeading}>📚 Explore More on Robotics</h2>
        <p className={styles.blogText}>
          Curious how early robotics supports problem-solving and creativity? Browse our short reads.
        </p>
        <a href="/blog" className={styles.blogLink}>
          👉 Visit our Blog
        </a>
      </section>

      <Footer />
    </>
  );
}
