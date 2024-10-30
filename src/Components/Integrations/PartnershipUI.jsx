import React from "react";
import Logo from "../../assets/Logo.png";

const PartnershipUI = ({ companyName, CompanyLogo }) => {
  return (
    <div className="flex items-center justify-center py-32 bg-gray-50">
      <div className=" rounded-lg  p-8 max-w-4xl text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Reliable communications with{" "}
          <span className="text-orange-500">TRADEDDID</span> and{" "}
          <span className="text-orange-500">{companyName}</span>
        </h2>
        <div className="flex items-center justify-center mb-6">
          {/* Placeholder images for logos */}
          <img src={Logo} alt="TRADEDDID Logo" className="h-12 mr-4" />
          <div className="h-12 w-px bg-gray-300"></div>
          <img
            src={CompanyLogo}
            alt="{companyName} Logo"
            className="h-12 ml-4"
          />
        </div>
        <p className="text-gray-700 mb-8">
          Built on a well-rounded cloud infrastructure and security framework,
          {companyName} Chime is a real-time audio, video conferencing and
          online meeting platform for businesses. It enables users to receive
          phone calls over the internet with the help of {companyName} Chime
          Voice Connector. This strategic partnership includes TRADEDDID
          extensive phone number coverage in more than 80 countries worldwide,
          coupled with reliable and robust SIP trunking infrastructure for fully
          compliant voice services and virtually unlimited call capacity.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-transparent border-orange-500 border text-orange-500 hover:text-white px-4 py-2 rounded-3xl hover:bg-orange-600 transition">
            How it works
          </button>
          <button className="bg-transparent border-orange-500 border text-orange-500 hover:text-white px-4 py-2 rounded-3xl hover:bg-orange-600 transition">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnershipUI;
