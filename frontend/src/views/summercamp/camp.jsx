import React from "react";
import styles from "./camp.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";


function Camp() {
  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
            <h5>
              <span>Information on Science Summer Camp | Grade 4 to Grade 12 |</span>
            </h5>
            <p>
              <i>
            This summer, embark on a unique learning journey with us! Dive into the world of microscopes,
             chemistry experiments, and physics circuits. Experience planetary events firsthand with 
             exciting experiments and theory. Nurture your child's curiosity and pave the way for future
              success. Contact us for details. Batches start in April & May. Limited Seats on FCFS.</i> 
            </p>
            <br/>




            <p>
            ⚫ Summer Camp will include 10-15 Experiments each from Physics, Chemistry and Biology. The experiments 
            are designed to give students a wholistic learning experience. The Theory behind the experiments will also be explained. 
            </p>
            <br/>
            <p>
            ⚫ Some of the Experiments can be carried by the students to their home as take away projects. Their will be some homework exercises;
            Not theoretical, but more of observations in our day to day activities. Students will be required to explain Science 
            phenomenons in these. 
            </p>
            <br/>
            <p>
            ⚫ The Fees for the Camp is INR 10,000. The Summer Camp fees includes the fees of the Science Kit that students will be using during the sessions.
            The Sessions will be conducted in mutiple batches of 4-8 students from similar Grades. The sessions will be
            4-5 days a week. We are flexible and could customise a batch as per your schedule.
            </p>
            <br/>
            <p>
            ⚫ Discounts: We also offer group discounts. If 3 or more students enroll together, the fees per student will be 7999 INR. If 5 or more
            enroll together, the fees would be 6999 per student.
            </p>
            <br/>
            <p>
            <p>
            ⚫ Summer Camp fees includes the fees of the Science Kit that students will be using during the sessions. 
            </p>
            <br/>
            ⚫ The Demo/Experiments are using harmless chemicals in Chemistry or Dry batteries of 10-12V in Physics. Safety is always our first priority. 
            </p>
            <br/>
            <p>
            ⚫ Please contact us over whatsapp or a call to know more. We will be happy to help.
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