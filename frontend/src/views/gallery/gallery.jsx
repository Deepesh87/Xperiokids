import React, { useState, useEffect } from "react";
import styles1 from "./gallery.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";


import images from "./imageData";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // 🧠 New: Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex !== null) {
        if (e.key === "ArrowRight") {
          showNext(e);
        } else if (e.key === "ArrowLeft") {
          showPrev(e);
        } else if (e.key === "Escape") {
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <>
      <Nav />
      <section className={styles1["demo-page"]}>
        <div className={styles1.about}>
          <div className={styles1.text}>
            <div className={styles1.img_gallery}>
              {images.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`Gallery ${index}`}
                  loading="lazy"
                  onClick={() => openModal(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {currentIndex !== null && (
          <div className={styles1.lightbox} onClick={closeModal}>
            <button className={styles1.navButton} onClick={showPrev}>‹</button>
            <img
              src={images[currentIndex]}
              alt="Enlarged View"
              className={styles1.lightbox_img}
            />
            <button className={styles1.navButton} onClick={showNext}>›</button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Gallery;
