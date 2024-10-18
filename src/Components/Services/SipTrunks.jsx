import React from "react";

const SIPTrunking = () => {
  return (
    <div className="bg-gradient-to-b from-[#faf6f3] to-[#fff] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#134391] mb-8">
          Reliable <span className="text-orange-500">SIP Trunking</span> for
          businesses of any size
        </h2>
        <div className="w-[90%] mx-auto flex">
          <div className=" w-[48%] mt-6 pr-8 border-r-2 border-orange-400">
            <h3 className="text-2xl font-semibold text-[#134391]">
              Inbound SIP Trunking
            </h3>
            <p className="text-gray-600 mt-4">
              Premium quality voice origination combined with the largest
              international coverage of Local, National, Mobile and Toll Free
              virtual numbers.
            </p>
            <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
              Learn more
            </button>
          </div>

          <div className=" w-[48%] mt-6 pl-8 border-l-2 border-orange-400">
            <h3 className="text-2xl font-semibold text-[#134391]">
              Outbound SIP Trunking
            </h3>
            <p className="text-gray-600 mt-4">
              Truly local call termination for premium quality voice services
              and full PSTN replacement.
            </p>
            <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SIPTrunking;
