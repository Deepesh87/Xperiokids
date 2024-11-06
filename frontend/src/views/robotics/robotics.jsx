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
            <strong>Course Duration: 50 hours spread across 4-5 months</strong><br/>
            <strong>Course Timings: 2 hours every Sat & Sundays</strong><br/>
            <strong>Course Fees: ₹ 45,000 payable in 2 installment</strong><br/>

            <br/>The topics that will be covered and more finer details are mentioned in the camp brochure.
             Please reach out to us to enrol or if you need any more details. <br/> 
                <br/>
                <br/>
            <iframe src ="https://drive.google.com/file/d/1rTSs-nF2OKDJNfAqMz7OADfVcW-SbNW4/preview" frameborder="0" width="100%" height="800px" />
            <br/>
            </p>
            <div className={styles.about2}>
        <div className={styles.img_gallery}>

        </div>
          </div>
        </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Robotics;