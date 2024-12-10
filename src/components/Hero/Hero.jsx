import React from "react";
import { useTypewriter, cursor } from "react-simple-typewriter";
import "./Hero.css";
import profilePic from "../../assets/profile.jpg";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Photographer", "Director", "Editor"],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 100,
  });
  return (
    <div className="hero">
      <img src={profilePic} alt="profile" />
      <h1>
        <span>Im Sattik Choudhury,</span>
        <br />I am a{" "}
        <b>
          <u>{typeEffect}</u>
        </b>
      </h1>
      <p>Photography is the story I fail to put into words.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
