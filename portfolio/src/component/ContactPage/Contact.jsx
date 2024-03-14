import React, { useRef } from "react";
import "./Contact.css";
import facebook from "../../assets/facebook-icon.png";
import github from "../../assets/facebook-icon.png";
import twitter from "../../assets/facebook-icon.png";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_or69715", "template_2zymidi", form.current, {
        publicKey: "jlqhMMcuaNsVydqkE",
      })
      .then(
        () => {
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contactpage">
      <div className="contact">
        <h2 className=".contactpagetitle">Contact Me</h2>
        <span className="contactdes">You Can Contact Me.</span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Your Name"
            name="your_name"
            className="name"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="email"
            name="your_email"
          />
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
