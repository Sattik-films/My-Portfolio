import React, { useContext } from "react";
import { useTypewriter } from "react-simple-typewriter";
import profilePic from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuContext from "../../contexts/MenuContext";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Content Creator","Film Maker","Cinematographer", "Editor", "Colorist"," Voice Actor"],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 100,
  });

  const { setMenu } = useContext(MenuContext);

  return (
    <div
      id="home"
      className="pt-24 flex flex-col items-center justify-center gap-8 h-screen text-white"
      onMouseEnter={() => setMenu("home")}
    >
      <img
        src={profilePic}
        alt="profile"
        className="mt-24 w-64 h-64 rounded-full object-cover"
      />
      <h1 className="text-center text-4xl sm:text-5xl font-semibold w-2/3">
        <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          I'm Sattik Choudhury,
        </span>{" "}
        <br />
        <b>
          {typeEffect}
        </b>
      </h1>
      <p className="text-center text-lg sm:text-xl w-2/3 font-light leading-relaxed">
        Photography is the story I fail to put into words.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-5 text-lg font-medium mb-12">
        <div className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-purple-500 text-white cursor-pointer border border-transparent transition-transform transform hover:scale-105">
          <AnchorLink href="#contact" className="text-white no-underline">
            Connect with me
          </AnchorLink>
        </div>
        {/* <div className="px-10 py-4 rounded-full border border-orange-500 cursor-pointer transition-transform transform hover:scale-105 hover:bg-white hover:text-black">
          My Resume
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
