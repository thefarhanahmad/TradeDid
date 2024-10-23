import React, { useState } from "react";
import StatsFilter from "../../../Components/Dashboard/StatsData";
import FilterStats from "../../../Components/Dashboard/FilterStats";
import { FaFilter } from "react-icons/fa";

const ReportSMSIn = () => {
  const [selectedTab, setSelectedTab] = useState("Destination Address");
  const tabs = [
    { label: "Destination Address" },
    { label: "SMS IN Trunk" },
    { label: "DID Country" },
  ];

  return (
    <div>
      <div className="bg-blue-50 min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          {/* Filters Section */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <label className="text-gray-600">Timeframe</label>
              <select className="bg-white border border-gray-300 rounded-md p-2">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last year</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-gray-600">Destination address</label>
              <select className="bg-white border border-gray-300 rounded-md p-2">
                <option>Any</option>
                <option>123456789</option>
                <option>987654321</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-gray-600">SMS IN Trunk</label>
              <select className="bg-white border border-gray-300 rounded-md p-2">
                <option>Any</option>
                <option>Inbound</option>
                <option>Outbound</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-gray-600">DID country</label>
              <select className="bg-white border border-gray-300 rounded-md p-2">
                <option>Any</option>
                <option>Inbound</option>
                <option>Outbound</option>
              </select>
            </div>
            <button className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md">
              <FaFilter />
              <span>Filters</span>
            </button>
          </div>
          <div className="w-full bg-white h-[50vh] rounded ">
            {/* Tab Header */}
            <div className="flex border-b border-gray-300">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setSelectedTab(tab.label)}
                  className={`px-4 py-2 focus:outline-none ${
                    selectedTab === tab.label
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-500"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="mt-4 bg-white h-full w-full flex justify-center items-center">
              {selectedTab === "Destination Address" && (
                <p>No data for selected timeframe</p>
              )}
              {selectedTab === "SMS IN Trunk" && (
                <p>Voice IN Trunk content goes here.</p>
              )}
              {selectedTab === "DID Country" && (
                <p>Trunk Group content goes here.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSMSIn;
