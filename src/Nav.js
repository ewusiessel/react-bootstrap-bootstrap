import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import React from "react";

const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="nav-links" href="#home">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav-links" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-links" href="#featured">
                Featured
              </Nav.Link>
              <Nav.Link className="nav-links" href="#blog">
                Blog
              </Nav.Link>
              <Nav.Link className="nav-links" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
