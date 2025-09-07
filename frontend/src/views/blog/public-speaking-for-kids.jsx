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
              <li className={styles.tocItem}><a href="#why-speaking">Why Public Speaking Matters</a></li>
              <li className={styles.tocItem}><a href="#how-we-teach">How We Teach (Simple & Supportive)</a></li>
              <li className={styles.tocItem}><a href="#pathway">Age-Wise Learning Pathway</a></li>
              <li className={styles.tocItem}><a href="#real-world">Real-World Practice & Showcases</a></li>
              <li className={styles.tocItem}><a href="#faq">FAQ</a></li>
              <li className={styles.tocItem}><a href="#cta">Enroll Near You</a></li>
            </ul>
          </div>
        </nav>

        {/* Sections */}
        <section id="why-speaking" className={styles.main}>
          <h2 className={styles.h2}>Why Public Speaking Matters</h2>
          <p className={styles.p}>
            Clear speaking helps children do better in school presentations, interviews, and everyday conversations.
            Confidence grows when kids learn how to control their voice, manage their nerves, and organize ideas into
            simple structures that any audience can follow.
          </p>
          <blockquote className={styles.quote} style={{ borderLeftColor: "var(--x-magenta)", background: "#fff5f8", color: "#7a1238" }}>
            “Confidence is a skill—build it with small wins, often.”
          </blockquote>
        </section>

        <section id="how-we-teach" className={styles.main}>
          <h2 className={styles.h2}>How We Teach (Simple & Supportive)</h2>
          <p className={styles.p}>
            We keep practice short, frequent, and fun. Students speak in low-pressure settings first (pairs and small
            groups), then move to larger audiences as their comfort rises. Each activity targets one focus at a time:
            <em> voice clarity</em>, <em>structure</em>, <em>body language</em>, or <em>persuasion</em>.
          </p>
          <ul className={styles.badges} aria-label="Skill focus">
            <li><span className={styles.badge}>Voice & Pace</span></li>
            <li><span className={styles.badge}>Story Structure</span></li>
            <li><span className={styles.badge}>Body Language</span></li>
            <li><span className={styles.badge}>Persuasion</span></li>
          </ul>
        </section>

        <section id="pathway" className={styles.main}>
          <h2 className={styles.h2}>Age-Wise Learning Pathway</h2>
          <p className={styles.p}>
            <strong>Grades 1–4:</strong> games for clarity, expression, and posture; mini-talks of 30–60 seconds.<br />
            <strong>Grades 5–7:</strong> storytelling arcs, debate basics, visual aids; 1–2 minute speeches.<br />
            <strong>Grades 8–10:</strong> persuasive speaking, extempore, interviews, and panel formats; 2–4 minute talks.
          </p>
        </section>

        <section id="real-world" className={styles.main}>
          <h2 className={styles.h2}>Real-World Practice & Showcases</h2>
          <p className={styles.p}>
            Kids apply skills in class showcases, school events, and recorded presentations. They learn preparation habits:
            planning points, practicing aloud, and using simple notes to stay on track. Feedback is concrete and positive,
            so every child knows exactly what to try next.
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
        <section className={styles.main}>
          <h3 className={styles.h3}>Explore programs</h3>
          <ul className={styles.badges}>
            <li><Link to="/public-speaking" className={`${styles.cta} ${styles.ctaMagenta}`}>Public Speaking (VoiceMasters)</Link></li>
            <li><Link to="/robotics" className={`${styles.cta}`} style={{ background: "linear-gradient(135deg, var(--x-teal), var(--x-blue))" }}>Robotics</Link></li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className={`${styles.main} ${styles.faq}`}>
          <h2 className={styles.h2}>FAQ</h2>
          <details>
            <summary>My child is shy—will this help?</summary>
            <p className={styles.p}>
              Yes. We begin with friendly pair activities and predictable formats, then gradually add audience size and
              time. Small wins add up to real confidence.
            </p>
          </details>
          <details>
            <summary>Do you give feedback?</summary>
            <p className={styles.p}>
              Every session includes simple, specific feedback (what went well + one next step) so students always know
              how to improve.
            </p>
          </details>
          <details>
            <summary>Do you conduct showcases?</summary>
            <p className={styles.p}>
              Yes—short class showcases and occasional parent sessions give kids authentic practice without pressure.
            </p>
          </details>
        </section>

        {/* CTA */}
        <section id="cta" className={styles.main}>
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
