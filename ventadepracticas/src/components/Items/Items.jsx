import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

function Items({ products }) {
  const { id, tipo, nombre, precio } = products;

  return (
    <Card className="text-center mt-3 w-25 mx-1 shadow">
      <Card.Header as="h5">{tipo}</Card.Header>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>$ {precio}</Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default Items;
