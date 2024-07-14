import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
document
  .querySelector('meta[name="viewport"]')
  .setAttribute("content", "width=device-width, initial-scale=1.0");

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
