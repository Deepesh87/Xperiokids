import React from "react";
import styles from "./voicemasters.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import pricing from "../../assets/pricing_voicemasters.jpeg";
import logo from "../../assets/voice_logo.jpg";

function Voice() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>🎤 VoiceMasters: Public Speaking for Grade 3+</h1>
          <p className={styles.subtitle}>📍 In-Centre Classes | Every Sunday | 10:00 AM – 12:30 PM</p>
          <p className={styles.description}>
            A transformative course that builds <strong>confidence</strong>,
            improves <strong>communication</strong>, and nurtures <strong>leadership</strong> skills — one speech at a time.
          </p>
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

        <div className={styles.videoContainer}>
          <div className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/tDgXq10xNGI"
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
            Download Brochure
          </a>
        </div>

        <div className={styles.trackCards}>
          <div className={styles.trackCard}>
            <img src={pricing} className={styles.thumbImage} alt="Pricing Details" />
            <h3>Need Help Choosing?</h3>
            <p>Call us to explore what's best for your child</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Voice;