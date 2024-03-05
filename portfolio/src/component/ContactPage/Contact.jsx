import React from "react";
import "./Contact.css";
import facebook from "../../assets/facebook-icon.png";
import github from "../../assets/facebook-icon.png";
import twitter from "../../assets/facebook-icon.png";
function Contact() {
  return (
    <section className="contactpage">
      <div className="contact">
        <h2 className=".contactpagetitle">Contact Me</h2>
        <span className="contactdes">
          Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores, doloribus autem fuga quae obcaecati similique sapiente?
          Suscipit pariatur similique repellat.
        </span>
        <form className="contactform">
          <input type="text" placeholder="Your Name" className="name" />
          <input type="email" placeholder="Your Email" className="email" />
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="msg"
          ></textarea>
          <button type="submit" value="send" className="sbtn">
            Submit
          </button>
          <div className="links">
            {/* <img src={} alt="" className="link"/>
            <img src={} alt="" className="link"/>
            <img src={} alt="" className="link"/>
            <img src={} alt="" className="link"/> */}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
