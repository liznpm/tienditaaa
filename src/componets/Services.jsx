import React, { useState } from "react";

export const Services = () => {
  const [services] = useState([
    {
      img: "/images/Delivery.png",
      name: "Free Delivery",
      text: "For all orders over 90$",
    },
    {
      img: "/images/Return.png",
      name: "30 days return",
      text: "For all orders over 90$",
    },
    {
      img: "/images/payment.png",
      name: "Secure payment",
      text: "For all orders over 90$",
    },
   
  ]);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-wrapper">
          {services.map((service) => (
            <div key={service.name} className="service">
              <div className="img-container">
                <img src={service.img} alt="" />
              </div>
              <div className="content">
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
