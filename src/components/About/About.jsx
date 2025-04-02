import React, { useContext } from "react";
import profile2 from "../../assets/profile2.jpg";
import MenuContext from "../../contexts/MenuContext";

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

      <div className="flex flex-col justify-center md:flex-row items-center gap-16">
        <div className="hidden md:block w-72 h-96 overflow-hidden rounded-lg shadow-lg">
          <img
            src={profile2}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 text-lg font-medium leading-relaxed md:w-1/2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            autem necessitatibus sunt quam minima optio, nulla quaerat natus
            inventore dolores voluptates voluptas. Necessitatibus, voluptates
            saepe.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            aperiam id nobis in eveniet esse voluptate deserunt, odio impedit
            repellendus. Perspiciatis possimus sed explicabo eaque?
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6 md:w-3/4">
        {[
          { name: "Skill name1", width: "w-1/2" },
          { name: "Skill name2", width: "w-4/5" },
          { name: "Skill name3", width: "w-3/4" },
          { name: "Skill name4", width: "w-1/3" },
        ].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 transition-transform hover:scale-105"
          >
            <p className="w-40 min-w-max text-lg font-semibold">{skill.name}</p>
            <div className="relative w-full h-2 bg-gray-800 rounded-full">
              <div
                className={`absolute top-0 left-0 h-full ${skill.width} bg-gradient-to-r from-orange-500 to-purple-500 rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-10 text-center">
        {[
          { number: "10+", label: "YEARS OF EXPERIENCE" },
          { number: "70+", label: "PROJECTS COMPLETED" },
          { number: "90+", label: "HAPPY CLIENTS" },
        ].map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 transition-transform hover:scale-105"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              {achievement.number}
            </h1>
            <p className="text-lg font-medium">{achievement.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
