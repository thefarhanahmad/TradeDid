import React from "react";

import DIDNumbersSection from "../Components/AllPhoneNumber/DIDNumSection";
import PriceList from "../Components/AllPhoneNumber/PriceList";
import VoIPUseCases from "../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../Components/Home/SecondSection";
import Testimonial from "../Components/Home/Testimonials";
import HoverBoxes from "../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../Components/Home/LastSection";
import TopSection from "../Components/Services/TopSection";

const AllTools = () => {
  const texts = {
    beforeText: "All the",
    spanText: "must-have telecommunication",
    afterText: "tools",
    subPara: "Leverage TRADEDID solutions to enhance your business efficiency",
  };
  const cardData = [
    {
      title: "Self-service User Portal",
      description:
        "The DIDWW user panel for full control over the configuration, management and monitoring of your services.",
    },
    {
      title: "Number Porting tool",
      description:
        "An online tool for submitting, tracking and managing Porting processes easily and efficiently.",
    },
    {
      title: "Number Selection tool",
      description:
        "Instant access to an extensive global Phone Number inventory, including Gold and Vanity Numbers.",
    },
    {
      title: "Business phone.systems™",
      description:
        "Fully-scalable, simple to use cloud-based PBX with a unique interface and an extensive feature set.",
    },
    {
      title: "phone.systems™ API",
      description: "REST API for the cloud PBX phone.systems™ distribution.",
    },
    {
      title: "DIDWW API",
      description:
        "REST API for the integration of the extensive range of DIDWW core services into your own business processes.",
    },
  ];

  const voipData = [
    {
      title: "Number Masking Services",
      description: "Voice communications without exposing real Phone Numbers.",
    },
    {
      title: "SMS Customer Support",
      description: "Two-way business and customer communications.",
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
        preText={"Advanced"}
        spanText={"self-service tools"}
        nextText={"for telecommunication professionals"}
        subheading={"Carrier-grade cloud telephony for your business"}
        bgImg={"https://www.didww.com/_next/static/media/main.e85e2a11.jpg"}
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

export default AllTools;
