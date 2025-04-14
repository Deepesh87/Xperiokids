import React, { useEffect, useState } from "react";
import styles from "./olympiad.module.css";
import igo from "../../assets/igo.jpeg";
import igo2 from "../../assets/igo2.jpeg"; // Add more if you have more slides
import igo3 from "../../assets/igo3.jpg";
import igo4 from "../../assets/igo4.jpg";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Navbar/Nav";

function OlympiadPage() {
  const slides = [igo2, igo3, igo4]; // Replace duplicates with actual slide images if you have them
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
            <h5>
              <span>International Greenwich Olympiad Finalists 🎉</span>
            </h5>

            <img src={igo} className={styles.pic} alt="IGO Olympiad Logo" />

            <p>
              We are proud to be selected as finalists in the prestigious{" "}
              <a
                className={styles.menu__link}
                href="https://igolondon.co.uk/"
                target="_blank"
                rel="noreferrer"
              >
                International Greenwich Olympiad (IGO), 2025
              </a>
              !
            </p>

            <div
              style={{
                backgroundColor: "#f2f7ff",
                padding: "20px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              <h3 style={{ color: "#2a60c9", marginBottom: "10px" }}>
                🌍 About the Olympiad
              </h3>
              <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#333" }}>
                The IGO is a global competition that challenges young minds to
                showcase their creativity, analytical skills, and research
                abilities. Hosted annually by IGO London, it brings together
                schools and students from around the world to solve real-world
                problems through innovation.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#e8f9f1",
                padding: "20px",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            >
              <h3 style={{ color: "#148750", marginBottom: "10px" }}>
                🔬 Our Research
              </h3>
              <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#333" }}>
                Our paper, titled{" "}
                <em>
                  “Natural Plant Extracts as Inhibitors of Cell Division: A
                  Study Using Onion Root Tips”
                </em>
                , explores the use of natural plant extracts to inhibit cell
                division. We conducted experiments using onion root tips to
                observe how different extracts impacted the rate of cell
                division.
              </p>
              <p style={{ fontSize: "17px", lineHeight: "1.7", color: "#333" }}>
                Our findings show that some natural extracts can significantly
                reduce cell division, pointing to their potential in fighting
                uncontrolled cell growth—a key factor in cancer.
              </p>
            </div>

            {/* <img src={igo2} className={styles.pic} alt="Research" /> */}

{/* Image slider with sliding animation and arrows */}
<div
  style={{
    marginTop: "30px",
    width: "80%",
    maxWidth: "400px",
    height: "480px",
    marginInline: "auto",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
  }}
>
  <div
    style={{
      display: "flex",
      width: `${slides.length * 100}%`,
      transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
      transition: "transform 0.6s ease-in-out",
    }}
  >
    {slides.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Slide ${index + 1}`}
        style={{
          width: `${100 / slides.length}%`,
          height: "480px",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />
    ))}
  </div>

  {/* Left Arrow */}
  <button
    onClick={() =>
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }
    style={{
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      background: "#00000088",
      color: "white",
      border: "none",
      borderRadius: "50%",
      padding: "10px 14px",
      cursor: "pointer",
      fontSize: "20px",
    }}
  >
    &#8592;
  </button>

  {/* Right Arrow */}
  <button
    onClick={() =>
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }
    style={{
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      background: "#00000088",
      color: "white",
      border: "none",
      borderRadius: "50%",
      padding: "10px 14px",
      cursor: "pointer",
      fontSize: "20px",
    }}
  >
    &#8594;
  </button>
</div>

            <p>
              <strong>Meet the Team:</strong> Naomi Razdan (Grade 8, The
              International School Bangalore) led the research under the
              mentorship of Dr. Kislay Singh.
            </p>

            <p>
              We would like to thank{" "}
              <a
                href="https://diagnostics.medgenome.com/"
                target="_blank"
                rel="noreferrer"
                className={styles.menu__link}
              >
                MedGenome Labs
              </a>
              , E City, who allowed us access to their lab facilities and
              provided us with information on various research techniques and
              lab methodologies. Their support was invaluable in conducting our
              experiments and completing our research.
            </p>

            <p>
              <a href="/" className={styles.menu__link}>
                &larr; Back to Home
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OlympiadPage;
