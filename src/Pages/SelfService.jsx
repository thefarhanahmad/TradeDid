import React from "react";

import DIDNumbersSection from "../Components/AllPhoneNumber/DIDNumSection";
import PriceList from "../Components/AllPhoneNumber/PriceList";
import VoIPUseCases from "../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../Components/Home/SecondSection";
import Testimonial from "../Components/Home/Testimonials";
import HoverBoxes from "../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../Components/Home/LastSection";
import TopSection from "../Components/Services/TopSection";
import BusinessTools from "../Components/Tools/BusinessTools";
import ServiceMonitoring from "../Components/Tools/ServiceMonitoring";

const SelfService = () => {
  const texts = {
    beforeText: "How does the DIDWW User Portal deliver the best",
    spanText: "online experience",
    afterText: "?",
    subPara: "",
  };
  const cardData = [
    {
      title: "One-stop shop",
      description:
        "All Voice and SMS solutions available in one place for businesses of any size.",
    },
    {
      title: "Extensive configuration capabilities",
      description:
        "Sophisticated setup options for Voice and SMS to meet the needs of enterprises and telecom operators.",
    },
    {
      title: "Powerful platform",
      description:
        "Instant provisioning, multiple filtering options and real-time management of inbound and outbound communications.",
    },
    {
      title: "Service monitoring",
      description:
        "Call and traffic statistics with graphical data and instant access to detailed Voice and SMS CDRs.",
    },
    {
      title: "Automation",
      description:
        "Preconfigured templates for service and account management.",
    },
  ];

  const voipData = [
    {
      title: "Phone Numbers as a Value-Added Service",
      description:
        "Voice and SMS-enabled Virtual Phone Numbers covering 91 countries and 5257 area codes.",
    },
    {
      title: "Call Tracking",
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
        preText={"Full control with the DIDWW Self-service"}
        spanText={"User Portal"}
        nextText={""}
        subheading={
          "Instant provisioning and online management for telcos and enterprises"
        }
        bgImg={"https://www.didww.com/_next/static/media/main.e85e2a11.jpg"}
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <BusinessTools />
      <ServiceMonitoring />
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

export default SelfService;
