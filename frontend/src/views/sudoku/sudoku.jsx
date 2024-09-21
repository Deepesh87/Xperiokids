import React from "react";
import stylees from "./sudoku.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import sudo from "../../assets/sudo.jpeg";

function Sudoku() {
  return (
    <>
      <Nav />
      <section className={stylees["demo-page"]}>
        <div className={stylees.about}>
          <div className={stylees.text}>
          <img src={sudo} className={stylees.pic2} alt="pricing" />
            <h5>
              <span>Sudoku Championship 2024</span>
            </h5>
            <p>

            <strong>Months Held:</strong> Finale on 5th & 6th October (Tentative), 2024<br/>
            <strong>Pre-Finals date:</strong> 21st Sept & 28th-29th September, 2024<br/>
            <strong>Contest Categories:</strong><br/> Open to all<br/>


            <strong>Terms & conditions:</strong> Please read the terms & conditions carefully.
                <br/><br/>
                1) All participants will be given 4 Sudokus of varying difficulty.<br/>
                2) Each event will last upto 1:15 hour and happen on the days mentioned. You can pre-book 
                your slot and attend the contest.<br/>
                3) Students chosen for Finals will be informed by call/whatsapp by End of September.<br/>
                4) The Scoring for the Contest will be based on Correctness, Speed & Difficulty Level.<br/><br/>
                5) The Fees for the Contest will be ₹299<br/>
                6) Partilally solved Sudokus will not fetch any Scores.<br/>
                7) Please contact us if you wish to learn more on the Scoring.<br/><br/>
                8) Attractive Prizes to be won in each Cateogry!<br/>
                9) Contest Enrollments on FSFS. Beyond a certain number of enrollments in each Category, no further enrollments will be allowed<br/>
            </p>
            <div className={stylees.about2}>
        <div className={stylees.img_gallery}>

        </div>
          </div>
        </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Sudoku;