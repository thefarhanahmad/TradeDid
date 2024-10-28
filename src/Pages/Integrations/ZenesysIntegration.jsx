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

const GenesysIntegration = () => {
  const texts = {
    beforeText: "Why should you connect TRADEDID services with",
    spanText: "Genesys",
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
      title: "Powerful SIP Trunking",
      description:
        "Carrier-grade quality two-way SIP trunks for enterprise communications.",
    },
    {
      title: "Local dialing",
      description:
        "Premium quality local routes with guaranteed CLI and Emergency Services.",
    },
    {
      title: "Genesys solution partner",
      description: "Ready for instant interconnection with any business.",
    },
    {
      title: "Genesys contact center solution",
      description:
        "Unify all your customer and agent experiences across phone, email, chat, text, and social channels.",
    },
    {
      title: "Voice quality",
      description:
        "High standards of reliability and availability with excellent voice quality.",
    },
    {
      title: "Flexible configuration",
      description:
        "Various VoIP trunk configuration options for enhanced communications.",
    },
    {
      title: "Self-service User Portal",
      description:
        "The TRADEDID User Panel for full control over the configuration, management, and monitoring of your services.",
    },
    {
      title: "Emergency Calling",
      description:
        "DID Numbers routed to the relevant PSAP for safety and compliance.",
    },
  ];

  const voipData = [
    {
      title: "Phone Numbers as a value-added service",
      description:
        "Voice and SMS-enabled Virtual Phone Numbers covering 91 countries and 5272 area codes.",
    },
    {
      title: "Business phone system",
      description:
        "Fully-scalable, simple to use, cloud-based PBX with a unique interface and an extensive feature set.",
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
        preText={"Enhanced customer experience with"}
        spanText={"Genesys Cloud CX"}
        nextText={""}
        subheading={
          "Build a powerful communication solution with TRADEDID and Genesys"
        }
        bgImg={
          "https://c4.wallpaperflare.com/wallpaper/712/806/489/alabama-hills-4k-amazing-desktop-wallpaper-preview.jpg"
        }
      />
      {/* <CardWithCompany /> */}
      <DIDNumbersSection texts={texts} data={cardData} />
      <PartnershipUI
        companyName={"Genesys"}
        CompanyLogo={
          "https://www.didww.com/_next/static/media/genesys-logo.b5ca013b.webp"
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

export default GenesysIntegration;
