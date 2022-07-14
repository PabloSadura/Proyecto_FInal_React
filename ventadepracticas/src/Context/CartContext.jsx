import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItems = (items) => {
    isInCart(items.id) ? null : setCart([...cart, items]);
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
      value={[cart, setCart, addItems, clear, isInCart, removeItem]}
    >
      {children}
    </CartContext.Provider>
  );
};
