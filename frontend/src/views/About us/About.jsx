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
              Having taught students from Primary school to Masters,
               I have come to realize how broken our Education system is. We focus more
              on theory and very little on hands on and esp. for Sciences
              where it is most needed. I started Xperio Learning so students can learn
              by experiencing. I also teach at Symbiosis, Bangalore and in the past have 
              held roles at Byjus, Bangalore and Galgotias University, NCR.
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
            I am a full time Lead Data Scientist at a Leading Logistic Company. 
            I have worked for over 12 years in the Data Science/Software Industry. I have also taught Data Science and ML to over 3000+ 
            Working professionals at Great Learning, Scaler,
             Upgrad, Imarticus and several other top institutes that provide Data Science Courses. My Role at
             Xperio Learning is to oversee the pedagogy and bring in my learnings from the Tech Industry.
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
