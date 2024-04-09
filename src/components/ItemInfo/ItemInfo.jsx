import React, { useCallback, useEffect, useState } from "react";
import styles from "../styles/ItemInfo.module.css";
import { useParams } from "react-router";
import { godsArray, all_size } from "./helper";
import SizeComp from "./SizeComp";
import ScrollToTopOnMount from "../ScrollToTopOnMount";

const ItemInfo = ({ handleOnClickRemove, handleOnClickAddToCart, cart }) => {
  const { id } = useParams();
  const [god, setGod] = useState({});
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [mainImg, setMainImg] = useState(god.cloth_img);

  const getGodInfoIntoState = useCallback(() => {
    godsArray.map((god) =>
      Object.values(god).map((godInfo) => {
        let firstWord = godInfo.name.split(" ").splice(0, 1).toString();
        if (firstWord === id) {
          setGod(godInfo);
        }
        return godInfo;
      })
    );
  }, [id]);

  useEffect(() => {
    getGodInfoIntoState();
    setMainImg(god.cloth_img);
  }, [id, getGodInfoIntoState, god, quantity]);

  const handleOnClickPlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleOnClickMinusQuantity = () => {
    setQuantity(quantity - 1);
  };

  const inCart = Boolean(cart.find((cart_item) => cart_item.name === god.name));

  return (
    <>
    <ScrollToTopOnMount/>
    <div className={styles.info_item}>
      <div className={styles.info_item__content}>
        <div className={styles.info__images_block}>
          <div className={styles.info__images_container}>
            <img
              src={mainImg}
              alt="main_image"
              className={styles.info__main_img}
            />
            <div className={styles.info__mini_img}>
              <img
                src={god.cloth_img}
                alt="mini_image"
                onClick={(e) => setMainImg(e.target.src)}
              />
              <img
                src={god.char_img}
                alt="mini_image"
                onClick={(e) => setMainImg(e.target.src)}
              />
            </div>
          </div>
        </div>
        <div className={styles.info__addToCart_block}>
          <h1 className={styles.info__name}>{god.name}</h1>
          <p className={styles.info__price}>{god.price} USD</p>
          <span className={styles.info__shiping}>
            <u>Shipping</u> calculated at checkout
          </span>
          <p className={styles.info__size_title}>Size</p>
          <div className={styles.info__size_btns_block}>
            {all_size.map((item_size, index) => (
              <SizeComp
                size={item_size}
                setSize={setSize}
                key={item_size}
                index={index}
              />
            ))}
          </div>
          <div className={styles.info__quantity}>
            <span>Quantity</span>
            <div className={styles.info__quantity_btns}>
              <button
                className={styles.minus_quantity}
                onClick={() => handleOnClickMinusQuantity()}
                disabled={quantity === 1 ? true : false}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className={styles.plus_quantity}
                onClick={() => handleOnClickPlusQuantity()}
              >
                +
              </button>
            </div>
          </div>
          <button
            className={
              !inCart ? styles.addtocart_btn : styles.delete_from_cart_btn
            }
            onClick={() => {
              god.quantity = quantity;
              god.size = size;
              !inCart ? handleOnClickAddToCart(god) : handleOnClickRemove(god);
            }}
          >
            {!inCart ? "Add to cart" : "Remove from cart"}
          </button>
          <h2 className={styles.info__god_title}>{god.name}</h2>
          <p className={styles.info__god_underTitle}>{god.under_title}</p>
          <p className={styles.info__mithic_info}>
            Immerse yourself in Norse Mythology with an ultra-minimalist design.
            Our signature heavyweight cotton shapes a sleek and versatile
            T-shirt infused with the mystic power of runes, elevating your style
            and telling a story.
          </p>
          <ul className={styles.info__cloth_characteristics}>
            <li>Unisex apparel</li>
            <li>Premium 100% cotton</li>
            <li>Heavyweight fabric 6.5 oz/yd²</li>
            <li>More structured</li>
          </ul>
          <p className={styles.info__note}>
            <span className={styles.info__note_bold}>Note:</span> When selecting
            our unisex apparel, we recommend opting for one size larger than
            your regular size to ensure a comfortable fit, particularly for men.
          </p>
          <h2 className={styles.info__size_quide_title}>Size guide</h2>
          <ul className={styles.info__size_guide}>
            <li>
              <span></span>
              <span>WIDTH (inches)</span>
              <span>LENGTH (inches)</span>
            </li>
            <li>
              <span>S</span>
              <span>18</span>
              <span>29 ½</span>
            </li>
            <li>
              <span>M</span>
              <span>20</span>
              <span>30 ½</span>
            </li>
            <li>
              <span>L</span>
              <span>22</span>
              <span>31 ½</span>
            </li>
            <li>
              <span>XL</span>
              <span>24</span>
              <span>32 ½</span>
            </li>
            <li>
              <span>2XL</span>
              <span>26</span>
              <span>33 ½</span>
            </li>
            <li>
              <span>3XL</span>
              <span>28</span>
              <span>34 ½</span>
            </li>
            <li>
              <span>4XL</span>
              <span>30</span>
              <span>35 ½</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>  );
};

export default ItemInfo;
