import React from "react";
import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [yourMessage, setYourMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setYourEmail("");
    setYourName("");
    setYourMessage("");
    const formData = new FormData(event.target);

    formData.append("access_key", "6cf82354-ab4f-423b-97b8-11e5623e2330");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Feel free to contact</p>
          <div className="contact-details">
            <div className="contact-detail">
              <h2>Email</h2>
              <p>xyz@gmail.com</p>
            </div>
            <div className="contact-detail">
              <h2>Phone</h2>
              <p>+91 9104837584</p>
            </div>
            <div className="contact-detail">
              <h2>Address</h2>
              <p>Serampore,Hooghly</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} action="" className="contact-right">
          <div class="input-container">
            <input
              type="text"
              name="name"
              id=""
              placeholder=" "
              required
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
              autoComplete="off"
            />
            <label htmlFor="">Your Name</label>
          </div>

          <div class="input-container">
            <input
              autoComplete="off"
              type="email"
              name="email"
              id=""
              placeholder=" "
              required
              value={yourEmail}
              onChange={(e) => setYourEmail(e.target.value)}
            />
            <label htmlFor="">Your Email</label>
          </div>


          <div class="input-container">
            <textarea
              autoComplete="off"
              name="message"
              rows={8}
              placeholder=" "
              value={yourMessage}
              onChange={(e) => setYourMessage(e.target.value)}
            />
            <label htmlFor="">Enter Your Message</label>
          </div>

          <button className="contact-submit" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
