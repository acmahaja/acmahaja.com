import React, { useEffect } from "react";
import "../css/Navbar.css";
import { FiSettings } from "react-icons/fi";


import { NavLink } from "react-router-dom";

const Navbar = ({ color, updateColor, currPage }) => {
  useEffect(() => {
    // console.log(color);
    document.documentElement.style.setProperty("--theme-color", `${color} `);
  });

  const setColor = () => {
    updateColor(
      `${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)}`
    );
  };


  return (
    <header>
      <div className="Highlight"></div>
      <nav>
        <NavLink to="/" className="Logo">
          <span>/</span>acmahaja
        </NavLink>
        <ul>
          <NavLink activeClassName="active" to="/" className={`${currPage === "home" ? 'selected' : null}`} >Home</NavLink>
          <NavLink activeClassName="active" to="/about" className={`${currPage === "about" ? 'selected' : null}`}>About</NavLink>
          <NavLink activeClassName="active" to="/projects" className={`${currPage === "projects" ? 'selected' : null}`}>Projects</NavLink>
          <NavLink activeClassName="active" to="/resume" className={`${currPage === "resume" ? 'selected' : null}`}>Resume</NavLink>
          <FiSettings color="white" fontSize={20}/>
        </ul>
      </nav>
      {/* <button onClick={setColor}>Change color</button> */}
    </header>
  );
};

export default Navbar;
