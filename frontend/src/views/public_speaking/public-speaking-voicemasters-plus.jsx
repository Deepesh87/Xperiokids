import React from "react";
import { Helmet } from "react-helmet";
import styles from "./public-speaking-voicemasters-plus.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";

// Hero banner sources (drop your actual images here)
import banner1100 from "../../assets/plus.webp";    // ~1100×750
import banner1600 from "../../assets/plus_1600.webp";    // ~1600w
import banner2200 from "../../assets/plus_2200.webp";    // ~2200w

// Inline accordion component (you can split this to its own file later)
function PlusAccordion() {
  return (
    <div className={styles.accordion}>
      <details className={styles.accItem} open>
        <summary className={styles.accSummary}>📝 1:1 Script Writing sessions</summary>
        <div className={styles.accPanel}>
          <p>
We engage <strong>1:1 with students</strong>, listen to their stories and ideas, and help them shape these into clear, engaging scripts. 
Together, we refine the content, add personal touches or anecdotes, check for accurate vocabulary and grammar, and 
suggest the right phrases and pauses for effective delivery. This way, every script feels authentic, polished, and ready for confident presentation.
          </p>
        </div>
      </details>

      <details className={styles.accItem}>
        <summary className={styles.accSummary}>🎤 Guided Practice</summary>
        <div className={styles.accPanel}>
          <p>
            Some students feel challenged when practicing on their own. That’s where we step in — acting as their mirror,
             guiding them through multiple rehearsals and practice rounds. Together, we work on pace, pauses, articulation, 
             and body language, helping each delivery become natural, confident, and complete.
          </p>
        </div>
      </details>

      <details className={styles.accItem}>
        <summary className={styles.accSummary}>🤝 6-8 session per month</summary>
        <div className={styles.accPanel}>
          <p>
            There will be 1-2 sessions per week, depending on the number of roles your child takes on. The timings for the sessions 
            will be coordinated with you in advance, based on your child's & Teachers availability.
          </p>
        </div>
      </details>

      {/* <details className={styles.accItem}>
        <summary className={styles.accSummary}>💰 Simple Pricing</summary>
        <div className={styles.accPanel}>
          <div className={styles.priceGrid}>
            <div className={styles.priceCard}>
              <h4>Single Role Pack</h4>
              <p className={styles.amount}>₹ <span>499</span></p>
              <p>Script + Practice + Feedback for one meeting role.</p>
            </div>
            <div className={`${styles.priceCard} ${styles.highlight}`}> 
              <h4>Monthly Booster</h4>
              <p className={styles.amount}>₹ <span>1599</span></p>
              <p>Support for up to 4 roles in a month + priority slots.</p>
            </div>
          </div>
          <p className={styles.priceNote}>Sibling / special needs pricing available on request.</p>
        </div>
      </details> */}

<details className={styles.accItem}>
  <summary className={styles.accSummary}>💰 Simple Pricing</summary>
  <div className={styles.accPanel}>
    <div className={styles.priceGrid}>
      <div className={`${styles.priceCard} ${styles.highlight}`}>
        <h4>3-Month Program</h4>
        <p className={styles.amount}>₹ <span>10,000</span></p>
        <p>
          One flat fee covers all role coaching support for a 3-month tenure. You will see visible growth within this period, and often students gain enough confidence that PLUSrenewal may no longer be necessary.
        </p>
      </div>
    </div>
  </div>
</details>

      <details className={styles.accItem}>
        <summary className={styles.accSummary}>❓ FAQs</summary>
        <div className={styles.accPanel}>
          <p><strong>Is this mandatory?</strong> No—it's an optional add‑on.</p>
          <p><strong>Will my child rely on scripts?</strong> We use scripts as scaffolds and reduce them gradually.</p>
          <p><strong>How are practice slots scheduled?</strong> Before the meeting; we confirm the time on WhatsApp.</p>
        </div>
      </details>
    </div>
  );
}

const VoicemastersPlus = () => {
  return (
    <>
      <Helmet>
        <title>Voicemasters Plus | Role Coaching Support | Xperio Learning</title>
        <meta
          name="description"
          content="Voicemasters Plus is an optional add‑on that helps children deliver fuller, confident role speeches with script templates, guided practice, feedback, and 1:1 support."
        />
        <link rel="canonical" href="https://www.xperiolearning.com/public-speaking-voicemasters-plus" />
      </Helmet>

      <Nav />

      {/* ───── Hero Section with Banner ───── */}
      <section className={styles.hero}>
        <picture className={styles.heroPicture}>
          <source
            type="image/webp"
            srcSet={`${banner1100} 1100w, ${banner1600} 1600w, ${banner2200} 2200w`}
            sizes="100vw"
          />
          <img
            src={banner1100}
            alt="Voicemasters Plus – extra support for meeting roles"
            className={styles.bannerImg}
            loading="eager"
            fetchpriority="high"
          />
        </picture>

        {/* Text overlay */}
        <div className={styles.heroCopy}>
          <h1 className={styles.title}>Voicemasters Plus</h1>
          <p className={styles.subtitle}>
            Extra 1:1 support for students— Script Writing · Guided Rehearsals · Feedback
          </p>
        </div>
      </section>

      {/* Intro blurb */}
      <div className={`${styles.container} ${styles.xpad}`}>
        <div className={styles.messageBox}>
          <p className={styles.message}>

            Some students in our Voicemasters program are still building their confidence in speaking during meetings. While they begin with shorter roles like
             Timer, Ah-Counter, or Grammarian, they often keep their speeches brief. With the right support and encouragement,
              these roles can become stepping stones that prepare them to take on bigger speaking opportunities in the future—helping
               them grow steadily as confident communicators. <br/> <br/> 
            Voicemasters Plus gives them a simple structure and pre‑meeting 1:1 rehearsal so they
            can deliver complete, confident reports—and build real public speaking momentum week by week.
          </p>
        </div>
      </div>

      {/* Accordion: what's inside */}
      <div className={styles.container}>
        <PlusAccordion />
      </div>

      {/* Cross‑promo / Blog link (optional) */}
      {/* <section className={styles.blogSection}>
        <h2 className={styles.blogHeading}>🎤 Want tips for stronger role deliveries?</h2>
        <p className={styles.blogText}>
          Explore quick reads on structure, timing, and vocabulary that make role reports engaging and clear.
        </p>
        <a href="/blog" className={styles.blogLink}>👉 Visit our Blog</a>
      </section> */}

<div className={styles.backButtonWrapper}>
  <button className={styles.backButton} onClick={() => window.location.href = "/public-speaking-for-children"}>
    ← Public Speaking Home Page
  </button>
</div>
      <Footer />
    </>
  );
};

export default VoicemastersPlus;