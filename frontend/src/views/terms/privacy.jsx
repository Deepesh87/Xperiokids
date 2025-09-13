// src/pages/CancellationRefunds.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./refund.module.css";


export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Xperio Learning</title>
        <meta
          name="description"
          content="Read how Xperio Learning protects your privacy and manages student and parent data."
        />
      </Helmet>
      <Nav />
      <main className={styles.policyPage}>
        <h1>Privacy Policy</h1>
        <p>
          At Xperio Learning, we respect your privacy and are committed to
          protecting the personal information you share with us. This policy
          explains how we handle your data when you enroll in our programs or
          use our website.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Basic details such as student name, age, and grade</li>
          <li>Parent/guardian contact details (email, phone number)</li>
          <li>Course enrollment and payment details</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To confirm enrollment and provide course updates</li>
          <li>To communicate about schedules, events, and changes</li>
          <li>
            To process payments securely through trusted third-party providers
          </li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We take appropriate measures to protect your information from
          unauthorized access, misuse, or disclosure. Payment information is
          handled through secure gateways and not stored by us directly.
        </p>

        <h2>Sharing of Information</h2>
        <p>
          We do not sell or rent your personal information to third parties. We
          may share details only with trusted service providers for operational
          purposes (such as payment processing).
        </p>

        <h2>Your Rights</h2>
        <p>
          You can request access to your personal data, ask for corrections, or
          request deletion by contacting us at{" "}
          <a href="mailto:xperiolearning@gmail.com">xperiolearning@gmail.com</a>.
        </p>

        <h2>Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
      </main>
      <Footer />
    </>
  );
}
