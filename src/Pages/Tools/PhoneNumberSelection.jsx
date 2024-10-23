import React from "react";

import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import PriceList from "../../Components/AllPhoneNumber/PriceList";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../../Components/Home/LastSection";
import TopSection from "../../Components/Services/TopSection";
import SIPTrunking from "../../Components/Services/SipTrunks";
import SMSIntegration from "../../Components/Services/SMSIntegration";
import QuoteRequest from "../../Components/Services/QuoteRequest";
import DIDPlusZero from "../../Components/Services/DIDplusZero";

import Helicopter from "../../Components/Services/Helicopter";
import BigLaptop from "../../Components/Tools/BigLaptop";

const PhoneNumberSelection = () => {
  const texts = {
    beforeText: "Why do customers",
    spanText: "choose",
    afterText: "the DIDWW Phone Number Selection tool?",
    subPara: "",
  };

  const cardData = [
    {
      title: "Simple and intuitive",
      description: "Easily accessible from the fully self-service User Portal.",
    },
    {
      title: "Large inventory",
      description: "An extensive variety of phone numbers available globally.",
    },
    {
      title: "Alphanumeric search",
      description:
        "Convenient look-up of Vanity and Golden Phone Numbers for your business.",
    },
    {
      title: "Free vanity number selection",
      description:
        "No additional or hidden fees for selecting vanity phone numbers.",
    },
    {
      title: "Number reservation",
      description:
        "Possibility of reserving selected numbers before placing an order via the DIDWW User Portal.",
    },
    {
      title: "Golden numbers",
      description:
        "An extensive inventory of golden numbers across the globe available for a low setup fee.",
    },
  ];

  const voipData = [
    {
      title: "SMS verifications",
      description: "One-time password SMS verifications for maximum security.",
    },
    {
      title: "Call centers",
      description:
        "Empowering call centers with reliable two-way voice communication solutions.",
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
        preText={"Personalized business Phone Numbers with our"}
        spanText={"Number Selection"}
        nextText={"tool"}
        subheading={"A large inventory of Golden and Vanity DIDs"}
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <div className="bg-gradient-to-b from-[#faf6f3] to-[#fff] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#134391] mb-8">
            Looking to help your brand{" "}
            <span className="text-orange-500">stand out</span>?
          </h2>
          <div className="w-[90%] mx-auto flex">
            <div className=" w-[48%] mt-6 pr-8 border-r-2 border-orange-400">
              <p className="text-gray-600 mt-4">
                Search for easy-to-remember and unique Golden and Vanity Phone
                Numbers for your business in our extensive inventory.
              </p>
            </div>

            <div className=" w-[48%] mt-6 pl-8 border-l-2 border-orange-400">
              <p className="text-gray-600 mt-4">
                Instantly increase your brand recognition and visibility with a
                memorable Golden Phone Number for a low one-time setup fee.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-col  items-center justify-center mt-8">
            <h1 className="text-[#134391]  w-[80%]">
              For more information on how to select a number, please refer to
              the knowledgebase article
            </h1>
            <button className="bg-orange-500 px-6 py-1 rounded-2xl text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <QuoteRequest />
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

export default PhoneNumberSelection;
