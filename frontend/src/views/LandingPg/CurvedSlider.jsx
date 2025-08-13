import React, { useState, useRef, useEffect } from "react";
import styles from "./CurvedSlider.module.css";

import img4 from "../../assets/dp1.webp";
import img24 from "../../assets/voice_latest.webp";
import img44 from "../../assets/voice.webp";
import img1 from "../../assets/1.jpg";
import v2 from "../../assets/voicemasters_new.jpeg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import s6 from "../../assets/tyndall.webp";
import s11 from "../../assets/tyndall2.jpeg";
import s5 from "../../assets/s5.jpeg";
import s7 from "../../assets/connect.jpeg";
import g15 from "../../assets/chaser.jpeg";
import s8 from "../../assets/kit_2.jpeg";
import s9 from "../../assets/ph.jpg";
import s111 from "../../assets/ph3.jpeg";

/* 1) Your source images */
const images = [
  img1, img2, img4, img44, img24,v2, s7, s9, s11, s8, s11, g15, s111, s6, img5, img6, img7, s5, img9, img10
];

/* 2) A tiny hook to detect when the slider is on screen (saves battery/CPU) */
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

  // Controls: tweak to your taste
  const duration = "45s";       // slower = higher value ("60s" etc.)
  const gap = 16;               // px spacing between cards
  const direction = "reverse";  // "reverse" = left→right, "normal" = right→left

  // Duplicate list for seamless loop
  const doubled = [...images, ...images];

  // Optional: simple alt generator (unique + meaningful for a11y / minor image SEO)
  const altFor = (i) => `Xperio Learning activity photo ${i + 1}`;

  return (
    <div
      ref={rootRef}
      className={styles.scroller}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ "--duration": duration, "--gap": `${gap}px`, "--dir": direction }}
    >
      <div className={`${styles.track} ${isHovered || !inView ? styles.paused : ""}`}>
        {doubled.map((src, i) => (
          <div className={styles.card} key={i}>
            <img
              src={src}
              alt={altFor(i)}
              // Performance & SEO-safe attributes:
              loading={i > 2 ? "lazy" : "eager"}         // keep first couple eager if near top
              decoding="async"
              fetchpriority={i === 0 ? "high" : "auto"}  // hint LCP if this is above the fold
              width={560}   // match typical rendered size to avoid CLS (5:6 ratio)
              height={672}
              sizes="(max-width: 768px) 72vw, 26vw"
              // If you have responsive asset variants, uncomment & fill:
              // srcSet="/path-480w.webp 480w, /path-800w.webp 800w, /path-1200w.webp 1200w"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurvedSlider;
