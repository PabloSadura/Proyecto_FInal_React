import React from "react";
import CartWidget from "../cartWidget/CartWidget";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to={"/"} className="navbar-brand">
          VPM
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/consulta" className="nav-link">
              Consultas
            </NavLink>
            <NavLink to="/sesiones" className="nav-link">
              Sesiones
            </NavLink>
            <NavLink to="/imagenes" className="nav-link">
              Imagenes
            </NavLink>
            <NavLink to="/laboratorio" className="nav-link">
              Laboratorios
            </NavLink>
          </Nav>
          <Nav></Nav>
          <Nav>
            <Link to={"/cart"} className="nav-link">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
