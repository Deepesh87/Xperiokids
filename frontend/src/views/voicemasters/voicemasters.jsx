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
            <img src={logo} className={styles.pic2} alt="pricing" />
            <h5>
              <span>VoiceMasters by Xperio Learning | Grade 3 Onwards</span>
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
              <span>🚀 Creative Expression Track</span>
            </h5>
      <p>
      This track comprises Book reading, Impromptu Speaking, Creative Storytelling and 
      engaging Audio Visual rounds. This is designed to spark creativity and enhance quick thinking..
            </p>

      <h5>
              <span>🚀 Communication Track</span>
            </h5>
      <p>
      Our Communication Milestones module focuses on developing effective public speaking skills.
       Through a series of engaging projects, children will learn to structure their speeches,
        enhance their vocal variety, and master the art of storytelling, all aimed at building
         confidence and clarity in their communication.
            </p>
      <h5>
            <span>🚀 Leadership Track</span>
      </h5>
            <p>
             The Leadership Milestones module is designed to nurture leadership abilities. Participants will gain 
            hands-on experience in organizing events, leading teams, and providing constructive feedback, 
            equipping them with the skills necessary to become confident and inspiring leaders.
            </p>
            <h5>
            <span>For more information, please download the brochure here.</span>
      </h5>
      <strong> Click to <a className={`${styles.menu__link}`} href="https://drive.google.com/file/d/12LRkUNe0rg65qLZyRHvTWeEmyhbReq3S/view?usp=sharing" target="_blank">
      Download Brochure <br/></a> </strong>
            <br/>
            <img src={pricing} className={styles.pic} alt="pricing" />

            <p>
            ⦿ VoiceMasters Timings: Pls contact us to learn more about the pedagogy.
            </p>
            <p>
            ⦿ The first month of emrollment is the trial month. We offer full refund of fees within the trial period
            after deducting the fees for the current month. No refund is available after the trial period.
            </p>
            <p>
            ⦿ If we are closed on any Sunday on account of a Public Holiday or other reasons, we will extend the course period
            accordingly or arrange an alternate class on another day (for example on a Saturday) at no extra cost.
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