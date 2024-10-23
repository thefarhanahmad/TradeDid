import React, { useState } from "react";

import FilterStats from "../../../Components/Dashboard/FilterStats";

const ReportVoiceIn = () => {
  const [selectedTab, setSelectedTab] = useState("DID Number");
  const tabs = [
    { label: "DID Number" },
    { label: "Voice IN Trunk" },
    { label: "Trunk Group" },
    { label: "DID Country" },
  ];

  return (
    <div>
      <div className="bg-blue-50 min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          {/* Filters and Metrics */}
          <FilterStats />
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
            {selectedTab === "DID Number" && (
              <p>No data for selected timeframe</p>
            )}
            {selectedTab === "Voice IN Trunk" && (
              <p>Voice IN Trunk content goes here.</p>
            )}
            {selectedTab === "Trunk Group" && (
              <p>Trunk Group content goes here.</p>
            )}
            {selectedTab === "DID Country" && (
              <p>DID Country content goes here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportVoiceIn;
