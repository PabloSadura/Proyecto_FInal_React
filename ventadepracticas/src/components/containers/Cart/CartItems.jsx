import React from "react";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./Cart.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

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

  const { nombre, cantidad, especialidad, img, practica1, practica2 } = items;

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
        <Form.Select
          id="selectToastPlacement"
          className="mt-2"
          onChange={(e) => setValor(e.currentTarget.value)}
        >
          <>
            <option value="">Elegir práctica</option>
          </>
          {[practica1, practica2].map((p) => (
            <>
              <option key={p} value={p.precio}>
                {p.practica}
              </option>
            </>
          ))}
        </Form.Select>
      </div>
      <div>
        <div className="d-flex">
          <h5>Cantidad:</h5>
          <FontAwesomeIcon
            icon={faPlusCircle}
            className="btn"
            onClick={() => {
              addCount(items);
            }}
          />
          <h5 className="mx-2">{cantidad}</h5>
          <FontAwesomeIcon
            icon={faMinusCircle}
            className="btn"
            onClick={() => {
              removeCount(items);
            }}
          />
        </div>
        <h2>${valor * cantidad}</h2>
      </div>
    </div>
  );
}

export default CartItems;
