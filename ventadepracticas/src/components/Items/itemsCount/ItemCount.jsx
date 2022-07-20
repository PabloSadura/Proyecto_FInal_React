import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../../Context/CartContext";

function ItemCount({ profesional }) {
  const [cart, setCart, addItems] = useContext(CartContext);

  return (
    <div>
      <button
        className="css-button-sliding-to-left--sky text-decoration-none text-center mt-4"
        onClick={() => {
          addItems({ ...profesional, cantidad: 1 });
        }}
      >
        Contratar
      </button>
    </div>
  );
}

export default ItemCount;
