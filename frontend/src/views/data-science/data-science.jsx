import React from "react";
import { Helmet } from "react-helmet";
import styles from "./data-science.module.css";


export default function DataScience({ insights = [] }) {
  const canonical = "https://www.xperiolearning.com/data-science";

  // JSON-LD: WebPage + Breadcrumb
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Data Science at Xperio Learning – Xperio Learning",
    url: canonical,
    description:
      "Career-ready Data Science, AI & Analytics programs by Xperio Learning. Hands-on Python, SQL, ML, and Visualization in Bengaluru.",
    inLanguage: "en-IN",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.xperiolearning.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Data Science",
        item: canonical,
      },
    ],
  };

  // Featured programs (feel free to wire to real pages later)
  const programs = [
    {
      title: "Data Science Foundations (Python + SQL)",
      slug: "foundations-python-sql",
      duration: "6 weeks · Weekend",
      level: "Beginner–Intermediate",
      bullets: ["Python basics to pandas", "SQL queries & analytics", "Mini capstone"],
    },
    {
      title: "Machine Learning Bootcamp",
      slug: "machine-learning-bootcamp",
      duration: "6 weeks · Weekend",
      level: "Intermediate",
      bullets: ["Supervised & unsupervised", "Model eval & tuning", "Real datasets"],
    },
    {
      title: "Visualization with Tableau & Power BI",
      slug: "viz-tableau-powerbi",
      duration: "4 weeks · Weekend",
      level: "All levels",
      bullets: ["Dashboards that tell stories", "Best practices", "Portfolio projects"],
    },
  ];

  // JSON-LD: ItemList for programs
  const programListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: programs.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${canonical}/courses/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Data Science at Xperio Learning – Python, SQL, ML</title>
        <meta
          name="description"
          content="Hands-on Data Science programs: Python, SQL, Machine Learning, and Visualization. Weekend/Weekday cohorts in Bengaluru. Join the waitlist."
        />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(webPageLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
        <script type="application/ld+json">{JSON.stringify(programListLd)}</script>
      </Helmet>

      <main className={styles.wrap}>
        {/* ===== HERO ===== */}
        <section className={styles.hero} aria-labelledby="ds-hero-title">
          <div className={styles.heroInner}>
            <p className={styles.ribbon}>Xperio Pro</p>
            <h1 id="ds-hero-title" className={styles.title}>
              Data Science, AI & Analytics
            </h1>
            <p className={styles.subtitle}>
              Career-ready, hands-on programs for Working Professionals, Recent College Graduates or anyone willing to upskill.
            </p>
            <div className={styles.ctaRow}>
              <a className={styles.ctaPrimary} href="/data-science/apply">
                Download brochure
              </a>
              <a className={styles.ctaSecondary} href="#programs">
                View programs
              </a>
            </div>
            <ul className={styles.badges} aria-label="Key highlights">
              <li>Weekend cohorts</li>
              <li>Project-based</li>
              <li>Flexible Timings</li>
              <li>Mentor feedback</li>
            </ul>
          </div>
        </section>

        {/* ===== TRUST/USPs ===== */}
        <section className={styles.usp} aria-labelledby="usp-title">
            <h2 id="usp-title" className={styles.sectionTitle}>
              Built for outcomes
            </h2>
            <div className={styles.uspGrid}>
              <article className={styles.uspCard}>
                <h3>Practical & Industry-aligned</h3>
                <p>Real datasets, real metrics, and production-style workflows—not toy demos.</p>
              </article>
              <article className={styles.uspCard}>
                <h3>Mentor-led Reviews</h3>
                <p>Structured feedback on assignments and capstones so you actually level up.</p>
              </article>
              <article className={styles.uspCard}>
                <h3>Portfolio-ready Projects</h3>
                <p>Ship dashboards, notebooks, and write-ups that recruiters can evaluate quickly.</p>
              </article>
              <article className={styles.uspCard}>
                <h3>Career Support</h3>
                <p>Interview prep prompts, GitHub hygiene, and storytelling for your resume/LinkedIn.</p>
              </article>
            </div>
        </section>

        {/* ===== PROGRAMS ===== */}
        <section id="programs" className={styles.programs} aria-labelledby="programs-title">
          <header className={styles.sectionHeader}>
            <h2 id="programs-title" className={styles.sectionTitle}>Programs</h2>
            <a className={styles.viewAll} href="/data-science/courses">View all →</a>
          </header>

          <ul className={styles.cardGrid}>
            {programs.map((p) => (
              <li key={p.slug} className={styles.card} itemScope itemType="https://schema.org/Course">
                <meta itemProp="provider" content="Xperio Learning" />
                <a className={styles.cardLink} href={`/data-science/courses/${p.slug}`} itemProp="url">
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle} itemProp="name">{p.title}</h3>
                    <p className={styles.meta}>
                      <span className={styles.tag}>{p.duration}</span>
                      <span className={styles.dot}>•</span>
                      <span className={styles.tag}>{p.level}</span>
                    </p>
                    <ul className={styles.bullets}>
                      {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== INSIGHTS / ARTICLES (optional feed) ===== */}
        {/* <section className={styles.insights} aria-labelledby="insights-title">
          <header className={styles.sectionHeader}>
            <h2 id="insights-title" className={styles.sectionTitle}>Insights & Tutorials</h2>
            <a className={styles.viewAll} href="/blog?topic=data-science">View all posts →</a>
          </header>

          {insights.length === 0 ? (
            <p className={styles.emptyNote}>
              We’re curating our first set of bite-sized guides on Python, SQL, ML and Visualization. Stay tuned!
            </p>
          ) : (
            <ul className={styles.postGrid}>
              {insights.slice(0, 6).map((p) => (
                <li key={p.slug} className={styles.post} itemScope itemType="https://schema.org/BlogPosting">
                  <a className={styles.postThumbLink} href={`/blog/${p.slug}`} itemProp="url">
                    <img
                      className={styles.postThumb}
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={360}
                    />
                  </a>
                  <div className={styles.postBody}>
                    <time className={styles.postDate} dateTime={p.date} itemProp="datePublished">
                      {new Date(p.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <h3 className={styles.postTitle} itemProp="headline">
                      <a href={`/blog/${p.slug}`} className={styles.postLink}>{p.title}</a>
                    </h3>
                    <p className={styles.postExcerpt} itemProp="description">{p.excerpt}</p>
                    <a className={styles.readMore} href={`/blog/${p.slug}`} aria-label={`Read more: ${p.title}`}>
                      Read more
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section> */}

        {/* ===== CTA ===== */}
        <section className={styles.cta} aria-labelledby="cta-title">
          <div className={styles.ctaBox}>
            <h2 id="cta-title">Be an early cohort member</h2>
            <p>Get priority access, early-bird pricing, and a mentor intro call.</p>
            <a className={styles.ctaPrimary} href="/data-science/apply">Contact Us</a>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className={styles.faq} aria-labelledby="faq-title">
          <h2 id="faq-title" className={styles.sectionTitle}>FAQs</h2>
          <details className={styles.faqItem}>
            <summary>Who are these programs for?</summary>
            <p>College students, recent grads, and working professionals looking to add practical DS/ML skills.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Are classes online or in-person?</summary>
            <p>Weekend cohorts with flexible options. We’ll confirm mode with each batch.</p>
          </details>
          <details className={styles.faqItem}>
            <summary>Is there a trial session?</summary>
            <p>Yes— contact us and we’ll invite you to a free intro workshop.</p>
          </details>
        </section>
      </main>
    </>
  );
}
