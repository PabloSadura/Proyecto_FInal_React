import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./items.css";

function Items({ products }) {
  const { img, nombre, precio, categoria } = products;

  return (
    <Card className="col-12 col-md-3  text-center mt-3 mx-1 shadow">
      <Card.Header as="h5">{nombre}</Card.Header>
      <Card.Img variant="top" src={img} className="p-2" />
      <Card.Body>
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
