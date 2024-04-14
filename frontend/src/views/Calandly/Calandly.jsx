import { PopupWidget } from "react-calendly";
import React from "react";
import styles from "./freedemo.module.css";
import pic from "../../assets/free_demo_infopage_photo.jpg";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";

function About() {
  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        {/* <div className="App">
      <PopupWidget
        url="https://calendly.com/xperiokids"
        rootElement={document.getElementById("root")}
        text="Click here to schedule a free Demo!"
        textColor="#ffffff"
        color="#21654E"
        
      />
    </div> */}
        <div className={styles.about}>
          {/* <img src={pic} className={styles.pic} alt="Profile Picture" /> */}
          <div className={styles.text}>
            <h5>
              <span>
                More details on the Free Demo!
              </span>
            </h5>
            <p>
              1) Please check with us on Whatsapp or a call to have your child take a Free 2 hour demo and 
              decide if she/he likes the class. We are sure they will. 😀
            </p>
            <br />
            <p>
              2) We encourage your child to bring his friends/classmates/neighbors along to attend the free demo. 
              Friends who study together, stay together. Please check with us for free slots.
            </p>
            <br />
            <p>
              3) The Demo/experiments are using harmless chemicals. Safety is
              always our first priority.
            </p>
            <br />
            <p>
              4) By attending the Demo, you agree to our terms and conditions as
              mentioned on our website page.
            </p>
            <br />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
