import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./voicemasters-seniors.module.css";

const MeetingCounter = () => {
  const START_DATE = new Date("2025-03-02"); // First Sunday
  const [showAll, setShowAll] = useState(false);


  const getUpcomingSundays = () => {
    const today = new Date();
    const day = today.getDay();
    const nextSundayOffset = (7 - day) % 7 || 7;
    const secondSundayOffset = nextSundayOffset + 7;

    const nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + nextSundayOffset);

    const secondSunday = new Date(today);
    secondSunday.setDate(today.getDate() + secondSundayOffset);

    return [nextSunday, secondSunday];
  };

  const getMeetingNumber = (date) => {
    const diffTime = date - START_DATE;
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

    // Set next Sunday at 10:00 AM
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

    // Generate past meetings
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
          <p className={styles.countdownLine}>⏳ Time left: {countdown}</p>
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
            <button
  className={styles.toggleButton}
  onClick={() => setShowAll((prev) => !prev)}
>
  {showAll ? "🔽 Collapse" : "🔼 View All"}
</button>


          </ul>

        </div>
      )}
    </motion.div>
  );
};

export default MeetingCounter;
