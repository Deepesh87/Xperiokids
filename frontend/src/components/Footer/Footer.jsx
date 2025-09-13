import { useLocation } from "react-router-dom";
import React from 'react';
import { FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './footer.module.css';
import whatsapp_image from "../../assets/whatsapp.svg";
import stemLogo from "../../assets/stem.webp";


const Footer = () => {
  const location = useLocation();
  const hiddenRoutes = ["/public-speaking", "/olympiad", "/summer", "/terms"];

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
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/public-speaking" target="_blank">Public Speaking</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/olympiad" target="_blank">Olympiad</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/">Careers</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/sudoku" target="_blank">Sudoku</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="https://maps.app.goo.gl/2nkiPgKQfWt7qHzk6" target="_blank">Locate Us</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/terms" target="_blank">Terms of Services</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/library" target="_blank">Children's Library</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/bday" target="_blank">Birthday bash</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/summer" target="_blank">Summer Camp 2025</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/science" target="_blank">Science for Kids</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/robotics-for-children" target="_blank">Robotics for Kids</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/finance-for-kids" target="_blank">Financial Literacy for Kids</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/blog" target="_blank">Blog</a></li>
        <li className={`${styles.menu__item}`}><a className={`${styles.menu__link}`} href="/cancellation-refunds" target="_blank">Cancellation & Refunds</a></li>
      </ul>

      {/* 📍 SEO Boosting Contact Section */}
<section className={styles.contactDetails}>
  <h3>Contact Us</h3>

  <p className={styles.coloredBrand}>
    <strong>
      <span className={styles.x1}>X</span>
      <span className={styles.x2}>pe</span>
      <span className={styles.x3}>rio</span>
      <span className={styles.x4}> Learning</span>
    </strong>
  </p>

  <p>Haralur Main Road</p>
  <p>First Floor, Above Biggies Burger, Near Fisherman's Wharf</p>
  <p>📞 <a href="https://wa.me/918904749795">+91 89047 49795</a></p>
  <p>📧 <a href="mailto:xperiolearning@gmail.com">xperiolearning@gmail.com</a></p>
  <p>🕒 Mon–Sun: 10:00 AM – 5:00 PM</p>
</section>

<img src={stemLogo} alt="STEM logo" className={styles.stemLogo} />
<p>&copy;2025 xperiolearning.com | All rights Reserved</p>

      <div className={styles.whatsapp_float}>
        <a href="https://wa.me/918904749795" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
          <img height="100%" width="100%" src={whatsapp_image} alt="WhatsApp" />
        </a>
      </div>

      {!hiddenRoutes.includes(location.pathname) && (
        <div className={styles.summer_camp_notification}>
          <a href="/public-speaking" target="_blank" rel="noopener noreferrer">
            <p>🎤 <b> Public Speaking</b></p>
          </a>
        </div>
      )}
    </footer>
  );
};

export default Footer;
