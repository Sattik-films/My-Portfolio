import React, { useContext } from "react";
import myWorkData from "../../assets/myWorkData";
import { projects } from "../../assets/projects/projects"
import MenuContext from "../../contexts/MenuContext";
import brands from "../../assets/brands";


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
          Worked With
        </h1>
        <div className="absolute w-1/2 h-[4px] bg-gradient-to-r from-orange-500 to-purple-500 bottom-[-10px] left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative w-full mt-[-50px] overflow-hidden py-16">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex gap-0 md:gap-10 animate-marquee whitespace-nowrap w-full hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="
                min-w-[320px] md:min-w-[520px]
                aspect-[4/3]
                w-fit
                rounded-2xl
                overflow-hidden
                bg-black
                backdrop-blur-md
                
                shadow-lg
                flex items-center justify-center
              "
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="
                  w-full h-full
                  object-contain
                  transition-transform duration-500
                  hover:scale-[1.05]
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
        {projects.map((work, index) => (
          <div
            key={work.id}
            className="flex flex-col items-center gap-4 transition-all duration-500 hover:scale-105 hover:shadow-lg"
            onClick={() => window.open(work.link, "_blank")}
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-64 object-cover rounded-lg transition-all duration-500 cursor-pointer border-4 border-transparent hover:border-purple-500"
            />
            <h2 className="text-xl font-semibold text-white">{work.title}</h2>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {/* <div className="px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
        Show More
      </div> */}
    </div>
  );
}

export default MyWork;
