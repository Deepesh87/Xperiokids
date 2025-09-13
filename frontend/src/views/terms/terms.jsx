import React from "react";
import styles from "./refund.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";


function Terms() {
  return (
    <>
      <Nav />
      <section className="policyPage">
        <h1>Terms & Conditions</h1>
        <ul>
          <li>
            The Terms & Conditions are applicable to anyone who enrolls into any
            of our courses or visits us for the free demo.
          </li>
          <li>
            Xperio Learning reserves the right to use photos/videos clicked
            during our Demos/Classes for publishing on our websites or on our
            YouTube channel.
          </li>
          <li>
            Upon Cancellation of a course enrollment, a charge of ₹1000 will be
            deducted from the total fees paid.
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default Terms;