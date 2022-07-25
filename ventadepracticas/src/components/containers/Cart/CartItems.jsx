import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./cart.css";

function CartItems({ items }) {
  const { removeItem, addCount, removeCount } = useContext(CartContext);

  const { nombre, quantity, especialidad, img, precio } = items;

  return (
    <div className="border mt-3 p-4 rounded shadow target">
      <div className="d-flex justify-content-between">
        <img src={img} alt="" className="imagen me-4" />
        <div>
          <h3>{nombre}</h3>
          <h6>{especialidad}</h6>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <h5>Cantidad:</h5>
          <FontAwesomeIcon
            icon={faMinusCircle}
            className="icons"
            onClick={() => {
              removeCount(items);
            }}
          />
          <h5 className="mx-2">{quantity}</h5>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="icons"
            onClick={() => {
              addCount(items);
            }}
          />
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="ms-3 icons"
            onClick={() => {
              removeItem(items);
            }}
          />
        </div>
      </div>

      <div className="row">
        <h2 className="text-end mt-2">$ {quantity * precio}</h2>
      </div>
    </div>
  );
}

export default CartItems;
