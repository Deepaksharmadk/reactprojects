import React from "react";
import "./skills.css";
import uidesign from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";
import appdesign from "../../assets/app-design.png";

function Skills() {
  return (
    <section className="skills">
      <span className="skill-title">what i do</span>
      <span className="skillsdes">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ducimus
        at quasi laborum cumque itaque nemo! Expedita accusamus doloremque
        accusantium.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img
            src={uidesign}
            alt="UiDesign"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>Ui/UX Design</h2>
            <p> this is demo text</p>
          </div>
        </div>
        <div className="skillbar">
          <img
            src={uidesign}
            alt="UiDesign"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>Ui/UX Design</h2>
            <p> this is demo text</p>
          </div>
        </div>
        <div className="skillbar">
          <img
            src={uidesign}
            alt="UiDesign"
            className="skillsbarimg
            "
          />
          <div className="skillbartext">
            <h2>Ui/UX Design</h2>
            <p> this is demo text</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
