import React from "react";
import { useEffect, useState } from "react";
import MeetingCounter from "./meeting_number";
import styles from "./voicemasters-seniors.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";


// import v5 from "../../assets/voicemasters_new4.jpeg";
import v6 from "../../assets/voicemasters_new5.jpeg";
import v7 from "../../assets/voicemasters_new6.jpeg";
import v8 from "../../assets/voicemasters_new7.jpeg";
import v9 from "../../assets/voice_latest.webp";



function Voice() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>🎤 VoiceMasters: Public Speaking for Grade 5 onwards</h1>
          <p className={styles.subtitle}>📍 In-Centre Classes | Every Sunday | 10:00 AM – 12:30 PM</p>
          <p className={styles.description}>
            A transformative course that builds <strong>confidence</strong>,
            improves <strong>communication</strong>, and nurtures <strong>leadership</strong> skills — one speech at a time.
          </p>
        </div>

        <MeetingCounter />


            <div className={styles.galleryGrid}>
              <img className={styles.galleryImg} src={v6} alt="Camp Activity 4" />
              <img className={styles.galleryImg} src={v7} alt="Camp Activity 1" />
              <img className={styles.galleryImg} src={v9} alt="Camp Activity 2" />
              <img className={styles.galleryImg} src={v8} alt="Camp Activity 3" />

            </div>
        <div className={styles.scheduleBox}>
          <h2>🗓️ How It Works</h2>
          <ul>
            <li>🎯 <strong>3 Unique Modules:</strong> Communication Milestones, Creative Expression, Leadership Lab</li>
            <li>🧠 <strong>Activities Include:</strong> Storytelling, Impromptu Speaking, Audio-Visual Rounds, Role Plays</li>
            <li>🎁 <strong>First Class is Free:</strong> Attend a trial before you decide</li>
            <li>📞 <strong>Need Help?</strong> Call us or download the brochure below</li>
          </ul>
        </div>

<div className={styles.backButtonWrapper}>
  <button className={styles.backButton} onClick={() => window.location.href = "/voicemasters-juniors"}>
    ← Switch to Juniors (Grade 2 to 4)
  </button>
</div>


        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/XhMnFIeyBAw"
              title="VoiceMasters Public Speaking"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className={styles.finalCTA}>
          <h3>📥 Download the Brochure to Know More</h3>
          <a
            className={styles.menu__link}
            href="https://drive.google.com/file/d/1LhXuOwZIFcIRNJEwJQ_hvzd84jdlbK0R/view?usp=sharing"
            target="_blank"
          >
            Download Course Outline
          </a>
        </div>
                <div className={styles.finalCTA}>
                  <h3>📞 Call or Visit us to find out more or book a free trial</h3>
                  <a href="https://wa.me/918904749795" target="_blank" rel="noopener noreferrer">
                    <button>Book Your Trial Class</button>
                  </a>
                  <p style={{ fontSize: "0.95rem", marginTop: "1rem" }}>
                    Also check out our <a href="/science">Science coaching</a> and <a href="/robotics">Robotics programs</a> for
                    kids in Bengaluru.
                  </p>
                </div>

      </div>
      <Footer />
    </>
  );
}

export default Voice;