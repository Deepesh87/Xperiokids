import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./public-speaking.module.css";

// Reuse your thumbnails
import juniorThumb from "../../assets/juniors_voicemasters.webp";
import seniorThumb from "../../assets/seniors_voicemasters.webp";
import plus from "../../assets/plus.webp";

export default function PublicSpeakingLanding() {
  return (
    <>
      <Helmet>
        <title>Public Speaking at Xperio Learning– VoiceMasters Juniors & Seniors</title>
        <meta
          name="description"
          content="Choose your path: VoiceMasters Juniors (Grades 1–4) and VoiceMasters Seniors (Grade 5+). Structured weekend public speaking programs in Bengaluru."
        />
        <link rel="canonical" href="https://www.xperiolearning.com/public-speaking-for-children" />
      </Helmet>

      <Nav />

      <main className={styles.wrap}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.title}>VoiceMasters – Public Speaking</h1>
            <p className={styles.subtitle}>
              Make your child that charismatic speaker, that confident leader, that engaging storyteller... whose voice is always heard and valued
            </p>
            <p className={styles.description}>
              Two learner-friendly tracks – <strong>Juniors (Grades 1–4)</strong> and{" "}
              <strong>Seniors (Grade 5+)</strong>. Build confidence, clarity and stage presence.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className={styles.cards}>
          {/* Juniors */}
          <article className={styles.card}>
            <img className={styles.cardImg} src={juniorThumb} alt="VoiceMasters Juniors" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>VoiceMasters Juniors</h2>
              <p className={styles.cardText}>
                Grades 1–4. Games, stories, drawing & mini-speeches to build early confidence,
                listening skills, and expressive vocabulary.
              </p>
              <ul className={styles.bullets}>
                <li>Fun Games & table topics</li>
                <li>Body language & voice basics</li>
                <li>Gentle evaluations and badges</li>
              </ul>
              <Link to="/public-speaking-juniors" className={styles.ctaPrimary}>
                Explore Juniors →
              </Link>
            </div>
          </article>

          {/* Seniors */}
          <article className={styles.card}>
            <img className={styles.cardImg} src={seniorThumb} alt="VoiceMasters Seniors" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>VoiceMasters Seniors</h2>
              <p className={styles.cardText}>
                Grade 5+. Structured speeches, leadership roles, evaluations & Toastmasters-style
                projects to level up communication.
              </p>
              <ul className={styles.bullets}>
                <li>Prepared & impromptu speeches</li>
                <li>Stage presence & vocal variety</li>
                <li>Role Plays & Individual feedback</li>
              </ul>
              <Link to="/public-speaking-seniors" className={styles.ctaSecondary}>
                Explore Seniors →
              </Link>
            </div>
          </article>
 {/* Plus */}
<article className={styles.card}>
            <img
              className={styles.cardImg}
              src={plus}
              alt="Voicemasters Plus – 1:1 support"
            />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Voicemasters Plus</h2>
              <p className={styles.cardText}>
                1:1 support, script writing sessions, guided practice, feedback & rehearsal sessions to deliver fuller roles with confidence.
              </p>
              <ul className={styles.bullets}>
                <li>help prepare personalised scripts</li>
                <li>guided practice sessions</li>
                <li>5 extra 1:1 sessions per month</li>
              </ul>
              <Link to="/public-speaking-voicemasters-plus" className={styles.ctaPrimary}>
                Explore Voicemasters Plus →
              </Link>
            </div>
          </article>
        </section>

{/* AI Script Evaluator Feature */}        
<section className={styles.aiStrip}>
  <h2 className={styles.aiHeading}>🧠 New! AI-Powered Script Evaluator</h2>
  <p className={styles.aiText}>
    Not sure how personal your speech really is? Try our <strong>AI Speech Evaluator</strong> —
    it gives you a personalization score, helpful examples, and quick fixes to make your script more “you”.
  </p>
  <Link to="/script-evaluator" className={styles.aiButton}>
    🎯 Try the Evaluator →
  </Link>
</section>


      <section className={styles.blogSection}>
        <h2 className={styles.blogHeading}>📚 Explore More on Public Speaking</h2>
        <p className={styles.blogText}>
          Curious how early public speaking builds confidence and communication skills? Browse our short reads.
        </p>
        <a href="/blog" className={styles.blogLink}>
          👉 Visit our Blog
        </a>
      </section>
      </main>

      <Footer />
    </>
  );
}
