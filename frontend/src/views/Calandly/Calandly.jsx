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
              <span>More details on the Free Demo! Please read them before scheduling</span>
            </h5>
            <p>
              1) The Slot you select could be changed based on Student's Grade and our faculty's availability. We try
our best to give everyone the same slots as chosen. We will inform you over a phone call and give you options to choose from!
            </p>
            <br/>
            <p>
              2) You are free to bring along other students for the free demo (upto 4 additional friends). However,
Please inform us in the form or via a phone call or whatsapp so we can plan accordingly. Students should carry a notebook and a pen 
to take any notes. Please arrive on time. We do not have any car parking, so request parents to use the parking by the
roadside. Shubh enclave gives enough free parking and is only 2 minutes walk away
            </p>
            <br/>
            <p>
              3) The Demo experiments are using harmless chemicals. Safety is always our first priority. 
            </p>
            <br/>
            <p>
              4) By attending the Demo, you agree to our terms and conditions as mentioned on our website page.
            </p>
            <br/>
            <div className={styles.data}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdAIXacuRObeGgnT0QN3jW8x2SU5qijyUDNHepZZbpZzZR3Ig/viewform?embedded=true" width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default About;