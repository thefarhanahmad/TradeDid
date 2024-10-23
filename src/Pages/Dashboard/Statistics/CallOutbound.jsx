import React from "react";
import { FaFilter } from "react-icons/fa";

const CallOutbound = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        {/* Filters Section */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <label className="text-gray-600">Date / time start (UTC)</label>
            <select className="bg-white border border-gray-300 rounded-md p-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-gray-600">Destination number</label>
            <select className="bg-white border border-gray-300 rounded-md p-2">
              <option>Any</option>
              <option>123456789</option>
              <option>987654321</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-gray-600">Call type</label>
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
        <div className="py-16 bg-white flex justify-center items-center rounded">
          <p>You have no call logs</p>
        </div>
      </div>
    </div>
  );
};

export default CallOutbound;
