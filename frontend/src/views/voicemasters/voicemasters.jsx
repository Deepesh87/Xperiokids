import React from "react";
import styles from "./voicemasters.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import pricing from "../../assets/pricing_voicemasters.jpeg";
import logo from "../../assets/voice_logo.jpg";


function Voice() {
  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
          <br/>
            <img src={logo} className={styles.pic2} alt="pricing" />
            <h5>
              <span>VoiceMasters by Xperiokids | Grade 3 Onwards</span>
            </h5>
            <p>
              <i>
              Strong communication and public speaking skills are vital for success in various aspects of life,
               and the sooner one starts, the easier it is to develop these abilities.

Although public speaking can be intimidating for many adults, children can conquer this fear by
 being exposed to it early. With proper guidance, children can find joy in public speaking, 
 fostering exceptional self-confidence and leadership skills. <br/>
              Our carefully curated course by Experts trains young minds to not just master Communication but also 
              helps them develop Leadership skills. At VoiceMasters, we offer two comprehensive modules designed to cultivate essential skills in young learners.</i> 
            </p>

      <h5>
              <span>Communication Milestones</span>
            </h5>
      <p>
      🚀 Our Communication Milestones module focuses on developing effective public speaking skills.
       Through a series of engaging projects, children will learn to structure their speeches,
        enhance their vocal variety, and master the art of storytelling, all aimed at building
         confidence and clarity in their communication.
            </p>
      <h5>
            <span>Leadership Milestones</span>
      </h5>
            <p>
            🚀 The Leadership Milestones module is designed to nurture leadership abilities. Participants will gain 
            hands-on experience in organizing events, leading teams, and providing constructive feedback, 
            equipping them with the skills necessary to become confident and inspiring leaders.
            </p>
            <h5>
            <span>More information</span>
      </h5>

            <iframe src ="https://drive.google.com/file/d/11fhAQ7_1mslNaaUUKqqw3aqQLqEn8xen/preview" frameborder="0" width="100%" height="800px" />
            <br/>
            <img src={pricing} className={styles.pic} alt="pricing" />

            <p>
            ⦿ VoiceMasters Timings: Every Saturday, 3 PM to 5 PM
            </p>
            <p>
            ⦿ The first month of emrollment is the trial month. We offer full refund of fees within the trial period
            after deducting the fees for the current month. For example, If you paid ₹10,000 for 3 months, and decide
            to opt out within 1 month then the remaining fees of ₹6,666 ( after deducting ₹3333 for 1 month) will be refunded.
            No refund will be done after the trial period. 
            </p>
            <p>
            ⦿ If we are closed on any Saturday on account of a Public Holiday or other reasons, we will extend the course period
            accordingly or arrange an alternate class on another day (for example on Sunday) at no extra cost.
            </p>
      <p>
            ⦿ We are here to help you. Please contact us if you need any other information to help decide the best for your child.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Voice;