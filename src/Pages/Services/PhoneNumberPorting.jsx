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
import BigLaptop from "../../Components/Tools/BigLaptop";

const PhoneNumberPorting = () => {
  const texts = {
    beforeText: "Why do customers enjoy the DIDWW",
    spanText: " Porting tool",
    afterText: "?",
    subPara: "",
  };

  const cardData = [
    {
      title: "User-friendly tool",
      description: "Convenient self-service management of the Porting process.",
    },
    {
      title: "Quick number portability check",
      description: "Confirmation within one business day.",
    },
    {
      title: "Simple batch Porting",
      description:
        "Time-efficient Porting with up to 50,000 numbers per project from multiple carriers simultaneously.",
    },
    {
      title: "Flexible Porting schedule",
      description:
        "Selecting your preferred Porting date and time for convenient portability.",
    },
    {
      title: "Effortless project management",
      description:
        "Managing a multitude of projects from different customers with ease.",
    },
    {
      title: "Instant notifications",
      description: "Porting alerts at every step for a seamless process.",
    },
    {
      title: "Porting role",
      description:
        "A dedicated user role for handling all Porting processes via the self-service user panel.",
    },
    {
      title: "Convenient paperwork",
      description:
        "Quick and easy access to required Porting forms in one place.",
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
        preText={"Effortless Phone"}
        spanText={"Number Porting"}
        nextText={"experience"}
        subheading={"Self-service DIDWW Porting tool"}
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <BigLaptop />
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
