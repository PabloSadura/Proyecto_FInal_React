import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [counter, setCounter] = useState(1);

  const addItems = (items) => {
    if (isInCart(items.id)) {
      let index = cart.findIndex((el) => el.id === items.id);
      cart[index].cantidad++;
    } else {
      setCart([...cart, items]);
    }
  };

  const addCount = (items) => {
    let index = cart.findIndex((el) => el.id === items.id);
    cart[index].cantidad++;
  };

  const minusCount = (items) => {
    let index = cart.findIndex((el) => el.id === items.id);
    console.log(cart[index]);
    cart[index].cantidad ? cart[index].cantidad-- : null;
  };

  const clear = () => {
    setCart();
  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider
      value={[
        cart,
        setCart,
        addItems,
        removeItem,
        clear,
        isInCart,
        addCount,
        minusCount,
      ]}
    >
      {children}
    </CartContext.Provider>
  );
};
