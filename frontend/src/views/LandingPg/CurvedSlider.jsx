import React, { useState, useEffect, useRef } from "react";
import styles from "./CurvedSlider.module.css";
import img4 from "../../assets/dp1.png";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/8.jpg";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import s6 from "../../assets/tyndall.jpg";
import s5 from "../../assets/s5.jpeg";

const images = [img1, img2, s6, img4, img5, img6, img7, s5, img9, img10];

const CurvedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
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