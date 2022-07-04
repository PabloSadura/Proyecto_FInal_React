import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./items.css";

function Items({ products }) {
  const { id, tipo, img, nombre, precio, categoria } = products;

  return (
    <Card className="text-center mt-3 w-25 mx-1 shadow">
      <Card.Header as="h5">{nombre}</Card.Header>
      <Card.Img variant="top" src={img} className="p-2" />
      <Card.Body>
        {/* <Card.Title>{nombre}</Card.Title> */}
        <Card.Text>{precio}</Card.Text>
        <Link
          to={`/profesionales/${categoria}`}
          className="css-button-sliding-to-left--sky text-decoration-none"
        >
          Ver Profesionales
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Items;
