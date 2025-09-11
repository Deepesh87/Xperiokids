import React from "react";
import styles from "./About.module.css";
import pic from "../../assets/kislay.webp";
import deepesh from "../../assets/deepesh.jpeg";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <Nav />
      <section className={styles["about-us"]}>
        <div className={styles.about}>
          <img src={pic} className={styles.pic} alt="Profile Picture" />
          <div className={styles.text}>
            <h2>About Us</h2>
            <h5>
              <span>Dr. Kislay Singh: Founder Xperio Learning</span>
            </h5>
            <p>
            Having taught students from primary school to postgraduate levels, I’ve seen just how flawed our education system can
             be — especially in its heavy reliance on theory over hands-on application. This gap is most evident in science education,
              where experiential learning is crucial but often neglected. I started Xperio Learning to change that — to help students 
              truly engage with and experience what they learn. In parallel, I teach at Symbiosis, Bangalore, and conduct corporate 
              training sessions in SQL, Power BI, and Data Analysis for working professionals. My past roles include positions 
              at Byju’s and Galgotias University in NCR.
            </p>
            <div className={styles.data}>
              <a href="https://www.linkedin.com/in/kislaysingh/" target="_blank" className={styles.hire}>
              <ion-icon name="logo-linkedin"></ion-icon>
                 Kislay's Profile
              </a>
            </div>
          </div>
        </div>



        <div className={styles.about}>
          <img src={deepesh} className={styles.pic} alt="Profile Picture" />
          <div className={styles.text}>
            <h5>
              <span>Deepesh Singh, Mentor Xperio Learning</span>
            </h5>
            <p>
            "As a Lead Data Scientist at a global logistics leader, I bring over 12 years of experience building data-driven solutions at scale. I have also trained more than 3,000 working professionals in Data Science and Machine Learning through top institutions like Great Learning, Scaler, UpGrad, and Imarticus. At Xperio Learning, I drive the academic vision — blending industry-grade practices with experiential learning to prepare students for real-world challenges."
            </p>
            <div className={styles.data}>
              <a href="https://www.linkedin.com/in/connectdeepesh/" target="_blank" className={styles.hire}>
              <ion-icon name="logo-linkedin"></ion-icon>
               Deepesh's Profile
              </a>
            </div>
          </div>
        </div>
      </section>

{/* ✅ Brand Colors section (full-color subject cards) */}
<section id="brand-colors" className={styles.brandColors} aria-labelledby="brand-colors-title">
  <div className={styles.brandWrap}>
    <h2 id="brand-colors-title" className={styles.sectionTitle}>
      Logo Colors & Subjects We Teach
    </h2>
    <p className={styles.sectionLead}>
      Each Xperio Learning color maps to a core subject—so parents and students can instantly connect the
      program with its learning outcome.
    </p>

    <ul className={styles.colorGrid}>
      <li className={`${styles.colorCard} ${styles.magenta}`} aria-label="Public Speaking — Magenta">
        <div className={styles.cardInner}>
          {/* <span className={styles.badge}>#c72d60</span> */}
          <h3>Public Speaking</h3>
          <p>
            Creativity, confidence, and self-expression. Our <strong>VoiceMasters</strong> program builds real,
            on-stage speaking skills.
          </p>
        </div>
      </li>

      <li className={`${styles.colorCard} ${styles.orange}`} aria-label="Science — Golden Orange">
        <div className={styles.cardInner}>
          {/* <span className={styles.badge}>#f19c16</span> */}
          <h3>Science</h3>
          <p>
            Energy, curiosity, and discovery—hands-on experiments that make concepts stick through doing.
          </p>
        </div>
      </li>

      <li className={`${styles.colorCard} ${styles.teal}`} aria-label="Robotics — Teal">
        <div className={styles.cardInner}>
          {/* <span className={styles.badge}>#14949d</span> */}
          <h3>Robotics</h3>
          <p>
            Innovation, logic, and building—students design, code, and test functional robots step by step.
          </p>
        </div>
      </li>

      <li className={`${styles.colorCard} ${styles.blue}`} aria-label="Financial Literacy — Royal Blue">
        <div className={styles.cardInner}>
          {/* <span className={styles.badge}>#004aad</span> */}
          <h3>Financial Literacy</h3>
          <p>
            Trust, stability, and smart decision-making. Practical money skills for life.
          </p>
        </div>
      </li>
    </ul>

    <p className={styles.sectionFootnote}>
      Together, these four colors tell the story of Xperio Learning—connecting Science, Robotics, Public Speaking,
      and Financial Literacy into a unified learning journey.
    </p>
  </div>
</section>

    </>
  );
}
      <Footer/>

export default About;
