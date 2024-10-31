import React from "react";
import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import PromoBanner from "../../Components/Home/LastSection";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import TopSection from "../../Components/common/TopSection";
import CardWithCompany from "../../Components/Integrations/CardswithLogo";
import PartnershipUI from "../../Components/Integrations/PartnershipUI";

const PabblyIntegration = () => {
  const texts = {
    beforeText: "Why should you connect DIDWW services with",
    spanText: "Pabbly",
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
        "High standards of reliability and availability for Voice and SMS communications.",
    },
    {
      title: "1500+ apps",
      description:
        "Access to a wide range of web applications including critical business tools you use every day.",
    },
    {
      title: "Pabbly solution partner",
      description:
        "Instant interconnection enabling numerous configurations for business productivity.",
    },
    {
      title: "Call events API",
      description:
        "Webhook mechanism providing real-time call events for workflow automation.",
    },
    {
      title: "Enhanced business tools",
      description:
        "Expanding the functionality of your business applications with Voice and SMS.",
    },
  ];

  const voipData = [
    {
      title: "Call center & queue",
      description:
        "Call queueing services to ensure that your business never misses an important call.",
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
        preText={"Seamlessly interconnect business apps with"}
        spanText={"Pabbly"}
        nextText={""}
        subheading={
          "Leverage TRADEDID Voice and SMS to streamline your workflows "
        }
        bgImg={
          "https://c4.wallpaperflare.com/wallpaper/712/806/489/alabama-hills-4k-amazing-desktop-wallpaper-preview.jpg"
        }
      />
      {/* <CardWithCompany /> */}
      <DIDNumbersSection texts={texts} data={cardData} />
      <PartnershipUI
        companyName={"Pabbly"}
        CompanyLogo={
          "https://www.didww.com/_next/static/media/pabbly-logo.9017e41b.webp"
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

export default PabblyIntegration;
