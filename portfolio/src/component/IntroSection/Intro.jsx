import React from "react";
import "./intro.css";
import deepak12 from "../../assets/skillsimg/deepak12.png";
import introimg from "../../assets/image.png";
import hireme from "../../assets/hireme.png";
import { NavLink } from "react-router-dom";
import ExampleComponent from "../TypingAnimation/ExampleComponent";
function Intro() {
  return (
    <section id="intro">
      <div className="into-context">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="intro-name">Deepak Sharma</span>
          <br />
          <ExampleComponent />
        </span>
        <p className="intopara">I am a skill</p>
        <NavLink>
          <button className="btn-l">
            <img src={hireme} alt="" className="btnimg" />
            Hire Me
          </button>
        </NavLink>
      </div>
      <img className="into-context-img" src={deepak12} alt="" />
    </section>
  );
}

export default Intro;
