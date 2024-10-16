import React from "react";
import serviceBg from "../../assets/service-card.jpg";

const ServiceCard = ({ heading, data }) => {
  return (
    <div className="border z-10 border-cyan-400 p-4 rounded-md">
      <div className="text-white">
        <h1 className="text-2xl font-bold text-start text-black mb-3">
          {heading}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${serviceBg})`,
              }}
              className="relative h-[200px] border border-cyan-200 text-black rounded-lg p-6 overflow-hidden transition-transform duration-300 hover:scale-[1.02] group"
            >
              {/* Background animation using absolute positioning */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-cyan-200 group-hover:shadow-md to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}

              <div className="relative z-10 ">
                <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
