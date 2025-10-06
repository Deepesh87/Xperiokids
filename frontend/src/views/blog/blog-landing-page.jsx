// File: src/pages/Blog.jsx
import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./blog-landing-page.module.css";
import hero1 from "../../assets/robotics-problem-solving-hero.webp";
import hero2 from "../../assets/public-speaking-confidence.webp";
import hero3 from "../../assets/lego-robotics-beginners.webp";
import hero4 from "../../assets/financial-literacy-kids.webp";

const ALL_POSTS = [
  {
    slug: "what-is-robotics-for-kids",
    title: "Why Robotics Classes Help Kids Build Problem-Solving Skills",
    description:
      "Discover how LEGO, Arduino, and advanced robotics build creativity and problem-solving for Grades 1–10 in Bengaluru.",
    image: hero1,
    datePublished: "2025-09-07",
    dateModified: "2025-09-07",
    tags: ["Robotics", "Problem Solving", "STEM"],
    readingMinutes: 4
  },
  {
    slug: "public-speaking-for-kids",
    title: "Public Speaking: A Simple Path to Confidence for Kids",
    description:
      "Practical activities and tips from VoiceMasters to help children speak clearly and confidently.",
    image: hero2,
    datePublished: "2025-08-24",
    dateModified: "2025-08-29",
    tags: ["Public Speaking", "Confidence"],
    readingMinutes: 5
  },
  {
    slug: "lego-robotics-for-children",
    title: "LEGO Robotics: The Perfect Start for Young Makers",
    description:
      "Why Grades 1–4 love LEGO Robotics and how it builds early engineering habits.",
    image: hero3,
    datePublished: "2025-09-10",
    dateModified: "2025-09-20",
    tags: ["Robotics", "LEGO", "Problem Solving"],
    readingMinutes: 3
  },
  {
    slug: "why-financial-literacy-for-kids",
    title: "Financial Literacy for Kids: Why It Matters",
    description:
      "Teaching kids about money management, saving, and investing from an early age.",
    image: hero4,
    datePublished: "2025-08-05",
    dateModified: "2025-09-15",
    tags: ["Financial Literacy", "Money Management"],
    readingMinutes: 6
  }
];

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

// ✅ Tag → color class helper
function tagClass(tag) {
  const t = tag.toLowerCase();
  if (["robotics", "lego", "problem solving", "stem"].includes(t)) return "badgeTeal";
  if (["public speaking", "confidence"].includes(t)) return "badgeMagenta";
  if (["financial literacy", "money management", "finance", "money"].includes(t)) return "badgeBlue";
  if (["science"].includes(t)) return "badgeOrange";
  return ""; // neutral for everything else
}

export default function Blog() {
  const query = useQuery();
  const initialQ = query.get("q") || "";
  const initialTag = query.get("tag") || "";

  const [q, setQ] = useState(initialQ);
  const [tag, setTag] = useState(initialTag);

  const filtered = ALL_POSTS.filter((p) => {
    const qOk = q
      ? (p.title + " " + p.description + " " + p.tags.join(" "))
          .toLowerCase()
          .includes(q.toLowerCase())
      : true;
    const tagOk = tag ? p.tags.includes(tag) : true;
    return qOk && tagOk;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.xperiolearning.com/blog/#webpage",
        url: "https://www.xperiolearning.com/blog/",
        name: "Xperio Learning Blog",
        description:
          "Articles on Robotics, Public Speaking, Science and Financial Literacy for kids in Bengaluru.",
        isPartOf: { "@id": "https://www.xperiolearning.com/#website" }
      },
      {
        "@type": "Blog",
        "@id": "https://www.xperiolearning.com/blog/#blog",
        name: "Xperio Learning Blog",
        url: "https://www.xperiolearning.com/blog/",
        publisher: { "@id": "https://www.xperiolearning.com/#org" },
        inLanguage: "en"
      },
      {
        "@type": "ItemList",
        "@id": "https://www.xperiolearning.com/blog/#itemlist",
        itemListOrder: "https://schema.org/ItemListOrderDescending",
        numberOfItems: filtered.length,
        itemListElement: filtered.map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `https://www.xperiolearning.com/blog/${p.slug}`
        }))
      }
    ]
  };

  const uniqueTags = Array.from(new Set(ALL_POSTS.flatMap((p) => p.tags)));

  return (
    <>
      <Helmet>
        <title>
          Blog | Robotics & Public Speaking for Kids in Bengaluru | Xperio Learning
        </title>
        <meta
          name="description"
          content="Explore Xperio Learning's blog: Robotics (LEGO, Arduino, Advanced), Public Speaking, Science and Financial Literacy for Grades 1–10 in Haralur, HSR, Bellandur, Sarjapur Road, Kasavanahalli & Silver County Road."
        />
        <link rel="canonical" href="https://www.xperiolearning.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Xperio Learning Blog" />
        <meta
          property="og:description"
          content="Robotics, Public Speaking, Science & Finance articles for Grades 1–10 in Bengaluru."
        />
        <meta property="og:url" content="https://www.xperiolearning.com/blog" />
        <meta property="og:image" content="https://www.xperiolearning.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Xperio Learning Blog" />
        <meta
          name="twitter:description"
          content="Fresh ideas and guides on kids' Robotics and Public Speaking in Bengaluru."
        />
        <meta name="twitter:image" content="https://www.xperiolearning.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Nav />
      <div className={styles.brandDivider} aria-hidden="true" />

      <header className={styles.header}>
        <div className={styles.container}>
          <p className={styles.kicker}>Xperio Learning Blog</p>
          <h1 className={styles.title}>STEM & Communication for Kids</h1>
          <p className={styles.subtitle}>
            Robotics • LEGO • Arduino • Science • Public Speaking • Financial Literacy
          </p>
        </div>
      </header>

      <main id="main" className={styles.main}>
        <div className={styles.container}>
          <section className={styles.controls} aria-label="Blog filters">
            <div className={styles.tags}>
              <button
                type="button"
                className={`${styles.tag} ${!tag ? styles.tagActive : ""}`}
                onClick={() => setTag("")}
                aria-pressed={!tag}
              >
                All
              </button>
              {uniqueTags.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`${styles.tag} ${tag === t ? styles.tagActive : ""}`}
                  onClick={() => setTag(t)}
                  aria-pressed={tag === t}
                >
                  {t}
                </button>
              ))}
            </div>

            <form
              className={styles.searchForm}
              onSubmit={(e) => e.preventDefault()}
              role="search"
            >
              <label htmlFor="blog-search" className="sr-only">Search blog</label>
              <input
                id="blog-search"
                type="search"
                placeholder="Search articles… (e.g., Arduino, confidence)"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className={styles.searchInput}
                autoComplete="off"
                inputMode="search"
              />
            </form>
          </section>

          <section className={styles.grid} aria-live="polite">
            {filtered.map((post) => (
              <article key={post.slug} className={styles.card} itemScope itemType="https://schema.org/BlogPosting">
                <Link to={`/blog/${post.slug}`} className={styles.cardMediaWrap} aria-label={`${post.title} – Read article`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className={styles.cardImg}
                    width="640"
                    height="360"
                  />
                </Link>
                <div className={styles.cardBody}>
                  <div className={styles.metaRow}>
                    <time dateTime={post.datePublished} className={styles.meta} itemProp="datePublished">
                      {new Date(post.datePublished).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                    </time>
                    <span className={styles.dot} aria-hidden>•</span>
                    <span className={styles.meta}>{post.readingMinutes} min read</span>
                  </div>

                  <h2 className={styles.cardTitle} itemProp="headline">
                    <Link to={`/blog/${post.slug}`} className={styles.cardTitleLink}>{post.title}</Link>
                  </h2>
                  <p className={styles.cardDesc} itemProp="description">{post.description}</p>

                  {/* Tag chips with brand-color mapping */}
                  <ul className={styles.badges} aria-label="Tags">
                    {post.tags.map((t) => (
                      <li key={t}>
                        <span className={`${styles.badge} ${styles[tagClass(t)] || ""}`}>{t}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Read article — always black now */}
                  <div className={styles.cardCtaWrap}>
                    <Link to={`/blog/${post.slug}`} className={styles.cardCta}>
                      Read article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {filtered.length === 0 && (
            <p className={styles.empty}>No articles found. Try a different search or clear filters.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
