import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../../../Context/CartContext";
import FormOrder from "../../form/FormOrder";
import SweetAlert from "../../sweetAlert/SweetAlert";
import CartItems from "./CartItems";

function Cart() {
  const { cart, total } = useContext(CartContext);

  if (!cart.length) {
    return (
      <>
        <h3 className="text-center mt-4">No hay productos en el carrito</h3>
      </>
    );
  }
  return (
    <Container>
      <div className="d-flex justify-content-between">
        <div className="col-md-6 ">
          {cart.map((el) => (
            <CartItems items={el} key={el.id} />
          ))}
        </div>
        <FormOrder className="col-md-6" />
      </div>

      <div className="d-flex justify-content-end m-4">
        <h4 className="me-4">Total a pagar: </h4>
        <h4 className=""> ${total()}</h4>
      </div>
      <SweetAlert />
    </Container>
  );
}
export default Cart;
