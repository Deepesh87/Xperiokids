// src/pages/VoiceMastersLanding.jsx
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";

import pricing      from "../../assets/Voicemasters_fees.png";
import juniorThumb  from "../../assets/juniors_voicemasters.png";
import seniorThumb  from "../../assets/seniors_voicemasters.png";
import styles       from "./public-speaking.module.css";

/* Mini helper for each Q-A pair (no toggle inside now) */
const FAQItem = ({ q, a }) => (
  <div className={styles.faqItem}>
    <div className={styles.faqButton}>{q}</div>
    <p className={styles.faqAnswer}>{a}</p>
  </div>
);

export default function VoiceMastersLanding() {
  const navigate  = useNavigate();
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Public Speaking Classes for Kids in Bengaluru | Voicemasters</title>
        <meta
          name="description"
          content="Join Xperio Learning’s Voicemasters – a public speaking program for children in Bengaluru. Build confidence, creativity, and communication skills through structured weekend classes."
        />
        <meta
          name="keywords"
          content="Public Speaking for Kids, Communication Classes Haralur, Kids Debate, Voicemasters Bengaluru, Public Speaking Classes Bengaluru"
        />
        <link rel="canonical" href="https://www.xperiolearning.com/public-speaking" />
      </Helmet>

      <Nav />

      <div className={styles.container}>
        {/* ─────────── Hero ─────────── */}
        <div className={styles.heroSection}>
          <img
            src={require("../../assets/voicemasters_logo_new.png")}
            alt="VOICEMASTERS Title"
            className={styles.headerImage}
          />
          <h1 className={styles.subtitle}>
            Public Speaking Classes for children in Bengaluru – Voicemasters
          </h1>
          <p className={styles.description}>
            Looking for the best <strong>public speaking classes for kids in Bengaluru</strong>? Voicemasters by
            Xperio Learning offers age-specific weekend programs designed to build
            <strong> confidence, communication, and creativity</strong> in children from Grades&nbsp;1 and up. Based in
            <strong> Haralur</strong>, we’re loved by parents and students.
          </p>
        </div>

        {/* ─────────── Schedule ─────────── */}
        <div className={styles.scheduleBox}>
          <h2>📅 Weekend Public Speaking Program Schedule in Haralur, Bengaluru</h2>
          <ul>
            <li>🗣️ <strong>VoiceMasters Juniors (Grade 2–4):</strong> SAT 10:00 AM</li>
            <li>🎓 <strong>VoiceMasters Seniors (Grade 5+):</strong> SUN 10:00 AM</li>
            <li>🎁 First class FREE. Attend a trial session before you decide.</li>
            <li>📍 In-centre classes every Sat/Sun at Xperio</li>
          </ul>
        </div>

        {/* ─────────── Benefits ─────────── */}
        <div className={styles.benefitsSection}>
          <h2>✨ Why Parents in Bengaluru Choose Voicemasters for Public Speaking</h2>
          <ul>
            <li>🎤 Structured speech curriculum tailored by grade level</li>
            <li>🧠 Focus on creative thinking, vocal confidence, and stage presence</li>
            <li>🏅 Milestones, badges, and evaluations for goal tracking</li>
            <li>👪 Loved by parents, fun for kids, results that show in school</li>
          </ul>
        </div>

        {/* ─────────── Track Cards ─────────── */}
        <div className={styles.trackCards}>
          {/* Juniors */}
          <div className={styles.trackCard}>
            <div className={styles.ribbon}>NEW</div>
            <img src={juniorThumb} className={styles.thumbImage} alt="Juniors Track" />
            <h3>VoiceMasters Juniors</h3>
            <p>Perfect for Grades 1–4. Games, stories, drawing & mini-speeches to build early confidence.</p>
            <button onClick={() => navigate("/public-speaking-juniors")}>Explore Juniors</button>
          </div>

          {/* Seniors */}
          <div className={styles.trackCard}>
            <img src={seniorThumb} className={styles.thumbImage} alt="Seniors Track" />
            <h3>VoiceMasters Seniors</h3>
            <p>Grades 5+. Formal speeches, leadership roles, evaluations & Toastmasters-style projects.</p>
            <button onClick={() => navigate("/public-speaking-seniors")}>Explore Seniors</button>
          </div>
        </div>

        <div className={styles.faqSection}>
          <button onClick={() => setFaqOpen(!faqOpen)} className={styles.faqToggle}>
            ❓ Frequently Asked Questions <span>{faqOpen ? "▲" : "▼"}</span>
          </button>

          {faqOpen && (
            <div className={styles.faqList}>
              <FAQItem
                q="What age group is this for?"
                a="We offer two batches – Juniors (Grade 1 to 4) and Seniors (Grade 5+)."
              />
              <FAQItem
                q="Where are the classes conducted?"
                a="At our Haralur Road centre in Bengaluru – every weekend."
              />
              <FAQItem
                q="Is a free trial available?"
                a="Yes, your first class is completely free!"
              />
              <FAQItem
                q="We have holidays planned—will we lose classes?"
                a="You can pause once for up to 1 month during your tenure; the end date extends accordingly."
              />
              <FAQItem
                q="My child is very shy about a trial class."
                a="Our friendly instructors create a warm, low-pressure environment. Arrive 10 min early so we can settle them in."
              />
            </div>
          )}
        </div>

{/* ─────────── Library Teaser ─────────── */}
<div className={styles.libraryTeaser}>
  <div className={styles.libraryText}>
    <h2>📚 Xperio Children’s Library</h2>
    <p>
      We’ve curated a cozy, growing library for young readers—picture books, STEM picks, classics,
      and inspiring biographies to spark ideas for speeches and projects.
    </p>
  </div>
  <button
    className={styles.libraryButton}
    onClick={() => navigate("/library")}
    aria-label="Browse Xperio Children’s Library"
  >
    Browse the Library
  </button>
</div>





        {/* ─────────── Pricing Card (enlarged image) ─────────── */}
        <div className={styles.trackCards}>
          <div className={styles.trackCard}>
            <img
              src={pricing}
              className={`${styles.thumbImage} ${styles.pricing}`}   /* enlarged via CSS */
              alt="Pricing Details"
            />
            <h3>Fees is payable in single instalment.</h3>
            <p>Please call us to schedule a free first class!</p>
          </div>
        </div>
      </div>

<section className={styles.blogSection}>
  <h2 className={styles.blogHeading}>📚 Explore More on Public Speaking</h2>
  <p className={styles.blogText}>
    Want to dive deeper into how Public Speaking at Xperio Learning helps children develop confidence and communication skills? 
    Check out our detailed articles and guides.
  </p>
  <a href="/blog" className={styles.blogLink}>
    👉 Visit our Blog
  </a>
</section>

      <Footer />
    </>
  );
}
