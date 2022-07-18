import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../../../Context/CartContext";
import CartItems from "./CartItems";
function Cart() {
  const [cart, clear] = useContext(CartContext);

  return (
    <Container>
      {cart.map((el) => (
        <CartItems />
      ))}
    </Container>
  );
}
export default Cart;
