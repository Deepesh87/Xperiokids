import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./science-landing.module.css";

import s1 from "../../assets/erosion.webp";
import s2 from "../../assets/lab5.webp";
import s3 from "../../assets/tir.webp";
import s4 from "../../assets/voicemasters_new3.webp";

export default function ScienceLanding() {
  return (
    <>
      <Helmet>
        <title>Science at Xperio Learning – Tuitions, Experiments & Olympiad Prep</title>
<meta
  name="description"
  content="Science Tuitions, Exam & Olympiad Preparations, strong concept foundations through hands-on experiments at Xperio Learning, Bengaluru. Proud Bronze winner at the International Greenwich Olympiad (IGO) 2025."
/>

        <link rel="canonical" href="https://www.xperiolearning.com/science-classes" />
      </Helmet>

      <Nav />

      <main className={styles.wrap}>
        {/* ===== HERO ===== */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.title}>Science at Xperio Learning</h1>
            <p className={styles.subtitle}>
              We teach Science in a way children remember — <strong>through experiments</strong> and clear, structured theory.
            </p>
          </div>
        </section>

        {/* ===== OVERVIEW ===== */}
        <section className={styles.content}>
          <h2 className={styles.h2}>What we offer</h2>
          <p className={styles.lead}>
            Our Science program focuses on strong <strong>concept foundations</strong> backed by <strong>hands-on experiments</strong>.
            We support learners with regular classes and targeted preparation. Classes are conducted by Dr. Kislay Singh who comes with 10+ years of teaching experience.
          </p>

          <div className={styles.gridTwo}>
            <div>
              <h3 className={styles.h3}>Science Tuitions (Grades 7–10)</h3>
              <ul className={styles.list}>
                <li>CBSE &amp; ICSE aligned lessons with doubt-clearing</li>
                <li>Chapter-wise notes, practice sheets &amp; periodic tests</li>
                <li>Concept clarity with everyday examples</li>
              </ul>

              <h3 className={styles.h3}>Exam &amp; Olympiad Preparation</h3>
              <ul className={styles.list}>
                <li>MCQ drills, application-based questions &amp; mock tests</li>
                <li>Pattern-focused practice and time-management tips</li>
                <li>Analysis of mistakes and personalised improvement plan</li>
              </ul>
            </div>

            <div>
              <h3 className={styles.h3}>Science Foundations (Theory + Experiments)</h3>
              <ul className={styles.list}>
                <li>Core ideas across Physics, Chemistry &amp; Biology</li>
                <li>Weekly experiments &amp; demonstrations to make ideas “stick”</li>
                <li>Models, visuals and quick labs to connect theory to real life</li>
              </ul>

              <h3 className={styles.h3}>Who is this for?</h3>
              <ul className={styles.list}>
                <li>Students who want better scores <em>and</em> deeper understanding</li>
                <li>Learners preparing for school exams &amp; Olympiads</li>
                <li>Curious minds who love learning by doing</li>
              </ul>
            </div>
          </div>
        </section>

{/* ===== INTERNATIONAL ACHIEVEMENT ===== */}
<section className={`${styles.card} ${styles.award}`} aria-labelledby="science-award-title">
  <h2 id="science-award-title" className={styles.h2}>🏆 International Achievement</h2>
  <p className={styles.para}>
    We’re proud that our student won a <strong>Bronze Award</strong> at the
    <strong> International Greenwich Olympiad (IGO) 2025, London</strong>, for the research project
    <em> “Natural Plant Extracts as Inhibitors of Cell Division: A Study Using Onion Root Tips.” </em>
    Guided and mentored by <strong>Dr. Kislay Singh</strong>.
  </p>

  <div className={styles.actionsRow}>
    <Link to="/olympiad" className={styles.btnAward}>
      See details→
    </Link>
  </div>
</section>



        {/* ===== SAMPLE EXPERIMENTS / GALLERY ===== */}
{/* ===== SAMPLE EXPERIMENTS / GALLERY ===== */}
<section className={styles.card} aria-labelledby="science-gallery-title">
  <h2 id="science-gallery-title" className={styles.h2}>A glimpse of what we do</h2>
  <p className={styles.note}>
    From soil erosion demos to optics and lab skills — students explore, observe, and explain.
  </p>

  <div className={styles.gallery}>
    <figure className={styles.tile}><img src={s1} alt="Soil erosion & water flow demonstration" /></figure>
    <figure className={styles.tile}><img src={s2} alt="Hands-on lab activity" /></figure>
    <figure className={styles.tile}><img src={s3} alt="Optics: total internal reflection (TIR) experiment" /></figure>
    <figure className={styles.tile}><img src={s4} alt="Team activity and science discussion" /></figure>
  </div>
</section>


        {/* ===== CTA ===== */}
        <section className={styles.ctaSection}>
          <h2 className={styles.h2}>Have questions or want to enrol?</h2>
          <p className={styles.para}>
            Call us and we’ll help you pick the right track for your child.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
