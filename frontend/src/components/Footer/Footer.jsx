import React from 'react';
import { FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import from react-icons
import styles from './footer.module.css';
import whatsapp_image from "../../assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>

      <ul className={`${styles['social-icon']}`}>
  <li className={`${styles['social-icon__item']}`} style={{ marginRight: '30px' }}>
    <a href="https://www.youtube.com/@Xperio-learning" target="_blank" rel="noopener noreferrer">
    <FaYoutube size={32} color="#FF0000" />
    </a>
  </li>
  <li className={`${styles['social-icon__item']}`} style={{ marginRight: '30px' }}>
    <a href="https://www.linkedin.com/company/xperio-learning" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={32} color="#0077B5" />
    </a>
  </li>
  <li className={`${styles['social-icon__item']}`}>
    <a href="#" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={32} color="#E1306C" />
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
          <a className={`${styles.menu__link}`} target="_blank" href="/sudoku">
            Sudoku
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} target="_blank" href="https://maps.app.goo.gl/2nkiPgKQfWt7qHzk6">         
            Locate Us
          </a>
        </li>
        <li className={`${styles.menu__item}`}>
          <a className={`${styles.menu__link}`} target="_blank" href="/terms">
            Terms of Services
          </a>
        </li>
      </ul>
      <p>&copy;2025 xperiolearning.com | All Rights Reserved</p>

      <div className={styles.whatsapp_float}>
        <a href="https://wa.me/918904749795" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
          <img height={"100%"} width={"100%"} src={whatsapp_image} />
        </a>
      </div>

      <div className={styles.summer_camp_notification}>
        <a href="/camp" className="summer_camp_notification" target="_blank" rel="noopener noreferrer"
        style={{
          textDecoration: 'none', 
        }}
        >
          <p><b>Summer Camp25</b></p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
