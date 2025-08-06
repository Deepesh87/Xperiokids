import React from "react";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


import juniorThumb from "../../assets/juniors_voicemasters.png";
import seniorThumb from "../../assets/seniors_voicemasters.png";
import styles from "./voicemasters.module.css";



<Helmet>
  <title>Public Speaking Classes for Kids in Bengaluru | Voicemasters</title>
  <meta
    name="description"
    content="Join Xperio Learning’s Voicemasters – a public speaking program for children in Bengaluru. Build confidence, creativity, and communication skills through structured weekend classes."
  />
  <meta
    name="keywords"
    content="Public Speaking for Kids, Communication Classes Haralur, Kids Debate, Voicemasters Bengaluru, Public Speaking Classes Bengaluru"
  />
  <link rel="canonical" href="https://www.xperiolearning.com/voicemasters" />
</Helmet>




const VoiceMastersLanding = () => {
  const navigate = useNavigate();

  return (
    <>
<Nav />
      <div className={styles.container}>
        <div className={styles.heroSection}>
<img src={require('../../assets/voicemasters_logo_new.png')} alt="VOICEMASTERS Title" className={styles.headerImage} />


<h1 className={styles.subtitle}>
  Public Speaking Classes for children in Bengaluru – Voicemasters
</h1>
<p className={styles.description}>
Looking for the best <strong>public speaking classes for kids in Bengaluru</strong>? Voicemasters by Xperio Learning offers age-specific weekend programs designed to build <strong>confidence, communication, and creativity</strong> in children from Grades 1 and up. Based in <strong>Haralur</strong>, we’re loved by parents and students.
</p>
        </div>

        <div className={styles.scheduleBox}>
<h2>📅 Weekend Public Speaking Program Schedule in Haralur, Bengaluru</h2>
          <ul>
            <li>🗣️ <strong>VoiceMasters Juniors (Grade 2–4):</strong> SAT 10:00 AM </li>
            <li>🎓 <strong>VoiceMasters Seniors (Grade 5+ ):</strong> SUN 10:00 AM</li>
            <li>🎁 First class FREE. Attend a trial session before you decide.</li>
            <li>📍 In-centre classes every Sat/Sun at Xperio</li>
          </ul>
        </div>

        <div className={styles.benefitsSection}>
<h2>✨ Why Parents in Bengaluru Choose Voicemasters for Public Speaking</h2>
          <ul>
            <li>🎤 Structured speech curriculum tailored by grade level</li>
            <li>🧠 Focus on creative thinking, vocal confidence, and stage presence</li>
            <li>🏅 Milestones, badges, and evaluations for goal tracking</li>
            <li>👪 Loved by parents, fun for kids, results that show in school</li>
          </ul>
        </div>

        <div className={styles.trackCards}>
          <div className={styles.trackCard}>
            <div className={styles.ribbon}>NEW</div>

            <img src={juniorThumb} className={styles.thumbImage} alt="Public Speaking for Kids – Juniors Track" />

            <h3>VoiceMasters Juniors</h3>
            <p>Perfect for Grades 1 to 4. Games, stories, drawing & mini speeches to build early confidence.</p>
            <button onClick={() => navigate('/voicemasters-juniors')}>Explore Juniors</button>
          </div>

          <div className={styles.trackCard}>
<img src={seniorThumb} className={styles.thumbImage} alt="Public Speaking for Children – Seniors Track" />
            <h3>VoiceMasters Seniors</h3>
            <p>Grades 5+. Formal speeches, leadership roles, evaluations & Toastmasters-style projects.</p>
            <button onClick={() => navigate('/voicemasters-seniors')}>Explore Seniors</button>
          </div>
        </div>

        <div className={styles.finalCTA}>
          <h3>📞 Call or Visit us to find out more or book a free trial</h3>
          <a href="https://wa.me/918904749795" target="_blank" rel="noopener noreferrer">
            <button>Book Your Trial Class</button>
          </a>

          <p style={{ fontSize: "0.95rem", marginTop: "1rem" }}>
Also check out our <a href="/science">Science coaching</a> and <a href="/robotics">Robotics programs</a> for kids in Bengaluru.
</p>


        </div>

        <div className={styles.faqSection}>
  <h2>❓ Frequently Asked Questions</h2>
  <h3>What age group is this for?</h3>
  <p>We offer two batches – Juniors (Grade 1 to 4) and Seniors (Grade 5+).</p>
  
  <h3>Where are the classes conducted?</h3>
  <p>At our Haralur Road center in Bengaluru – every weekend.</p>

  <h3>Is a free trial available?</h3>
  <p>Yes, your first class is completely free!</p>

    <h3>We have some holidays planned. We dont want to loose out on some part of the enrollment due to this.</h3>
  <p>We understand! We provide the option to pause the course for a duration of 1- month anytime during your tenure and the tenure gets extended accordingly. For example, if you have enrolled for 6 months and you choose to pause, in this case your tenure will be entended by another month at no cost.</p>

    <h3>My child is very shy and hesitant to join the trial class.</h3>

  <p>
We understand! Many kids feel shy at first. Our friendly instructors create a warm, welcoming environment where every child can express themselves at their own pace.
 The trial class is designed to be fun and engaging, with no pressure to perform. We encourage parents to come 5-10 minutes early so we can make the child comfortable. Many kids who start shy end up loving the program!
  </p>
</div>



      </div>
      <Footer />
    </>
  );
};

export default VoiceMastersLanding;