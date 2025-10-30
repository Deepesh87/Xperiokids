import React from "react";
import { Helmet } from "react-helmet";
import styles from "./BlogTeaser.module.css"; // reuse same CSS module

export default function DataScienceTeaser() {
  const canonical = "https://www.xperiolearning.com/data-science";

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: canonical,
        name: "Data Science at Xperio Learning – Xperio Pro",
      },
    ],
  };

  return (
    <section
      className={styles.wrap}
      aria-labelledby="home-ds-title"
      itemScope
      itemType="https://schema.org/CollectionPage"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(itemList)}</script>
      </Helmet>

      <div className={styles.container}>
        <header className={styles.header}>
<h2 id="home-ds-title" className={styles.proTitle}>
  Introducing Xperio Pro
</h2>

          <p className={styles.subtitle}>
            Hands-on <strong>Data Science & AI programs</strong> for Working Professionals, Recent College
            Graduates or anyone willing to upskill. Learn Python, SQL, Power BI/ Tableau and Machine Learning
            the experiential way.
          </p>
          <a
            className={styles.viewAll}
            href="/data-science"
            aria-label="Explore Data Science at Xperio Learning"
          >
            Explore →
          </a>
        </header>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>
                Foundations of Data Science
              </h3>
              <p className={styles.excerpt}>
                Build a strong base in Python, statistics, and SQL—through
                weekend, project-based learning.
              </p>
              <a
                className={styles.readMore}
                href="/data-science"
                aria-label="Learn more about Data Science programs"
              >
                Learn more
              </a>
            </div>
          </li>

          <li className={styles.card}>
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>
                Machine Learning Bootcamp
              </h3>
              <p className={styles.excerpt}>
                Move from data wrangling to model building with real-world case
                studies and mentor feedback.
              </p>
              <a
                className={styles.readMore}
                href="/data-science"
                aria-label="Learn more about Machine Learning Bootcamp"
              >
                Learn more
              </a>
            </div>
          </li>

          <li className={styles.card}>
            <div className={styles.body}>
              <h3 className={styles.cardTitle}>
                Visualization & Analytics
              </h3>
              <p className={styles.excerpt}>
                Create dashboards in Tableau & Power BI to turn data into
                insights that tell a story.
              </p>
              <a
                className={styles.readMore}
                href="/data-science"
                aria-label="Learn more about Visualization and Analytics"
              >
                Learn more
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
