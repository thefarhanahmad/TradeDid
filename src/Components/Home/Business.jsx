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
    <div className="w-full py-12 bg-gradient-to-b from-orange-50 to-[#e6f9ff] overflow-hidden">
      {" "}
      {/* Changed to full width */}
      <div className="my-10 flex justify-center items-center relative overflow-hidden">
        {/* <img
          src={cloud}
          alt="cloud"
          className="animated-image w-full h-70%" // Adjusted to ensure the image fits well
        /> */}
        <h1 className="text-2xl md:text-4xl text-black z-10 text-center">
          <span className="text-[#023f7f]">Discover</span> how to grow your
          business with TRADEDID use cases
        </h1>
      </div>
      <div className="w-full md:w-[90%] mx-auto ">
        <BusinessCard data={voiceUses} heading={"Voice use cases"} />
        <BusinessCard data={smsUses} heading={"SMS use cases"} />
        <BusinessCard data={businessTelephony} heading={"Business telephony"} />
      </div>
    </div>
  );
};

export default Business;
