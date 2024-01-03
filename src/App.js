import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./pages/About";
import Hackathons from "./pages/Hackathons";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  document.documentElement.style.setProperty("--bodyColor", "green");
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Intro />
        <Routes>
          <Route path="/About" exact component={About} />
          <Route path="/Hackathons" exact component={Hackathons} />
          <Route path="/Projects" exact component={Projects} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
