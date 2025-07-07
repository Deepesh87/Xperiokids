import React, { useState, useEffect } from "react";
import styles from "./TopAnnouncement.module.css";

const TopAnnouncement = () => {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("igoBannerDismissed");
    if (isDismissed === "true") {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      triggerFadeOut();
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const triggerFadeOut = () => {
    setFadingOut(true);
    localStorage.setItem("igoBannerDismissed", "true");
    setTimeout(() => setVisible(false), 500); // Match with CSS duration
  };

  const handleDismiss = () => {
    triggerFadeOut();
  };

  if (!visible) return null;

  return (
    <div className={`${styles.topBar} ${fadingOut ? styles.fadeOut : ""}`}>
      <div className={styles.topBarInner}>
        <p>
          🥉 We won <strong>Bronze</strong> at the{" "}
          <a href="/olympiad" className={styles.link}>
            International Greenwich Olympiad 2025
          </a>
          !
        </p>
        <button className={styles.dismissBtn} onClick={handleDismiss}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default TopAnnouncement;
