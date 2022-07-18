import React from "react";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import "./Cart.css";
import { useState } from "react";

function CartItems({ cart }) {
  const [valor, setValor] = useState([]);
  const {
    nombre,
    especialidad,
    categoria,
    precio,
    id,
    img,
    practica1,
    practica2,
  } = cart.profesional;
  const [removeItem] = useContext(CartContext);
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
        <label htmlFor="selectToastPlacement">Elegir Práctica</label>
        <Form.Select
          id="selectToastPlacement"
          className="mt-2"
          onChange={(e) => setValor(e.currentTarget.value)}
        >
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
        <h5>Cantidad: {cart.quantity}</h5>
        <h2>${valor}</h2>
      </div>
    </div>
  );
}

export default CartItems;
