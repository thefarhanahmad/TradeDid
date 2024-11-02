import React from "react";
import hpGrl from "../../assets/happyGirl.png";

const VoIPUseCases = ({ subHeading, data }) => {
  return (
    <div className=" relative overflow-hidden pt-24 flex items-center justify-center py-12 px-3">
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-300 to-red-100 opacity-100"></div>
      <div className="w-full z-20">
        <div className="flex items-center justify-between">
          <div className="md:w-2/3 w-full text-center md:text-start p-7  mx-auto">
            <div className="">
              <h1 className="text-4xl font-bold text-[#134391]">
                VoIP <span className="text-orange-500">use cases</span> for your
                business
              </h1>
              <p className="text-gray-600 mt-2 text-lg font-semibold">
                {subHeading}
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1  md:grid-cols-2 gap-4">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden hover:-translate-y-1 duration-200 transition-transform ease-in-out hover:-top-1 group h-[200px] p-4 flex flex-col justify-between  rounded-lg shadow"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-[#134391]">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-full  justify-center flex mt-4 transition-all duration-200 opacity-0 group-hover:opacity-100  items-center">
                    <button className="bg-orange-500  rounded-2xl hover:bg-orange-600 text-sm text-white py-1 px-5 ">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#134391] cursor-pointer mt-4 text-sm">
              More use cases from TRADEDID
            </p>
          </div>
          <div className=" hidden mt-6 md:mt-0  md:flex  md:-mb-40 lg:-mb-24 justify-center">
            <div className="hidden  rounded-full md:flex items-center justify-center">
              <img src={hpGrl} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoIPUseCases;
