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
              Having taught students of various age groups
              starting from Primary school to Engineering/MSc students, I have
              come to realize how broken our Education system is. We focus more
              on theory and very little on hands on and esp for Sciences
              where it is most needed. I started Xperiokids so students can learn
              by experiencing. I have a set up a lab cum classroom at
              <a target = "_blank" href="https://maps.app.goo.gl/tpDbkzeaULD5LWj37"><u> Haralur Road, near Fisherman's Wharf </u></a>
              to help young minds see and learn by experimentation rather then theory.
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
