import React from "react";
import TopSection from "../../Components/AllPhoneNumber/TopSection";
import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import PriceList from "../../Components/AllPhoneNumber/PriceList";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../../Components/Home/LastSection";

const UniversalNumbers = () => {
  const cardData = [
    {
      title: "Extensive Reachability",
      description:
        "A single UIFN is reachable from 60 countries, with coverage being continually expanded.",
    },
    {
      title: "Cost Saving",
      description:
        "Highly cost-efficient Toll Free solution for international businesses.",
    },
    {
      title: "Quick Setup and Easy Management",
      description:
        "Effortless and swift number acquisition and service management.",
    },
    {
      title: "Premium Call Quality",
      description:
        "Universal International Freephone Numbers combined with premium quality, reliability, and full regulatory compliance.",
    },
    {
      title: "Free Unlimited Capacity",
      description:
        "Universal International Freephone Numbers with a virtually unlimited incoming call capacity.",
    },
    {
      title: "Simplified Marketing",
      description:
        "A single number for marketing campaigns in multiple countries for convenience and cost-efficiency.",
    },
    {
      title: "Global Business Presence",
      description:
        "Establishing a truly global reach for a business of any size.",
    },
    {
      title: "Full Compliance",
      description:
        "Adherence to all regulatory standards globally for all VoIP services.",
    },
    {
      title: "Effortless Business Expansion",
      description:
        "An easy way to enter new markets by activating the same UIFN in additional countries.",
    },
  ];

  const texts = {
    beforeText: "Why do customers choose TRADEDID",
    afterText: "(UIFNs)? ",
    spanText: "Universal International Freephone Numbers",
  };

  const voipData = [
    {
      title: "SMS Customer Support",
      description: "Two-way business and customer communications.",
    },
    {
      title: "Call Center & Queue",
      description:
        "Call queueing services to ensure that your business never misses an important call.",
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
        preText={""}
        spanText={"Fully-compliant"}
        nextText={"Universal International Freephone Numbers"}
        subheading={"A single Toll Free number for global reachability"}
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <PriceList />
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

export default UniversalNumbers;
