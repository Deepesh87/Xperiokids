import React from "react";
import styless from "./terms.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";



function Terms() {
  return (
    <>
      <Nav />
      <section className={styless["all_terms"]}>
          <div className={styless.text1}>
            <h5>
            <span>Terms & Conditions</span>
            </h5>
            <p>
            ⚫ The Terms & Conditions are applicable to anyone who enrolls into any of our courses or visits us for the free demo.
            </p>
            {/* <p>
            ⚫ Fees once paid may not be refunded. The refund will be at our discretion. We will try our best to accomodate
            you into an upcoming batch depending on the schedule.
            </p> */}
            <p>
            ⚫ Xperio Learning reserves the right to use photos/videos clicked during our Demos/Classes for publishing 
            on our websites or on our YouTube channel.
            </p>
            <br/>
            <br/>  
            <p>
                                         
            </p>
            <p>
                         
            </p>      
          </div>
          </section>
      <Footer/>
    </>
  );
}

export default Terms;