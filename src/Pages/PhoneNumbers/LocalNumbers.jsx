import React from "react";
import TopSection from "../../Components/AllPhoneNumber/TopSection";
import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import PriceList from "../../Components/AllPhoneNumber/PriceList";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../../Components/Home/LastSection";

const LocalNumbers = () => {
  const cardData = [
    {
      title: "Large Inventory",
      description:
        "Instantly available Local Virtual Phone Numbers in 62 countries and 5207 area codes worldwide.",
    },
    {
      title: "Licenced Operator for Voice and SMS",
      description:
        "Fully licenced operator in 30+ countries with our own numbering resources in multiple geographies.",
    },
    {
      title: "Local Phone Number Portability",
      description:
        "Wide porting coverage for the seamless migration of your numbers to TRADEDID free of charge.",
    },
    {
      title: "Full Compliance",
      description:
        "Adherence to all regulatory standards globally for all VoIP services, including Local Dialing and Emergency Calling.",
    },
    {
      title: "Premium Call Quality",
      description:
        "Local Phone Numbers, with own numbering ranges and direct interconnections.",
    },
    {
      title: "99.998% Core Network Uptime",
      description:
        "Highly scalable, secure, and fully geo-redundant private network infrastructure with live, in-house monitoring 24/7/365.",
    },
    {
      title: "Flexible Capacity Options",
      description:
        "Flat-rate, pay-per-minute, or hybrid voice channel capacity for maximum availability and cost-efficiency.",
    },
    {
      title: "Number Selection Tool",
      description:
        "Instant access to an extensive global Phone Number inventory, including Gold and Vanity Numbers.",
    },
    {
      title: "Emergency Calling",
      description:
        "DID Numbers routed to the relevant PSAP for safety and compliance.",
    },
  ];

  const texts = {
    beforeText: "Why do customers choose TRADEDID",
    afterText: "Phone Numbers ? ",
    spanText: "Local",
  };

  const voipData = [
    {
      title: "Phone Numbers as a value-added service",
      description:
        "Voice and SMS-enabled Virtual Phone Numbers covering 91 countries and 5256 area codes.",
    },
    {
      title: "SMS surveys",
      description: "Two-way messaging for gathering user responses.",
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
        spanText={"Local"}
        nextText={"Phone Numbers for global business access"}
        subheading={
          "Establish your local presence in 5207 area codes with geographical DIDs"
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

export default LocalNumbers;
