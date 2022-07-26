import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ItemsProfesional({ profesional }) {
  const { id, rate, nombre, especialidad, localidad } = profesional;

  return (
    <Card className="text-center mt-3 w-25 mx-1 shadow">
      <Card.Header as="h5">{nombre}</Card.Header>
      <Card.Body>
        <Card.Text>{localidad}</Card.Text>
        <Card.Text>{especialidad}</Card.Text>
        <FontAwesomeIcon icon={faStar} />
        <Card.Text>Puntuación: {rate} </Card.Text>
        <Link
          to={`/details/${id}`}
          className="css-button-sliding-to-left--sky text-decoration-none"
        >
          Detalles
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ItemsProfesional;
