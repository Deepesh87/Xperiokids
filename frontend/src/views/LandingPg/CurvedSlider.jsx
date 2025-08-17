import React, { useState, useRef, useEffect } from "react";
import styles from "./CurvedSlider.module.css";

import img4 from "../../assets/dp1.webp";
import img24 from "../../assets/voice_latest.webp";
import img44 from "../../assets/voice.webp";
import img444 from "../../assets/new_voice.webp";
import img1 from "../../assets/1.webp";
import v2 from "../../assets/voicemasters_new.webp";
import s11 from "../../assets/tyndall2.webp";
import s7 from "../../assets/connect.webp";
import g15 from "../../assets/chaser.webp";
import s8 from "../../assets/kit_2.webp";
import s9 from "../../assets/ph.webp";
import s111 from "../../assets/ph3.webp";

/* Your images */
const images = [
  img4, img1, img444, img24,img44, v2, s7, s9, s11, s8, s11, g15, s111,
];

/* Pause animation when out of view (battery/CPU win) */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const CurvedSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rootRef, inView] = useInView(0.2);

  // Duplicate the list for a seamless loop
  const doubled = [...images, ...images];

  const altFor = (i) => `Xperio Learning activity photo ${i + 1}`;

  return (
    <div
      ref={rootRef}
      className={styles.scroller}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      /* Let CSS control --duration via media queries.
         We only pass gap & direction here. */
      style={{ "--gap": "16px", "--dir": "reverse" }} /* reverse = left→right */
    >
      <div className={`${styles.track} ${isHovered || !inView ? styles.paused : ""}`}>
        {doubled.map((src, i) => (
          <div className={styles.card} key={i}>
            <img
              src={src}
              alt={altFor(i)}
              loading={i > 2 ? "lazy" : "eager"}
              decoding="async"
              fetchpriority={i === 0 ? "high" : "auto"}
              width={560}   /* keep 5:6 ratio to avoid CLS */
              height={672}
              sizes="(max-width: 768px) 72vw, 26vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurvedSlider;