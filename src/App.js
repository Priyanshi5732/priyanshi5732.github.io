import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Intro />
      </div>
    );
    }
}

export default App;
