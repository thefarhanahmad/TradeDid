import React from "react";

const TradedidAPI = () => {
  return (
    <div className="container mx-auto mt-2 p-4 bg-white rounded-lg shadow-md">
      <div className="text-sm text-gray-600 mb-4 py-2 px-4 rounded bg-cyan-100">
        By using the DIDWW API, you agree to abide by the terms and conditions
        set forth in the DIDWW{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Terms & Agreements
        </a>
        .
      </div>

      {/* API Version Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          API Version
        </h2>
        <div className="text-sm  flex flex-col gap-3  text-gray-600">
          <div className=" flex gap-6 mb-1">
            <span>Your API version :</span>
            <span className="text-gray-800">V3 2022-05-10</span>
          </div>
          <div className=" flex gap-6">
            <span>API documentation :</span>
            <a href="#" className="text-blue-500 hover:underline">
              V3 2022-05-10 Documentation
            </a>
          </div>
        </div>
      </div>

      {/* API Keys Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">API Keys</h2>
        <div className=" flex flex-col justify-center items-center py-20">
          <p className="text-gray-600 mb-6">You have no API Keys</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Create new API Key
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradedidAPI;
