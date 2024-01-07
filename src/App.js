import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro />
    </div>
  );
}

export default App;
