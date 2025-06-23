import { useLocation } from "react-router-dom";
import React from 'react';
import { FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './footer.module.css';
import whatsapp_image from "../../assets/whatsapp.svg";

const Footer = () => {
  const location = useLocation(); 
  const hiddenRoutes = ["/robotics", "/science", "/summer", "/terms"];
  return (
    <footer className={`${styles.footer}`}>
      <ul className={`${styles['social-icon']}`}>
        <li className={`${styles['social-icon__item']}`}>
          <a href="https://www.youtube.com/@Xperio-learning" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={32} color="#FF0000" />
          </a>
        </li>
        <li className={`${styles['social-icon__item']}`}>
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
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/">Home</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/about">About Us</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/gallery">Gallery</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/voicemasters" target="_blank">VoiceMasters</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/olympiad" target="_blank">Olympiad</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/">Careers</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/sudoku" target="_blank">Sudoku</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="https://maps.app.goo.gl/2nkiPgKQfWt7qHzk6" target="_blank">Locate Us</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/terms" target="_blank">Terms of Services</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/bday" target="_blank">Birthday bash</a></li>
      </ul>

      <p>&copy;2025 xperiolearning.com | All rights Reserved</p>

      <div className={styles.whatsapp_float}>
        <a href="https://wa.me/918904749795" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
          <img height="100%" width="100%" src={whatsapp_image} alt="WhatsApp" />
        </a>
      </div>



{/* {!hiddenRoutes.includes(location.pathname) && (
  <div className={styles.summer_camp_notification}>
    <a href="/summer" target="_blank" rel="noopener noreferrer">
      <p>🚀 <b>Summer Camp'25</b></p>
    </a>
  </div>
)} */}

{!hiddenRoutes.includes(location.pathname) && (
  <div className={styles.summer_camp_notification}>
    <a href="/voicemasters" target="_blank" rel="noopener noreferrer">
      <p>🎤 <b> Public Speaking</b></p>
    </a>
  </div>
)}


    </footer>
  );
};

export default Footer;
