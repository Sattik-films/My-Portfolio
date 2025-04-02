import React, { useContext } from "react";
import Services_Data from "../../assets/serviceData";
import MenuContext from "../../contexts/MenuContext";

function Services() {
  const { setMenu } = useContext(MenuContext);

  return (
    <div
      id="services"
      className="flex flex-col items-center gap-20 px-8 lg:px-32 py-20"
      onMouseEnter={() => setMenu("services")}
    >
      {/* Title */}
      <div className="relative text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          My Services
        </h1>
        <div className="absolute w-1/2 h-[4px] bg-gradient-to-r from-orange-500 to-purple-500 bottom-[-10px] left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Services Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 p-6 border-2 border-white rounded-lg transition-all duration-500 hover:scale-105 hover:shadow-lg hover:border-purple-500 bg-black/70"
          >
            <h3 className="text-2xl font-semibold text-white">{service.id}</h3>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              {service.title}
            </h2>
            <p className="text-lg text-gray-300">{service.description}</p>
            <div className="flex items-center text-lg font-semibold text-white hover:text-purple-500 cursor-pointer transition-all">
              <p>Read More</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
