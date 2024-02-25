import React from 'react';
import styles from './footer.module.css';
import whatsapp_image from "../../assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.waves}`}>
        <div className={`${styles.wave}`} id={`${styles.wave1}`}></div>
        <div className={`${styles.wave}`} id={`${styles.wave2}`}></div>
        {/* <div className={`${styles.wave}`} id={`${styles.wave3}`}></div>
        <div className={`${styles.wave}`} id={`${styles.wave4}`}></div> */}
      </div>
      <ul className={`${styles['social-icon']}`}>
        <li className={`${styles['social-icon__item']}`}>
          <a className={`${styles['social-icon__link']}`} href="#">
            <ion-icon name="Youtube Channel"></ion-icon>
          </a>
        </li>
        <li className={`${styles['social-icon__item']}`}>
          <a className={`${styles['social-icon__link']}`} href="https://www.linkedin.com/company/xperiokids/" target="_blank">
            <ion-icon name="LinkedIn Page"></ion-icon>
          </a>
        </li>
        <li className={`${styles['social-icon__item']}`}>
          <a className={`${styles['social-icon__link']}`} href="#">
            <ion-icon name="Insta Page"></ion-icon>
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
          <a className={`${styles.menu__link}`} href="https://www.xperiokids.com/">
            Team
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="https://www.xperiokids.com/">
            Contact Us
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="https://www.xperiokids.com/">
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
      <img src={whatsapp_image} />
    </a>

    </div>
    </footer>
  );
};

export default Footer;
