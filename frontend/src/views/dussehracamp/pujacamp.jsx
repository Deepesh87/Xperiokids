import React from "react";
import styles from "./pujacamp.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import pujo from "../../assets/pujo.png";

function Dussehra() {
  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
          <img src={pujo} className={styles.pic2} alt="pricing" />
            <h5>
              <span>Dussehra Camp' 2024</span>
            </h5>
            <p>

            <strong>Camp Fees: ₹ 3,500 Per Student</strong><br/>

            <br/>The topics that will be covered and more finer details are mentioned in the camp brochure<br/> 
                <br/>
                <br/>
            <iframe src ="https://drive.google.com/file/d/1ZJOBqi8slmax0hiTVBN1FmrOHfRqE3ne/preview" frameborder="0" width="100%" height="800px" />
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

export default Dussehra;