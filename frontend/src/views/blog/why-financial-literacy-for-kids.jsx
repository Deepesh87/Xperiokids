// File: src/pages/blog/WhyFinancialLiteracyForKids.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./all-blog.module.css"; // shared blog CSS

const READING_MINUTES = 5;
const PUBLISHED = "2025-10-05";
const MODIFIED = "2025-10-05";
const TITLE = "Why Financial Literacy for Kids Matters More Than Ever";
const SLUG = "why-financial-literacy-for-kids";
const URL = `https://www.xperiolearning.com/blog/${SLUG}`;

export default function WhyFinancialLiteracyForKids() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${URL}#post`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${URL}#webpage` },
    headline: TITLE,
    description:
      "Why financial literacy matters for kids in India — and how Xperio Learning’s Finance for Kids program helps children learn money management, budgeting, and investing through hands-on activities, stock simulations, and games.",
    image: ["https://www.xperiolearning.com/blog-assets/finance-blog.webp"],
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
        name: "Why should kids learn about money early?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Money habits form early. Teaching finance in childhood builds responsibility, decision-making skills, and long-term awareness of saving and investing."
        }
      },
      {
        "@type": "Question",
        name: "Is this course suitable for Indian students?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Xperio Learning’s Finance for Kids course is designed specifically for the Indian context, with examples and case studies relevant to children here."
        }
      },
      {
        "@type": "Question",
        name: "What topics do children explore?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Budgeting, saving, investing, stock market basics, needs vs wants, family expenses, and responsible spending — all through interactive games and simulations."
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
          content="Financial literacy for kids builds lifelong money skills. Learn why early financial education matters and how Xperio Learning teaches investing, budgeting, and money management in Bengaluru."
        />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${TITLE} | Xperio Learning`} />
        <meta
          property="og:description"
          content="Empower your child with financial skills early — saving, investing, and money management made fun at Xperio Learning."
        />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://www.xperiolearning.com/blog-assets/finance-blog.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta
          name="twitter:description"
          content="Kids learn to save, invest, and budget through games, simulations, and projects in Xperio Learning’s Finance for Kids course."
        />
        <meta name="twitter:image" content="https://www.xperiolearning.com/blog-assets/finance-blog.webp" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      {/* Breadcrumbs for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.xperiolearning.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://www.xperiolearning.com/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": TITLE,
              "item": URL
            }
          ]
        })}
      </script>

      <a href="#main" className={styles.skipLink}>Skip to content</a>
      <Nav />
      <div className={`${styles.divider} ${styles.dividerBlue}`} aria-hidden="true" />

      <article id="main" className={`${styles.container} ${styles.themeGold}`} itemScope itemType="https://schema.org/BlogPosting">
        {/* Header */}
        <header className={styles.header} style={{ marginTop: "0.5rem" }}>
          <p className={`${styles.kicker} ${styles.kickerBlue}`}>Money • Mindset • Investing</p>
          <h1 className={styles.title} itemProp="headline">{TITLE}</h1>
          <p className={styles.subtitle}>
            Teaching children smart money habits early on builds confidence, independence, and life-ready skills.
          </p>
        </header>

        {/* Hero Image */}
        <figure className={styles.card} style={{ margin: "1rem 0 1.25rem" }}>
          <div className={styles.cardMediaWrap}>
            <picture>
              <source
                type="image/webp"
                srcSet="
                  /blog-assets/finance-blog.webp 640w,
                  /blog-assets/finance-blog.webp 960w,
                  /blog-assets/finance-blog.webp 1280w
                "
                sizes="(max-width: 640px) 100vw, (max-width: 980px) 90vw, 1280px"
              />
              <img
                src="/blog-assets/finance-for-kids-hero.jpg"
                alt="Children learning money management at Xperio Learning Finance for Kids course in Bengaluru"
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
              <li><a href="#why-early">Why Teach Finance Early</a></li>
              <li><a href="#real-world">Real-World Learning</a></li>
              <li><a href="#indian-context">Tailored for Indian Families</a></li>
              <li><a href="#hands-on">Hands-On Games & Case Studies</a></li>
              <li><a href="#next-steps">Next Steps After the Course</a></li>
              <li><a href="#cta">Enroll Your Child</a></li>
            </ul>
          </div>
        </nav>

        {/* Sections */}
        <section id="why-early" className={styles.mainBlue}>
          <h2 className={styles.h2}>Why Teach Finance Early?</h2>
          <p className={styles.p}>
            Childhood is the best time to form habits — and money habits are no different. Teaching financial literacy early
            helps children understand the value of effort, saving, and smart choices. By learning about money management in
            their formative years, kids develop confidence, discipline, and decision-making skills that stay for life.
          </p>
          <blockquote className={`${styles.quote} ${styles.quoteBlue}`}>
            “It’s not how much you earn, but how you think about money that defines your financial future.”
          </blockquote>
        </section>

        <section id="real-world" className={styles.mainBlue}>
          <h2 className={styles.h2}>Real-World Learning Through Practice</h2>
          <p className={styles.p}>
            Our <Link to="/finance-for-kids" className={styles.inlineLink}>Finance for Kids</Link> course goes beyond theory.
            Students learn the stock market by using a safe, dummy trading account — buying and selling virtual stocks to
            experience the thrill and responsibility of investing. They explore budgeting, saving, and how small choices can
            shape future wealth. These real-world simulations make finance fun and relatable.
          </p>
        </section>

        <section id="indian-context" className={styles.mainBlue}>
          <h2 className={styles.h2}>Tailored for Indian Families</h2>
          <p className={styles.p}>
            Our course creators have read dozens of books on financial education for children and distilled the most useful
            lessons for the Indian context. The curriculum reflects real-life scenarios families face in India — from
            understanding pocket money and digital wallets to comparing school fees and family expenses. The goal is to make
            money concepts relevant and meaningful for today’s young learners.
          </p>
        </section>

        <section id="hands-on" className={styles.mainBlue}>
          <h2 className={styles.h2}>Hands-On Games & Case Studies</h2>
          <p className={styles.p}>
            Finance is best learned by doing. That’s why our course is designed around activities, games, and role-plays rather
            than long lectures. Children simulate shopping decisions, manage a mini budget, and participate in family budget
            challenges. These case studies and games encourage them to think critically, distinguish between needs and wants,
            and apply lessons in everyday life.
          </p>
        </section>

        <section id="next-steps" className={styles.mainBlue}>
          <h2 className={styles.h2}>Next Steps After the Course</h2>
          <p className={styles.p}>
            After completing the course, parents can start giving children small pocket money or help them open savings and
            Demat accounts under supervision. This helps children apply their learning in real-world settings — managing
            savings, tracking expenses, and even following their favorite companies in the stock market.
          </p>
          <p className={styles.p}>
            These experiences strengthen both confidence and curiosity — qualities that make for financially wise adults in
            the future.
          </p>
        </section>

        {/* Local SEO */}
        <aside className={styles.card}>
          <div className={styles.cardBody}>
            <p className={styles.p}>
              <strong>Serving nearby:</strong> Haralur Road, HSR Layout, Bellandur, Sarjapur Road, Kasavanahalli &
              Silver County Road, Bengaluru. Weekend batches for Grades 5–10.
            </p>
          </div>
        </aside>

        {/* Internal links */}
        <section className={styles.mainBlue}>
          <h3 className={styles.h3}>Explore programs</h3>
          <ul className={styles.badges}>
            <li><Link to="/finance-for-kids" className={`${styles.cta} ${styles.ctaBlue}`}>Finance for Kids</Link></li>
            <li><Link to="/robotics-for-children" className={`${styles.cta} ${styles.ctaTeal}`}>Robotics</Link></li>
            <li><Link to="/public-speaking-for-children" className={`${styles.cta} ${styles.ctaMagenta}`}>Public Speaking</Link></li>
          </ul>
        </section>

                {/* FAQ */}
                <section id="faq" className={`${styles.mainBlue} ${styles.faq}`}>
                  <h2 className={styles.h2Blue}>FAQ</h2>
                  <details>
                    <summary>What grade is this for?</summary>
                    <p className={styles.p}>
                      We recommend the course for Grade 5 and above. Younger children may find some concepts abstract.
                    </p>
                  </details>
                  <details>
                    <summary>How Long is the course?</summary>
                    <p className={styles.p}>
                      The course runs for 10-12 hours, with one 90-minute session each week.
                    </p>
                  </details>
                  <details>
                    <summary>Do you provide Reading Material?</summary>
                    <p className={styles.p}>
                      Yes, we provide reading material and resources to explore topics further at home.
                    </p>
                  </details>
                </section>

        {/* CTA */}
        <section id="cta" className={styles.mainBlue}>
          <div className={styles.cardBody}>
            <p className={styles.lead}>Ready to help your child be money wise? Book your seat today.</p>
            <p>
              <Link
                to="https://wa.me/918904749795"
                target="_blank"
                className={`${styles.cta} ${styles.ctaBlue}`}
              >
                Know More
              </Link>
            </p>
          </div>

          <div className={styles.cardBody}>
            <p>
              <Link to="/blog" className={`${styles.cta} ${styles.ctaBlue}`}>← Back to Blog</Link>
            </p>
          </div>
        </section>


      </article>

      <Footer />
    </>
  );
}
