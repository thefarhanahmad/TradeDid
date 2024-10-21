import React from "react";
import laptop from "../../assets/Laptop.png";

const BigLaptop = ({ list }) => {
  return (
    <div className="h-[75vh] md:pl-0  md:-ml-3 p-6 flex flex-col items-center justify-center">
      <div className="w-full  rounded-xl flex flex-col md:flex-row overflow-hidden p-8 ">
        <div className=" w-full p-2 md:w-1/2 h-96 flex flex-col gap-5 justify-center">
          {list ? (
            <div className="text-start p-6 max-w-xl mx-auto  rounded-lg ">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Extensive <span className="text-cyan-500">statistics</span> and
                monitoring
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2  text-2xl">•</span> Call
                  distribution charts
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2 text-2xl">•</span> Lost
                  call charts
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2 text-2xl">•</span> Call
                  statistics per user
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2 text-2xl">•</span>{" "}
                  Detailed CDRs
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2 text-2xl">•</span>{" "}
                  Flexible filtering options
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2 text-2xl">•</span>{" "}
                  Automated call history export
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2 text-2xl">•</span> And
                  more...
                </li>
              </ul>
            </div>
          ) : (
            <div className="text-start p-6 max-w-xl mx-auto  rounded-lg ">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Ready to <span className="text-orange-500">port</span> your
                business phone numbers to DIDWW?
              </h2>
              <p className="text-gray-600 mb-6">
                Full control of the number migration process with an online,
                self-service Porting tool
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Port your numbers
                </button>
                <button className="bg-[#134391] hover:bg-blue-900 text-white font-semibold py-2 px-4 rounded transition-colors">
                  Request a quote
                </button>
              </div>
            </div>
          )}
        </div>
        <div className=" w-full p-2 md:w-1/2 h-96 ">
          <img
            className="w-full h-full object-contain md:scale-125  md:-mr-24"
            src={laptop}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default BigLaptop;
