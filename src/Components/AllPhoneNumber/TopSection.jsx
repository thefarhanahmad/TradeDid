import React from "react";
import map from "../../assets/map.png";
import CountriesSection from "./SearchCountry";

const TopSection = ({ preText, spanText, nextText, subheading }) => {
  return (
    <div
      className="w-full relative bg-cover bg-center  md:h-screen overflow-hidden"
      style={{
        backgroundImage:
          'url("https://www.didww.com/_next/static/media/background.e5e4a64f.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-[#2a5296] to-white opacity-50"></div>

      {/* Content inside the div */}
      <div className="relative flex flex-col bg-gradient-to-t  pt-20 pb-8 md:py-0  from-[#134391] to-transparent justify-center items-center h-full  md:0 text-white">
        {/* text */}
        <div className="text-center pt-12 w-3/4">
          <h1 className="text-2xl md:text-4xl font-bold">
            {preText} <span className="text-orange-500 mx-2">{spanText}</span>
            {nextText}
          </h1>
          <p className="mt-4 text-lg md:text-2xl">{subheading}</p>
        </div>

        {/* image */}
        <div>
          <img src={map} alt="" width={600} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-center md:text-2xl  font-bold">
            Get access to Virtual Numbers in 91 countries and 5254 area codes
          </h1>
          <div className="mt-8">
            <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-orange-600 transition duration-200 mr-4">
              Buy Now
            </button>
            <button className="bg-transparent border text-orange-500 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-200">
              Sign Up
            </button>
          </div>
          {/* <CountriesSection /> */}
        </div>
      </div>
    </div>
  );
};

export default TopSection;
