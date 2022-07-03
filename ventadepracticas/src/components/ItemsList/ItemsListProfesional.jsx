import React from "react";
import { Container } from "react-bootstrap";
import ItemsProfesional from "../Items/ItemsProfesional";

function ItemsListProfesional({ profesion }) {
  return (
    <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
      {profesion.map((element) => (
        <ItemsProfesional profesional={element} key={element.id} />
      ))}
    </Container>
  );
}

export default ItemsListProfesional;
