import React from "react";
import styles from "./finance.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import banner from "../../assets/finance.webp";   // NEW

const Finance = () => {
  return (
    <>
      <Nav />

      {/* ───── Hero Section with Banner ───── */}
      <section className={styles.hero}>
        <img src={banner} alt="Finance for Kids" className={styles.bannerImg} />

        {/* Text overlay */}
        <div className={styles.heroCopy}>
          <h1 className={styles.title}>💰 Finance for Children</h1>
          <p className={styles.subtitle}>Too busy to read them all? We’ve done it for you — and built the course kids love.</p>
        </div>
      </section>

      {/* ───── Course Status Message ───── */}
      <div className={styles.container}>
        <div className={styles.messageBox}>
          <p className={styles.message}>
            This course is currently being designed by financial experts and child-learning specialists.
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
