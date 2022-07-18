import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../../../Context/CartContext";
import CartItems from "./CartItems";
function Cart() {
  const [cart, clear] = useContext(CartContext);
  console.log(cart);
  return (
    <Container>
      {cart.map((el) => (
        <CartItems cart={el} />
      ))}
    </Container>
  );
}
export default Cart;
