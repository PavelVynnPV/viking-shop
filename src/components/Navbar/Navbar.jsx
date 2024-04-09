import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { swordsAnimation } from "../animations";

const Navbar = ({ cart }) => {
  const leftSword = useRef();
  const rightSword = useRef();
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    swordsAnimation(leftSword.current, rightSword.current);
  }, []);

  const handleOnClickOpenModal = () => {
    if (activeModal === false) {
      setActiveModal(true);
    } else {
      setActiveModal(false);
    }
  };

  return (
    <header>
      <div
        className={activeModal ? styles.acc_dark_bg : styles.acc_unActive}
        onClick={() => setActiveModal(false)}
      ></div>
      <div className={activeModal ? styles.acc_modal : styles.acc_unActive}>
        <span className={styles.acc_logo}></span>
        <span
          className={styles.acc_close_btn}
          onClick={() => setActiveModal(false)}
        ></span>
        <form action="" className={styles.acc_modal__form}>
          <label to="name">Name</label>
          <input type="text" placeholder="Your name" name="name" required />
          <label to="email">Email</label>
          <input type="email" placeholder="Your email" name="email" required />
          <label to="password">Password</label>
          <input
            type="password"
            placeholder="Your password"
            name="password"
            required
          />
          <input type="submit" value="Sign up" className={styles.sign_up_btn} />
        </form>
      </div>
      <nav id="navbar">
        <div className={styles.nav_content}>
          <div className={styles.logo_bar}>
            <span className={styles.search_icon}></span>
            <Link to="/" className={styles.logo}></Link>
            <div
              className={styles.cart_acc_icon}
              onClick={handleOnClickOpenModal}
            >
              <Link to="/cart" className={styles.cart_icon}>
                <span
                  className={
                    cart?.length >= 1
                      ? styles.items_in_cart_quantity
                      : styles.unActive
                  }
                >
                  {cart?.length}
                </span>
              </Link>
              <a href="#e" className={styles.acc_icon}></a>
            </div>
          </div>
          <ul className={styles.nav_list}>
            <Link to="/" className={styles.nav_list__item}>
              <li>Asgard</li>
            </Link>
            <Link to="/" className={styles.nav_list__item}>
              <li>Hoodies</li>
            </Link>
            <Link to="/" className={styles.nav_list__item}>
              <li>T-shirts</li>
            </Link>
            <Link to="/" className={styles.nav_list__item}>
              <li>Accessories</li>
            </Link>
            <Link to="/" className={styles.nav_list__item}>
              <li>Helheim</li>
            </Link>
            <Link to="/" className={styles.nav_list__item}>
              <li>Search</li>
            </Link>
          </ul>
          <p className={styles.header_bg_name}>ASGARD</p>
          <div className={styles.swords}>
            <span ref={leftSword} className={styles.leftSword}></span>
            <span ref={rightSword} className={styles.rightSword}></span>
          </div>
        </div>
      </nav>
      <div className={styles.header_bg}></div>
    </header>
  );
};

export default Navbar;
