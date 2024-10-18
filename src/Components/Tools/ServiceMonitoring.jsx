import React from "react";
import { RxDot } from "react-icons/rx";

const ServiceMonitoring = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-white to-blue-100 p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full  rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Service monitoring with a real-time data
              <span className="text-[#4a81d8] mx-1">dashboard</span>
            </h1>
            <ul className="list-disc list-inside text-[#2c5dad] space-y-2">
              <li className="flex items-start">
                <span className=" mr-2">
                  <RxDot />
                </span>
                Extensive call and SMS logs
              </li>
              <li className="flex items-start">
                <span className=" mr-2">
                  <RxDot />
                </span>
                Detailed billing reports
              </li>
              <li className="flex items-start">
                <span className=" mr-2">
                  <RxDot />
                </span>
                Voice Capacity monitoring
              </li>
              <li className="flex items-start">
                <span className=" mr-2">
                  <RxDot />
                </span>
                Account activity notifications
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-red-200 p-4">
            <img src="" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceMonitoring;
