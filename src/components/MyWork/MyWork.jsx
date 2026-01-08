import React, { useContext } from "react";
import myWorkData from "../../assets/myWorkData";
import MenuContext from "../../contexts/MenuContext";

import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";
import frame5 from "../../assets/frame5.png";
import frame6 from "../../assets/frame6.png";
import frame7 from "../../assets/frame7.png";

const marqueeImages = [frame1, frame2, frame3, frame4, frame5, frame6, frame7];

function MyWork() {
  const { setMenu } = useContext(MenuContext);

  return (
    <div
      id="work"
      className="flex flex-col items-center gap-20 px-8 lg:px-32 py-20"
      onMouseEnter={() => setMenu("work")}
    >

      <div className="relative text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Brands
        </h1>
        <div className="absolute w-1/2 h-[4px] bg-gradient-to-r from-orange-500 to-purple-500 bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
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


      {/* Title */}
      <div className="relative text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          My Latest Work
        </h1>
        <div className="absolute w-1/2 h-[4px] bg-gradient-to-r from-orange-500 to-purple-500 bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Work Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {myWorkData.map((work, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={work.pic}
              alt={work.title}
              className="w-full h-64 object-cover rounded-lg transition-all duration-500 cursor-pointer border-4 border-transparent hover:border-purple-500"
            />
            <h2 className="text-xl font-semibold text-white">{work.title}</h2>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
        Show More
      </div>
    </div>
  );
}

export default MyWork;
