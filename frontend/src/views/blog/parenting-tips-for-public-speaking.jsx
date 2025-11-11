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
              <li className={styles.tocItemMagenta}><a href="#why-speaking">Why Public Speaking Matters</a></li>
              <li className={styles.tocItemMagenta}><a href="#how-parents">How Parents Can Support</a></li>
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


<section id="how-parents" className={styles.mainMagenta}>
<h2 className={styles.h2Magenta}>How Parents Can Support Their Child’s Journey</h2>
<p className={styles.p}>
Parents play a vital role in building confidence and consistency. Here’s how you can support your child:
</p>
<ul className={styles.list}>
<li>✅ <strong>Understand the Meeting Flow:</strong> Learn how meetings run so you can guide your child with clarity.</li>
<li>✅ <strong>Check the WhatsApp Group:</strong> As soon as roles are announced, inform your child early to help them prepare calmly.</li>
<li>✅ <strong>Help Personalize Their Speech:</strong> Encourage original thoughts and examples instead of copying from the internet.</li>
<li>✅ <strong>Use the AI Evaluator Tool:</strong> It scores personalization—aim for a score above 6!</li>
<li>✅ <strong>Watch Their Recordings:</strong> Celebrate their progress and gently discuss improvements.</li>
<li>✅ <strong>Normalize Off Days:</strong> Everyone has a bad day—it’s part of learning. Keep encouraging!</li>
<li>✅ <strong>Share Feedback with Us:</strong> If you see something we can improve, let us know. We’re listening.</li>
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
