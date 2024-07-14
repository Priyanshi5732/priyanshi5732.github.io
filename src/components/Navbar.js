import React, { Component } from "react";
import "../styles/Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import PDF from "../Resume.pdf";
import Projects from "./Projects";
import Home from "./Home";
const unique = ">$ cd /root";

export default class Navigationbar extends Component {
  render() {
    return (
      <Router>
        <Navbar expand="lg" variant={"dark"} className="Navbar">
          <Navbar.Brand href="#">
            <div className="lefttext">
              <span class="box">
                <h4 className="liberation-mono-text"> {unique} </h4>
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="rightSide">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/projects"}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to={PDF} target="blank">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
