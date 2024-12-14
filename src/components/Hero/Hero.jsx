import React from "react";
import { useTypewriter, cursor } from "react-simple-typewriter";
import "./Hero.css";
import profilePic from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Photographer", "Director", "Editor"],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 100,
  });
  return (
    <div id="home" className="hero">
      <img src={profilePic} alt="profile" />
      <h1>
        <span>I'm Sattik Choudhury,</span>
        <br />
        I'm a{" "}
        <b>
          <u>{typeEffect}</u>
        </b>
      </h1>
      <p>Photography is the story I fail to put into words.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink href="#contact" className="anchor">
            {/* connect with me */}
          connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
