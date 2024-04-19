import React from "react";
import styles from "./terms.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";


function Terms() {
  return (
    <>
      <Nav />
          <div className={styles.text}>
            <h5>
              <span>Terms & Conditions</span>
            </h5>
            <p>
            ⚫ The Terms & conditions are applicable to anyone who enrolls into any of our courses or Visits us for the free demo.
            </p>
            <br/>
            <p>
            ⚫ Fees once paid may not be refunded. The refund will be at our discretion. We will however try our best to accomodate
            you into an upcoming batch depending on the schedule.
            </p>
            <br/>
            <p>
            ⚫ Xperio Learnings reserves the right to use photos/videos clicked during our Demo/Classes for publishing 
            on our websites or online for promotions.
            </p>
            <br/>
            <br/>        
          </div>
      <Footer/>
    </>
  );
}

export default Terms;