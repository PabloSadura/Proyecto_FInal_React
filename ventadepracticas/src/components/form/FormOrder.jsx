import React, { useContext } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

import "./FormOrder.css";
function FormOrder() {
  const { user, setUser } = useContext(CartContext);

  // FUNCION QUE COMPLETA LOS DATOS DE USUARIO
  const validToUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // VALIDAR MAIL
  const validarEmail = (valor) => {
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)
      ? true
      : false;
  };

  return (
    <div className="m-3 p-4 border">
      <h3 className="text-center mb-3">Datos personales</h3>
      <Form>
        <Row>
          <Col>
            <Form.Control
              placeholder="Nombre"
              name="name"
              onChange={(e) => {
                validToUser(e);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Telefono"
              name="phone"
              onChange={(e) => {
                validToUser(e);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              className="mt-2"
              placeholder="Email"
              name="email"
              onBlur={(e) => {
                validarEmail(e.target.value)
                  ? validToUser(e)
                  : (e.target.className = "mt-2 invalid");
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              className="mt-2"
              placeholder="Verificar Email"
              name="email"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3 mt-3">
              <Form.Check
                type="checkbox"
                label="Aceptar Términos y Condiciones"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormOrder;
