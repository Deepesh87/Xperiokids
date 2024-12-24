import React, { useState, useEffect } from "react";
import Style from "./Landing.module.css";

function KPI() {
  const [rating, setRating] = useState(0);
  const [students, setStudents] = useState(0);
  const targetRating = 4.9; // Replace with your actual Google rating
  const targetStudents = 80; // Replace with your actual number of students

  useEffect(() => {
    let startRating = 0;
    let startStudents = 0;
    const duration = 3000; // Animation duration in milliseconds
    const incrementRating = targetRating / (duration / 50); // Update every 50ms
    const incrementStudents = targetStudents / (duration / 50); // Update every 50ms

    const timer = setInterval(() => {
      startRating += incrementRating;
      startStudents += incrementStudents;

      if (startRating >= targetRating && startStudents >= targetStudents) {
        clearInterval(timer);
        setRating(targetRating.toFixed(1));
        setStudents(Math.ceil(targetStudents));
      } else {
        setRating(Math.min(startRating, targetRating).toFixed(1));
        setStudents(Math.min(startStudents, targetStudents).toFixed(0));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [targetRating, targetStudents]);

  return (
    <div className={Style.kpiContainer}>
      {/* <h2 className={Style.kpiTitle}>Our Achievements</h2> */}
      <div className={Style.kpiItem}>
        <h3 className={Style.kpiSubtitle}>Google Rating</h3>
        <a
          href="https://maps.app.goo.gl/2nkiPgKQfWt7qHzk6"
          target="_blank"
          rel="noopener noreferrer"
          className={Style.kpiLink}
        >
          <div className={Style.kpiValue}>{rating}</div>
        </a>
      </div>
      {/* <div className={Style.kpiItem}>
        <h3 className={Style.kpiSubtitle}>Student Count</h3>
        <div className={Style.kpiValue}>{students}</div>
      </div> */}
    </div>
  );
}

export default KPI;
