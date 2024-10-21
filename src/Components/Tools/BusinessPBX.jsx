import React from "react";
import { PiPhone } from "react-icons/pi";

const BusinessPBX = () => {
  return (
    <div className="  py-10">
      <div className="w-[80%] gap-3 flex flex-col mx-auto justify-center items-center">
        <PiPhone className="text-6xl p-2 bg-blue-500 rounded-full" />

        <h2 className="text-center w-3/4 mx-auto text-3xl md:text-4xl font-bold text-[#134391] ">
          An advanced business cloud
          <span className="text-orange-500 mx-2">phone system</span>
        </h2>
        <p className="text-center text-lg md:text-xl font-bold text-[#134391] mb-8">
          Feature-rich business PBX
        </p>
      </div>
      <div className=" h-full w-full mx-auto overflow-hidden py-6 px-10">
        <img
          className="w-full h-full"
          src="https://www.didww.com/_next/static/media/containers.3393f59a.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default BusinessPBX;
