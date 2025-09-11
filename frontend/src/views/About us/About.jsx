import React from "react";
import styles from "./About.module.css";
import pic from "../../assets/kislay.jpg";
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

{/* ✅ Brand Colors section (lightweight, semantic, SEO-friendly) */}
      <section id="brand-colors" className={styles.brandColors} aria-labelledby="brand-colors-title">
        <div className={styles.brandWrap}>
          <h2 id="brand-colors-title" className={styles.sectionTitle}>Our Brand Colors & Meaning</h2>
          <p className={styles.sectionLead}>
            The Xperio Learning logo uses four colors to express our learning philosophy. Each color signals a pillar of what and how we teach:
            creativity, energy, curiosity, and trust.
          </p>

          <ul className={styles.colorGrid}>
            <li className={styles.colorCard}>
              <span
                className={styles.swatch}
                style={{ backgroundColor: "#c72d60" }}
                aria-label="Magenta color swatch"
              />
              <div className={styles.colorText}>
                <h3 className={styles.colorName}>Public Speaking</h3>
                <p>
                  Represents creativity, confidence, and self-expression. Perfectly aligned with our VoiceMasters Public Speaking program for children.
                </p>
                {/* <small className={styles.hex}>#c72d60</small> */}
              </div>
            </li>

            <li className={styles.colorCard}>
              <span
                className={styles.swatch}
                style={{ backgroundColor: "#f19c16" }}
                aria-label="Golden orange color swatch"
              />
              <div className={styles.colorText}>
                <h3 className={styles.colorName}>Science</h3>
                <p>
                  Symbolizes energy, curiosity, and discovery. It reflects our hands-on Science experiments where students learn by doing.
                </p>
                {/* <small className={styles.hex}>#f19c16</small> */}
              </div>
            </li>

            <li className={styles.colorCard}>
              <span
                className={styles.swatch}
                style={{ backgroundColor: "#14949d" }}
                aria-label="Teal color swatch"
              />
              <div className={styles.colorText}>
                <h3 className={styles.colorName}>Robotics</h3>
                <p>
                  Stands for innovation, logic, and building. It highlights our Robotics courses, where children design, code, and test real machines.
                </p>
                {/* <small className={styles.hex}>#14949d</small> */}
              </div>
            </li>

            <li className={styles.colorCard}>
              <span
                className={styles.swatch}
                style={{ backgroundColor: "#004aad" }}
                aria-label="Royal blue color swatch"
              />
              <div className={styles.colorText}>
                <h3 className={styles.colorName}>Financial Literacy</h3>
                <p>
                  Represents trust, stability, and smart decision-making. This is the foundation of our Financial Literacy program, where students learn money management for life.
                </p>
                {/* <small className={styles.hex}>#004aad</small> */}
              </div>
            </li>
          </ul>

          <p className={styles.sectionFootnote}>
            Together, these four colors tell the story of Xperio Learning — connecting Science, Robotics, Public Speaking, and Financial Literacy into a unified learning journey.
          </p>
        </div>
      </section>
    </>
  );
}
      <Footer/>

export default About;
