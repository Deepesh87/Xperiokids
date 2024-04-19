import React from "react";
import styles from "./About.module.css";
import pic from "../../assets/kislay.jpg";
import deepesh from "../../assets/deepesh.png";
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
              <span>Dr. Kislay Singh: Founder Experiokids</span>
            </h5>
            <p>
              Hello Everyone. Having taught students from Primary school to Engineering & Masters,
               I have come to realize how broken our Education system is. We focus more
              on theory and very little on hands on and esp for Sciences
              where it is most needed. I started Xperiokids so students can learn
              by experiencing. I have set up a classroom cum lab to help young minds see, try and
              learn Science rather then just read from books.
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
              <span>Deepesh Singh, Mentor Xperiokids</span>
            </h5>
            <p>
            I am a full time Lead Data Scientist at a Leading Logistic Company. 
            I have worked for over 12 years in the Data Science/Software Industry. I have also taught over 3000+ 
            Working professionals on my own, in small private batches or at Great Learning, Scaler,
             Upgrad, Imarticus and several other top institutes that provide Data Science Courses. My Role at
             Xperiokids is to oversee the pedagogy and bring in my learnings from the Tech Industry.
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
