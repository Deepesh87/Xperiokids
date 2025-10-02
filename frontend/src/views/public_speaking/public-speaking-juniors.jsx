import React from "react";
import styles from "./public-speaking-seniors.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import v2 from "../../assets/voicemasters_new.webp";
import v3 from "../../assets/voicemasters_new2.webp";
import v4 from "../../assets/voicemasters_new3.webp";
import v5 from "../../assets/voicemasters_new4.webp";

export default function VoiceJ() {
  return (
    <>
      <Nav />
      <main className={styles.shell}>
        {/* HERO */}
        <header className={`${styles.card} ${styles.hero}`}>
          <h1 className={styles.title1}>🎤 VoiceMasters Juniors:</h1>
          <h1 className={styles.title}>Public Speaking for Grades 2–4</h1>

          <p className={styles.subtitle}>📍 In-Centre | Saturdays | 10:00 AM – 12:15 PM</p>
          <p className={styles.lead}>
            A <strong>playful, engaging</strong> program where children build confidence,
            vocabulary, and stage presence through <strong>games</strong>, <strong>stories</strong>, and
            <strong> role-play</strong>.
          </p>

          <div className={styles.actions}>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href="https://wa.me/918904749795"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Trial
            </a>
            <a
              className={`${styles.btn} ${styles.btnOutline}`}
              href="https://drive.google.com/file/d/1hCd-_P1GTGXcceaUP2TyFUcAcf0XMZi7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Course Outline
            </a>
            {/* <Link className={`${styles.btn} ${styles.btnGhost}`} to="/voicemasters-leaderboard">
              View Leaderboard
            </Link> */}
            <Link className={styles.linkSwitch} to="/public-speaking-seniors">
              ← Switch to Seniors (Grade 5 onwards)
            </Link>
          </div>
        </header>

        {/* GALLERY */}
        <section className={styles.card} aria-labelledby="gallery-title">
          <h2 id="gallery-title" className={styles.h2}>Moments from VoiceMasters</h2>
          <p className={styles.note}>
            We celebrate progress with badges, certificates, and a cheerful monthly leaderboard.
          </p>
          <div className={styles.gallery}>
            <figure className={styles.tile}><img src={v5} alt="Junior student on mic during activity" /></figure>
            <figure className={styles.tile}><img src={v3} alt="Group practice and smiles" /></figure>
            <figure className={styles.tile}><img src={v4} alt="Fun speaking game in class" /></figure>
            <figure className={styles.tile}><img src={v2} alt="Storytelling and show-and-tell" /></figure>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={`${styles.card} ${styles.warm}`}>
          <h2 className={styles.h2}>🗓️ How It Works</h2>
          <ul className={styles.list}>
            <li>🎯 <strong>3 Tracks:</strong> Little Speakers, Creative Talkers, Confidence Builders</li>
            <li>🧠 <strong>Activities:</strong> Story Cubes, Show &amp; Tell, Picture Talks, AV rounds, Role Plays</li>
            <li>🎁 <strong>First class is free:</strong> Join a playful trial before you enroll</li>
            <li>📞 <strong>Need help?</strong> Call us or download the brochure</li>
          </ul>
        </section>

        {/* VIDEO */}
        <section className={styles.card} aria-labelledby="video-title">
          <h2 id="video-title" className={styles.h2}>See VoiceMasters in Action</h2>
          <div className={styles.video}>
            <iframe
              src="https://www.youtube.com/embed/yoXrngUSfDw"
              title="VoiceMasters Public Speaking"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className={`${styles.card} ${styles.final}`}>
          <h3 className={styles.h3}>Ready to help your child find their voice?</h3>
          <div className={styles.actionsRow}>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href="https://wa.me/918904749795"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Trial
            </a>
            <a
              className={`${styles.btn} ${styles.btnOutline}`}
              href="https://drive.google.com/file/d/1hCd-_P1GTGXcceaUP2TyFUcAcf0XMZi7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Course Outline
            </a>
          </div>
          <p className={styles.cross}>
            Also explore our <Link to="/science">Science coaching</Link> and{" "}
            <Link to="/robotics-for-children">Robotics programs</Link> in Bengaluru.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}