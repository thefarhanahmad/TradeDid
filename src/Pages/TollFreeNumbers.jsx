import React from "react";
import TopSection from "../Components/AllPhoneNumber/TopSection";
import DIDNumbersSection from "../Components/AllPhoneNumber/DIDNumSection";
import PriceList from "../Components/AllPhoneNumber/PriceList";
import VoIPUseCases from "../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../Components/Home/SecondSection";
import Testimonial from "../Components/Home/Testimonials";
import HoverBoxes from "../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../Components/Home/LastSection";

const TollFreeNumbers = () => {
  const cardData = [
    {
      title: "Large Inventory",
      description:
        "Instantly available Toll Free Virtual Phone Numbers in 64 countries.",
    },
    {
      title: "Free Unlimited Capacity",
      description:
        "Toll Free Phone Numbers provided with a virtually unlimited incoming call capacity.",
    },
    {
      title: "Flexible Toll Free Pricing",
      description:
        "Complete scalability and cost-efficiency with competitive per-minute Toll Free rates.",
    },
    {
      title: "Global Toll Free Number Portability",
      description:
        "Wide porting coverage for the seamless migration of your numbers to TRADEDID free of charge.",
    },
    {
      title: "99.998% Core Network Uptime",
      description:
        "Highly scalable, secure, and fully geo-redundant private network infrastructure with live, in-house monitoring 24/7/365.",
    },
    {
      title: "Licenced Operator for Voice and SMS",
      description:
        "Fully licenced operator in 30+ countries with our own numbering resources in multiple geographies.",
    },
    {
      title: "Premium Toll Free Call Quality",
      description:
        "Toll Free Phone Numbers combined with premium quality, reliability, and regulatory compliance.",
    },
    {
      title: "Number Selection Tool",
      description:
        "Instant access to an extensive global Phone Number inventory, including Gold and Vanity Numbers.",
    },
    {
      title: "Toll Free Forwarding",
      description: "A wide range of delivery options including SIP and PSTN.",
    },
  ];

  const texts = {
    beforeText: "Why do customers choose TRADEDID",
    afterText: "Phone Numbers ? ",
    spanText: "Toll Free",
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
        spanText={"Toll Free"}
        nextText={"Phone Numbers for maximizing your business reachability"}
        subheading={
          "Local presence with high reliability and full trunk redundancy globally"
        }
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

export default TollFreeNumbers;
