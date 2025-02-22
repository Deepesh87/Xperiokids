import React from "react";
import styles from "./camp.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import camp_new from "../../assets/camp_new.png";

function Camp() {
  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
            <h5>
              <span>Summer Camp 2025:</span>
            </h5>

            <img src={camp_new} className={styles.pic} alt="Summer Camp 2025" />

            <p>
              <strong>Months:</strong> April to July <br />
              <strong>Boards:</strong> CBSE, ICSE, IB <br />
              <strong>Grades:</strong> 2 to 9 (separate batches) <br />
              <strong>Topics:</strong> Science Experiments, Sudoku, Journaling & Public Speaking
            </p>

            <p>
              Building on our successful Science Camp 2024, we’re adding more experiments this year. Join us for an exciting summer of learning and making new friends!
            </p>

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

            <p>
              View photos & activities from last year's camp:{" "}
              <a className={styles.menu__link} href="/camp24" target="_blank" rel="noopener noreferrer">
                Summer Camp 2024
              </a>.
            </p>

            <p>
              To join an exclusive Robotics Camp during Summer Vacation, please visit here{" "}
              <a className={styles.menu__link} href="/robotics" target="_blank" rel="noopener noreferrer">
                Robotics Summer Camp
              </a>.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Camp;
