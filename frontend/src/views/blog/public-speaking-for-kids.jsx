// File: src/pages/blog/PublicSpeakingConfidence.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./all-blog.module.css"; // shared blog CSS

const READING_MINUTES = 5;
const PUBLISHED = "2025-09-21";
const MODIFIED = "2025-09-21";
const TITLE = "Public Speaking: A Simple Path to Confidence for Kids";
const SLUG = "public-speaking-confidence-kids";
const URL = `https://www.xperiolearning.com/blog/${SLUG}`;

export default function PublicSpeakingBlog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${URL}#post`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${URL}#webpage` },
    headline: TITLE,
    description:
      "VoiceMasters at Xperio Learning helps children speak clearly and confidently through fun activities, structured practice, and real-world speaking opportunities.",
    image: ["https://www.xperiolearning.com/blog-assets/public-speaking-confidence.webp"],
    author: { "@type": "Organization", name: "Xperio Learning", "@id": "https://www.xperiolearning.com/#org" },
    publisher: { "@type": "Organization", name: "Xperio Learning", "@id": "https://www.xperiolearning.com/#org" },
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    inLanguage: "en"
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What ages/grades can join VoiceMasters at Xperio Learning?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We run batches for Grades 1–10 with level-wise activities: voice & clarity for younger speakers, structure & storytelling for middle grades, and persuasive & extempore speaking for senior grades."
        }
      },
      {
        "@type": "Question",
        name: "Do shy kids benefit from public speaking?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Absolutely. We start with low-pressure, small-group speaking, build routines that reduce anxiety, and celebrate small wins to steadily raise confidence."
        }
      },
      {
        "@type": "Question",
        name: "Where are you located?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We are on Haralur Road and serve families in HSR Layout, Bellandur, Sarjapur Road, Kasavanahalli and Silver County Road, Bengaluru."
        }
      }
    ]
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
          content="https://www.xperiolearning.com/blog-assets/public-speaking-confidence.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="VoiceMasters: a simple, supportive pathway to public speaking confidence for Grades 1–10."
        />
        <meta
          name="twitter:image"
          content="https://www.xperiolearning.com/blog-assets/public-speaking-confidence.webp"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>

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
            Public Speaking • Confidence • Book Reading
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
                  /blog-assets/public-speaking-confidence.webp 640w,
                  /blog-assets/public-speaking-confidence.webp 960w,
                  /blog-assets/public-speaking-confidence.webp 1280w
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
              <li className={styles.tocItemMagenta}><a href="#why-speaking">Why Public Speaking Matters</a></li>
              <li className={styles.tocItemMagenta}><a href="#how-we-teach">How We Teach (Simple & Supportive)</a></li>
              <li className={styles.tocItemMagenta}><a href="#pathway">Age-Wise Learning Pathway</a></li>
              <li className={styles.tocItemMagenta}><a href="#real-world">Real-World Practice & Showcases</a></li>
              <li className={styles.tocItemMagenta}><a href="#faq">FAQ</a></li>
              <li className={styles.tocItemMagenta}><a href="#cta">Enroll Near You</a></li>
            </ul>
          </div>
        </nav>

        {/* Sections */}
        <section id="why-speaking" className={styles.mainMagenta}>
          <h2 className={styles.h2Magenta}>Why Public Speaking Matters</h2>
          <p className={styles.p}>
            Clear speaking helps children do better in school presentations, interviews, and everyday conversations.
            Confidence grows when kids learn how to control their voice, manage their nerves, and organize ideas into
            simple structures that any audience can follow. Children alos learn storytelling skills that boost reading comprehension
            and writing ability. Plus, Storytelling is fun! Storytelling is a powerful tool for connection and influence,
            and mastering it early sets kids up for success in school and beyond. Afterall Storytelling is everywhere—in
            books, movies, ads, speeches, and conversations. And of course at Offices where presentations and pitches are
            part of daily life.
          </p>
          <blockquote className={styles.quote} style={{ borderLeftColor: "var(--x-magenta)", background: "#fff5f8", color: "#7a1238" }}>
            “Confidence is a skill—build it with small wins, often.”
          </blockquote>
        </section>

        <section id="how-we-teach" className={styles.mainMagenta}>
          <h2 className={styles.h2Magenta}>How We Teach (Simple & Supportive)</h2>
          <p className={styles.p}>
            The Course follows a Club Structure and every student is free to go at their own pace. Each session includes
            Prepared Speeches that can be 3 to 6 minutes long, and Impromptu Speeches that are 1 to 3 minutes long. Then, we have an
          Evaluation segment where each student receives positive, specific feedback on what they did well and clear actionable steps
          to improve. This encourages a growth mindset and helps students see progress over time. The Prepared Speeches are practiced at 
          home and presented in class, while Impromptu Speeches are done on the spot to build quick thinking skills. Each Prepared speech (called Projects P1 to P8)
          target a specific skill, such as <em> Body Laungauge</em>, <em>Vocal Variety</em>, <em>Humour</em>, or <em>Persuasion</em> so children develop every aspect of public speaking. The Projects 
          are progressively more challenging, but every child can go at their own pace and choose to present when ready.
<br />
          They meetings are almost entirely conducted by children with coaches providing gentle guidance and support. One Meeting every month is 
          about Book Reading where children share their favourite books and the story with the class. Through this we encourage a love for reading and books and every child 
          is encouraged to read at least 1 book a month. This builds reading fluency, vocabulary, and comprehension skills.

<br />
          Each session is fun and engaging, with games, activities, and friendly competition to keep kids motivated. The
          supportive environment helps even shy kids open up and enjoy speaking in front of others. Children take turns to take various pre-deicded roles in each meeting such as
          Timer, Ah-Counter, Grammarian, Mood-Watcher, MC, Table Topic Master, Giggle Master, General Evaluator and more. This builds leadership skills and encourages active listening and critical thinking.
          </p>
          <ul className={styles.badges} aria-label="Skill focus">
            <li><span className={styles.badge}>Voice & Pace</span></li>
            <li><span className={styles.badge}>Story Structure</span></li>
            <li><span className={styles.badge}>Body Language</span></li>
            <li><span className={styles.badge}>Persuasion</span></li>
          </ul>
        </section>

        <section id="pathway" className={styles.mainMagenta}>
          <h2 className={styles.h2Magenta}>Age-Wise Learning Pathway</h2>
          <p className={styles.p}>
            <strong>Juniors: Grades 2–4:</strong> games for clarity, expression, and posture; playful & engaging. <br />
            <strong>Seniors: Grades 5–10:</strong> persuasive speaking, storytelling arcs, Book Reading and more.<br />
          </p>
        </section>

        <section id="real-world" className={styles.mainMagenta}>
          <h2 className={styles.h2Magenta}>Real-World Practice & Showcases</h2>
          <p className={styles.p}>
            Kids apply skills in class showcases, school events, and recorded presentations. They learn preparation habits:
            planning points, practicing aloud, and using simple notes to stay on track. Feedback is concrete and positive,
            so every child knows exactly what to try next. This builds real-world confidence and competence. The Feedback from Parents 
            has been overwhelmingly positive with many parents reporting noticeable improvements in their child's confidence and communication skills.
            Many of our students have also won awards in school speech competitions and hosted event in their apartment complexes and schools.
          </p>
        </section>

        {/* Local SEO */}
        <aside className={styles.card} style={{ margin: "1rem 0" }}>
          <div className={styles.cardBody}>
            <p className={styles.p}>
              <strong>Serving nearby:</strong> Haralur Road, HSR Layout, Bellandur, Sarjapur Road, Kasavanahalli &
              Silver County Road, Bengaluru. Flexible batches for school schedules.
            </p>
          </div>
        </aside>

        {/* Internal links */}
        <section className={styles.mainMagenta}>
          <h3 className={styles.h3}>Explore programs</h3>
          <ul className={styles.badges}>
            <li><Link to="/public-speaking" className={`${styles.cta} ${styles.ctaMagenta}`}>Public Speaking (VoiceMasters)</Link></li>
            <li><Link to="/robotics-for-children" className={`${styles.cta}`} style={{ background: "linear-gradient(135deg, var(--x-teal), var(--x-blue))" }}>Robotics</Link></li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className={`${styles.mainMagenta} ${styles.faq}`}>
          <h2 className={styles.h2Magenta}>FAQ</h2>
          <details>
            <summary>My child is shy—will this help?</summary>
            <p className={styles.p}>
              Yes. The Course is self paced and there is no pressure to speak until the child is ready. Every Child is free to observe and learn until they feel comfortable to speak.
              Besides, we also offer additional assistence and coaching to shy kids to help them open up and gain confidence.
            </p>
          </details>
          <details>
            <summary>Do you give feedback?</summary>
            <p className={styles.p}>
              Every session includes simple, specific feedback (what went well + what can be improved) so students always know
              how to improve.
            </p>
          </details>
          <details>
            <summary>Do you conduct showcases?</summary>
            <p className={styles.p}>
              Every meeting is recorded and shared with parents. Plus, we have in-person showcases once every year where
              students present to family and friends. [ More on this soon ] 
            </p>
          </details>
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
