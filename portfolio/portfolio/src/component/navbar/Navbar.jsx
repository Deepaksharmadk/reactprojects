import React from "react";
import "./navbar.css";
import contactimg from "../../assets/contact.png";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div className="nav-m">
        <ul>
          <li>
            <NavLink className="captilization-nav">home</NavLink>
          </li>
          <li>
            <NavLink className="captilization-nav">about</NavLink>
          </li>
          <li>
            <NavLink className="captilization-nav">portfolio</NavLink>
          </li>
          <li>
            <NavLink className="captilization-nav">github</NavLink>
          </li>
        </ul>
      </div>
      <button className="navend-btn">
        <img className="navimg-btn" src={contactimg} alt="" />
        Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
