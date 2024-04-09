export const handleQuantityChange = (index, newQuantity, cartQuantities, cart, setCart, setCartQuantities) => {
    const newQuantities = [...cartQuantities];
    newQuantities[index] = newQuantity;

    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        console.log(item);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
    setCartQuantities(newQuantities);

    localStorage.setItem("cart_items", JSON.stringify(updatedCart));
  };