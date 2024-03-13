import React from "react";
import "./skills.css";
import html from "../../assets/skillsimg/html.png";
import css from "../../assets/skillsimg/CSS-Logo.jpg";
import js from "../../assets/skillsimg/js.png";
import react from "../../assets/skillsimg/react.png";
import node from "../../assets/skillsimg/node.png";
import express from "../../assets/skillsimg/express-js.png";
import mysql from "../../assets/skillsimg/mysql.png";
import mongoDB from "../../assets/skillsimg/mon.png";
import tailwind from "../../assets/skillsimg/tailwind.png";

function Skills() {
  return (
    <section className="skills">
      <span className="skill-title">Skills</span>
      <span className="skillsdes">
        I have Good Knowledge of these Technologies.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img
            src={html}
            alt="html"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>HTML</h2>
            <p> I Can Say Confidentily 80 % Knowledge in HTML. </p>
          </div>
        </div>
        <div className="skillbar">
          <img
            src={css}
            alt="css"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>CSS</h2>
            <p> I Can Say Confidentily 70 % Knowledge in CSS.</p>
          </div>
        </div>
        <div className="skillbar">
          <img
            src={js}
            alt="js"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>JavaScript</h2>
            <p> I Can Say Confidentily 80 % Knowledge in JavaScript.</p>
          </div>
        </div>
        <div className="skillbar">
          <img
            src={react}
            alt="react"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>ReactJs</h2>
            <p>I Can Say Confidentily 70 % Knowledge in ReactJs.</p>
          </div>
        </div>
        {/* node */}
        <div className="skillbar">
          <img
            src={node}
            alt="node"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>Node</h2>
            <p>I Can Say Confidentily 75 % Knowledge in NodeJs</p>
          </div>
        </div>
        {/* express */}
        <div className="skillbar">
          <img
            src={express}
            alt="express"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>ExpressJs</h2>
            <p>I Can Say Confidentily 80 % Knowledge in ExpressJs.</p>
          </div>
        </div>
        {/* mysql */}
        <div className="skillbar">
          <img
            src={mysql}
            alt="node"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>Mysql</h2>
            <p>I Can Say Confidentily 50 % Knowledge in Mysql.</p>
          </div>
        </div>
        {/* mongo */}
        <div className="skillbar">
          <img
            src={mongoDB}
            alt="mongodb"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>MongoDB</h2>
            <p>I Can Say Confidentily 75 % Knowledge in MongoDB.</p>
          </div>
        </div>
        {/* tailwind */}
        <div className="skillbar">
          <img
            src={tailwind}
            alt="tailwind"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>Tailwind CSS</h2>
            <p>I Can Say Confidentily 70 % Knowledge in Tailwind.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
