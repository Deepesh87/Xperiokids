// src/pages/CancellationRefunds.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./refund.module.css";

export default function CancellationRefunds() {
  return (
    <>
      <Helmet>
        <title>Cancellation & Refunds | Xperio Learning</title>
        <meta
          name="description"
          content="Read Xperio Learning’s cancellation and refund policy for our courses and programs."
        />
      </Helmet>
      <Nav />
      <main className={styles.policyPage}>
        <h1>Cancellation & Refunds Policy</h1>
        <p>
          At Xperio Learning, we value your trust and commitment to our
          programs. Please read our simple policy below:
        </p>

        <h2>Cancellations</h2>
        <p>
          If you wish to cancel your enrollment, please inform us at least{" "}
          <strong>7 days before the course start date</strong>. This allows us
          to allocate your spot to another student.
        </p>

        <h2>Refunds</h2>
        <ul>
          <li>
            Full refund, after a processing fee of 1000 if cancellation is requested 7 days before the course
            start date.
          </li>
          <li>
            50% refund if cancellation is requested within 3 days of the course
            start date.
          </li>
          <li>
            No refunds once the course has started and classes have been
            attended.
          </li>
        </ul>

        <h2>How to Request</h2>
        <p>
          To request a cancellation or refund, please call us or contact us at{" "}
          <a href="mailto:xperiolearning@gmail.com">xperiolearning@gmail.com</a>{" "}
          with your enrollment details.
        </p>

        <p>
          Refunds will be processed within <strong>2–4 business days</strong>{" "}
          of approval.
        </p>
      </main>
      <Footer />
    </>
  );
}
