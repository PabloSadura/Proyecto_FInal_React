import React from "react";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./Cart.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./cart.css";

function CartItems({ items }) {
  const [valor, setValor] = useState([]);
  const [
    cart,
    setCart,
    addItems,
    removeItem,
    clear,
    isInCart,
    addCount,
    removeCount,
  ] = useContext(CartContext);

  const { nombre, cantidad, especialidad, img, total } = items;
  console.log(items);
  return (
    <div className="border mt-3 p-3 rounded shadow d-flex justify-content-evenly">
      <div className="d-flex">
        <img src={img} alt="" className="imagen me-4" />
        <div>
          <h3>{nombre}</h3>
          <h6>{especialidad}</h6>
        </div>
      </div>

      <div>
        <div className="d-flex">
          <h5>Cantidad:</h5>
          <FontAwesomeIcon
            icon={faMinusCircle}
            className="icons"
            onClick={() => {
              removeCount(items);
            }}
          />
          <h5 className="mx-2">{cantidad}</h5>
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
        <h2 className="text-end mt-3">$ {total}</h2>
      </div>
    </div>
  );
}

export default CartItems;
