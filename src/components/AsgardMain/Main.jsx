import React, { useEffect, useRef } from "react";
import styles from "../styles/Main.module.css";
import MainComponent from "./MainComponent";
import { Link } from "react-router-dom";
import MainBuyClothComp from "./MainBuyClothComp";
import { imageAnimate } from "./gsapHelper";
import { godsArray, godsClothRuneArr } from "./helper";

const Main = ({ setItemDetails }) => {
  const buy_img = useRef();
  const buy_img2 = useRef();
  const buy_img3 = useRef();
  const buy_img4 = useRef();

  useEffect(() => {
    imageAnimate(buy_img, buy_img2, buy_img3, buy_img4);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className={styles.main_content}>
        <div className={styles.main__dark_block_cloth}>
          <div className={styles.main__top_title}>
            <h1 className={styles.odin_title}>ODIN</h1>
            <span className={styles.odin_says}>Says</span>
            <p className={styles.odin_text}>
              `Praise the Past Embrace the Future`
            </p>
          </div>
          {Object.entries(godsArray[0])
            .slice(0, 4)
            .map(([key, value]) => (
              <MainComponent styles={styles} god={value} key={key} />
            ))}
        </div>
      </div>
      <div className={styles.main__buy_top_cloth}>
        <div className={styles.main__content}>
          <Link to="/" className={styles.buy_top__item} ref={buy_img}>
            <span className={styles.buy_top__cloth_img_odin}></span>
            <h2 className={styles.buy_top__title}>Odin Hoodie</h2>
            <span className={styles.buy_top__price}>From $62.00 USD</span>
          </Link>
          <Link to="/" className={styles.buy_top__item} ref={buy_img2}>
            <span className={styles.buy_top__cloth_img_thor}></span>
            <h2 className={styles.buy_top__title}>Thor Hoodie</h2>
            <span className={styles.buy_top__price}>From $62.00 USD</span>
          </Link>
          <Link to="/" className={styles.buy_top__item} ref={buy_img3}>
            <span className={styles.buy_top__cloth_img_tyr}></span>
            <h2 className={styles.buy_top__title}>Tyr Hoodie</h2>
            <span className={styles.buy_top__price}>From $62.00 USD</span>
          </Link>
          <Link to="/" className={styles.buy_top__item} ref={buy_img4}>
            <span className={styles.buy_top__cloth_img_loki}></span>
            <h2 className={styles.buy_top__title}>Loki Hoodie</h2>
            <span className={styles.buy_top__price}>From $62.00 USD</span>
          </Link>
        </div>
      </div>

      <div className={styles.main_content}>
        <div className={styles.main__dark_block_cloth}>
          {Object.entries(godsArray[0])
            .slice(4, 8)
            .map(([key, value]) => (
              <MainComponent styles={styles} god={value} key={key} />
            ))}
        </div>
      </div>

      <div className={styles.main_all_cloth_for_buy}>
        <div className={styles.main__content}>
          <div className={styles.main__buy_items_block}>
            {godsClothRuneArr.map((god) =>
              Object.values(god).map((item, index) => (
                <MainBuyClothComp styles={styles} god={item} key={index} />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
