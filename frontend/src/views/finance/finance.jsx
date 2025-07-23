import React from "react";
import styles from "./finance.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";

const Finance = () => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h1 className={styles.title}>💰 Finance for Kids</h1>
        <p className={styles.subtitle}>Smart Money Habits Start Early</p>
        <div className={styles.messageBox}>
          <p className={styles.message}>
            This course is currently being designed by financial experts and child learning specialists.
          </p>
          <p className={styles.message}>
            Details will be updated here very soon. Stay tuned!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Finance;
