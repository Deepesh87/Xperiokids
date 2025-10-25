// File: MeetingCard.jsx
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./public-speaking-seniors.module.css";

/**
 * Props:
 * - title: "Sunday Batch" | "Saturday Batch" etc.
 * - weekday: 0..6 (0 = Sunday, 6 = Saturday)
 * - startDate: Date string (batch launch date)
 * - startTime: { h: number, m: number }  // display + countdown start
 * - endTime:   { h: number, m: number }  // display only
 * - holidays:  Date[] (array of ISO strings like "2025-09-07")
 */
export default function MeetingCard({
  title = "Batch",
  weekday = 0,
  startDate = "2025-03-02",
  startTime = { h: 10, m: 0 },     // 10:00 AM
  endTime   = { h: 12, m: 15 },    // 12:15 PM
  holidays = []
}) {
  const START_DATE = useMemo(() => atMidnight(new Date(startDate)), [startDate]);
  const HOLIDAYS = useMemo(() => holidays.map(d => atMidnight(new Date(d))), [holidays]);

  const [nextTwo, setNextTwo] = useState([]);
  const [countdown, setCountdown] = useState("");
  const [past, setPast] = useState([]);

  // ---------- utils ----------
  function atMidnight(d) { const x = new Date(d); x.setHours(0,0,0,0); return x; }
  function sameYMD(a,b) { return atMidnight(a).getTime() === atMidnight(b).getTime(); }
  function isHoliday(d)  { return HOLIDAYS.some(h => sameYMD(h, d)); }
  function fmtDate(d) {
    return d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }
  function fmtTime({h,m}) {
    const d = new Date(); d.setHours(h, m, 0, 0);
    return d.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });
  }
  function holidayCountThrough(d) {
    const clean = atMidnight(d);
    return HOLIDAYS.filter(h => h >= START_DATE && h <= clean).length;
  }
  function meetingNumber(onDate) {
    const cleanDate = atMidnight(onDate);
    if (isHoliday(cleanDate)) return null;
    const diffMs = cleanDate - START_DATE;
    if (diffMs < 0) return null;
    const weeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000)) + 1;
    return weeks - holidayCountThrough(cleanDate);
  }
  function nextNMeetings(n) {
    const out = [];
    const now = new Date();
    let probe = atMidnight(now);

    // move to target weekday
    const delta = (weekday - probe.getDay() + 7) % 7;
    probe.setDate(probe.getDate() + delta);

    // if today is the weekday but the session already ended, move a week
    const nowMin = now.getHours()*60 + now.getMinutes();
    const endMin = endTime.h*60 + endTime.m;
    if (delta === 0 && nowMin >= endMin) {
      probe.setDate(probe.getDate() + 7);
    }

    while (out.length < n) {
      if (!isHoliday(probe) && probe >= START_DATE) {
        out.push(new Date(probe));
      }
      probe.setDate(probe.getDate() + 7);
    }
    return out;
  }
  function sessionInProgress() {
    const now = new Date();
    if (now.getDay() !== weekday) return false;
    if (isHoliday(now)) return false;
    const m = now.getHours()*60 + now.getMinutes();
    const s = startTime.h*60 + startTime.m;
    const e = endTime.h*60 + endTime.m;
    return m >= s && m < e;
  }

  // ---------- effects ----------
  useEffect(() => {
    const [nxt, second] = nextNMeetings(2);
    setNextTwo([nxt, second]);

    // build past list (compact; only last 6 shown in <details>)
    const today = atMidnight(new Date());
    const list = [];
    let cur = new Date(START_DATE);
    while (cur < today) {
      if (!isHoliday(cur)) {
        const num = meetingNumber(cur);
        if (num != null) list.push({ num, date: fmtDate(cur) });
      }
      cur.setDate(cur.getDate() + 7);
    }
    setPast(list);

    // countdown
    const nextStart = new Date(nxt);
    nextStart.setHours(startTime.h, startTime.m, 0, 0);
    const timer = setInterval(() => {
      const now = new Date();
      const diff = nextStart - now;
      if (diff <= 0) {
        setCountdown(sessionInProgress() ? "🔴 In progress" : "Starting soon");
        return;
      }
      const d = Math.floor(diff / (1000*60*60*24));
      const h = Math.floor((diff / (1000*60*60)) % 24);
      const m = Math.floor((diff / (1000*60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setCountdown(`${d}d ${h}h ${m}m ${s}s`);
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weekday, startDate]);

  if (nextTwo.length < 2) return null;

  const [nextDate, secondDate] = nextTwo;
  const nextNum = meetingNumber(nextDate);
  const secondNum = meetingNumber(secondDate);

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h3
  className={`${styles.title} ${
    title.toLowerCase().includes("sunday")
      ? styles.sundayTitle
      : title.toLowerCase().includes("saturday")
      ? styles.saturdayTitle
      : ""
  }`}
>
  {title}
</h3>


      <div className={styles.row}>
        <div className={styles.badge}>Next</div>
        <div className={styles.mainLine}>
          <strong>#{nextNum}</strong> • {fmtDate(nextDate)} • {fmtTime(startTime)}–{fmtTime(endTime)}
        </div>
      </div>

      <div className={styles.countdown}>
        {sessionInProgress()
          ? "🔴 Meeting in progress"
          : <>⏳ {countdown}</>}
      </div>

      <div className={styles.secondary}>
        Next after that: <strong>#{secondNum}</strong> — {fmtDate(secondDate)}
      </div>

      <details className={styles.pastBlock}>
        <summary>Past meetings</summary>
        <ul>
          {past.slice(-6).map(p => (
            <li key={p.num}>✅ <strong>#{p.num}</strong> — {p.date}</li>
          ))}
        </ul>
      </details>
    </motion.div>
  );
}
