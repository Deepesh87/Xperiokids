import React, { useState } from "react";
import styles from "./robotics.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import pujo from "../../assets/roboticskitbox.png";
import pujo2 from "../../assets/Robotics_certificate.png";

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
      answer: "All necessary materials, including a Very cool Robotics Kit as per the course will be provided.",
    },
    {
      question: "Is there any certification after course completion?",
      answer: "Yes, participants will receive a certificate of completion at the end of the course.",
    },
    {
      question: "Can I pay the course fee in installments?",
      answer: "Yes, the course fee can be paid in two installments. Pls contact us for more details.",
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
    {
      question: "What if I miss a few days of class due to travel plan or sickness?",
      answer:
        "We will try our best to accomodate you by arranging an extra class over a weekend or extending the course by a few days. However, we recommend you to attend all classes to get the best out of the course.",
    },
  ];

  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>

          <div className={styles.imageContainer}>
          <img src={pujo} className={styles.pic2} alt="Robotics Kit" />
          <img src={pujo2} className={styles.pic2} alt="Robotics Certificate" />
        </div>


            <h5>
              <span>Summer Robotics Course</span>
            </h5>
            <p>
              <strong>Course Duration: 4 Weeks (Monday to Fri)</strong>
              <br />
              <strong>Course Timings: Pls contact us!</strong>
              <br />
              <strong>Course Fees: ₹ 16,000 (includes Robotics kit worth 4k)</strong>
              <br />
              <br />
              The topics that will be covered and more finer details are mentioned in the camp brochure.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.docFrame}>
        <iframe
          src="https://drive.google.com/file/d/1inB1J7JYRNy5z826rTnRMee0LEFZrSRO/preview"
          frameBorder="0"
          title="Course Brochure"
        />
      </div>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </section>

      {/* <div className={styles.formSection}>
        <p className={styles.formText}>
          Please fill this form to complete Student Registration & receive a callback.
        </p>
        <iframe
          src="https://forms.gle/W1Y4RwTp9EE8oH2a7"
          frameBorder="0"
          title="Google Form"
        />
      </div> */}
      <Footer />
    </>
  );
}

export default Robotics;
