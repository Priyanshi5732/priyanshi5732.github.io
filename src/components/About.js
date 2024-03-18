import React, { Component } from "react";
import "../styles/About.css";
import cv from "./cv.json";

export default class About extends Component {
  render() {
    const { Aboutme } = cv;
    return (
      <div className="about">
        <h2>About me</h2>
        <div className="content">{Aboutme}</div>
      </div>
    );
  }
}
