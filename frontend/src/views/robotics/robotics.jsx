import React from "react";
import styles from "./robotics.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import pujo from "../../assets/robotics_flyer.png";

function Robotics() {
  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
            <img src={pujo} className={styles.pic2} alt="pricing" />
            <h5>
              <span>Week-End Robotics Course</span>
            </h5>
            <p>
              <strong>Course Duration: 60 hours spread across 5-6 months</strong>
              <br />
              <strong>Course Timings: 2 hours every Sat & Sundays</strong>
              <br />
              <strong>Course Fees: ₹ 45,000 payable in 2 installments</strong>
              <br />
              <br />
              The topics that will be covered and more finer details are mentioned in the camp brochure.
              <br />
            </p>
            {/* PDF iframe with reduced gap */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              <iframe
                src="https://drive.google.com/file/d/1d6wGEIR5C9xSRRJaq4n22LzvFlGSUotf/preview"
                frameBorder="0"
                width="100%"
                height="500px"
                style={{ marginBottom: "0", paddingBottom: "0", maxWidth: "100%" }}
              />
            </div>

            {/* Centered Text between PDF and Google Form */}
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <p style={{ fontSize: "22px", fontWeight: "500", color: "#333" }}>
                Please fill this form to complete Student Registration & receive a callback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Form iframe */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "100px" }}>
        <iframe
          src="https://forms.gle/W1Y4RwTp9EE8oH2a7"
          width="90%"
          height="500"
          frameBorder="0"
          style={{ border: "1px solid #ccc", borderRadius: "0" }}
          title="Google Form"
        />
      </div>

      <Footer />
    </>
  );
}

export default Robotics;
