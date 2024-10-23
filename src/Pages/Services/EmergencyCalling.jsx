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
import BigLaptop from "../../Components/Services/BigLaptop";
import Helicopter from "../../Components/Services/Helicopter";

const EmergencyCalling = () => {
  const texts = {
    beforeText: "Why do customers choose the TRADEDID",
    afterText: "service?",
    spanText: "Emergency Calling",
    subPara: "",
  };

  const cardData = [
    {
      title: "Extensive coverage",
      description:
        "Access to Public Safety Answering Points (PSAPs) in 37 countries for safety and compliance.",
    },
    {
      title: "True Emergency calling",
      description:
        "Ensuring direct connection to the appropriate Public Safety Answering Point (PSAP) with Local Dialing.",
    },
    {
      title: "PSTN replacement",
      description:
        "Building a full PSTN replacement solution with Local Dialing and Emergency Calling.",
    },
    {
      title: "Free calls to PSAPs",
      description:
        "Cost-effective pricing model with a low service set-up fee.",
    },
    {
      title: "Data security",
      description:
        "All personal data handled and encrypted in accordance with the ISO 27001 security standard.",
    },
    {
      title: "Simplified address management",
      description:
        "Direct access to Emergency databases and tools for effortless address validation.",
    },
    {
      title: "Global phone number portability",
      description:
        "Wide Porting coverage for the seamless migration of your numbers to DIDWW free of charge.",
    },
  ];

  const voipData = [
    {
      title: "Cloud IVR",
      description:
        "Easy to set up, interactive voice response service for companies of any size.",
    },
    {
      title: "Call tracking",
      description:
        "Deep insights into your marketing campaigns and sales performance.",
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
        preText={"Full compliance with"}
        spanText={"Emergency Calling"}
        nextText={""}
        subheading={"PSTN replacement for business communications"}
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <Helicopter />
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

export default EmergencyCalling;
