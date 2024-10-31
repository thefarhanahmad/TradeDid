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
import BigLaptop from "../../Components/Services/BigLaptop";
import Helicopter from "../../Components/Services/Helicopter";

const ForwardSMSDelivery = () => {
  const texts = {
    beforeText: "Why do customers choose TRADEDID for",
    afterText: "?",
    spanText: "calling and messaging",
    subPara: "",
  };

  const cardData = [
    {
      title: "Single number for multiple services",
      description:
        "Voice forwarding and SMS delivery on the same phone number.",
    },
    {
      title: "Cloud PBX",
      description: "An extensive set of call scenarios with phone.systems™.",
    },
    {
      title: "Full compatibility",
      description: "Seamless BYOC integration with a platform of your choice.",
    },
    {
      title: "Trunk groups",
      description:
        "Full redundancy and load balancing for seamless and highly reliable communications.",
    },
    {
      title: "Trunk configuration profiles",
      description: "Automated trunk assignment with pre-set configurations.",
    },
    {
      title: "Easy set-up",
      description:
        "Instant changes to configurations online via the fully self-service User Portal.",
    },
    {
      title: "Strategically placed mega POPs",
      description:
        "Quality, security and low latency using location-based routing.",
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
        preText={"Enhance your business comms with"}
        spanText={"Voice forwarding and SMS delivery"}
        nextText={"options"}
        subheading={"Your calls and text messages delivered anywhere"}
      />
      <DIDNumbersSection data={cardData} texts={texts} />
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

export default ForwardSMSDelivery;
