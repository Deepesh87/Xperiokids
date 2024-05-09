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
             to light up a bulb or learn about bread boards. Experience planetary 
             events Like Solar/Lunar Eclipse & more firsthand. With exciting experiments and theory, nurture your child's curiosity and pave the way for future
              success. <br/> 
              Contact us for details. Multiple batches starting in April & May. Limited Seats on FCFS. </i> 
            </p>
            <br/>
            <img src={camp_pic} className={styles.pic} alt="camp picture" />
      <br/>

      <h2>
            <span>Batch details</span>
      </h2>
      <p>
      🟢 We have 2 types of batches. A Juniors batch is for Grade 2 to Grade 5. Seniors Batch is for Grade 6 to 9.
      This mix of grades ensure diversity and promotes learning from each other. Also, this makes the class an excellent 
      replica of the real world where Men and Women from all walks of life solve problems and make our lives better.
            </p>
      <h5>
            <span>Seniors' Batch,<br/> Grade 6 to Grade 9</span>
      </h5>
            <p>
            <b>Weekdays Batch: </b> Started May 6th, Timings 9:45 to 11:45 Monday to Friday| Ends May 31st | Enrollments Closed<br/>
             <h5>
            <span>Juniors' Batch,<br/> Grade 2 to Grade 5</span>
            </h5>
            </p>
            <p>
           <b>Weekdays Weekly Batch: </b> Starts every Monday, Timings 12:00 to 14:00 Monday to Friday| Lasts 1-2 weeks | Enrollments Open<br/>
             <br/>
             ⚫ Note: Only maximum 10 students per batch. Please contact us to know vacancy. Fees per week is 2k.
            </p>
            <br/>
            <p>
            ⚫ Summer Camp will include 10-15 Experiments each from Physics, Chemistry, Biology, Geography and General Studies. 
            The Camp also includes Public Speaking, Journalling and developing Leadership Skills with Students mentoring other students.
            </p>
            <br/>
            <p>
            ⚫ We also provide the option to attend weekly and pay as you attend. The charge for each week of attenance is 3000.
            </p>
            <br/>
            <p>
            ⚫ Discounts: We also offer group discounts. If 3 or more students enroll together, the fees per student will be 8999 INR. If 5 or more
            enroll together, the fees would be 7999 per student.
            </p>
            <br/>
            <p>
            ⚫ The Demo/Experiments are using harmless chemicals in Chemistry or Dry batteries of 1.5-9V in Physics. Safety is always our first priority. 
            </p>
            <br/>
            <p>
            ⚫ More information can be found in the brochure below. Please contact us over whatsapp or a call to know more. We will be happy to help.
            </p>
            <br/>
            <iframe src ="https://drive.google.com/file/d/1iIljbC0PIdrRWZZQbipgM-fLN8BlY27l/preview" frameborder="0" width="100%" height="800px" />
            <br/>
            <br/>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Camp;