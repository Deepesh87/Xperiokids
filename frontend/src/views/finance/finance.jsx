import React from "react";
import { Helmet } from "react-helmet";
import styles from "./finance.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";

// Base + larger hero sources
import banner1100 from "../../assets/finance.webp";          // existing 1100×750
import banner1600 from "../../assets/finance_1600.webp";     // export this ~1600w
import banner2200 from "../../assets/finance_2200.webp";     // export this ~2200w


import ModulesAccordion from "./ModulesAccordion";

const Finance = () => {
  return (
    <>
      <Helmet>
        <title>Finance for Children | Xperio Learning</title>
        <meta
          name="description"
          content="A practical, age-appropriate finance course covering needs vs wants, saving, budgeting, earning, and smart spending."
        />
        <link rel="canonical" href="https://www.xperiolearning.com/finance" />
      </Helmet>

      <Nav />

      {/* ───── Hero Section with Banner ───── */}
      <section className={styles.hero}>
        <picture className={styles.heroPicture}>
          {/* Optional AVIF (uncomment if available) */}
          {/*
          <source
            type="image/avif"
            srcSet={`${banner1600Avif} 1600w, ${banner2200Avif} 2200w`}
            sizes="100vw"
          />
          */}
          {/* WebP sources */}
          <source
            type="image/webp"
            srcSet={`${banner1100} 1100w, ${banner1600} 1600w, ${banner2200} 2200w`}
            sizes="100vw"
          />
          <img
            src={banner1100}
            alt="Finance for Kids"
            className={styles.bannerImg}
            loading="eager"
            fetchpriority="high"
          />
        </picture>

        {/* Text overlay */}
        <div className={styles.heroCopy}>
          <h1 className={styles.title}>Finance for Children</h1>
          <p className={styles.subtitle}>
            Too busy to read them all? We’ve done it for you — and built the course kids love.
          </p>
        </div>
      </section>

<div className={`${styles.container} ${styles.xpad}`}>
  <div className={styles.messageBox}>
    <p className={styles.message}>
      Designed for students from Grade 5 to 12, this Financial Literacy course blends short,
      easy-to-follow lessons with real-world-inspired activities. From creating budgets to
      running mock businesses, students explore money concepts through hands-on projects,
      roleplays, and interactive challenges — making finance fun, relatable, and unforgettable.
    </p>
  </div>
</div>


      <div className={styles.container}>
        <ModulesAccordion />
      </div>

      <Footer />
    </>
  );
};

export default Finance;
