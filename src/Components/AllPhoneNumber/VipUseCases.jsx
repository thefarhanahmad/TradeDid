import React from "react";
import hpGrl from "../../assets/happyGirl.png";

const VoIPUseCases = ({ subHeading, data }) => {
  return (
    <div className=" from-yellow-50 to-orange-50 flex items-center justify-center p-4">
      <div className=" shadow-lg bg-gray-50 rounded-lg p-6 max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
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
                  className="bg-white hover:-translate-y-1 duration-200 transition-transform ease-in-out hover:-top-1 group h-[200px] p-4 flex flex-col justify-between  rounded-lg shadow"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-[#134391]">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-full justify-start md:justify-center flex mt-4 transition-all duration-200 opacity-0 group-hover:opacity-100  items-center">
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
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <div className="hidden  h-48 w-48 rounded-full md:flex items-center justify-center">
              <img src={hpGrl} alt="img" width={1000} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-orange-500 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M21 16.5A2.5 2.5 0 0018.5 14h-13A2.5 2.5 0 003 16.5v.5a2.5 2.5 0 002.5 2.5h13a2.5 2.5 0 002.5-2.5v-.5z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoIPUseCases;
