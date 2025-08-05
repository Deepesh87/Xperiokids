import React from "react";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./VoiceMasterLeaderboard.module.css";
import winnerImg from "../../assets/kislay.jpg";
import runnerUp1Img from "../../assets/s21.jpg";
import runnerUp2Img from "../../assets/v5.jpeg";



const winners = [
  {
    badge: "🏆",
    title: "VoiceMaster of the Month",
    name:  "Aarav Mehta",
    grade: "6",
    month: "August 2025",
    highlight: "Led roles confidently, always punctual, and delivered a powerful final speech.",
    img: winnerImg,
    main: true            // flag so we can add the glow ring
  },
  {
    badge: "🥈",
    title: "1st Runner-up",
    name:  "Tanya Kapoor",
    grade: "5",
    month: "August 2025",
    highlight: "Strong evaluator, consistent speeches, and maintained decorum throughout.",
    img: runnerUp1Img
  },
  {
    badge: "🥉",
    title: "2nd Runner-up",
    name:  "Vivaan Sharma",
    grade: "7",
    month: "August 2025",
    highlight: "Took multiple roles and gave quality peer feedback.",
    img: runnerUp2Img
  }
];

export default function VoiceMasterLeaderboard() {
  return (
    <>
      <Nav />

      <div className={styles.container}>
        {/* Hero */}
        <div className={styles.heroSection}>
          <h1 className={styles.title}>🎤 VoiceMaster Leaderboard</h1>
          <p className={styles.subtitle}>Our shining stars for public speaking & leadership</p>
          <p className={styles.description}>
            Each month we celebrate students who excel on stage, listen with intent and
            uphold class decorum. Congratulations to our latest champions!
          </p>
        </div>

        {/* Winner Gallery */}
        <div className={styles.galleryGrid}>
          {winners.map((w, i) => (
           <div key={i} className={`${styles.trackCard} ${styles.winnerCard}`}>
              {/* image wrapper: add glow for main winner */}
              <div
                className={w.main ? styles.mainWinnerCard : ""}
                style={{ display: "inline-block" }}
              >
                <img
                  src={w.img}
                  alt={w.name}
                  className={styles.portraitImage}
                />
              </div>

              <h3>{w.badge} {w.title}</h3>
              <p><strong>{w.name}</strong> — Grade {w.grade}</p>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>{w.highlight}</p>
            </div>
          ))}
        </div>

        {/* Metrics box (styled like scheduleBox) */}
        <div className={styles.scheduleBox}>
          <h2>📊 How Points Are Earned</h2>
          <ul>
            <li>🎤 <strong>Prepared Speech</strong> – up to 5 pts</li>
            <li>🧠 <strong>Table Topics</strong> – 1 pt each session</li>
            <li>⏰ <strong>Punctuality & Attendance</strong> – 1 pt each</li>
            <li>👂 <strong>Golden Listener</strong> – awarded once per session</li>
            <li>🔇 <strong>Meeting Decorum</strong> – for silent, focused listening</li>
            <li>🎭 <strong>Role Plays</strong> – Timer, MC, Evaluator, etc.</li>
            <li>📋 <strong>Teacher’s Bonus</strong> – up to 2 pts for attitude & effort</li>
          </ul>
        </div>

        {/* Back-to-courses button */}
        <div className={styles.backButtonWrapper}>
          <button
            className={styles.backButton}
            onClick={() => window.location.href = "/voicemasters"}
          >
            ← Back to VoiceMasters Home
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
