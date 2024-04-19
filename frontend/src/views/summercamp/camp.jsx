import React from "react";
import styles from "./camp.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import camp_pic from "../../assets/Summer_camp.png";


function Camp() {
  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
            <h5>
              <span>Information on Science Summer Camp | Grade 3 to Grade 10</span>
            </h5>
            <p>
              <i>
            This summer, embark on a unique learning journey with us! Dive into the world of microscopes,
             chemistry experiments on properties of matter/Solutions/Acids and Bases etc., and physics circuits 
             to light up a bulb or create a personal fan or spin up wheels of a Toy Car. Experience planetary 
             events Like Solar/Lunar Eclipse & more firsthand. With exciting experiments and theory, nurture your child's curiosity and pave the way for future
              success. <br/> 
              Contact us for details. Multiple batches starting in April & May. Limited Seats on FCFS. </i> 
            </p>
            <br/>
            <img src={camp_pic} className={styles.pic} alt="camp picture" />
      <br/>
            <p>
            ⚫ Batch details:<br/>
            <b>Weekends Batch:</b> Starting April 27th, Timings 11:00 to 13:00 | Lasts 8 Weekends | Enrollments Open<br/>
            <b>Weekdays Batch: </b>Grade 6 to 9. Mornings 10:00 to 12:00 | Enrollments Closed<br/>
            <br/>
            <b>Weekdays Next batch schedule: </b>Tentative May 6th, Mornings 10:00 to 12:00 | Lasts 3-4 weeks<br/>
            <b>Weekdays Next batch schedule: </b>Tentative April 29th, Afternoons 15:30 to 17:30  | Lasts 3-4 weeks<br/>   
            {/* <b>Weekends Next batch schedule: </b>Tentative May 4th, Timings 11:00 to 13:00   | Lasts 3-4 weeks<br/>          */}
             {/* Batch A1: April 3rd, timings: 10 AM - 12 PM.
             Batch A2: April 3rd, timings: 3 PM - 5 PM.
             Batch B1: April 8th, timings: 10 AM - 12 PM.
             Batch B2: April 8th, timings: 3 PM - 5 PM. */}
             <br/>
             {/* Batch C1: May 6th, timings: 10 AM - 12 PM.
             Batch C2: May 6th, timings: 3 PM - 5 PM.
             Batch D1: May 8th, timings: 10 AM - 12 PM.
             Batch D2: May 8th, timings: 3 PM - 5 PM. */}

Note: Only maximum 10 students per batch. Please contact us to know vacancy.
            </p>
            <br/>
            <p>
            ⚫ We have 2 types of camps/batches. A Juniors batch is for Grade 2 to Grade 5. Seniors Batch is for Grade 6 to 9.
            </p>
            <br/>
            <p>
            ⚫ Summer Camp will include 10-15 Experiments each from Physics, Chemistry, Biology, Geography and Genral Science. The experiments 
            are designed to give students a wholistic learning experience. The Theory behind the experiments will also be explained. 
            The Camp also includes Public Speaking, Journalling and developing Leadership Skills with Studnets mentoring other students.
            </p>
            <br/>
            <p>
            ⚫ Some of the Experiments can be carried by the students to their home as take away projects. Their will be some homework exercises;
            Not theoretical, but more of observations in our day to day activities. Students will be required to explain Science 
            phenomenons in these. 
            </p>
            <br/>
            <p>
            ⚫ The Fees for the Camp is INR 10,000. The Sessions will be conducted in mutiple batches of 8-10 students from similar Grades. The Weekday batch sessions will
            be from Monday to Friday. Weekends batch will be on both days. We are flexible and could customise a batch as per your schedule ( for group enrollments)
            </p>
            <br/>
            <p>
            ⚫ Discounts: We also offer group discounts. If 3 or more students enroll together, the fees per student will be 8999 INR. If 5 or more
            enroll together, the fees would be 7999 per student.
            </p>
            <br/>
            <p>
            <p>
            ⚫ Summer Camp fees includes the fees of the Science Kit that students will be using during the sessions. 
            </p>
            <br/>
            ⚫ The Demo/Experiments are using harmless chemicals in Chemistry or Dry batteries of 1.5-9V in Physics. Safety is always our first priority. 
            </p>
            <br/>
            <p>
            ⚫ More information can be found in the brochure below. Please contact us over whatsapp or a call to know more. We will be happy to help.
            </p>
            <br/>
            <iframe src ="https://drive.google.com/file/d/1iIljbC0PIdrRWZZQbipgM-fLN8BlY27l/preview" frameborder="0" width="100%" height="800px" />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Camp;