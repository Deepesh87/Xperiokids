import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./voicemasters-seniors.module.css";

const MeetingCounter = () => {
  const START_DATE = new Date("2025-03-02");
  const [showAll, setShowAll] = useState(false);

  const getUpcomingSundays = () => {
    const now = new Date();
    const currentDay = now.getDay();

    // Sunday between 10:00 and 12:30 PM
    if (currentDay === 0) {
      const currentMinutes = now.getHours() * 60 + now.getMinutes();
      const startMins = 10 * 60; // 10:00 AM
      const endMins = 12 * 60 + 30; // 12:30 PM

      if (currentMinutes < endMins) {
        // Today is still this week's meeting
        const todaySunday = new Date(now);
        todaySunday.setHours(0, 0, 0, 0);

        const nextSunday = new Date(todaySunday);
        nextSunday.setDate(todaySunday.getDate() + 7);

        return [todaySunday, nextSunday];
      }
    }

    // Otherwise, calculate next 2 Sundays normally
    const daysUntilNextSunday = (7 - currentDay) % 7 || 7;
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilNextSunday);
    nextSunday.setHours(0, 0, 0, 0);

    const secondSunday = new Date(nextSunday);
    secondSunday.setDate(nextSunday.getDate() + 7);

    return [nextSunday, secondSunday];
  };

  const isMeetingInProgress = () => {
    const now = new Date();
    if (now.getDay() !== 0) return false;

    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    return currentMinutes >= 600 && currentMinutes < 750; // 10:00–12:30
  };

const getMeetingNumber = (date) => {
  const cleanDate = new Date(date);
  cleanDate.setHours(0, 0, 0, 0);

  const cleanStart = new Date(START_DATE);
  cleanStart.setHours(0, 0, 0, 0);

  const diffTime = cleanDate - cleanStart;
  const weeksPassed = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000));
  return weeksPassed + 1;
};



  const formatDate = (date) =>
    date.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const [nextMeetingInfo, setNextMeetingInfo] = useState(null);
  const [secondMeetingInfo, setSecondMeetingInfo] = useState(null);
  const [countdown, setCountdown] = useState("");
  const [pastMeetings, setPastMeetings] = useState([]);

  useEffect(() => {
    const [next, second] = getUpcomingSundays();

    const nextSunday10AM = new Date(next);
    nextSunday10AM.setHours(10, 0, 0, 0);

    setNextMeetingInfo({
      date: formatDate(next),
      number: getMeetingNumber(next),
      dateTime: nextSunday10AM,
    });

    setSecondMeetingInfo({
      date: formatDate(second),
      number: getMeetingNumber(second),
    });

    // Countdown timer
    const interval = setInterval(() => {
      const now = new Date();
      const diff = nextSunday10AM - now;
      if (diff <= 0) {
        setCountdown("Starting now!");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${mins}m ${secs}s`);
    }, 1000);

    // Past meetings
    const today = new Date();
    let current = new Date(START_DATE);
    const list = [];

    let count = 1;
    while (current < today) {
      list.push({
        number: count,
        date: formatDate(new Date(current)),
      });
      current.setDate(current.getDate() + 7);
      count++;
    }

    setPastMeetings(list);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={styles.meetingCounter}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2 className={styles.meetingCounterTitle}>
        📆 Upcoming Voicemasters Meetings
      </h2>

      {nextMeetingInfo && secondMeetingInfo && (
        <>
          <p className={styles.meetingCounterItem}>
            <strong>Meeting #{nextMeetingInfo.number}</strong> on{" "}
            <em>{nextMeetingInfo.date}</em>
          </p>
          <p className={styles.meetingCounterItem}>
            <strong>Meeting #{secondMeetingInfo.number}</strong> on{" "}
            <em>{secondMeetingInfo.date}</em>
          </p>
          {isMeetingInProgress() ? (
            <p className={styles.countdownLine} style={{ color: "#dc2626", fontWeight: "600" }}>
              🔴 Meeting in Progress (10:00 AM – 12:30 PM)
            </p>
          ) : (
            <p className={styles.countdownLine}>⏳ Time left: {countdown}</p>
          )}
        </>
      )}

      {pastMeetings.length > 0 && (
        <div className={styles.pastMeetings}>
          <h3 className={styles.pastMeetingsTitle}>🗂️ Past Meetings</h3>
          <ul className={styles.pastMeetingsList}>
            {(showAll ? pastMeetings : pastMeetings.slice(-5)).map((meeting, idx) => (
              <motion.li
                key={meeting.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.02, duration: 0.3 }}
                viewport={{ once: true }}
              >
                ✅ <strong>Meeting #{meeting.number}</strong> – {meeting.date}
              </motion.li>
            ))}
          </ul>
          <button
            className={styles.toggleButton}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "🔽 Collapse" : "🔼 View All"}
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default MeetingCounter;
