import React, { Component } from "react";
import "../styles/About.css";
import cv from "./cv.json";
import Bottom from "./Bottom";
import Navbar from "./Navbar";

export default class About extends Component {
  render() {
    const { Aboutme } = cv;
    return (
      
          <section id="Aboutme">

            <Navbar />
            <div className="about">
              <h1>About me</h1>
              <div className="content"><div dangerouslySetInnerHTML={{ __html: Aboutme }} /></div>
            </div>
            <Bottom />
          </section>
        
        
      




    );
  }
}
