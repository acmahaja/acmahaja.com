import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoMatch from "./NoMatch";
import Home from "./Home";
import Navbar from "./Components/Navbar";

import "./css/App.css";
import "./css/Dark.css";
import "./css/Light.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || "true"
  );

  const [color, setColor] = useState(
    JSON.parse(localStorage.getItem("color")) || "234, 76, 137"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("color", JSON.stringify(color));
  });

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "true" ? "false" : "true");
  };

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  const randColor = () => {
    updateColor(
      `${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}`
    );
  };

  return (
    <div className={`App ${darkMode === "true" ? "Dark" : "Light"}`}>
      <Router>
        <Navbar color={color} updateColor={updateColor} />
        <button onClick={randColor}>Change color</button>
        <button onClick={toggleDarkMode}>Change theme</button>
        <Routes>
          <Route index element={<Home toggleDarkMode={toggleDarkMode} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
