import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./robotics-landing.module.css";

import s2 from "../../assets/r1.webp"; // certificate/robot image
import s18 from "../../assets/kit_2.webp"; // child building

export default function RoboticsLanding() {
  return (
    <>
      <Helmet>
        <title>Robotics at Xperio Learning – Junior & Senior Tracks</title>
        <meta
          name="description"
          content="Choose your path: Junior Robotics (Grades 1–3) and Senior Robotics (Grade 4+). Hands-on builds, sensors, coding and real-world problem solving in Bengaluru."
        />
        <link rel="canonical" href="https://www.xperiolearning.com/robotics" />
      </Helmet>
      <Nav />

      <main className={styles.wrap}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.title}>Robotics at Xperio Learning</h1>
            <p className={styles.subtitle}>
              Two learner-friendly tracks –
              <strong> Junior (Grades 1–3)</strong> and <strong> Senior (Grade 4+)</strong>.
              Build, code, and create with confidence.
            </p>
          </div>
        </section>

        <section className={styles.cards}>
          <article className={styles.card}>
            <img className={styles.cardImg} src={s18} alt="Junior robotics building" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Junior Robotics</h2>
              <p className={styles.cardText}>
                Perfect for Grades 1–3. Playful builds, simple mechanisms (wheels, axles, gears),
                and beginner-friendly logic. Intro to Programming, Simple Age-appropriate projects; focus is on hands-on learning.
              </p>
              <ul className={styles.bullets}>
                <li>Engino / LEGO® style builds and beginner Arduino</li>
                <li>Science esp. Physics basics: force, balance, motion, electricity, Circuits</li>
                <li>Creativity & teamwork</li>
              </ul>
              <Link to="/robotics/junior" className={styles.ctaPrimary}>Explore Junior →</Link>
            </div>
          </article>

          <article className={styles.card}>
            <img className={styles.cardImg} src={s2} alt="Senior robotics kit" />
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>Senior Robotics</h2>
              <p className={styles.cardText}>
                For Grade 4 onwards. Build and program with sensors, motors, and Arduino (C++). Work on very cool projects that teach real-world
                applications and spark creativity.
                Problem-solving projects and challenges every week.
              </p>
              <ul className={styles.bullets}>
                <li>Arduino IDE (C++) basics</li>
                <li>Sensors, LEDs, motor control</li>
                <li>Real-world applications</li>
                <li>Teamwork & creativity</li>
              </ul>
              <Link to="/robotics/senior" className={styles.ctaSecondary}>Explore Senior →</Link>
            </div>
          </article>
        </section>

        <section className={styles.infoStrip}>
          <p>
            📍 Haralur / HSR / Sarjapur Road • Weekend batches • Small groups • All materials provided
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}


