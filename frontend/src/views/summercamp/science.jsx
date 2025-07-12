import React from "react";
import styles from "./science.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import s1 from "../../assets/map.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s5.jpeg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s3.jpg";
import s6 from "../../assets/tyndall.jpg";
import s11 from "../../assets/tyndall2.jpeg";
import s18 from "../../assets/tir.jpeg";
import s12 from "../../assets/erosion.jpeg";
import s9 from "../../assets/ph2.jpeg";

function Science() {
  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
            <h5>
              <span>Science Camp 2025:</span>
            </h5>
            <br />

            <strong>
              <a className={`${styles.menu__link}`} href="https://drive.google.com/file/d/1mpLov7byLD8pOay75fg8I5v9_lDkoiOG/view?usp=sharing" target="_blank">
                Download Brochure <br />
              </a>
            </strong>

            <div className={styles.galleryGrid}>
              <img className={styles.galleryImg} src={s12} alt="Camp Activity 1" />
              <img className={styles.galleryImg} src={s2} alt="Camp Activity 2" />
              <img className={styles.galleryImg} src={s18} alt="Camp Activity 3" />
               <img className={styles.galleryImg} src={s9} alt="Camp Activity 4" />
              <img className={styles.galleryImg} src={s11} alt="Camp Activity 5" />
            </div>


            <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/BgBgUHmVf7s"
                  title="Xperio Learning Summer Camp 2024 Feedback"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/HL50OhKD9HM"
                  title="Xperio Learning Summer Camp 2024 Feedback"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <a href="/summer" className={styles.floatingBackButton}>
        ← Back to Summer Camp
      </a> */}

      <Footer />
    </>
  );
}

export default Science;