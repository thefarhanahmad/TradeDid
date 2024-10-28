import React from "react";
import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import PromoBanner from "../../Components/Home/LastSection";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import TopSection from "../../Components/Services/TopSection";
import CardWithCompany from "../../Components/Integrations/CardswithLogo";
import PartnershipUI from "../../Components/Integrations/PartnershipUI";

const ZappierIntegaration = () => {
  const texts = {
    beforeText: "Why should you connect DIDWW services with",
    spanText: "Zapier",
    afterText: "?",
    subPara: "",
  };

  const cardData = [
    {
      title: "Extensive global reach",
      description:
        "Access to Phone Numbers in 80+ countries available for immediate activation.",
    },
    {
      title: "Voice and SMS",
      description:
        "High standards of reliability and availability for Voice and SMS services.",
    },
    {
      title: "5000+ apps",
      description:
        "Access to different web applications including critical business tools you use every day.",
    },
    {
      title: "Zapier solution partner",
      description:
        "Instant interconnection enabling numerous configurations for business productivity.",
    },
    {
      title: "Call events API",
      description:
        "Webhook mechanism providing real-time call events for flows’ automation.",
    },
    {
      title: "Enhanced business tools",
      description:
        "Expanding the functionality of your business applications with Voice and SMS.",
    },
  ];

  const voipData = [
    {
      title: "Voice for IoT",
      description:
        "Highly reliable VoIP solutions for IoT providers worldwide.",
    },
    {
      title: "DIDs for conference calling",
      description:
        "Virtual Phone Numbers across the globe for conference calling solution providers.",
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
        preText={"Integrate DIDWW services into 5000+ business apps with"}
        spanText={"Zapier"}
        nextText={""}
        subheading={"Automate your business processes with DIDWW Voice and SMS"}
        bgImg={
          "https://c4.wallpaperflare.com/wallpaper/712/806/489/alabama-hills-4k-amazing-desktop-wallpaper-preview.jpg"
        }
      />
      {/* <CardWithCompany /> */}
      <DIDNumbersSection texts={texts} data={cardData} />
      <PartnershipUI
        companyName={"Zapier"}
        CompanyLogo={
          "https://www.didww.com/_next/static/media/zapier-logo.d3e0c7a8.webp"
        }
      />
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

export default ZappierIntegaration;
