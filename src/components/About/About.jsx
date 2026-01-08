import React, { useContext } from "react";
import profile2 from "../../assets/profile2.jpg";
import MenuContext from "../../contexts/MenuContext";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";
import frame5 from "../../assets/frame5.png";
import frame6 from "../../assets/frame6.png";
import frame7 from "../../assets/frame7.png";

const marqueeImages = [frame1, frame2, frame3, frame4, frame5, frame6, frame7];

function About() {
  const { setMenu } = useContext(MenuContext);
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-20 px-8 py-20 md:px-24 lg:px-40 mt-20"
      onMouseEnter={() => setMenu("about")}
    >
      <div className="relative text-center">
        <h1 className="text-4xl font-bold md:text-6xl">About Me</h1>
        <div className="absolute left-1/2 bottom-0 h-1 w-1/3 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-purple-500"></div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-4 md:px-0">
        <div className="relative w-full max-w-xs h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src={profile2}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />
        </div>

        <div className="flex flex-col gap-6 text-base md:text-lg font-medium leading-relaxed md:w-1/2 text-gray-700 dark:text-gray-300">
          <p className="relative before:absolute before:-left-4 before:top-2 before:h-3 before:w-1 before:bg-primary before:rounded-full">
            I create visual content that feels familiar, honest, and
            story-driven—whether it’s a short reel or a long-form video. My
            process is simple: observe people, understand emotions, and
            translate them into visuals with clarity and purpose.
          </p>

          <p>
            I work across digital and cinematic formats, focusing on
            storytelling, mood, and relatability rather than trends alone. The
            goal is always the same—to make content that people don’t just
            watch, but feel connected to.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-around w-full gap-10 text-center">
        {[
          { number: "5+", label: "YEARS OF EXPERIENCE" },
          { number: "200+", label: "PROJECTS COMPLETED" },
          { number: "100+", label: "HAPPY CLIENTS" },
        ].map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-around gap-2 transition-transform hover:scale-105"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              {achievement.number}
            </h1>
            <p className="text-lg font-medium">{achievement.label}</p>
          </div>
        ))}
      </div>

      <div className="relative w-full overflow-hidden py-16">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex gap-10 animate-marquee whitespace-nowrap w-full hover:[animation-play-state:paused]">
          {[...marqueeImages, ...marqueeImages].map((img, index) => (
            <div
              key={index}
              className="
          min-w-[320px] md:min-w-[520px]
          aspect-[16/9]
          rounded-2xl
          overflow-hidden
          bg-white/5
          backdrop-blur-md
          border border-white/10
          shadow-lg
          flex items-center justify-center
        "
            >
              <img
                src={img}
                alt="marquee"
                className="
            w-full h-full
            object-contain
            transition-transform duration-500
            hover:scale-[1.02]
          "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
