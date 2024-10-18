import React from "react";
import women from "../../assets/women-phone.jpg";

const SMSIntegration = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-blue-50 to-blue-200 py-16 px-4 lg:px-32 min-h-screen">
      {/* Left Section - Image */}
      <div className="flex-1 p-10 overflow-hidden mb-10 lg:mb-0">
        <img
          src={women} // Placeholder image, replace with your original image
          alt="Woman using phone"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      {/* Right Section - Content */}
      <div className="flex-1  text-center lg:text-left">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#134391] mb-4">
            P2P SMS integration for business comms
          </h2>
          <p className="text-gray-600 mb-6">
            Seamless integration of P2P messaging for your communication
            applications with the DIDWW SMS API.
          </p>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-colors">
            Learn more
          </button>
        </div>
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#134391] mb-4">
            A2P bulk SMS
          </h2>
          <p className="text-gray-600 mb-6">
            Scalable A2P messaging for advanced business communications via a
            global network of Tier 1 carriers.
          </p>
          <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SMSIntegration;
