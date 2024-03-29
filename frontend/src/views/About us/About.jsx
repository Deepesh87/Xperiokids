import React from "react";
import styles from "./About.module.css";
import pic from "../../assets/kislay.jpg";
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
              <span>Researcher & Teacher by profession</span>
            </h5>
            <p>
              Hello Everyone. Having taught students of various age groups
              starting from Primary school to Engineering/MSc students, I have
              come to realize how broken our Education system is. We focus more
              on theory and very little on hands on and esp for Sciences
              where it is most needed. I started Xperiokids so students can learn
              by experiencing. I have set up a lab to help young minds see, try and
              learn Science rather then just learn from theory.
            </p>
            <div className={styles.data}>
              <a href="https://www.linkedin.com/in/kislaysingh/" target="_blank" className={styles.hire}>
              <ion-icon name="logo-linkedin"></ion-icon>
                 LinkedIn Profile
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
