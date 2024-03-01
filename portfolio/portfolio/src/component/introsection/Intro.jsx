import React from "react";
import "./intro.css";
import introimg from "../../assets/image.png";
import hireme from "../../assets/hireme.png";
import { NavLink } from "react-router-dom";
function Intro() {
  return (
    <section id="intro">
      <div className="into-context">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="intro-name">Deepak</span>
          <br />
          Web Developer
        </span>
        <p className="intopara">I am a skill</p>
        <NavLink>
          <button className="btn-l">
            <img src={hireme} alt="" className="btnimg" />
            Hire Me
          </button>
        </NavLink>
      </div>
      <img className="into-context-img" src={introimg} alt="" />
    </section>
  );
}

export default Intro;
