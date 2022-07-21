import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { CartContext } from "../../../Context/CartContext";
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
      <Button onClick={clear} className="mt-4">
        Vaciar Carrito
      </Button>
    </Container>
  );
}
export default Cart;
