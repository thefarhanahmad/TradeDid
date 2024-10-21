import React from "react";
import { RxDot } from "react-icons/rx";

const BusinessTools = () => {
  return (
    <div className="pt-16 bg-gradient-to-r from-white to-blue-100 p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-red-500  rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              User friendly online{" "}
              <span className="text-[#4a81d8] mx-1">tools</span> for your
              business
            </h1>
          </div>
          <div className="md:w-1/2 p-4">
            <ul className="list-disc list-inside text-[#2c5dad] space-y-2">
              <li className="flex items-start">
                <span className=" mr-2">
                  <RxDot />
                </span>
                Number Porting tool for an easy migration of your services to
                DIDWW
              </li>
              <li className="flex items-start">
                <span className=" mr-2">
                  <RxDot />
                </span>
                Role-based and secure account access
              </li>
              <li className="flex items-start">
                <span className=" mr-2">
                  <RxDot />
                </span>
                Control of multiple accounts with a single login
              </li>
              <li className="flex items-start">
                <span className=" mr-2">
                  <RxDot />
                </span>
                Effortless customer Identity & Address management
              </li>
              <li className="flex items-start">
                <span className=" mr-2">
                  <RxDot />
                </span>
                Number Selection tool with a vast inventory of phone numbers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTools;
