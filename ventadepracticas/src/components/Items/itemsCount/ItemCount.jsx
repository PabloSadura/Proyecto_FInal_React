import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

function ItemCount({ profesional }) {
  const { addItems } = useContext(CartContext);

  return (
    <div>
      <button
        className="css-button-sliding-to-left--sky text-decoration-none text-center mt-4"
        onClick={() => {
          addItems(profesional);
        }}
      >
        Contratar
      </button>
    </div>
  );
}

export default ItemCount;
