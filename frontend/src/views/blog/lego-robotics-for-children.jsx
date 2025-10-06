// File: src/pages/blog/WhyRoboticsProblemSolving.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./all-blog.module.css"; // shared blog CSS

const READING_MINUTES = 4;
const PUBLISHED = "2025-09-07";
const MODIFIED = "2025-09-07";
const TITLE = "Why LEGO Robotics for Young Learners?";
const SLUG = "lego-robotics-for-children";
const URL = `https://www.xperiolearning.com/blog/${SLUG}`;

export default function LegoRoboticsBlog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${URL}#post`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${URL}#webpage` },
    headline: TITLE,
    description:
      "How robotics classes at Xperio Learning (Haralur Road, HSR, Bellandur, Sarjapur Road, Kasavanahalli, Silver County Road) build problem-solving skills for kids in Grades 1–10 using LEGO, Arduino and advanced projects.",
    image: ["https://www.xperiolearning.com/blog-assets/lego-blog-1280.webp"],
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
        name: "What ages/grades can join robotics at Xperio Learning?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We run programs for Grades 1–10: LEGO Robotics for early grades, Arduino & microcontrollers for middle school, and Advanced Robotics for senior grades."
        }
      },
      {
        "@type": "Question",
        name: "Do you teach Arduino for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. Our Basic Robotics program introduces Arduino and microcontrollers with beginner-friendly lessons on sensors, motors, LEDs and simple programs."
        }
      },
      {
        "@type": "Question",
        name: "Where are you located?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We are near Haralur Road and serve families in HSR Layout, Bellandur, Sarjapur Road, Kasavanahalli and Silver County Road, Bengaluru."
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
          content="Robotics classes at Xperio Learning help kids in Bengaluru build problem-solving skills with LEGO Robotics, Arduino and advanced projects. Locations: Haralur Road, HSR, Bellandur, Sarjapur Road, Kasavanahalli & Silver County Road."
        />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${TITLE} | Xperio Learning`} />
        <meta property="og:description" content="Discover how LEGO, Arduino and advanced robotics build problem-solving skills for Grades 1–10 in Bengaluru." />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content="https://www.xperiolearning.com/blog-assets/lego-blog-1280.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content="Practical robotics pathways for Grades 1–10: LEGO, Arduino & advanced projects at Xperio Learning." />
        <meta name="twitter:image" content="https://www.xperiolearning.com/blog-assets/lego-blog-1280.webp" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.xperiolearning.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.xperiolearning.com/blog" },
              { "@type": "ListItem", position: 3, name: TITLE, item: URL }
            ]
          })}
        </script>
      </Helmet>

      {/* Global Header */}
      <a href="#main" className={styles.skipLink}>Skip to content</a>
      <Nav />
      {/* Teal brand divider for Robotics */}
      <div className={`${styles.divider} ${styles.dividerTeal}`} aria-hidden="true" />

      <article id="main" className={`${styles.container} ${styles.themeTeal}`} itemScope itemType="https://schema.org/BlogPosting">
        {/* Hero */}
        <header className={styles.header} style={{ marginTop: "0.5rem" }}>
          <p className={`${styles.kicker} ${styles.kickerTeal}`}>Robotics • LEGO • Arduino • Coding</p>
          <h1 className={styles.title} itemProp="headline">{TITLE}</h1>
          <p className={styles.subtitle}>
            On Haralur Road, HSR Layout, Bellandur, Sarjapur Road, Kasavanahalli & Silver County Road
          </p>
          <p className={styles.meta}>
            <span aria-label="Reading time">{READING_MINUTES} min read</span> •{" "}
            <time dateTime={PUBLISHED}>Published {PUBLISHED}</time>
          </p>
        </header>

        <figure className={styles.card} style={{ margin: "1rem 0 1.25rem" }}>
          <div className={styles.cardMediaWrap}>
            <picture>
              <source
                type="image/webp"
                srcSet="
                  /blog-assets/lego-blog-1280.webp 640w,
                  /blog-assets/lego-blog-1280.webp 960w,
                  /blog-assets/lego-blog-1280.webp 1280w
                "
                sizes="(max-width: 640px) 100vw, (max-width: 980px) 90vw, 1280px"
              />
              <img
                src="/blog-assets/robotics-problem-solving-hero.jpg"
                alt="Kids learning robotics with LEGO and Arduino at Xperio Learning on Haralur Road, Bengaluru"
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
              <li className={styles.tocItem}><a href="#hands-on">Hands-On Learning</a></li>
              <li className={styles.tocItem}><a href="#lego">LEGO Robotics (Grades 1–4)</a></li>
              <li className={styles.tocItem}><a href="#class-structure">What Happens in Class</a></li>
              <li className={styles.tocItem}><a href="#parents-love">Why Parents Love It</a></li>
              <li className={styles.tocItem}><a href="#first-step">A Fun First Step</a></li>
              <li className={styles.tocItem}><a href="#faq">FAQ</a></li>
              <li className={styles.tocItem}><a href="#cta">Enroll Near You</a></li>
            </ul>
          </div>
        </nav>

        {/* Sections */}
        <section id="hands-on" className={styles.main}>
          <h2 className={styles.h2}>Hands-On Learning Through Robotics</h2>
          <p className={styles.p}>
            At Xperio Learning, we believe big ideas can start small—sometimes with just a handful of LEGO bricks. For children
            in Grades 1–4, LEGO Robotics is more than play. It’s a carefully designed, hands-on experience that blends creativity,
            science and problem-solving. Kids imagine, build, test and iterate—learning to think step-by-step while bringing ideas to life.
          </p>
          <blockquote className={`${styles.quote} ${styles.quoteTeal}`}>
            “Building a LEGO robot is about a lot more than just snapping bricks together; it's about bringing an idea to life, one piece at a time”
          </blockquote>
        </section>

        <section id="lego" className={styles.main}>
          <h2 className={styles.h2}>LEGO Robotics (Grades 1–4)</h2>
          <p className={styles.p}>
            Children at this age are naturally curious—they love to explore, tinker and figure out how things work. LEGO Robotics taps
            into this curiosity with a fun, low-pressure environment where mistakes are easy to fix: snap a brick off, adjust a motor,
            or drag a new coding block into place.
          </p>
          <ul className={styles.badges} aria-label="What they learn with LEGO">
            <li><span className={styles.badge}>Wheels & Axles</span></li>
            <li><span className={styles.badge}>Gears & Pulleys</span></li>
            <li><span className={styles.badge}>Basic Coding (Scratch-style)</span></li>
            <li><span className={styles.badge}>Teamwork & Presentation</span></li>
          </ul>
          <div className={styles.card} style={{ marginTop: "0.75rem" }}>
            <div className={styles.cardBody}>
              <ul className={styles.ul}>
                <li><strong>Basic Science Concepts:</strong> Simple machines come alive as kids build and test their own models.</li>
                <li><strong>Early Coding Skills:</strong> Children give instructions and watch their robots follow commands.</li>
                <li><strong>Critical Thinking:</strong> When something doesn’t work, students troubleshoot and try again—like real engineers.</li>
                <li><strong>Creativity & Imagination:</strong> Beyond instructions, kids design original projects and showcase them.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="class-structure" className={styles.main}>
          <h2 className={styles.h2}>What Happens in Our LEGO Robotics Classes?</h2>
          <p className={styles.p}>Our sessions are structured to maximize both fun and learning:</p>
          <ol className={styles.ol}>
            <li><strong>Hands-On Building:</strong> Children build with LEGO kits provided in class.</li>
            <li><strong>Guided Learning:</strong> Instructors introduce simple science and coding through play and experimentation.</li>
            <li><strong>Team Collaboration:</strong> Kids work in pairs or small groups to develop communication skills.</li>
            <li><strong>Show & Tell:</strong> Students present their creations—boosting confidence and public speaking.</li>
          </ol>
          <p className={styles.p}><em>All LEGO materials are provided for in-class use.</em></p>
        </section>

        <section id="parents-love" className={styles.main}>
          <h2 className={styles.h2}>Why Parents Love It</h2>
          <ul className={styles.badges} aria-label="Benefits">
            <li><span className={styles.badge}>Critical Thinking</span></li>
            <li><span className={styles.badge}>Creativity</span></li>
            <li><span className={styles.badge}>Collaboration</span></li>
            <li><span className={styles.badge}>Resilience</span></li>
          </ul>
          <p className={styles.p}>
            Parents see children become more curious and confident within a few sessions. Students analyze problems, brainstorm alternatives,
            test and refine. Team projects build communication and peer learning; repeated iterations teach that setbacks are steps toward better solutions.
          </p>
        </section>

        <section id="first-step" className={styles.main}>
          <h2 className={styles.h2}>A Fun First Step Into Robotics</h2>
          <p className={styles.p}>
            For Grades 1–4, this program nurtures problem-solvers, critical thinkers and confident creators. With every robot built and every
            code block tested, children take their first steps into the exciting world of STEM—right here at Xperio Learning.
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
            <li><Link to="/robotics-for-children" className={`${styles.cta} ${styles.ctaTeal}`}>Robotics Classes</Link></li>
            <li><Link to="/public-speaking-for-children" className={`${styles.cta} ${styles.ctaMagenta}`}>Public Speaking</Link></li>
            <li><Link to="/finance-for-kids" className={`${styles.cta} ${styles.ctaBlue}`}>Finance for Kids</Link></li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className={`${styles.main} ${styles.faq}`}>
          <h2 className={styles.h2}>FAQ</h2>
          <details>
            <summary>What ages/grades can join?</summary>
            <p className={styles.p}>Grades 1–10, with pathways from LEGO to Arduino and Advanced Robotics.</p>
          </details>
          <details>
            <summary>Do beginners need prior coding experience?</summary>
            <p className={styles.p}>No prior experience needed. Our curriculum starts simple and grows with each child.</p>
          </details>
          <details>
            <summary>Where are classes held?</summary>
            <p className={styles.p}>On Haralur Road, Opposite Fisherman&apos;s Wharf.</p>
          </details>
        </section>

        {/* CTA */}
        <section id="cta" className={styles.main}>
          <div className={styles.cardBody}>
            <p className={styles.lead}>Ready to see your child build, code and solve? Book a free trial today.</p>
            <p>
              <Link to="https://wa.me/918904749795" target="_blank" className={`${styles.cta} ${styles.ctaTeal}`}>Book a Free Trial</Link>
            </p>
          </div>

          <div className={styles.cardBody}>
            <p>
              <Link to="/blog" className={`${styles.cta} ${styles.ctaTeal}`}>← Back to Blog</Link>
            </p>
          </div>
        </section>
      </article>

      {/* Global Footer */}
      {/* <Footer /> */}
    </>
  );
}
