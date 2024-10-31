import React from "react";

import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import PriceList from "../../Components/AllPhoneNumber/PriceList";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../../Components/Home/LastSection";
import TopSection from "../../Components/common/TopSection";
import SIPTrunking from "../../Components/Services/SipTrunks";
import SMSIntegration from "../../Components/Services/SMSIntegration";
import QuoteRequest from "../../Components/Services/QuoteRequest";
import DIDPlusZero from "../../Components/Services/DIDplusZero";

import Helicopter from "../../Components/Services/Helicopter";

import BusinessPBX from "../../Components/Tools/BusinessPBX";
import ConnectTools from "../../Components/Tools/ConnectTools";
import BigLaptops from "../../Components/Services/BigLaptop";
import BigLaptop from "../../Components/Tools/BigLaptop";
import PricingPlans from "../../Components/Tools/PricingPlans";
import BusinessTools from "../../Components/Tools/BusinessTools";
import { GoDotFill } from "react-icons/go";
import DevEnvironment from "../../Components/Tools/DevEnvironment";

const TradeDidApi = () => {
  const texts = {
    beforeText: "Why do customers choose the",
    spanText: "DIDWW REST API",
    afterText: "?",
    subPara: "",
  };

  const cardData = [
    {
      title: "Live inventory management",
      description: "Instant addition or removal of Phone Numbers.",
    },
    {
      title: "Flexible configuration",
      description: "Full functionality and unlimited programmable scenarios.",
    },
    {
      title: "Readily accessible coverage",
      description: "A vast inventory of Phone Numbers available via the API.",
    },
    {
      title: "Number Selection",
      description:
        "Comprehensive phone number search and reservation capabilities.",
    },
    {
      title: "Cost-efficient solution",
      description: "Saving money on DID set-up fees.",
    },
    {
      title: "Effortless end-user registration",
      description: "Automated submission of regulatory data via the API.",
    },
    {
      title: "Developer friendly",
      description:
        "Multiple libraries available for key programming languages.",
    },
    {
      title: "Complete API documentation",
      description:
        "Access to extensive resources with examples for API implementation.",
    },
  ];

  const voipData = [
    {
      title: "SMS notifications",
      description: "Business messaging for operational efficiency.",
    },
    {
      title: "Cloud IVR",
      description:
        "Easy to set up, interactive voice response service for companies of any size.",
    },
  ];

  const hoverBoxes = [
    {
      title: "Extensive DID coverage",
      color: "bg-sky-400",
      hoverColor: "hover:bg-sky-500",
      solutions: [
        "All types:",
        "Local Numbers",
        "National Numbers",
        "Toll Free Numbers",
        "UIFN",
        "Mobile Numbers",
        "Shared Cost Numbers",
      ],
    },
    {
      title: "Telecom services",
      color: "bg-orange-300",
      hoverColor: "hover:bg-orange-400",
      solutions: [
        "Two-way SIP Trunking",
        "Two-way SMS",
        "Flexible Capacity options",
        "Emergency Calling",
        "Global Phone Number Porting",
        "Voice Forwarding and SMS Delivery",
        "Cloud Fax services",
      ],
    },
    {
      title: "Professional tools",
      color: "bg-blue-800",
      hoverColor: "hover:bg-blue-900",
      solutions: [
        "API",
        "Self-service user portal",
        "Number porting tool",
        "Number selection tool",
        "Business phone systems™",
      ],
    },
    {
      title: "Solutions for operators",
      color: "bg-teal-300",
      hoverColor: "hover:bg-teal-400",
      solutions: [
        "API for automation",
        "Reliability",
        "Compliance",
        "Wholesale pricing",
        "Porting",
        "Scalability",
        "Quality",
      ],
    },
    {
      title: "Enterprise communications",
      color: "bg-sky-400",
      hoverColor: "hover:bg-sky-500",
      solutions: [
        "All industries:",
        "Health",
        "Finance",
        "Logistics",
        "Aviation",
        "Retail",
        "Tourism",
        "Your business",
      ],
    },
  ];

  return (
    <div>
      <TopSection
        preText={"Fully automate processes with the"}
        spanText={"TRADEDID API "}
        nextText={""}
        subheading={"Streamline your business operations"}
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <div>
        <div className=" py-12 flex items-center justify-center">
          <div className=" p-8 rounded-lg  max-w-5xl w-full">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Build, deploy and scale efficiently with the{" "}
                  <span className="text-orange-500">DIDWW API</span>
                </h1>
                <p className="text-gray-600 mb-4">
                  Designed for operators, excellent for enterprises
                </p>
              </div>
              <div className="md:w-1/2 p-4  self-start md:self-center">
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>OTT apps</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>IoT</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>Mobile apps</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>UCaaS</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>Dashboards</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>Front and back-end automation</span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DevEnvironment />
      {/* <BusinessPBX />
      <BigLaptops list={true} />
      <ConnectTools />
      <BigLaptop list={true} />
      <BigLaptops tools={true} />
      <PricingPlans /> */}
      <VoIPUseCases
        data={voipData}
        subHeading={
          "Learn what you can build with TRADEDID cloud communications"
        }
      />

      <SecondSection />

      <Testimonial />
      <HoverBoxes data={hoverBoxes} />
      <PromoBanner />
    </div>
  );
};

export default TradeDidApi;
