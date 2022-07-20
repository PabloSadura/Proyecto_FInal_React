import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addItems = (items) => {
    let newCart;
    if (isInCart(items.id)) {
      let index = cart.findIndex((el) => el.id === items.id);
      cart[index].cantidad++;
      newCart = [...cart];
    } else {
      newCart = [...cart, items];
    }
    setCart(newCart);
  };

  const addCount = (items) => {
    let index = cart.findIndex((el) => el.id === items.id);
    cart[index].cantidad++;
  };

  const removeCount = (items) => {
    console.log(items);
  };

  const clear = () => {
    setCart([]);
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
        removeCount,
      ]}
    >
      {children}
    </CartContext.Provider>
  );
};
