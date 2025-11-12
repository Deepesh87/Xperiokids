// File: src/pages/blog/PublicSpeakingConfidence.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./all-blog.module.css"; // shared blog CSS

const READING_MINUTES = 5;
const PUBLISHED = "2025-11-11";
const MODIFIED = "2025-11-11";
const TITLE = "How Parents Can Help Their Children Shine in Public Speaking";
const SLUG = "parenting-tips-for-public-speaking";
const URL = `https://www.xperiolearning.com/blog/${SLUG}`;

export default function PublicSpeakingParentsBlog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${URL}#post`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${URL}#webpage` },
    headline: TITLE,
    description:
      "VoiceMasters at Xperio Learning helps children speak clearly and confidently through fun activities, structured practice, and real-world speaking opportunities.",
    image: ["https://www.xperiolearning.com/blog-assets/parent_child.png"],
    author: { "@type": "Organization", name: "Xperio Learning", "@id": "https://www.xperiolearning.com/#org" },
    publisher: { "@type": "Organization", name: "Xperio Learning", "@id": "https://www.xperiolearning.com/#org" },
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    inLanguage: "en"
  };

  return (
    <>
      <Helmet>
        <title>{TITLE} | Xperio Learning Bengaluru</title>
        <meta
          name="description"
          content="Help your child speak with clarity and confidence. VoiceMasters at Xperio Learning builds public speaking skills through fun practice, feedback, and stage opportunities."
        />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${TITLE} | Xperio Learning`} />
        <meta
          property="og:description"
          content="Public speaking for kids in Bengaluru: clear voice, strong body language, and confident delivery with VoiceMasters at Xperio Learning."
        />
        <meta property="og:url" content={URL} />
        <meta
          property="og:image"
          content="https://www.xperiolearning.com/blog-assets/parent_child.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="VoiceMasters: a simple, supportive pathway to public speaking confidence for Grades 1–10."
        />
        <meta
          name="twitter:image"
          content="https://www.xperiolearning.com/blog-assets/parent_child.webp"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

        {/* JSON-LD breadcrumbs only (no visible UI breadcrumbs) */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xperiolearning.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.xperiolearning.com/blog" },
            { "@type": "ListItem", position: 3, name: TITLE, item: URL }
          ]
        })}</script>
      </Helmet>

      {/* Global Header */}
      <a href="#main" className={styles.skipLink}>Skip to content</a>
      <Nav />

      {/* Magenta brand divider */}
      <div
        className={styles.divider}
        aria-hidden="true"
        style={{ background: "linear-gradient(90deg, var(--x-magenta), #ff6b9a)" }}
      />

      <article
        id="main"
        className={styles.container}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* Hero */}
        <header className={styles.header} style={{ marginTop: "0.5rem" }}>
          <p className={styles.kicker} style={{ color: "var(--x-magenta)" }}>
            Public Speaking • Book Reading • Parent Support 
          </p>
          <h1 className={styles.title} itemProp="headline">{TITLE}</h1>
          <p className={styles.subtitle}>
            On Haralur Road, serving HSR, Bellandur, Sarjapur Road, Kasavanahalli & Silver County Road
          </p>
        </header>

        <figure className={styles.card} style={{ margin: "1rem 0 1.25rem" }}>
          <div className={styles.cardMediaWrap}>
            <picture>
              <source
                type="image/webp"
                srcSet="
                  /blog-assets/parent_child.webp 640w,
                  /blog-assets/parent_child.webp 960w,
                  /blog-assets/parent_child.webp 1280w
                "
                sizes="(max-width: 640px) 100vw, (max-width: 980px) 90vw, 1280px"
              />
              <img
                src="/blog-assets/public-speaking-confidence.jpg"
                alt="Children practicing public speaking with coaches at Xperio Learning, Bengaluru"
                width="1280"
                height="720"
                className={styles.cardImg}
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>
        </figure>

        {/* TOC */}
        <nav className={`${styles.card} ${styles.toc}`} aria-label="Table of contents" style={{ marginBottom: "1.25rem" }}>
          <div className={styles.tocBody}>
            <strong>In this article</strong>
            <ul className={styles.tocList}>
              <li className={styles.tocItemMagenta}><a href="#club">Club not a Course</a></li>
              <li className={styles.tocItemMagenta}><a href="#meeting-structure">Meeting Structure</a></li>
              <li className={styles.tocItemMagenta}><a href="#how-parents">How Parents Can Support</a></li>
              <li className={styles.tocItemMagenta}><a href="#cta">Enroll Near You</a></li>
            </ul>
          </div>
        </nav>

        {/* Sections */}
        <section id="club" className={styles.mainMagenta}>
          <h2 className={`${styles.h2Magenta} ${styles.headerHighlight}`}>Club not a Course</h2>
          <p className={styles.p}>
            The course is designed like a <strong>club</strong>, with a structured format where students take on different roles and deliver <strong>prepared speeches</strong>.
             The role takers conduct the meeting, introduce the speakers, and invite their evaluators. Students plan their 
             speeches at their own pace and volunteer for roles when they feel ready. Almost all roles — including 
             speech evaluators — are performed by the students themselves. Occasionally, the faculty steps in as 
             the <strong>General Evaluator (GE)</strong> to provide feedback on the overall meeting and highlight areas for improvement.
              We strongly believe in learning by doing, and this format ensures that students gain confidence by 
              speaking and engaging with an audience in every session.
          </p>
          <blockquote className={styles.quote} style={{ borderLeftColor: "var(--x-magenta)", background: "#fff5f8", color: "#7a1238" }}>
            “Courses create learners; clubs create leaders”
          </blockquote>
        </section>

<section id="meeting-structure" className={styles.mainMagenta}>
<h2 className={`${styles.h2Magenta} ${styles.headerHighlight}`}>Meeting Structure</h2>

  <p className={styles.p}>
    Every VoiceMasters meeting follows a structured format that helps students grow as confident speakers and thoughtful listeners. 
    The meeting is divided into three main sections, each focusing on a unique communication skill.
  </p>

  <div className={styles.subSection}>
    <h3 className={styles.subHeading}>1. Prepared Speech Session</h3>
    <p className={styles.p}>
      Members deliver speeches from <strong>P1 to P8</strong>, each designed around a specific learning objective. 
      Every speech goes through two levels of review: first by the <em>AI Evaluator</em> (minimum score of 6 out of 10), 
      and then by the faculty for personalized feedback. 
      Students are encouraged to speak from their own experiences or stories rather than relying on copied or AI-generated content. 
      If a speech does not meet its objective, the speaker is encouraged to refine and present it again in a future meeting.
    </p>
  </div>

  <div className={styles.subSection}>
    <h3 className={styles.subHeading}>2. Table Topics Session</h3>
    <p className={styles.p}>
      This is the impromptu speaking round, where the <em>Table Topics Master</em> invites volunteers to speak on spontaneous topics. 
      It helps students think on their feet, organize ideas quickly, and speak confidently without prior preparation.
    </p>
  </div>

  <div className={styles.subSection}>
    <h3 className={styles.subHeading}>3. Evaluation Session</h3>
    <p className={styles.p}>
      The final and most reflective part of the meeting, where evaluators — including the General Evaluator, Timer, Ah-Counter, 
      and Grammarian — share their reports. 
      They highlight what went well, offer suggestions for improvement, and reinforce the spirit of constructive feedback.
    </p>
  </div>

  <div className={styles.subSection}>
    <h3 className={styles.subHeading}>Book Talk Session</h3>
    <p className={styles.p}>
      Every few meetings, we host a special <em>Book Talk</em> segment where members share insights from their favorite books. 
      This encourages reading habits, improves summarizing skills, and helps students learn to present ideas clearly and concisely.
    </p>
  </div>

  <p className={styles.p}>
    Together, these sessions make every VoiceMasters meeting a well-rounded learning experience — 
    helping students build confidence, clarity, and creativity in every role they take.
  </p>
</section>




<section id="how-parents" className={styles.mainMagenta}>
<h2 className={`${styles.h2Magenta} ${styles.headerHighlight}`}>How Parents Can Support Their Child’s Journey</h2>
  <p className={styles.p}>
    Parents play a vital role in helping children grow as confident communicators. 
    Your involvement, encouragement, and understanding make all the difference. 
    Here’s how you can actively support your child throughout their VoiceMasters journey:
  </p>
<br />
  <ul className={styles.list}>
    <li>
      ✅ <strong>Understand the Meeting Flow: </strong>  
      Each meeting follows a structure — with prepared speeches, impromptu rounds, and evaluations. 
      When you understand how meetings run, you can help your child prepare better and feel more comfortable 
      taking on new roles or delivering speeches.
    </li>
<br />
    <li>
      ✅ <strong>Check the WhatsApp Group Regularly: </strong>  
      Role announcements and meeting updates are shared in the group. 
      As soon as your child’s name appears, discuss the role together and help them plan early. 
      This reduces last-minute stress and builds responsibility.
    </li>
<br />
    <li>
      ✅ <strong>Help Personalize Their Speech: </strong>  
      Encourage your child to share <em>their own experiences, feelings, and observations</em>. 
      Avoid scripts copied from books or the internet — the goal is to help them find their own voice 
      and express it authentically.
    </li>
<br />
    <li>
      ✅ <strong>Use the AI Evaluator Tool: </strong>  
      Before submitting a speech, have your child run it through our AI evaluator. 
      It provides an instant score for personalization — aim for a score above <strong>6</strong>. 
      This helps them reflect on how original and relatable their speech is before presenting.
    </li>
<br />
    <li>
      ✅ <strong>Watch Their Recordings: </strong>  
      Reviewing recorded speeches together is one of the best ways to track growth. 
      Celebrate their progress, point out what they did well, and gently discuss areas for improvement. 
      Positive reinforcement builds long-term confidence.
    </li>
<br />
    <li>
      ✅ <strong>Normalize Off Days: </strong>  
      Not every meeting will go perfectly — and that’s okay! Some days your child might forget a line, 
      speak too fast, or feel nervous. Reassure them that these moments are part of the learning journey 
      and that real growth happens through consistent participation.
    </li>
<br />
    <li>
      ✅ <strong>Share Feedback with Us: </strong>  
      We value your perspective. If you notice something that could make the program even better — 
      be it timing, content, or support — please let us know. 
      VoiceMasters is a collaborative space where teachers, parents, and students grow together.
    </li>
  </ul>
</section>


        {/* CTA */}
        <section id="cta" className={styles.mainMagenta}>
          <div className={styles.cardBody}>
            <p className={styles.lead}>Ready to help your child speak with confidence? Book a free trial.</p>
            <p>
              <Link
                to="https://wa.me/918904749795"
                target="_blank"
                className={`${styles.cta} ${styles.ctaMagenta}`}
              >
                Book a Free Trial
              </Link>
            </p>
          </div>

          <div className={styles.cardBody}>
            <p>
              <Link to="/blog" className={`${styles.cta} ${styles.ctaMagenta}`}>← Back to Blog</Link>
            </p>
          </div>
        </section>
      </article>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
