import React from "react";
import { useState, useEffect } from "react";

import "./css/App.css";
import "./css/Dark.css";
import "./css/Light.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || "true"
  );

  const [color, setColor] = useState(
    JSON.parse(localStorage.getItem("color")) || "EA4C89"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("color", JSON.stringify(darkMode));
  });

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "true" ? "false" : "true");
  };


  return (
    <div className={`App ${darkMode === "true" ? "Dark" : "Light"}`}>

    </div>
  );
};

export default Home;
