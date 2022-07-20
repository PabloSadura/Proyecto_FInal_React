import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./CartWidget.css";

function CartWidget() {
  const [cart] = useContext(CartContext);

  const sumaCant = () => {
    return cart.map((el) => el.cantidad).reduce((prev, curr) => prev + curr, 0);
  };

  return (
    <div className="d-flex align-center">
      <div className="iconCart me-3">
        <FontAwesomeIcon icon={faShoppingCart} /> ({sumaCant()})
      </div>
      {cart ? (
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
