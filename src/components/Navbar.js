import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
 
  return (
    <div className="navbar">
      <div className="leftSide">
        <p className="tommy">
        <div><h2>my-space</h2>
        </div>
        </p>
        <div className="hiddenLinks">
          <Link to="/About"> About </Link>
          <Link to="/Hackathons"> Hackathons </Link>
          <Link to="/Projects"> Projectss </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/About"> About </Link>
        <Link to="/Hackathons"> Hackathons </Link>
        <Link to="/Projects"> Projectss </Link>
      </div>
    </div>
  );
}

export default Navbar;
