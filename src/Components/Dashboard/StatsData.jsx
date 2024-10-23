// StatsFilter.js
import React from "react";
import { FaFilter } from "react-icons/fa";
import FilterStats from "./FilterStats";

const StatsFilter = () => {
  return (
    <div>
      <FilterStats />
      {/* Metrics Cards Section */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {[
          { label: "Total calls", value: 0, color: "text-blue-800" },
          { label: "Successful calls", value: 0, color: "text-blue-800" },
          { label: "Total duration (min)", value: 0, color: "text-blue-800" },
          { label: "ACD (min:sec)", value: "0:00", color: "text-blue-800" },
          { label: "ASR (%)", value: 0.0, color: "text-blue-800" },
          { label: "Total price (USD)", value: 0.0, color: "text-green-500" },
        ].map((metric, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow rounded-md flex flex-col items-center justify-center"
          >
            <span className="text-gray-500">{metric.label}</span>
            <span className={`text-2xl font-bold ${metric.color}`}>
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsFilter;
