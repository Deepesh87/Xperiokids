// pages/VoiceMasterLeaderboard.jsx
import React from "react";
import Nav   from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./VoiceMasterLeaderboard.module.css";

import winnerImg    from "../../assets/winner.png";
import runnerUp1Img from "../../assets/winner.png";
import runnerUp2Img from "../../assets/winner.png";

/* ① current winners */
const winners = [
  { badge:"🏆", title:"VoiceMaster of the Month", name:"Aarav Mehta", grade:"6",
    month:"August 2025", highlight:"Led roles confidently, always punctual...", img:winnerImg, main:true },
  { badge:"🥈", title:"1st Runner-up", name:"Tanya Kapoor",  grade:"5", month:"August 2025",
    highlight:"Strong evaluator, consistent speeches…", img:runnerUp1Img },
  { badge:"🥉", title:"2nd Runner-up", name:"Vivaan Sharma", grade:"7", month:"August 2025",
    highlight:"Took multiple roles, gave quality peer feedback.", img:runnerUp2Img }
];

/* ② lightweight past-months list (only main winner names) */
const pastWinners = [
  { month:"July 2025",   name:"Riya Singh"   },
  { month:"June 2025",   name:"Aditya Rao"   },
  { month:"May 2025",    name:"Mehak Iyer"   },
  { month:"April 2025",  name:"Kabir Patel"  }
];

export default function VoiceMasterLeaderboard() {
  const currentMonth = winners[0].month;   // all three share the same month label

  return (
    <>
      <Nav />

      <div className={styles.container}>
        {/* ───── Hero ───── */}
        <div className={styles.heroSection}>
          <h1 className={styles.title}>🎤 VoiceMaster Leaderboard</h1>
          <p className={styles.subtitle}>Our shining stars for public speaking & leadership</p>
          <p className={styles.description}>
            Each month we celebrate students who excel on stage, listen with intent
            and uphold class decorum. Congratulations to our latest champions!
          </p>
          <span className={styles.monthBadge}>{currentMonth}</span>
        </div>

        {/* ───── Winner Gallery ───── */}
        <div className={styles.galleryGrid}>
          {winners.map((w, i) => (
            <div key={i} className={`${styles.trackCard} ${styles.winnerCard}`}>
              <div className={w.main ? styles.mainWinnerCard : ""}>
                <img src={w.img} alt={w.name} className={styles.portraitImage} />
              </div>
              <h3>{w.badge} {w.title}</h3>
              <p><strong>{w.name}</strong> — Grade&nbsp;{w.grade}</p>
              <p style={{ fontSize:"0.9rem", color:"#555" }}>{w.highlight}</p>
            </div>
          ))}
        </div>

        {/* ───── Past Winners ───── */}
        <div className={styles.pastSection}>
          <h2>🏅 Previous VoiceMasters</h2>
          <ul>
            {pastWinners.map(p => (
              <li key={p.month}>
                <strong>{p.month}:</strong> {p.name}
              </li>
            ))}
          </ul>
        </div>

        {/* ───── Scoring Metrics ───── */}
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

        {/* ───── Back button ───── */}
        <div className={styles.backButtonWrapper}>
          <button className={styles.backButton} onClick={() => window.location.href="/voicemasters-seniors"}>
            ← Back to VoiceMasters Home
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
