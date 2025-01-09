import React, { useContext } from "react";
import "./Services.css";
import Services_Data from "../../assets/serviceData";
import MenuContext from "../../contexts/MenuContext";

function Services() {
  const { setMenu } = useContext(MenuContext);
  return (
    <div
      id="services"
      className="services"
      onMouseEnter={() => {
        setMenu("services");
      }}
    >
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.id}</h3>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <div className="services-readmore">
                <p>Read More</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
