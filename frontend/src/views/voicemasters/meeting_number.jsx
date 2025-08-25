import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./voicemasters-seniors.module.css";

const MeetingCounter = () => {
  const START_DATE = new Date("2025-03-02");

  // 👉 Holidays (no class): 7 & 14 Sept 2025
  const HOLIDAYS = [
    new Date("2025-09-07"),
    new Date("2025-09-14"),
  ];

  const [showAll, setShowAll] = useState(false);

  // --- utils ---
  const atMidnight = (d) => {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  };

  const sameYMD = (a, b) => atMidnight(a).getTime() === atMidnight(b).getTime();
  const isHoliday = (d) => HOLIDAYS.some((h) => sameYMD(h, d));

  // count how many holidays fall ON or BEFORE a given date (and after START_DATE)
  const holidayCountThrough = (d) =>
    HOLIDAYS.filter(
      (h) => atMidnight(h) >= atMidnight(START_DATE) && atMidnight(h) <= atMidnight(d)
    ).length;

  // next actual meeting Sundays (skip holidays)
  const getNextTwoActualMeetings = () => {
    const now = new Date();
    const out = [];
    let probe = new Date(now);

    // Move probe to next Sunday (or today if Sunday and before 12:30 we consider today)
    if (probe.getDay() !== 0) {
      const days = (7 - probe.getDay()) % 7 || 7;
      probe.setDate(probe.getDate() + days);
    } else {
      // If it's already Sunday, keep today; we'll filter out if holiday/past time below
    }
    probe = atMidnight(probe);

    // If it's Sunday but already past 12:30 PM, move to next Sunday
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    if (now.getDay() === 0 && nowMinutes >= 12 * 60 + 30) {
      probe.setDate(probe.getDate() + 7);
    }

    // Collect next 2 non-holiday Sundays
    while (out.length < 2) {
      if (!isHoliday(probe)) out.push(new Date(probe));
      probe.setDate(probe.getDate() + 7);
    }

    return out;
  };

  const isMeetingInProgress = () => {
    const now = new Date();
    if (now.getDay() !== 0) return false;
    if (isHoliday(now)) return false; // no meeting on holiday
    const m = now.getHours() * 60 + now.getMinutes();
    return m >= 600 && m < 750; // 10:00–12:30
  };

  // meeting number = number of non-holiday Sundays from START_DATE up to (and including) "date"
  const getMeetingNumber = (date) => {
    const cleanDate = atMidnight(date);
    const cleanStart = atMidnight(START_DATE);

    // Base weeks since start
    const diffTime = cleanDate - cleanStart;
    const baseWeeks = Math.floor(diffTime / (7 * 24 * 60 * 60 * 1000)) + 1;

    // Subtract skipped weeks (holidays) that have occurred up to this date
    const skippedSoFar = holidayCountThrough(cleanDate);

    // If the "date" itself is a holiday, do not assign a meeting number (return null)
    if (isHoliday(cleanDate)) return null;

    return baseWeeks - skippedSoFar;
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
    // Upcoming (actual meetings only)
    const [next, second] = getNextTwoActualMeetings();

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

    // Countdown to next actual meeting
    const interval = setInterval(() => {
      const now = new Date();
      const diff = nextSunday10AM - now;
      if (diff <= 0) {
        setCountdown(isMeetingInProgress() ? "Starting now!" : "Starting soon!");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setCountdown(`${days}d ${hours}h ${mins}m ${secs}s`);
    }, 1000);

    // Past meetings (exclude holidays entirely from the list & numbering)
    const today = atMidnight(new Date());
    let current = atMidnight(START_DATE);
    const list = [];
    while (current < today) {
      if (!isHoliday(current)) {
        const number = getMeetingNumber(current);
        if (number != null) {
          list.push({
            number,
            date: formatDate(new Date(current)),
          });
        }
      }
      current.setDate(current.getDate() + 7);
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
            <p
              className={styles.countdownLine}
              style={{ color: "#dc2626", fontWeight: "600" }}
            >
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
