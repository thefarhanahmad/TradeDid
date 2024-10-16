import React from "react";
import TopSection from "../Components/AllPhoneNumber/TopSection";
import DIDNumbersSection from "../Components/AllPhoneNumber/DIDNumSection";

import PriceList from "../Components/AllPhoneNumber/PriceList";
import VoIPUseCases from "../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../Components/Home/SecondSection";
import Testimonial from "../Components/Home/Testimonials";
import PromoBanner from "../Components/Home/LastSection";
import HoverBoxes from "../Components/AllPhoneNumber/HoverBoxes";

const AllPhoneNumbers = () => {
  // Data for the card content
  const cardData = [
    {
      title: "Local Phone Numbers",
      description: "Local presence in 5254 area codes with geographical DIDs.",
    },
    {
      title: "National Phone Numbers",
      description:
        "Complete freedom for businesses in multi-regional markets across the globe.",
    },
    {
      title: "Toll Free Phone Numbers",
      description:
        "An extensive worldwide coverage of Toll Free Numbers for global businesses with local customers.",
    },
    {
      title: "Universal International Freephone Numbers",
      description:
        "A single Toll Free Number for a truly global brand presence and reachability.",
    },
    {
      title: "Mobile Phone Numbers",
      description:
        "A wide selection of Voice and SMS enabled phone numbers for cost-effective communications.",
    },
    {
      title: "Shared Cost Numbers",
      description:
        "Effortless business phone number setup with country-wide accessibility.",
    },
  ];

  const texts = {
    beforeText: "",
    afterText: "of DID numbers for your business",
    spanText: "All types",
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
      title: "Telecom services",
      color: "bg-sky-400",
      hoverColor: "hover:bg-sky-500",
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
      color: "bg-orange-300",
      hoverColor: "hover:bg-orange-400",
      solutions: [
        "API",
        "Self-service user portal",
        "Number porting tool",
        "Number selection tool",
        "Business phone systems™",
      ],
    },
    {
      title: "Profitable outcomes",
      color: "bg-blue-800",
      hoverColor: "hover:bg-blue-900",
      solutions: [
        "Elastic pay-as-you-grow pricing",
        "Unique capacity options",
        "Free global porting",
        "Cancel at any time",
        "Expert customer support included",
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
        preText={"Virtual Phone"}
        spanText={"Numbers"}
        subheading={"Local presence on a global scale with DID phone numbers"}
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

export default AllPhoneNumbers;
