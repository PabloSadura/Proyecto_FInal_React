import { memo } from "react";
import { Container } from "react-bootstrap";
import Items from "../Items/Items";

const ItemsList = memo(({ producto }) => {
  return (
    <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
      {producto.map((element) => (
        <Items products={element} />
      ))}
    </Container>
  );
});

export default ItemsList;
