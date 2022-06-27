import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function CartWidget() {
  return (
    <div className="d-flex align-center">
      <div className="iconCart me-3">
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      <p className="aling-center m-0">Mi Compra</p>
    </div>
  );
}

export default CartWidget;
