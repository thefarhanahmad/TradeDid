import React from "react";
import CapacityDashboard from "../../../Components/Dashboard/CapacityDashboard";

const ExtendedCapacity = () => {
  return (
    <div>
      <CapacityDashboard />
      <div>
        <div className="flex py-32 w-full justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-3">
            <p>You have no capacity groups</p>
            <button className="bg-[#023f7f] rounded-2xl flex justify-center items-center px-6 py-2 text-white font-semibold">
              Create Capacity Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtendedCapacity;
