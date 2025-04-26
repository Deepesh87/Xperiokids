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
            "Having taught students ranging from primary school to master's level, I've witnessed firsthand how deeply broken our education system is. There's an overwhelming focus on theory, with far too little emphasis on hands-on learning — especially in the sciences, where it’s needed the most. I founded Xperio Learning to change that: to help students truly experience their learning. Alongside this initiative, I also teach at Symbiosis, Bangalore, and have previously held roles at Byju’s, Bangalore, and Galgotias University, NCR."
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
      <Footer/>
    </>
  );
}

export default About;
