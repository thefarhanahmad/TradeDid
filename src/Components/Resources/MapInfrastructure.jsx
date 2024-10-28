import React from "react";

// Placeholder map image URL
const mapPlaceholder =
  "https://www.didww.com/_next/static/media/map.ec783bcf.webp"; // Replace with actual map image URL when available

const locations = [
  { name: "Los Angeles", style: "top-1/3 left-1/4" },
  { name: "New York", style: "top-1/4 left-1/2" },
  { name: "Miami", style: "top-1/2 left-1/2" },
  { name: "Amsterdam", style: "top-1/3 right-1/3" },
  { name: "Frankfurt", style: "top-1/3 right-1/4" },
  { name: "Hong Kong", style: "bottom-1/3 right-1/3" },
  { name: "Singapore", style: "bottom-1/4 right-1/4" },
];

const MapInfrastructure = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-white to-blue-50 py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-[#134391] text-center mb-2">
        <span className="text-orange-500">TRADEDID</span> private global network
        infrastructure
      </h2>
      <div className="relative w-full max-w-6xl h-[600px] mx-auto">
        <img
          src={mapPlaceholder}
          alt="Global Network Map"
          className="w-full h-full object-contain rounded-md "
        />
        {/* {locations.map((location, index) => (
          <div
            key={index}
            className={`absolute ${location.style} bg-[#134391] text-white py-1 px-3 rounded-full text-sm font-medium`}
          >
            {location.name}
          </div>
        ))} */}
      </div>
      <p className="text-center text-[#134391] mt-6 max-w-2xl">
        Our physical infrastructure is designed with the highest level of
        operational performance and scalability in mind, ensuring maximum
        redundancy and uptime of your Voice and SMS services.
      </p>
      <button className="mt-6 bg-orange-500 text-white py-2 px-6 rounded-full font-bold hover:bg-orange-600 transition-colors">
        Read docs
      </button>
    </div>
  );
};

export default MapInfrastructure;
