import React from "react";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

import juniorThumb from "../../assets/juniors_voicemasters.png";
import seniorThumb from "../../assets/seniors_voicemasters.png";
import styles from "./voicemasters.module.css";

const VoiceMastersLanding = () => {
  const navigate = useNavigate();

  return (
    <>
<Nav />
      <div className={styles.container}>
        <div className={styles.heroSection}>
<img src={require('../../assets/voicemasters_logo_new.png')} alt="VOICEMASTERS Title" className={styles.headerImage} />


          <p className={styles.subtitle}>Public Speaking Courses for Grades 1 onwards</p>
          <p className={styles.description}>
            Age Specific Learning in 2 batches – <strong>Juniors</strong> and <strong>Seniors</strong>.
            Build confidence, articulation, and leadership through engaging formats.
          </p>
        </div>

        <div className={styles.scheduleBox}>
          <h2>📅 Program Schedule</h2>
          <ul>
            <li>🗣️ <strong>VoiceMasters Juniors (Grade 2–4):</strong> SAT 10:00 AM </li>
            <li>🎓 <strong>VoiceMasters Seniors (Grade 5+ ):</strong> SUN 10:00 AM</li>
            <li>🎁 First class FREE. Attend a trial session before you decide.</li>
            <li>📍 In-centre classes every Sat/Sun at Xperio</li>
          </ul>
        </div>

        <div className={styles.benefitsSection}>
          <h2>✨ Why Choose VoiceMasters?</h2>
          <ul>
            <li>🎤 Structured speech curriculum tailored by grade level</li>
            <li>🧠 Focus on creative thinking, vocal confidence, and stage presence</li>
            <li>🏅 Milestones, badges, and evaluations for goal tracking</li>
            <li>👪 Loved by parents, fun for kids, results that show in school</li>
          </ul>
        </div>

        <div className={styles.trackCards}>
          <div className={styles.trackCard}>
            <div className={styles.ribbon}>NEW</div>

            <img src={juniorThumb} className={styles.thumbImage} alt="Juniors Track" />
            <h3>VoiceMasters Juniors</h3>
            <p>Perfect for Grades 1 to 4. Games, stories, drawing & mini speeches to build early confidence.</p>
            <button onClick={() => navigate('/voicemasters-juniors')}>Explore Juniors</button>
          </div>

          <div className={styles.trackCard}>
            <img src={seniorThumb} className={styles.thumbImage} alt="Seniors Track" />
            <h3>VoiceMasters Seniors</h3>
            <p>Grades 5+. Formal speeches, leadership roles, evaluations & Toastmasters-style projects.</p>
            <button onClick={() => navigate('/voicemasters-seniors')}>Explore Seniors</button>
          </div>
        </div>

        <div className={styles.finalCTA}>
          <h3>📞 Call or Visit us to find out more or book a free trial</h3>
          <a href="https://wa.me/918904749795" target="_blank" rel="noopener noreferrer">
            <button>Book Your Trial Class</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VoiceMastersLanding;