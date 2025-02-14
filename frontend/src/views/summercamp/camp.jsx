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
              <span>Xperio Learning Summer Camp 2025: </span>
            </h5>
            {/* add camp_new image here */}
            <img src={camp_new} className={styles.pic}  alt="camp_new" />

            <p>
              <strong>Months to be Held:</strong> April to July <br/>
              <strong>Boards Covered:</strong> CBSE, ICSE and IB Board<br/>
              <strong>Grades Covered:</strong> Grade 2 to 9 in separate batches<br/>
              <strong>Topics Covered:</strong> Science Experiments, Sudoku, Journaling & Public Speaking, 
              <br/><br/>
              Following up from our Science Camp in 2024, we decided to expand our horizons and include
              More experiments this year. Join us for a fun-filled summer of learning and making new friends.
              <br/> <br/>
              To see pictures and activities from our previous year's camp, please click        
            </p>
            <a className={`${styles.menu__link}`} href="/camp24" target="_blank" rel="noopener noreferrer">
              Summer Camp 2024<br/> 
            </a> page.
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Camp;