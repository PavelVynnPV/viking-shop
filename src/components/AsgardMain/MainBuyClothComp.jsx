import React, { useRef } from "react";
import { Link } from "react-router-dom";

const MainBuyClothComp = ({ styles, god }) => {
  const cloth_img_ref = useRef();
  const char_img_ref = useRef();

  const show_cloth = () => {
    char_img_ref.current.style.display = "none";
    cloth_img_ref.current.style.display = "block";
  };
  const show_char = () => {
    char_img_ref.current.style.display = "block";
    cloth_img_ref.current.style.display = "none";
  };


  return (
    <Link
      to={`/iteminfo/${god.name}`}
      className={styles.cloth_for_buy__item}
      onMouseEnter={show_cloth}
      onMouseLeave={show_char}
    >
      <img
        src={god.char_img}
        alt={god.name}
        className={styles.cloth_img}
        ref={char_img_ref}
      />
      <img
        src={god.cloth_img}
        alt={god.name}
        className={styles.cloth_img_with_hover}
        ref={cloth_img_ref}
      />
      <p className={styles.god_name}>{god.name} Rune T-Shirt</p>
      <p className={styles.god_cloth_price}>From {god.price} USD</p>
    </Link>
  );
};

export default MainBuyClothComp;
