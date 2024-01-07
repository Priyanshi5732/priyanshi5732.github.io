import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "../styles/Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Hackathons from "./Hackathons";
import Projects from "./Projects";
import Intro from "./Intro";

export default class Navigationbar extends Component {
  render() {
    return (
      <Router>
        <Navbar expand="lg" variant={"dark"} className="Navbar">
          <Navbar.Brand href="#">
            <div className="lefttext">
              <span class="box">
                <h4>my_space </h4>
              </span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="rightSide">
              <Nav.Link as={Link} to={"/intro"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/about"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"/hackathons"}>
                Hackathons
              </Nav.Link>
              <Nav.Link as={Link} to={"/projects"}>
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/hackathons" element={<Hackathons />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
