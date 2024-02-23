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
      <div className="App">
      <PopupWidget
        url="https://calendly.com/xperiokids"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule a free Demo!"
        textColor="#ffffff"
        color="#21654E"
      />
    </div>
        <div className={styles.about}>
          {/* <img src={pic} className={styles.pic} alt="Profile Picture" /> */}
          <div className={styles.text}>
            {/* <h2>About Us</h2> */}
            <h5>
              <span>More details on the Free Demo! Please read them before scheduling</span>
            </h5>
            <p>
              1) The Slot you select could be changed based on Students Grade and our faculty's availability. We try
our best to give everyone the same slots as chosen. However, we also try to make the best of our time
and optimize. We will inform you over a phone call and give you options to choose from!
            </p>
            <br/>
            <p>
              2) You are free to bring along other students for the free demo (upto 4 additional friends). However,
Pease inform us in the form or via a phone call or whatsapp so we can plan accordingly. We do not want
the room to become so crowed.
            </p>
            <br/>
            <p>
              3) The Demo will be as per the grade selected. However, pelase note that a few experiments may be
from a senior/junior class due to the nature of Science. We however try our best to give a good learning
from the demo.
            </p>
            <div className={styles.data}>
              <a href="https://www.linkedin.com/in/kislaysingh/" target="_blank" className={styles.hire}>
              <ion-icon name="logo-linkedin"></ion-icon>
                 LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default About;


// function Calandly() {
//   return (
//     <div className="App">
//       <PopupWidget
//         url="https://calendly.com/xperiokids"
//         /*
//          * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
//          * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
//          */
//         rootElement={document.getElementById("root")}
//         text="Click here to schedule a free Demo!"
//         textColor="#ffffff"
//         color="#21654E"
//       />
//     </div>
//   );
// };

// export default Calandly;