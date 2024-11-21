import React from 'react';
import styles from './footer.module.css';
import whatsapp_image from "../../assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>

      <ul className={`${styles['social-icon']}`}>
  <li className={`${styles['social-icon__item']}`} style={{ marginRight: '30px' }}>
    <a href="https://www.youtube.com/@Xperio-learning" target="_blank" rel="noopener noreferrer">
      <ion-icon name="logo-youtube" style={{ color: '#FF0000', fontSize: '2rem' }}></ion-icon>
    </a>
  </li>
  <li className={`${styles['social-icon__item']}`} style={{ marginRight: '30px' }}>
    <a href="https://www.linkedin.com/company/xperio-learning" target="_blank" rel="noopener noreferrer">
      <ion-icon name="logo-linkedin" style={{ color: '#0077B5', fontSize: '2rem' }}></ion-icon>
    </a>
  </li>
  <li className={`${styles['social-icon__item']}`}>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <ion-icon name="logo-instagram" style={{ color: '#E1306C', fontSize: '2rem' }}></ion-icon>
    </a>
  </li>
</ul>

      <ul className={`${styles.menu}`}>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="https://www.xperiolearning.com/">
            Home
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="/about">
            About Us
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="/gallery">
            Gallery
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} target="_blank" href="/voicemasters">
            VoiceMasters
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} href="https://www.xperiolearning.com/">
            Careers
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} target="_blank" href="/robotics">
            Robotics
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} target="_blank" href="https://maps.app.goo.gl/sn93JELCGweMpa3f9">
            Locate Us
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} target="_blank" href="/terms">
            Terms of Services
          </a>
        </li>
      </ul>
      <p>&copy;2024 xperiolearning.com | All Rights Reserved</p>

      <div className={styles.whatsapp_float}>
        <a href="https://wa.me/918904749795" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
          <img height={"100%"} width={"100%"} src={whatsapp_image} />
        </a>
      </div>

      <div className={styles.summer_camp_notification}>
        <a href="/robotics" className="summer_camp_notification" target="_blank" rel="noopener noreferrer"
        style={{
          textDecoration: 'none', 
        }}
        >
          <p><b>Robotics</b></p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
