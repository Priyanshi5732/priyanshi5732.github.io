import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import React, { Component } from "react";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
