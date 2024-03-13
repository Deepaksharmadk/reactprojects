import React, { useState } from "react";

import "./navbar.css";
import menubar from "../../assets/menu.png";
import contactimg from "../../assets/contact.png";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div className="nav-m">
        <ul>
          <li>
            <NavLink to="/" className="captilization-nav">
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="captilization-nav">
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="captilization-nav">
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/github" className="captilization-nav">
              github
            </NavLink>
          </li>
        </ul>
      </div>
      <button
        className="navend-btn"
        // onClick={() => {
        //   const contact = document.querySelector(".contact");

        //   contact.scrollIntoView({ behavior: "smooth" });
        //   console.log(contact);
        // }}
      >
        <NavLink to="/contact" className="contact-end">
          Contact Me
        </NavLink>
      </button>
      <img
        className="navimg-btnmenu"
        src={menubar}
        alt="Mobile"
        onClick={() => {
          setshowmenu(!showmenu);
        }}
      />
      <div className="nav-menu" style={{ display: showmenu ? "flex" : "none" }}>
        <ul>
          <li>
            <NavLink
              className="captilization-nav-m"
              onClick={() => {
                setshowmenu(false);
              }}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="captilization-nav-m"
              onClick={() => {
                setshowmenu(false);
              }}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              className="captilization-nav-m"
              onClick={() => {
                setshowmenu(false);
              }}
            >
              portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className="captilization-nav-m"
              onClick={() => {
                setshowmenu(false);
              }}
            >
              github
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
