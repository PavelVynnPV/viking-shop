import React, { useState, useEffect, useCallback, useRef } from "react";
import { handleQuantityChange } from "./helper";
import ScrollToTopOnMount from "../ScrollToTopOnMount";
import emailjs from "@emailjs/browser";
import logo from "../images/logo.png";

import styles from "../styles/Cart.module.css";

const serviceId = "service_jt9up8t";
const templateId = "template_rd8863i";
const public_key = "HlZkMGi5xG0ddQs7v";

const Cart = ({ cart, handleOnClickRemove, setCart }) => {
  const [cartQuantities, setCartQuantities] = useState(
    cart?.map((item) => item.quantity)
  );
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [total, setTotal] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const error_message = useRef();
  const form = useRef();

  const getTotalPrice = useCallback(() => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price.slice(1) * cart[i].quantity;
    }
    setTotal(totalPrice);
  }, [cart]);

  useEffect(() => {
    getTotalPrice();
    emailjs.init(public_key);
  }, [cart, getTotalPrice]);

  const isValidEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.value;

    if (isValidEmail(email)) {
      error_message.current.style.display = "none";
    } else {
      error_message.current.style.display = "block";
    }
    if (email.length === 0) {
      error_message.current.style.display = "none";
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      emailjs.send(serviceId, templateId, {
        name: "Grayman-shop",
        user_name: name,
        recipient: email,
        total_price: total,
        img: logo,
        message: cart.map((item) => {
          return `${item.quantity} T-shirts ${item.name}`;
        }),
      });
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      console.log("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ScrollToTopOnMount />
      <p
        className={
          showToast ? styles.toast_on_submit : styles.toast_on_submit_hidden
        }
      >
        The email was sent
      </p>
      <div className={styles.cart}>
        <div className={styles.cart__container}>
          <h1 className={styles.cart__title}>Your cart</h1>
          <ul className={styles.cart__list}>
            <li className={styles.cart__list_item}>
              <span className={styles.cart__product}>Product</span>
              <span className={styles.cart__quantity}>Quantity</span>
              <span className={styles.cart__total}>Total</span>
            </li>
            {cart.map((cart_item, index) => {
              let total_price = cart_item.price.slice(1) * cart_item.quantity;

              return (
                <li className={styles.cart__list_item} key={index}>
                  <div className={styles.cart__list_item_product}>
                    <img src={cart_item.cloth_img} alt="product_image" />
                    <div className={styles.cart__list_item_info}>
                      <h3>{cart_item.name}</h3>
                      <span>Price: {cart_item.price}</span>
                      <span>Size: {cart_item.size}</span>
                    </div>
                  </div>
                  <div className={styles.cart__list_item_quantity}>
                    <div className={styles.cart__list_item_quantity_container}>
                      <div className={styles.info__quantity_btns}>
                        <button
                          className={styles.minus_quantity}
                          onClick={() => {
                            handleQuantityChange(
                              index,
                              cartQuantities[index] - 1,
                              cartQuantities,
                              cart,
                              setCart,
                              setCartQuantities
                            );
                            cart_item.quantity = cartQuantities[index] - 1;
                          }}
                          disabled={cartQuantities[index] === 1}
                        >
                          -
                        </button>
                        <span>{cart_item.quantity}</span>
                        <button
                          className={styles.plus_quantity}
                          onClick={() => {
                            handleQuantityChange(
                              index,
                              cartQuantities[index] + 1,
                              cartQuantities,
                              cart,
                              setCart,
                              setCartQuantities
                            );
                            cart_item.quantity = cartQuantities[index] + 1;
                          }}
                        >
                          +
                        </button>
                      </div>
                      <span
                        className={styles.delete_icon}
                        onClick={() => handleOnClickRemove(cart_item)}
                      ></span>
                    </div>
                  </div>
                  <div className={styles.cart__item_total_price}>
                    ${total_price}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={styles.total_and_checkout}>
            <h3 className={styles.estimated_total}>
              Estimated total: {total === 0 ? null : `$${total} USD`}
            </h3>
            <p className={styles.taxed}>
              Taxes, Discounts and <u>shipping</u> calculated at checkout
            </p>
            <form
              ref={form}
              className={styles.send_to_email_form}
              onSubmit={sendEmail}
            >
              <label to="name">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className={styles.user_email}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label to="email">Email:</label>
              <input
                type="email"
                placeholder="Your email"
                className={styles.user_email}
                onChange={(e) => {
                  handleSubmit(e);
                  setEmail(e.target.value);
                }}
                required
              />
              <span ref={error_message} className={styles.error_email_message}>
                Your email is not valid
              </span>
              <input
                type="submit"
                value="Check out"
                className={styles.checkout_btn}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
