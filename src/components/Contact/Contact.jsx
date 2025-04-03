import React, { useContext, useState } from "react";
import MenuContext from "../../contexts/MenuContext";

function Contact() {
  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [yourMessage, setYourMessage] = useState("");
  const { setMenu } = useContext(MenuContext);

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
    <div
      id="contact"
      className="flex flex-col items-center gap-16 px-8 lg:px-32 py-20"
      onMouseEnter={() => setMenu("contact")}
    >
      {/* Title */}
      <div className="relative text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Get in Touch
        </h1>
        <div className="absolute w-1/2 h-[4px] bg-gradient-to-r from-orange-500 to-purple-500 bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-white">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
            Let's Talk
          </h1>
          <p className="text-lg leading-7">Feel free to contact</p>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p>sattik@gmail.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p>+91 9104837584</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Address</h2>
              <p>Serampore, Hooghly</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
          {/* Input Field with Floating Label */}
          <div className="relative w-full">
            <input
              type="text"
              name="name"
              required
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
              className="peer w-full p-4 border border-white bg-transparent text-white rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Your Name"
            />
          </div>

          <div className="relative w-full">
            <input
              type="email"
              name="email"
              required
              value={yourEmail}
              onChange={(e) => setYourEmail(e.target.value)}
              className="peer w-full p-4 border border-white bg-transparent text-white rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Your Email"
            />
          </div>

          <div className="relative w-full">
            <textarea
              name="message"
              rows="5"
              required
              value={yourMessage}
              onChange={(e) => setYourMessage(e.target.value)}
              className="peer w-full p-4 border border-white bg-transparent text-white rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Enter Your Message"
            />
            
          </div>

          <button
            type="submit"
            className="w-fit px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-purple-500 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
