import React from 'react';
import styles from './footer.module.css';
import whatsapp_image from "../../assets/whatsapp.svg";
import test from "../../assets/wave2.png";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.waves}`}>
        <div className={`${styles.wave}`} id={`${styles.wave1}`}></div>
        <div className={`${styles.wave}`} id={`${styles.wave2}`}></div>
      </div>
      <ul className={`${styles['social-icon']}`}>
        <li className={`${styles['social-icon__item']}`}>
          <a className={`${styles['social-icon__link']}`} href="https://www.youtube.com/@Xperiokids" target="_blank">
          <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
        <li className={`${styles['social-icon__item']}`}>
          <a className={`${styles['social-icon__link']}`} href="https://www.linkedin.com/company/xperiokids/" target="_blank">
          <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className={`${styles['social-icon__item']}`}>
          <a className={`${styles['social-icon__link']}`} href="#">
          <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className={`${styles.menu}`}>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="https://www.xperiokids.com/">
            Home
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="/about">
            About Us
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="https://www.xperiokids.com/">
            Courses
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="/demo">
            Free Demo
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="https://www.xperiokids.com/">
            Careers
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="/camp">
            Summer Camp 2024
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} target="_blank" href="https://maps.app.goo.gl/sn93JELCGweMpa3f9">
            Locate Us
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} target="_blank"  href="/terms">
            Terms of Services
          </a>
        </li>
      </ul>
      <p>&copy;2024 Xperiokids.com | All Rights Reserved</p>

    <div className={styles.whatsapp_float}>
    <a
      href="https://wa.me/918904749795"
      class="whatsapp_float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img height={"100%"} width={"100%"} src={whatsapp_image} />
    </a>

    </div>

    <div className={styles.summer_camp_notification}>
    <a
      href="/camp"
      class="summer_camp_notification"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p> <b>Summer Camp 2024 </b></p>
    </a>

    </div>
    </footer>
  );
};

export default Footer;