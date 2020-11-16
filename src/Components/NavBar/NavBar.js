import React from 'react';
import { Nav, Navbar, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.scss';


const NavBar = () => {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Nav.Link
            as={Link} to="/">
            <img
              alt=""
              src="https://i.imgur.com/Hgi4KGz.png"
              width="100"
              height="40"
              className="d-inline-block align-top"
            />
          </Nav.Link>
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
              className="mr-3"
              href="/dashboard">
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