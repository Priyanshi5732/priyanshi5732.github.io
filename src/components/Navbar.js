import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="lefttext">
        <span class="box">
          <h4>my_space </h4>
        </span>
      </div>
      <div className="rightSide">
        <a>
          <Link className="rightSideitem">About</Link>
          <Link className="rightSideitem">Hackathons</Link>
          <Link className="rightSideitem">Projects</Link>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
