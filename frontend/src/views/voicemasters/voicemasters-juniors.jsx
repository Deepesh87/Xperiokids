import React from "react";
import styles from "./voicemasters-seniors.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import pricing from "../../assets/fees_voicemasters.png";

import v2 from "../../assets/voicemasters_new.jpeg";
import v3 from "../../assets/voicemasters_new2.jpeg";
import v4 from "../../assets/voicemasters_new3.jpeg";
import v5 from "../../assets/voicemasters_new4.jpeg";

function VoiceJ() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>🎤 VoiceMasters: Public Speaking for Grade 1 to 3</h1>
          <p className={styles.subtitle}>📍 In-Centre Classes | Every Saturday | 10:00 AM – 12:15 PM</p>
          <p className={styles.description}>

Voicemasters Juniors is a  <strong>playful, engaging public speaking </strong>program designed just for Grades 1 – 3. 
Through <strong>games, stories, roleplay, and imagination</strong>, children gently build confidence, vocabulary, and stage presence.

          </p>
        </div>
            <div className={styles.galleryGrid}>
              <img className={styles.galleryImg} src={v5} alt="Camp Activity 1" />
              <img className={styles.galleryImg} src={v3} alt="Camp Activity 2" />
              <img className={styles.galleryImg} src={v4} alt="Camp Activity 3" />
              <img className={styles.galleryImg} src={v2} alt="Camp Activity 4" />
            </div>


        <div className={styles.scheduleBox}>
          <h2>🗓️ How It Works</h2>
          <ul>
            <li>🎯 <strong>3 Unique Modules:</strong> Little Speakers, Creative Talkers, Confidence Builders</li>
            <li>🧠 <strong>Activities Include:</strong> Story Cubes, Show & Tell, Picture Talks, Audio-Visual Rounds, Role Plays</li>
            <li>🎁 <strong>First Class is Free:</strong> Join a playful trial before you enroll</li>
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
            href="https://drive.google.com/file/d/1hCd-_P1GTGXcceaUP2TyFUcAcf0XMZi7/view?usp=sharing" 
            target="_blank"
          >
            Download Course Outline
          </a>
        </div>

        <div className={styles.trackCards}>
          <div className={styles.trackCard}>
            <img src={pricing} className={styles.thumbImage} alt="Pricing Details" />
            <h3>Fees is payable in single installment.</h3>
            <p>Please call us to schedule a free first class!</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default VoiceJ;