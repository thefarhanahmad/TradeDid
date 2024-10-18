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

const Capacity = () => {
  const texts = {
    beforeText: "Why is the TRADEDID call",
    afterText: "solution unique?",
    spanText: "Capacity",
    subPara: "",
  };

  const cardData = [
    {
      title: "Cost-efficient pricing",
      description:
        "Multiple inbound VoIP call Capacity billing modes to satisfy any use case.",
    },
    {
      title: "No long-term commitments",
      description:
        "Complete freedom to instantly adjust voice Capacity configurations and volumes to suit your current and future requirements.",
    },
    {
      title: "Free unlimited outbound Capacity",
      description:
        "Competitive outbound rates with no additional charges for voice channels.",
    },
    {
      title: "Free unlimited inbound Capacity",
      description:
        "Toll Free and Shared Cost Numbers supporting unlimited inbound concurrent calls.",
    },
    {
      title: "Instant self-service management",
      description:
        "Effortless and flexible live Capacity configuration management, providing adaptability for all business needs.",
    },
    {
      title: "Flexible configuration options",
      description:
        "Scalable Capacity groups shared among multiple phone numbers, sub-customers and locations worldwide.",
    },
    {
      title: "Hybrid Capacity for maximum availability",
      description:
        "Pay-per-minute Capacity option as a backup for flat-rate channels to handle traffic peaks.",
    },
  ];

  const voipData = [
    {
      title: "SMS notifications",
      description: "Business messaging for operational efficiency.",
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
        preText={"Remove the boundaries with flexible VoIP call"}
        spanText={"Capacity"}
        nextText={""}
        subheading={
          "Virtually unlimited concurrent calls to support your business needs"
        }
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <DIDPlusZero />
      <BigLaptop />
      <QuoteRequest />
      <VoIPUseCases
        data={voipData}
        subHeading={
          "Learn what you can build with TRADEDID cloud communications"
        }
      />
      <SMSIntegration />
      <SecondSection />
      <Testimonial />
      <HoverBoxes data={hoverBoxes} />
      <PromoBanner />
    </div>
  );
};

export default Capacity;
