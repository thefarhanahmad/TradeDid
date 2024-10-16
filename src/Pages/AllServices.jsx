import React from "react";

import DIDNumbersSection from "../Components/AllPhoneNumber/DIDNumSection";
import PriceList from "../Components/AllPhoneNumber/PriceList";
import VoIPUseCases from "../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../Components/Home/SecondSection";
import Testimonial from "../Components/Home/Testimonials";
import HoverBoxes from "../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../Components/Home/LastSection";
import TopSection from "../Components/Services/TopSection";

const AllServices = () => {
  const cardData = [
    {
      title: "Easy Setup",
      description:
        "Quick access to Shared Cost Phone Numbers for businesses worldwide.",
    },
    {
      title: "Free Unlimited Capacity",
      description:
        "Shared Cost Phone Numbers provided with a virtually unlimited incoming call capacity.",
    },
    {
      title: "Licenced Operator for Voice and SMS",
      description:
        "Fully licenced operator in 30+ countries with our own numbering resources in multiple geographies.",
    },
    {
      title: "Shared Cost Phone Number Portability",
      description:
        "Wide porting coverage for the seamless migration of your numbers to TRADEDID free of charge.",
    },
    {
      title: "Number Selection Tool",
      description:
        "Instant access to an extensive global Phone Number inventory, including Gold and Vanity Numbers.",
    },
    {
      title: "99.998% Core Network Uptime",
      description:
        "Highly scalable, secure, and fully geo-redundant private network infrastructure with live, in-house monitoring 24/7/365.",
    },
    {
      title: "Full Compliance",
      description:
        "Adherence to all regulatory standards globally for all VoIP services, including Local Dialing and Emergency Calling.",
    },
  ];

  const texts = {
    beforeText: "All the",
    afterText: "for Voice and SMS communications",
    spanText: "building blocks",
    subPara: "TRADEDID services for your cloud telephony needs",
  };

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
        preText={"The"}
        spanText={"one-stop-shop "}
        nextText={"or telecommunication professionals"}
        subheading={"Remove the boundaries with TRADEDID services"}
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

export default AllServices;
