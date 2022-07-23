import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./CartWidget.css";
import { useEffect } from "react";

function CartWidget() {
  const [cart] = useContext(CartContext);
  const [count, setCount] = useState([]);

  useEffect(() => {
    if (cart) {
      setCount(
        cart.map((el) => el.quantity).reduce((prev, curr) => prev + curr, 0)
      );
    }
  }, [cart]);

  return (
    <div className="d-flex align-center">
      <div className="iconCart me-3">
        <FontAwesomeIcon icon={faShoppingCart} /> ({count})
      </div>
      {cart.length ? (
        <button className="css-button-fully-rounded--sand text-decoration-none">
          Finalizar Compra
        </button>
      ) : (
        <p className="aling-center m-0">Mi Compra</p>
      )}
    </div>
  );
}

export default CartWidget;
