import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import styles from "./CurvedSlider.module.css";

import img4 from "../../assets/dp1.webp";
import img24 from "../../assets/voice_latest.webp";
import img44 from "../../assets/voice.webp";
import img444 from "../../assets/new_voice.webp"; // likely the LCP
import img1 from "../../assets/1.webp";
import v2 from "../../assets/voicemasters_new.webp";
import s11 from "../../assets/tyndall2.webp";
import s7 from "../../assets/connect.webp";
import g15 from "../../assets/chaser.webp";
import s8 from "../../assets/kit_2.webp";
import s9 from "../../assets/ph.webp";
import s111 from "../../assets/ph3.webp";

const images = [img4, img1, img444, img24, img44, v2, s7, s9, s11, s8, s11, g15, s111];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const CurvedSlider = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [rootRef, inView] = useInView(0.2);
  const trackRef = useRef(null);

  // 👇 Detect mobile to decide 2x vs 3x set
  const [isNarrow, setIsNarrow] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const update = () => setIsNarrow(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  // Build data list (3x on mobile, 2x on desktop)
  const base = images;
  const data = isNarrow ? [...base, ...base, ...base] : [...base, ...base];

  const altFor = (i) => `Xperio Learning activity photo ${(i % base.length) + 1}`;
  const paused = isHovered || !inView;

  // 👇 Dynamic duration and loop distance
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const setTiming = () => {
      const totalWidth = el.scrollWidth;             // width of rendered (2x or 3x) track
      const sets = isNarrow ? 3 : 2;                 // how many concatenated sets exist
      const singleSetWidth = totalWidth / sets;

      // target speed ≈ 60 px/s; clamp between 12s and 36s
      const pxPerSec = 250;
      const seconds = Math.max(12, Math.min(36, 0.5* singleSetWidth / pxPerSec));
      el.style.setProperty("--duration", `${seconds}s`);

      // loop distance per full cycle (e.g., -33.333% for 3x, -50% for 2x)
      el.style.setProperty("--loop", `-${100 / sets}%`);
    };

    setTiming();
    const ro = new ResizeObserver(setTiming);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isNarrow]);

  return (
    <>
      {/* ✅ Preload likely LCP image */}
      <Helmet>
        <link rel="preload" as="image" href={img444} fetchpriority="high" />
      </Helmet>

      <div
        ref={rootRef}
        className={styles.scroller}
        role="region"
        aria-label="Xperio Learning photo highlights"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ "--gap": "16px", "--dir": "reverse" }}
      >
        <div
          ref={trackRef}
          className={`${styles.track} ${paused ? styles.paused : ""}`}
        >
          {data.map((src, i) => {
            const isDuplicate = i >= base.length;
            return (
              <div className={styles.card} key={`${src}-${i}`}>
                <img
                  src={src}
                  alt={altFor(i)}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchpriority={i === 0 ? "high" : undefined}
                  width={560}
                  height={672}
                  sizes={isNarrow ? "(max-width: 768px) 55vw, 26vw" : "(max-width: 768px) 72vw, 26vw"}
                  aria-hidden={isDuplicate ? "true" : undefined}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CurvedSlider;
