import React from "react";
import StatsFilter from "../../../Components/Dashboard/StatsData";
import ChartComponent from "../../../Components/Dashboard/StatsChart";
const SMSOut = () => {
  return (
    <div>
      <div className="bg-blue-50 min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          {/* Filters and Metrics */}
          <StatsFilter />

          {/* Report Button */}
          <div className="mt-6 text-right">
            <button className="bg-white text-blue-600 border border-blue-600 py-2 px-4 rounded-md shadow hover:bg-blue-600 hover:text-white transition">
              View Report
            </button>
          </div>

          {/* Chart Section */}
          <ChartComponent label={"Total SMS sent"} />
        </div>
      </div>
    </div>
  );
};

export default SMSOut;
