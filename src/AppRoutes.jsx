import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AsgardMain } from "./components/AsgardMain";
import { Footer } from "./components/Footer";
import ItemInfo from "./components/ItemInfo/ItemInfo";
import { Cart } from "./components/Cart";
import ScrollToTop from "./components/ScrollToTop";

const AppRoutes = () => {
  const [itemDetails, setItemDetails] = useState();
  const [cart, setCart] = useState([]);
  const [windowScroll, setWindowScroll] = useState(window.scrollY);
  let localCart = JSON.parse(localStorage.getItem("cart_items")) || [];
  
  const handleScroll = () => {
    setWindowScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const handleOnClickAddToCart = (god) => {
    const newCartItemAdd = [...cart, god];

    const saveToLocalStorage = (god) => {
      localStorage.setItem("cart_items", JSON.stringify(god));
    };
    saveToLocalStorage(newCartItemAdd);
    setCart(newCartItemAdd);
  };

  function handleOnClickRemove(god) {
    const newCartItemList = cart.filter((cart_item) => {
      return cart_item.name !== god.name;
    });

    const saveToLocalStorage = (god) => {
      localStorage.setItem("cart_items", JSON.stringify(god));
    };
    setCart(newCartItemList);
    saveToLocalStorage(newCartItemList);
  }

  return (
    <Router>
      <ScrollToTop/>
      <Navbar cart={localCart} />
      <Routes>
        <Route
          exact
          path="/"
          element={<AsgardMain setItemDetails={setItemDetails} />}
        />
        <Route
          exact
          path="/iteminfo/:id"
          element={
            <ItemInfo
              handleOnClickAddToCart={handleOnClickAddToCart}
              handleOnClickRemove={handleOnClickRemove}
              cart={cart}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cart={localCart}
              handleOnClickRemove={handleOnClickRemove}
              setCart={setCart}
            />
          }
        />
      </Routes>
      <Footer />
      <span
        className={windowScroll >= 1500 ? "scroll_to_top" : "unActive"}
        onClick={(e) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        ↑
      </span>
    </Router>
  );
};

export default AppRoutes;
