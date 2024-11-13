import React from "react";
import styles from "./bday.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import camp_pic from "../../assets/bday.png";


function Bday() {
  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
            <h5>
              <span> 🎉🎉🎉 Introducing Xperio Kids Birthday Bash! 🎉🎉🎉</span>
            </h5>
            <p>
              <i>
              Make your child's special day a thrilling journey into the world of science with our
               exclusive birthday celebration package! At Xperio, we're redefining birthday parties
                by infusing them with mind-blowing experiments and unforgettable experiences.<br/> 
              Contact us for details. </i> 
            </p>
            <br/>
            <img src={camp_pic} className={styles.pic} alt="camp picture" />
      <br/>
      <p>
      🥳 We can host Kids at our Center or you can have ( our Faculty) come to your Bday Celebration. 
            </p>
      <h5>
            <span>🔬 Unleash the Wonder of Science:</span>
      </h5>
      <p>
            Watch as your little scientist and their friends dive into a world of discovery with hands-on 
            experiments that dazzle and inspire. From erupting volcanoes to colorful chemical reactions, 
            every moment is an adventure!
            </p>

            <h5>
            <span>🎈 Elevate the Celebration:</span>
      </h5>
      <p>
      Say goodbye to ordinary birthday parties and hello to a celebration like no other!
       Our expert team will transform your space into a science wonderland, complete with 
       interactive demonstrations and mesmerizing experiments.
            </p>

            <h5>
            <span>🎁 Tailored Experiences:</span>
      </h5>
      <p>
      Every birthday bash is unique, just like your child! We offer customizable packages to
       suit your preferences and ensure an experience that's as special as they are. Choose
        from a range of themes and activities to create a party that leaves everyone in awe.
            </p>

            <h5>
            <span>✨ Create Memories to Last a Lifetime:</span>
      </h5>
      <p>
      With Xperio, you're not just hosting a party—you're creating unforgettable memories
       that will spark curiosity and ignite a passion for science in every young mind.
        Give your child the gift of wonder and adventure with a birthday bash they'll never forget.
            </p>
            <h5>
            <span>🌟🌟 Book Your Xperio Kids Birthday Bash Today!🌟 🌟 </span>
      </h5>          
      </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Bday;