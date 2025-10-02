import React from "react";
import { Link } from "react-router-dom";
import MeetingCounter from "./meeting_number";
import styles from "./public-speaking-seniors.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";

import v6 from "../../assets/voicemasters_new5.webp";
import v7 from "../../assets/voicemasters_new6.webp";
import v8 from "../../assets/voicemasters_new7.webp";
import v9 from "../../assets/voice_latest.webp";

export default function Voice() {
  return (
    <>
      <Nav />
      <main className={styles.shell}>
        {/* HERO */}
        <header className={`${styles.card} ${styles.hero}`}>
          <h1 className={styles.title1}>🎤 VoiceMasters Seniors:</h1>
          <h1 className={styles.title}>Public Speaking for Grade 5 onwards</h1>
           

          <p className={styles.subtitle}>📍 In-Centre | Sundays | 10:00 AM – 12:15 PM</p>
          <p className={styles.lead}>
            Build <strong>confidence</strong>, sharpen <strong>communication</strong>, and grow
            <strong> leadership</strong>—one speech at a time.
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
              href="https://drive.google.com/file/d/1LhXuOwZIFcIRNJEwJQ_hvzd84jdlbK0R/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Course Outline
            </a>
            <Link className={`${styles.btn} ${styles.btnGhost}`} to="/voicemasters-leaderboard">
              View Leaderboard
            </Link>
            <Link className={styles.linkSwitch} to="/public-speaking-juniors">
              ← Switch to Juniors (Grades 2–4)
            </Link>
          </div>
        </header>

        {/* MEETING COUNTER */}
        <section className={styles.card}>
          <MeetingCounter />
        </section>

        {/* GALLERY */}
        <section className={styles.card} aria-labelledby="gallery-title">
          <h2 id="gallery-title" className={styles.h2}>Moments from VoiceMasters</h2>
          <p className={styles.note}>
            We celebrate progress with badges, certificates, and a monthly leaderboard.
          </p>
          <div className={styles.gallery}>
            <figure className={styles.tile}><img src={v6} alt="Student speaking activity" /></figure>
            <figure className={styles.tile}><img src={v7} alt="Group practice session" /></figure>
            <figure className={styles.tile}><img src={v9} alt="Recognition ceremony" /></figure>
            <figure className={styles.tile}><img src={v8} alt="Interactive activity" /></figure>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={`${styles.card} ${styles.warm}`}>
          <h2 className={styles.h2}>🗓️ How It Works</h2>
          <ul className={styles.list}>
            <li>🎯 <strong>3 Tracks:</strong> Communication Milestones, Leadership Goals, Book Reading</li>
            <li>🧠 <strong>Activities:</strong> Prepared Speeches, Impromptu Speaking, Role Plays</li>
            <li>🎁 <strong>First class is free:</strong> Try before you decide</li>
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
          <h3 className={styles.h3}>Ready to build stage presence?</h3>
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
              href="https://drive.google.com/file/d/1LhXuOwZIFcIRNJEwJQ_hvzd84jdlbK0R/view?usp=sharing"
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
