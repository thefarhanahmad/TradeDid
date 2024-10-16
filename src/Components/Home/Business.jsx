import React from "react";
import cloud from "../../assets/cloud.png";
import BusinessCard from "./BusinessCard";
const Business = () => {
  const voiceUses = [
    "Phone number as a value added service",
    "Call tracking",
    "Number masking services",
    "Call centers",
    "Contact centers",
    "Voice for IoT",
    "DIDs for conference calling",
    "More use cases",
  ];

  const smsUses = [
    "SMS customer support",
    "SMS marketing",
    "SMS notifications",
    "SMS verifications",
    "SMS surveys",
    "More use cases",
  ];

  const businessTelephony = [
    "Call center & queues",
    "Conference calling",
    "Cloud IVR",
    "Business phone systems",
    "Global presence",
    "PSTN replacement",
    "More use cases",
  ];

  return (
    <div className="  w-[100vw] bg-slate-200 overflow-hidden">
      <div className="h-64 bg-gray-100  flex justify-center items-center relative overflow-hidden">
        <img
          src={cloud}
          alt="cloud"
          className="animated-image w-[100%] h-[70%]"
        />
        <h1 className="text-4xl text-black z-10  text-center">
          <span className="text-[#023f7f]">Discover</span> how to grow your
          business with TRADEDID use cases
        </h1>
      </div>

      <div className="w-[90%] mx-auto">
        <BusinessCard data={voiceUses} heading={"Voice use cases"} />
        <BusinessCard data={smsUses} heading={"SMS use cases"} />
        <BusinessCard data={businessTelephony} heading={"Business telephony"} />
      </div>
    </div>
  );
};

export default Business;
