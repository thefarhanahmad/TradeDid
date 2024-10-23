import React from "react";
import StatsData from "../../../Components/Dashboard/StatsData";
import StatsFilter from "../../../Components/Dashboard/StatsData";
import ChartComponent from "../../../Components/Dashboard/StatsChart";
const SMSIn = () => {
  return (
    <div>
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
            <ChartComponent label={"Total SMS received"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSIn;
