import React from "react";

import DIDNumbersSection from "../Components/AllPhoneNumber/DIDNumSection";
import PriceList from "../Components/AllPhoneNumber/PriceList";
import VoIPUseCases from "../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../Components/Home/SecondSection";
import Testimonial from "../Components/Home/Testimonials";
import HoverBoxes from "../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../Components/Home/LastSection";
import TopSection from "../Components/Services/TopSection";
import SIPTrunking from "../Components/Services/SipTrunks";
import SMSIntegration from "../Components/Services/SMSIntegration";
import QuoteRequest from "../Components/Services/QuoteRequest";
import DIDPlusZero from "../Components/Services/DIDplusZero";
import BigLaptop from "../Components/Services/BigLaptop";
import Helicopter from "../Components/Services/Helicopter";

const PhoneNumberPorting = () => {
  const texts = {
    beforeText: "Why do",
    afterText: " business phone numbers to TRADEDID",
    spanText: "Ecustomers port",
    subPara: "",
  };

  const cardData = [
    {
      title: "Free number portability",
      description: "No Porting charges when migrating DID numbers to DIDWW.",
    },
    {
      title: "Self-service Porting tool",
      description: "User-friendly porting process management online.",
    },
    {
      title: "Interruption-free services",
      description:
        "Reliable migration of your business phone numbers, ensuring service continuity during Porting.",
    },
    {
      title: "Quick number portability check",
      description: "Confirmation within one business day.",
    },
    {
      title: "Phone Number Porting globally",
      description:
        "The widest coverage of portable Local, National, Mobile and Toll Free Phone Numbers.",
    },
    {
      title: "Professional live support",
      description:
        "Dedicated Porting team for a seamless and effortless number migration.",
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
        preText={"Global"}
        spanText={"Phone Number Porting"}
        nextText={""}
        subheading={
          "Transfer your business phone numbers to DIDWW in 40 countries free of charge"
        }
      />
      <DIDNumbersSection data={cardData} texts={texts} />

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

export default PhoneNumberPorting;