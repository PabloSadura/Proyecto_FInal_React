import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../../../Context/CartContext";
import SweetAlert from "../../sweetAlert/SweetAlert";

import CartItems from "./CartItems";
function Cart() {
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

  if (!cart.length) {
    return (
      <>
        <h3 className="text-center mt-4">No hay productos en el carrito</h3>
      </>
    );
  }
  return (
    <Container>
      {cart.map((el) => (
        <CartItems items={el} key={el.id} />
      ))}
      <div className="d-flex justify-content-end m-4">
        <h4 className="me-4">Total a pagar: </h4>
        <h4 className="">
          {" "}
          ${cart.map((el) => el.total).reduce((prev, curr) => prev + curr, 0)}
        </h4>
      </div>
      <SweetAlert />
    </Container>
  );
}
export default Cart;
