import React, { Component } from "react";
import "../styles/Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
const unique = ">$ cd /root";

function Header() {
  const handleHomeClick = () => {
    window.location.reload();
  };

  return (
    <Navbar expand="lg" variant={"dark"} className="Navbar">
      <Navbar.Brand href="#">
        <div className="lefttext">
          <span class="box">
            <h4 className="liberation-mono-text"> {unique} </h4>
          </span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="rightSide">
          <Nav.Link href="/Home" onClick={handleHomeClick}>Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="projects">Projects</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

}
export default Header;