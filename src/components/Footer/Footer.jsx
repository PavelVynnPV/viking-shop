import React from "react";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";
import footer_runes from "../images/footer/runes.jpg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <h2 className={styles.footer__link_title}>Quick links</h2>
          <ul className={styles.footer__links}>
            <Link to="/" className={styles.footer__link_item}>
              <li>Search</li>
            </Link>
            <Link to="/" className={styles.footer__link_item}>
              <li>About Us</li>
            </Link>
            <Link to="/" className={styles.footer__link_item}>
              <li>Terms of Service</li>
            </Link>
            <Link to="/" className={styles.footer__link_item}>
              <li>Refund Policy</li>
            </Link>
            <Link to="/" className={styles.footer__link_item}>
              <li>Contact</li>
            </Link>
          </ul>
          <h2 className={styles.footer__sunscr_title}>Subscribe to my email</h2>
          <span className={styles.footer__email}>pavel.vynn@gmail.com</span>
        </div>
        <img
          src={footer_runes}
          alt="runes"
          className={styles.footer__runes_img}
        />
      </div>
    </footer>
  );
};

export default Footer;
