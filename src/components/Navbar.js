import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import "../styles/Navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const BasicExample = () => {
  return (
    <Navbar bg="dark" variant="dark"  expand="lg" >
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
            className="rightSide"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="Home">Home</Nav.Link>
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
