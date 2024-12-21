import React, { useState } from "react";
import styles from "./robotics.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import pujo from "../../assets/robotics_flyer.png";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className={styles.faqAnswer}>{answer}</p>}
    </div>
  );
}

function Robotics() {
  const faqs = [
    {
      question: "What is Robotics?",
      answer:
        "Robotics for kids is a hands-on way for children to learn about science, technology, engineering, and math (STEM). It involves designing, programming, and building robots, and can help kids develop skills like problem-solving, creativity, and critical thinking. Robotics empower children to create projects from their own concepts, fostering self-assurance and a positive 'can-do' mindset.",
    },
    {
      question: "What prior knowledge is required for this course?",
      answer:
        "No prior knowledge is required. The course is beginner-friendly and designed to teach you from scratch.",
    },
    {
      question: "What materials or tools are needed?",
      answer: "All necessary materials, including Arduino kits, will be provided during the course.",
    },
    {
      question: "Is there any certification after course completion?",
      answer: "Yes, participants will receive a certificate of completion at the end of the course.",
    },
    {
      question: "Can I pay the course fee in installments?",
      answer: "Yes, the course fee can be paid in two installments as mentioned.",
    },
    {
      question: "How can Robotics benefit young children?",
      answer:
        "Robotics can also enhance academic performance in children by creating an interest in Mathematics and Science, leading to improved outcomes in these subjects.",
    },
    {
      question: "What is the future of Robotics?",
      answer:
        "In the future, various fields such as medicine, psychology, law enforcement, and agriculture that currently have limited technology integration will become increasingly dependent on technology. AI added to Robotics can make wonders like how Elon has done.",
    },
    {
      question: "Is Robotics and Programming doable by Children?",
      answer:
        "Yes, robotics and programming are doable by children, and can be a fun and rewarding experience for both children and parents. Our course and faculty are designed to break down difficult concepts into easy digestible chunks and abstract what is not needed.",
    },
  ];

  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
            <img src={pujo} className={styles.pic2} alt="pricing" />
            <h5>
              <span>Week-End Robotics Course</span>
            </h5>
            <p>
              <strong>Course Duration: 60 hours spread across 5-6 months</strong>
              <br />
              <strong>Course Timings: 2 hours every Sat & Sundays</strong>
              <br />
              <strong>Course Fees: ₹ 45,000 payable in 2 installments</strong>
              <br />
              <br />
              The topics that will be covered and more finer details are mentioned in the camp brochure.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>

      <div className={styles.docFrame}>
        <iframe
          src="https://drive.google.com/file/d/1d6wGEIR5C9xSRRJaq4n22LzvFlGSUotf/preview"
          frameBorder="0"
          title="Course Brochure"
        />
      </div>

      <div className={styles.formSection}>
        <p className={styles.formText}>
          Please fill this form to complete Student Registration & receive a callback.
        </p>
        <iframe
          src="https://forms.gle/W1Y4RwTp9EE8oH2a7"
          frameBorder="0"
          title="Google Form"
        />
      </div>
      <Footer />
    </>
  );
}

export default Robotics;
