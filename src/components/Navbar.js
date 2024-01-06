import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const BasicExample = () => {
  return (
    <Navbar bg="dark"  expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="lefttext">
            <span class="box">
              <h4>my_space </h4>
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="About">About</NavDropdown.Item>
              <NavDropdown.Item href="Hackathons">
                Hackathons
              </NavDropdown.Item>
              <NavDropdown.Item href="Projects">Projects</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicExample;
