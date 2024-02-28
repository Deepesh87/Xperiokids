import React from "react";
import styles from "./camp.module.css";
import pic from "../../assets/free_demo_infopage_photo.jpg";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";


function Camp() {
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
              <span>Information on Summer Camp | Grade 4 to Grade 12 |</span>
            </h5>
            <p>
This Summer Holidays will be different, we promise. From exploring the world under a Microscope
               to Performing Chemistry Experiments and not to miss Making circuits in Physics.
                Icing on the cake will be to understand Planetary events. All of this via cool 
                experiment along with the Theory behind. Help your kids sow the seeds of Science 
                at an early age, so they can become Science persona later in their Lives. Science
                 explains and makes a person more curious and improves their logical thinking and 
                 Analytics skills. Contact us to know more.
            </p>
            <br/>
            <p>
            ⚫ The Demo/Experiments are using harmless chemicals. Safety is always our first priority. 
            </p>
            <br/>
            <p>
            ⚫ Please contact us over whatsapp or call to know more. We will be happy to help.
            </p>
            <br/>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Camp;