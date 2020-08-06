import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
        <Nav>
          <Nav.Link className="text-white">
            <Link className="text-white" to="/">Home</Link>
          </Nav.Link>
          <Nav.Link className="text-white">
            <Link className="text-white" to="/Meteo">Méteo</Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="text-white" to="/Convert">Convert</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
