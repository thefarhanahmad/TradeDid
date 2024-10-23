import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Notifications = () => {
  return (
    <div>
      <div className="bg-white mb-3 flex justify-between items-center p-4 border-l-[15px] border-yellow-600 rounded-md">
        <h2 className="text-xl">Two-Factor Authentication is Not Enabled</h2>
        <div className="flex gap-1 items-center justify-center">
          <button className="bg-yellow-400 rounded-xl px-4 py-1 text-gray-900">
            Enable
          </button>
          <RiArrowDropDownLine className="text-4xl" />
        </div>
      </div>
      <div className="bg-white mb-6 flex justify-between items-center p-4 border-l-[15px] border-red-600 rounded-md">
        <h2 className="text-xl">No Active Payments Methods</h2>
        <div className="flex gap-1 items-center justify-center">
          <button className="bg-red-400 rounded-xl px-4 py-1 text-gray-900">
            Payment Methods
          </button>
          <RiArrowDropDownLine className="text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
