import React, { useContext } from "react";
import { useTypewriter, cursor } from "react-simple-typewriter";
import "./Hero.css";
import profilePic from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuContext from "../../contexts/MenuContext";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Photographer", "Cinematographer", "Editor"],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 100,
  });

  const { setMenu } = useContext(MenuContext);
  return (
    <div
      id="home"
      className="hero"
      onMouseEnter={() => {
        setMenu("home");
      }}
    >
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
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
