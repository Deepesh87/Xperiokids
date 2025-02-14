import React from "react";
import styles from "./camp24.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import image_1 from "../../assets/image_folder/a.jpeg";
import image_2 from "../../assets/image_folder/b.jpeg";
import image_3 from "../../assets/image_folder/c.jpeg";
import image_4 from "../../assets/image_folder/d.jpeg";
import image_5 from "../../assets/image_folder/e.jpeg";
import image_6 from "../../assets/image_folder/f.jpeg";
import image_7 from "../../assets/image_folder/g.jpeg";
import image_8 from "../../assets/image_folder/h.jpeg";
import image_9 from "../../assets/image_folder/i.jpeg";
import image_10 from "../../assets/image_folder/j.jpeg";
import image_11 from "../../assets/image_folder/k.jpeg";
import image_12 from "../../assets/image_folder/l.jpeg";
import image_13 from "../../assets/image_folder/m.jpeg";
import image_14 from "../../assets/image_folder/abc.jpeg";
import image_15 from "../../assets/image_folder/def.jpeg";
import image_16 from "../../assets/image_folder/ghi.jpeg";
import image_17 from "../../assets/image_folder/ib.jpeg";
import image_18 from "../../assets/image_folder/ib2.jpeg";
import image_19 from "../../assets/image_folder/ib3.jpeg";

function Camp24() {
  return (
    <>
      <Nav />
      <section className={styles["demo-page"]}>
        <div className={styles.about}>
          <div className={styles.text}>
            <h5>
              <span>Xperio Learning Summer Camp 2024: A Memorable Journey of Learning and Fun</span>
            </h5>
            <p>

            <strong>Months Held:</strong> May, June & July.<br/>
            <strong>Boards Covered:</strong> CBSE, ICSE and IB Board<br/>
            <strong>Grades Covered:</strong> Grade 2 to Grade 9th<br/>
            <strong>Topics Covered:</strong> Science Experiments, Public Speaking, Sudoku, Journaling
                <br/><br/>
                The camp was not just about learning; it was also about making new friends, having fun, 
                and creating lasting memories. The smiles and excitement on the children's faces were 
                the true testament to the camp's success.
            </p>
            <div className={styles.about2}>
        <div className={styles.img_gallery}>
        <img src={image_10}></img>
        <img src={image_17}></img>
        <img src={image_18}></img>
        <img src={image_19}></img>
          <img src={image_11}></img>
          <img src={image_12}></img>
          <img src={image_13}></img>
          <img src={image_7}></img>
          <img src={image_14}></img>
          <img src={image_15}></img>
          <img src={image_16}></img>   
          <img src={image_1}></img>
          <img src={image_3}></img>
          <img src={image_2}></img>

          <img src={image_4}></img>
          <img src={image_5}></img>
          <img src={image_6}></img>

          <img src={image_8}></img>
          <img src={image_9}></img>
        </div>
          </div>
        </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Camp24;