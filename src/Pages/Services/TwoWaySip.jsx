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

const TwoWaySms = () => {
  const texts = {
    beforeText: "Why do customers choose the TRADEDID",
    afterText: "services?",
    spanText: "SMS",
    subPara: "",
  };

  const cardData = [
    {
      title: "Extensive SMS coverage",
      description: "Premium quality SMS services available worldwide.",
    },
    {
      title: "Competitive SMS pricing",
      description:
        "Cost-efficient rates ensuring a global reach for any business use case.",
    },
    {
      title: "Compliant SMS",
      description:
        "Full regulatory compliance globally for all services, including two-way SMS.",
    },
    {
      title: "99.998% core network uptime",
      description:
        "Highly scalable, secure and fully geo-redundant private network infrastructure with live, in-house monitoring 24/7/365.",
    },
    {
      title: "Voice and SMS on a single phone number",
      description:
        "Complete two-way communication solution for an enhanced customer experience.",
    },
    {
      title: "SMS trunks",
      description: "Flexible delivery methods, including SMPP, HTTP and Email.",
    },
    {
      title: "Advanced settings",
      description:
        "Configuration and monitoring of inbound and outbound SMS trunks available through the DIDWW User Panel.",
    },
    {
      title: "Simple to use",
      description:
        "Sending messages with the Outbound SMS API or through the User Panel.",
    },
  ];

  const voipData = [
    {
      title: "SMS surveys",
      description: "Two-way messaging for gathering user responses.",
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
        preText={"Two-way"}
        spanText={"SMS trunks"}
        nextText={"for P2P and A2P messaging"}
        subheading={
          "Enrich your business communications with SMS and voice-enabled phone numbers"
        }
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <SMSIntegration />
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

export default TwoWaySms;
