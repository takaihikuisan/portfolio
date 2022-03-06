import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./container/Home/Home.jsx";
import About from "./container/About/About.jsx";
import Works from "./container/Works/Works";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename="/portfolio/">
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Works />} path="/works" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
