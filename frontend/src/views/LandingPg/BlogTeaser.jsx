import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BlogTeaser.module.css";

/**
 * Pass in your latest posts (3–6 items).
 * Each post: { title, slug, date, image, excerpt }
 * `date` should be ISO (YYYY-MM-DD).
 */
export default function BlogTeaser({ posts = [] }) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.slice(0, 6).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://www.xperiolearning.com/blog/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <section
      className={styles.wrap}
      aria-labelledby="home-blog-title"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <Helmet>
        {/* ItemList for the teaser (helps Google understand the list of posts) */}
        <script type="application/ld+json">{JSON.stringify(itemList)}</script>
      </Helmet>

      <div className={styles.container}>
        <header className={styles.header}>
          <h2 id="home-blog-title" className={styles.title}>
            Latest from the Blog
          </h2>
          <p className={styles.subtitle}>
            Practical tips on Public Speaking, Robotics, and hands-on learning.
          </p>
          <a className={styles.viewAll} href="/blog" aria-label="View all blog posts">
            View all posts →
          </a>
        </header>

        <ul className={styles.grid}>
          {posts.slice(0, 6).map((p) => (
            <li key={p.slug} className={styles.card} itemScope itemType="https://schema.org/BlogPosting">
              <a className={styles.thumbLink} href={`/blog/${p.slug}`} itemProp="url">
                <img
                  className={styles.thumb}
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  width={640}
                  height={360}
                />
              </a>
              <div className={styles.body}>
                <time className={styles.date} dateTime={p.date} itemProp="datePublished">
                  {new Date(p.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}
                </time>
                <h3 className={styles.cardTitle} itemProp="headline">
                  <a href={`/blog/${p.slug}`} className={styles.cardLink}>{p.title}</a>
                </h3>
                <p className={styles.excerpt} itemProp="description">
                  {p.excerpt}
                </p>
                <a className={styles.readMore} href={`/blog/${p.slug}`} aria-label={`Read more: ${p.title}`}>
                  Read more
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
