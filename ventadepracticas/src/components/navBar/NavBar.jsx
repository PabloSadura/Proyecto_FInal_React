import React from "react";
import CartWidget from "../cartWidget/CartWidget";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">VPM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#consultas">Consultas</Nav.Link>
            <Nav.Link href="#sesiones">Sesiones</Nav.Link>
            <Nav.Link href="#Imagenes">Imagenes</Nav.Link>
            <Nav.Link href="#Laboratorio">Laboratorios</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sobre Nosotros</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
