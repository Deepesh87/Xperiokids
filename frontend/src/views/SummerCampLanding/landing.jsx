import React from "react";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

import roboticsThumb from "../../assets/robotics_thumbnail.png";
import scienceThumb from "../../assets/science_thumbnail.png";
// import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';
import styles from "./Landing.module.css";

const SummerCampLanding = () => {
  const navigate = useNavigate();

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const isWeekday = date.getDay() !== 0 && date.getDay() !== 6;
      const inRange = date >= new Date(2025, 4, 5) && date <= new Date(2025, 4, 30);
      return isWeekday && inRange ? styles.highlight : null;
    }
  };

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>🎉 Welcome to Xperio’s Summer Camp 2025 | IB curriculum</h1>
          <p className={styles.subtitle}>
            📍 In-Centre Classes | Upcoming Batch: 🗓️ June 16th – July 9th | Monday to Friday
          </p>
          <p className={styles.description}>
            This year’s camp offers two exciting tracks — <strong>Science</strong> and <strong>Robotics</strong> <br/>
            Join either, or enroll in <strong>both</strong> for a complete STEM experience!
          </p>
        </div>

        <div className={styles.scheduleBox}>
          <h2>⏰ Camp Schedule</h2>
          <p><strong>Juniors (Grade 3 to 6):</strong></p>
          <ul>
            <li>🤖 Robotics: 10:00 AM – 12:00 PM</li>
            <li>🧪 Science: 12:00 PM – 2:00 PM</li>
            <li>🧪+🤖 Most Students Enrol in both Robotics & Science and spend the first half of the day here. We provide a 10 minutes break for light snacks/chit chat</li>
          </ul>
          <p><strong>Seniors (Grade 7 to 10):</strong></p>
          <p className={styles.contactNote}>This is a separate batch in the Second Half of the day. Please Contact us for timings.</p>
        </div>


        <div className={styles.benefitsSection}>
          <h2>🧪 + 🤖 = 🚀 The Ultimate STEM Combo!</h2>
          <ul>
          <ul>
    <li>✔️ <strong>Back-to-back sessions:</strong> Robotics (10 AM – 12 PM) & Science (12 PM – 2 PM)</li>
    <li>✔️ <strong>One drop/pickup, double the learning:</strong> No extra pickups or waiting between classes</li>
    <li>✔️ <strong>Designed for Working Parents.</strong> Loved by Curious Kids</li>
    <li>✔️ <strong>Bundle up & save:</strong> Exclusive combo discounts for enrolling in both tracks</li>
    <li>🔥 <strong>Seats are limited:</strong> Once full, we can’t promise a spot in both batches</li>
    <li>⏳ <strong>Don’t miss out:</strong> Give your child the complete summer advantage in just 4 hours a day</li>
  </ul>
          </ul>
        </div>

        <div className={styles.trackCards}>
          <div className={styles.trackCard}>
            <img src={scienceThumb} className={styles.thumbImage} alt="Science Camp" />
            <h3>Science Track ₹11,000</h3>
            <p>Wanna be Doctors, Chemists, Physicists, Xperiment, Xplore and have lots of fun</p>
            <button onClick={() => navigate('/science')}>Explore Science</button>
          </div>

          <div className={styles.trackCard}>
            <img src={roboticsThumb} className={styles.thumbImage} alt="Robotics Camp" />
            <h3>Robotics Track ₹18,000</h3>
            <p>For the Builders, Become an Engineer before Engineering</p>
            <button onClick={() => navigate('/robotics')}>Explore Robotics</button>
          </div>
        </div>

        {/* <div className={styles.calendarWrapper}>
          <h2 className={styles.calendarTitle}>Camp Dates: Weekdays from May 5 to May 30</h2>
          <Calendar
            calendarType="US"
            defaultView="month"
            defaultActiveStartDate={new Date(2025, 4, 1)}
            tileClassName={tileClassName}
          />
        </div> */}

<div className={styles.finalCTA}>
          <h3>🔥 Limited Seats! Early-bird combo discount ends soon.</h3>
          <a href="https://wa.me/918904749795" target="_blank" rel="noopener noreferrer">
            <button>Enroll Now & Save Your Spot</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SummerCampLanding;
