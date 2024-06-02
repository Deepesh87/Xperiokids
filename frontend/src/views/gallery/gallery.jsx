import React from "react";
import styles1 from "./gallery.module.css";
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

function gallery() {
return (
  <>
    <Nav />
    <section className={styles1["demo-page"]}>
    <div className={styles1.about}>
          <div className={styles1.text}>
        <div className={styles1.img_gallery}>
          <img src={image_1}></img>
          <img src={image_3}></img>
          <img src={image_2}></img>

          <img src={image_4}></img>
          <img src={image_5}></img>
          <img src={image_6}></img>

          <img src={image_8}></img>
          <img src={image_9}></img>
          <img src={image_10}></img>
          <img src={image_11}></img>
          <img src={image_12}></img>
          <img src={image_13}></img>
          <img src={image_7}></img>
          <img src={image_14}></img>
          <img src={image_15}></img>
          <img src={image_16}></img>    


        </div>
      </div>
      </div>
    </section>
    <Footer/>
  </>
);
}

export default gallery;