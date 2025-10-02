import React from "react";
import { Helmet } from "react-helmet";
import styles from "./public-speaking-voicemasters-plus.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";

// Hero banner sources (drop your actual images here)
import banner1100 from "../../assets/plus.webp";    // ~1100×750
import banner1600 from "../../assets/plus_1600.webp";    // ~1600w
import banner2200 from "../../assets/plus_2200.webp";    // ~2200w
import table_image from "../../assets/plus_table.webp"; 

// Inline accordion component (you can split this to its own file later)
function PlusAccordion() {
  return (
    <div className={styles.accordion}>
      <details className={styles.accItem} open>
        <summary className={styles.accSummary}>📝 1:1 Script Writing sessions</summary>
        <div className={styles.accPanel}>
          <p>
We engage <strong>1:1 with your child</strong> across <strong>5 focused sessions</strong>—listening to their stories and ideas, 
and shaping them into a clear, engaging script.<br/><br/>
Together, we refine content, add personal touches and anecdotes, check vocabulary and grammar, 
and suggest the right phrases, pacing, and pauses.<br/><br/>
The result is a script that feels <strong>authentic, polished, and ready</strong> for confident delivery.
          </p>
        </div>
      </details>

      <details className={styles.accItem}>
        <summary className={styles.accSummary}>🎤 Guided Practice</summary>
        <div className={styles.accPanel}>
          <p>
In our guided <strong>1:1 sessions</strong>, we act as your child’s mirror—leading focused rehearsals and practice rounds.<br/><br/>
Together, we refine <strong>pace</strong>, <strong>purposeful pauses</strong>, <strong>articulation</strong>, and <strong>body language</strong>,
so every delivery becomes natural, confident, and complete.

          </p>
        </div>
      </details>

      <details className={styles.accItem}>
        <summary className={styles.accSummary}>🤝 FIVE 1:1 session per month</summary>
        <div className={styles.accPanel}>
          <p>
Your bundle includes <strong>5 individual 1:1 sessions each month</strong>—
with <strong>at least one every week</strong>—scheduled outside the regular Sunday meetings.<br/><br/>
Session timings will be coordinated in advance based on your child’s and the teacher’s availability.

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
        <h4>4-Month Program</h4>
        {/* <p className={styles.amount}>₹ <span>10,000</span></p> */}
        <p>
One flat fee covers <strong>all role-coaching support for a 4-month tenure</strong>.<br/>
Most families see visible growth within this period, and many students gain enough confidence that renewing the bundle may not be necessary.

        </p>
      </div>
    </div>
  </div>
</details>

<details className={styles.accItem}>
  <summary className={styles.accSummary}>
    Is individual attention provided in the regular meetings?
  </summary>
  <div className={styles.accPanel}>
    <p>
      Yes. During the evaluation section of every Voicemasters meeting, each role taker
      receives individual feedback. However, due to time limits, this feedback can be brief,
      and applying it is often left to the student.
    </p>
    <p>
      With our combined bundle (regular meetings + <strong>5 one-on-one sessions</strong>),
      we add multiple touchpoints to ensure feedback is understood and implemented—helping
      students progress faster and with greater confidence.
    </p>
  </div>
</details>

<details className={styles.accItem}>
  <summary className={styles.accSummary}>How are practice slots scheduled?</summary>
  <div className={styles.accPanel}>
    <p>
      Sessions are scheduled <strong>outside</strong> the regular Sunday meetings. We coordinate
      timings in advance based on your child’s and the teacher’s availability, and confirm each
      slot over WhatsApp.
    </p>
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

Some learners in our Voicemasters program are still building confidence in meeting roles like  
<strong> Timer</strong>, <strong>Ah-Counter</strong>, or <strong>Grammarian</strong>, and often keep their reports brief. 
With the right structure and encouragement, these roles become stepping stones to bigger speaking opportunities—helping 
children grow steadily as confident communicators.<br/><br/>
Our <strong>combined bundle</strong> includes all regular Voicemasters meetings <strong>plus 5 focused 1:1 sessions</strong>. 
In these sessions, we plan the role, co-write a clear script/structure, and rehearse delivery—so children present complete, 
confident reports and build real public-speaking momentum week by week.
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


      {/* Add an image here */}
      <div className={styles.tableImageContainer}>
        <img 
          src={table_image} 
          alt="Voicemasters Plus Overview Table" 
          className={styles.tableImage} 
          loading="lazy"
        />
      </div>  

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