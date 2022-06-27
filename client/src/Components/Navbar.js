import React, { useEffect } from "react";
import "../css/Navbar.css";
import { FiSettings } from "react-icons/fi";


import { NavLink } from "react-router-dom";

const Navbar = ({ color, updateColor, currPage }) => {
  useEffect(() => {
    // console.log(color);
    document.documentElement.style.setProperty("--theme-color", `${color} `);
  });

  return (
    <header>
      <div className="Highlight"></div>
      <nav>
        <NavLink to="/" id="Logo">
          <span>/</span>acmahaja
        </NavLink>
        <ul>
          <NavLink activeClassName="active" to="/" className={`${currPage === "home" ? 'selected' : null}`} >Home</NavLink>
          <NavLink activeClassName="active" to="/about" className={`${currPage === "about" ? 'selected' : null}`}>About</NavLink>
          <NavLink activeClassName="active" to="/projects" className={`${currPage === "projects" ? 'selected' : null}`}>Projects</NavLink>
          <NavLink activeClassName="active" to="/blog" className={`${currPage === "resume" ? 'selected' : null}`}>Resume</NavLink>
          <NavLink activeClassName="active" to="/resume" className={`${currPage === "resume" ? 'selected' : null}`}>Resume</NavLink>
          <FiSettings id="settingsIcon" fontSize={20}/>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
