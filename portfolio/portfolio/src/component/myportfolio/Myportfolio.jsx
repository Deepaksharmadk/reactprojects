import React from "react";
import "./myportfolio.css";
import port from "../../assets/portfolio-1.png";
import port1 from "../../assets/portfolio-2.png";
import port2 from "../../assets/portfolio-3.png";
import port3 from "../../assets/portfolio-4.png";
import port4 from "../../assets/portfolio-5.png";
import port5 from "../../assets/portfolio-6.png";

function MyPortfolio() {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfofio</h2>
      <span className="workdes">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vitae.
      </span>
      <div className="worksimgs">
        <img src={port} alt="" className="workimg" />
        <img src={port1} alt="" className="workimg" />
        <img src={port2} alt="" className="workimg" />
        <img src={port3} alt="" className="workimg" />
        <img src={port4} alt="" className="workimg" />

        <img src={port5} alt="" className="workimg" />
      </div>
      <button className="workbtn">See more</button>
    </section>
  );
}

export default MyPortfolio;
