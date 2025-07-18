import React, { useState, useEffect, useRef } from "react";
import styles from "./CurvedSlider.module.css";
import img4 from "../../assets/dp1.webp";
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

const images = [img1, img2, v2, s7, s9, s11,s8,s11, g15,s111, s6, img4, img5, img6, img7, s5, img9, img10];

const CurvedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isHovered, currentIndex]);

  const getSlideStyle = (index) => {
    const offset = (index - currentIndex + images.length) % images.length;

    if (offset === 0) return `${styles.slide} ${styles.center}`;
    if (offset === 1) return `${styles.slide} ${styles.right}`;
    if (offset === images.length - 1) return `${styles.slide} ${styles.left}`;
    return `${styles.slide} ${styles.hidden}`;
  };

  return (
    <div
      className={styles.sliderWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.slider}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={getSlideStyle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CurvedSlider;