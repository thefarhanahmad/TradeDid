// PaymentMethod.jsx
import React, { useState } from "react";

const PaymentMethod = () => {
  const [autoRefill, setAutoRefill] = useState(false);
  const [lowBalanceNotification, setLowBalanceNotification] = useState(true);
  const [minimumAmount, setMinimumAmount] = useState("");

  const handleToggleAutoRefill = () => {
    setAutoRefill(!autoRefill);
  };

  const handleToggleLowBalanceNotification = () => {
    setLowBalanceNotification(!lowBalanceNotification);
  };

  return (
    <div className="flex h-screen ">
      {/* Left Section - 70% */}
      <div className="w-[70%] flex py-44 justify-center border-r-2 border-gray-200">
        <div className="text-center">
          <p className="mb-4 text-gray-600">You have no payment methods</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Payment Method
          </button>
        </div>
      </div>

      {/* Right Section - 30% */}
      <div className="w-[30%] p-4">
        <div className="mb-4">
          <label className="flex items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={autoRefill}
                onChange={handleToggleAutoRefill}
                className="sr-only"
              />
              <div
                className={`w-10 h-6 rounded-full shadow-inner transition-colors ${
                  autoRefill ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  autoRefill ? "transform translate-x-4" : ""
                }`}
              ></div>
            </div>
            <span className="ml-3">
              Automatically refill when threshold is reached
            </span>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <div className="relative">
              <input
                type="checkbox"
                checked={lowBalanceNotification}
                onChange={handleToggleLowBalanceNotification}
                className="sr-only"
              />
              <div
                className={`w-10 h-6 rounded-full shadow-inner transition-colors ${
                  lowBalanceNotification ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  lowBalanceNotification ? "transform translate-x-4" : ""
                }`}
              ></div>
            </div>
            <span className="ml-3">Low balance notification</span>
          </label>
        </div>
        {lowBalanceNotification && (
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Minimum amount</label>
            <input
              type="number"
              value={minimumAmount}
              onChange={(e) => setMinimumAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="$0.00"
            />
          </div>
        )}
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Apply Changes
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
