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
const TITLE = "Why Robotics Classes Help Kids Build Problem-Solving Skills";
const SLUG = "what-is-robotics-for-kids";
const URL = `https://www.xperiolearning.com/blog/${SLUG}`;

export default function WhyRoboticsProblemSolving() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${URL}#post`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${URL}#webpage` },
    headline: TITLE,
    description:
      "How robotics classes at Xperio Learning (Haralur Road, HSR, Bellandur, Sarjapur Road, Kasavanahalli, Silver County Road) build problem-solving skills for kids in Grades 1–10 using LEGO, Arduino and advanced projects.",
    image: ["https://www.xperiolearning.com/blog-assets/robotics-problem-solving-hero-1280.webp"],
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
        <meta property="og:image" content="https://www.xperiolearning.com/blog-assets/robotics-problem-solving-hero-1280.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content="Practical robotics pathways for Grades 1–10: LEGO, Arduino & advanced projects at Xperio Learning." />
        <meta name="twitter:image" content="https://www.xperiolearning.com/blog-assets/robotics-problem-solving-hero-1280.webp" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>


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
      "name": "Why Robotics Classes Help Kids Build Problem-Solving Skills",
      "item": "https://www.xperiolearning.com/blog/what-is-robotics-for-kids"
    }
  ]
})}
</script>


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
        </header>

        <figure className={styles.card} style={{ margin: "1rem 0 1.25rem" }}>
          <div className={styles.cardMediaWrap}>
            <picture>
              <source
                type="image/webp"
                srcSet="
                  /blog-assets/robotics-problem-solving-hero-640.webp 640w,
                  /blog-assets/robotics-problem-solving-hero-960.webp 960w,
                  /blog-assets/robotics-problem-solving-hero-1280.webp 1280w
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
              <li className={styles.tocItem}><a href="#lego">LEGO Robotics</a></li>
              <li className={styles.tocItem}><a href="#arduino">Arduino & Microcontrollers</a></li>
              <li className={styles.tocItem}><a href="#advanced">Advanced Robotics</a></li>
              <li className={styles.tocItem}><a href="#why-it-works">Why It Builds Problem-Solving</a></li>
              <li className={styles.tocItem}><a href="#faq">FAQ</a></li>
              <li className={styles.tocItem}><a href="#cta">Enroll Near You</a></li>
            </ul>
          </div>
        </nav>

        {/* Sections */}
        <section id="hands-on" className={styles.main}>
          <h2 className={styles.h2}>Hands-On Learning Through Robotics</h2>
          <p className={styles.p}>
            Robotics is one of the most powerful ways for children to turn imagination into reality. Robotics turns abstract ideas into concrete actions. Children wire circuits, write simple programs, and test
            prototypes—then iterate. This cycle of <em>try → observe → improve</em> nurtures creativity, logical reasoning,
            and resilience—all core ingredients of problem-solving. It also teaches them to pay attention to detail, follow
            instructions, and think sequentially. Children learn how an idea can travel from their mind onto a breadboard or 
            into a LEGO robot — and then watch it move, blink, or react.
          </p>
          <blockquote className={`${styles.quote} ${styles.quoteTeal}`}>
            “Every bug is a clue. Every iteration is progress.”
          </blockquote>
        </section>

        <section id="lego" className={styles.main}>
          <h2 className={styles.h2}>LEGO Robotics (Grades 1–4)</h2>
          <p className={styles.p}>
            For younger learners, LEGO provides a safe, exciting gateway. Kids learn to break a big goal—like making a
            robot move—into smaller, achievable steps: build, connect, code, test. Confidence grows as ideas come to life.
            LEGO also provides a safe and low-pressure environment. Mistakes are easy to fix: snap a brick off, adjust a motor,
             or drag a new coding block into place. This trial-and-error learning encourages curiosity and helps kids see challenges as opportunities, not obstacles.
          </p>
        </section>

        <section id="arduino" className={styles.main}>
          <h2 className={styles.h2}>Arduino & Microcontrollers (Grades 4–10)</h2>
          <p className={styles.p}>
            As children grow more confident, they’re ready to move beyond LEGO and explore Arduino and 
            microcontrollers — the same kind of technology that powers real-world devices. This is where kids begin 
            to see how hardware and software work hand in hand. With Arduino, students connect sensors, motors and LEDs, then control them with code. They practice sequencing,
            debugging and analytical thinking while creating useful projects such as obstacle-avoiding cars or smart
            night-lights. Perhaps most importantly, Arduino builds a maker mindset. Students learn that with the right tools, they can shape the world 
            around them — whether that means improving an existing gadget or inventing something entirely new.
          </p>
        </section>

        <section id="advanced" className={styles.main}>
          <h2 className={styles.h2}>Advanced Robotics (Grades 5–10)</h2>
          <p className={styles.p}>
            For students who have already explored coding or completed our beginner Arduino courses, Advanced Robotics
             opens the door to solving challenges that mirror the real engineering world. This is where everything they’ve learned 
             — building, coding, debugging, and creative thinking — comes together in powerful ways.
Children integrate multiple sensors, motors, and microcontrollers into a single project. Instead of
 following step-by-step instructions, they are encouraged to take on open-ended challenges. Advanced Robotics teaches resilience,
  teamwork, and innovation — skills that not only support academic growth in STEM subjects but also prepare children for the
   problem-solving challenges of tomorrow’s world. Most importantly, students come away with the belief that they can be creators, not just consumers, of technology.
          </p>
        </section>

        <section id="why-it-works" className={styles.main}>
          <h2 className={styles.h2}>Why Robotics Builds Problem-Solving</h2>
          <ul className={styles.badges} aria-label="Benefits">
            <li><span className={styles.badge}>Critical Thinking</span></li>
            <li><span className={styles.badge}>Creativity</span></li>
            <li><span className={styles.badge}>Collaboration</span></li>
            <li><span className={styles.badge}>Resilience</span></li>
          </ul>
          <p className={styles.p}>
            Students analyze issues, brainstorm alternatives, test and refine. Team projects build communication and
            peer-learning; repeated iterations teach that setbacks are part of the path to better solutions. They learn to
            observe carefully, ask good questions, and think both logically and laterally.
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
            <li><Link to="/public-speaking" className={`${styles.cta} ${styles.ctaMagenta}`}>Public Speaking</Link></li>
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
            <p className={styles.p}>On Haralur Road, Opposite Fisherman's Wharf</p>
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
      <Footer />
    </>
  );
}
