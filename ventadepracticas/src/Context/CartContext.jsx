import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
    let newCart;
    let index = cart.findIndex((el) => el.id === items.id);
    cart[index].cantidad++;
    cart[index].total = cart[index].precio * cart[index].cantidad;
    newCart = [...cart];
    setCart(newCart);
  };

  const removeCount = (items) => {
    let newCart;
    let index = cart.findIndex((el) => el.id === items.id);
    cart[index].cantidad > 1 ? cart[index].cantidad-- : null;
    cart[index].total = cart[index].precio * cart[index].cantidad;
    newCart = [...cart];
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
  };

  const removeItem = (items) => {
    setCart(cart.filter((el) => el.id !== items.id));
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
