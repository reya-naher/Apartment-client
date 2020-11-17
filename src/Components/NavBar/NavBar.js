import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.scss';


const NavBar = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://i.imgur.com/Hgi4KGz.png"
            height="50px"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="mr-3"
              as={Link} to="/">
              Home
              </Nav.Link>
            <Nav.Link
              className="mr-3"
              href="#link">
              About
              </Nav.Link>
            <Nav.Link
              className="mr-3"
              href="#service">
              Service
              </Nav.Link>
            <Nav.Link
              className="mr-3"
              href="#link">
              Concerns
              </Nav.Link>
            <Nav.Link
              className="mr-3"
              href="#link">
              Event
              </Nav.Link>
            <Nav.Link
              className="mr-3"
              href="#contact">
              Contact
              </Nav.Link>
              <Nav.Link 
              as={Link}
              className="mr-3"
              to="/dashboard">
              Dashboard
              </Nav.Link>
            <Link to="/login">
              <Button
                className="pl-5 pr-5 login-btn"
              >
                Login
                </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;