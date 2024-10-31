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

const RibbonIntegration = () => {
  const texts = {
    beforeText: "Why bring TRADEDID services to your",
    spanText: "Ribbon platform",
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
      title: "Ribbon solution partner",
      description: "Ready for instant interconnection with any business.",
    },
  ];

  const voipData = [
    {
      title: "Call center & queue",
      description:
        "Call queueing services to ensure that your business never misses an important call.",
    },
    {
      title: "Cloud IVR",
      description:
        "Easy to set up, interactive voice response service for companies of any size.",
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
        preText={"Seamless interoperability with"}
        spanText={"Ribbon SBC"}
        nextText={""}
        subheading={
          "Build your communications with DIDWW SIP Trunks and Ribbon’s SWe Edge & CNe Edge"
        }
        bgImg={
          "https://c4.wallpaperflare.com/wallpaper/712/806/489/alabama-hills-4k-amazing-desktop-wallpaper-preview.jpg"
        }
      />
      {/* <CardWithCompany /> */}
      <DIDNumbersSection texts={texts} data={cardData} />
      <PartnershipUI
        companyName={"Ribbon"}
        CompanyLogo={
          "https://www.didww.com/_next/static/media/ribbon-logo.d1df64e5.webp"
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

export default RibbonIntegration;
