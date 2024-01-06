import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./pages/About";
import Hackathons from "./pages/Hackathons";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Intro />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Hackathons" element={<Hackathons/>} />
          <Route path="/Projects" element={<Projects/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
