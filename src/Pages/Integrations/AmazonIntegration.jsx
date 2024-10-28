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

const AmazonIntegration = () => {
  const texts = {
    beforeText: "Why should you connect DIDWW services with",
    spanText: "Amazon Chime SDK",
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
      title: "Voice quality",
      description:
        "High standards of reliability and availability with excellent voice quality.",
    },
    {
      title: "Certified AWS partner",
      description:
        "Interoperability tested services meeting the highest requirements of Amazon Chime SDK.",
    },
    {
      title: "Full compliance",
      description:
        "Adherence to all regulatory standards globally for all VoIP services, including Local Dialing and Emergency Calling.",
    },
    {
      title: "99.998% core network uptime",
      description:
        "Highly scalable, secure, and fully geo-redundant private network infrastructure with live, in-house monitoring 24/7/365.",
    },
    {
      title: "Phone Number Porting",
      description:
        "Wide Porting coverage for the seamless migration of your numbers to DIDWW free of charge.",
    },
  ];

  const voipData = [
    {
      title: "Call centers",
      description:
        "Empowering call centers with reliable two-way voice communication solutions.",
    },
    {
      title: "PSTN replacement",
      description:
        "Premium quality and affordable communications, including Local Dialing and Emergency Services.",
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
        preText={"Empowering communications with"}
        spanText={"Amazon Chime SDK"}
        nextText={""}
        subheading={
          "Enhance your customer experience with DIDWW SIP Trunks and Amazon Chime Voice Connector"
        }
        bgImg={
          "https://c4.wallpaperflare.com/wallpaper/712/806/489/alabama-hills-4k-amazing-desktop-wallpaper-preview.jpg"
        }
      />
      <DIDNumbersSection texts={texts} data={cardData} />
      <PartnershipUI
        companyName={"Amazon"}
        CompanyLogo={
          "https://www.didww.com/_next/static/media/amazon-logo.bd227d18.webp"
        }
      />
      {/* <CardWithCompany /> */}

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

export default AmazonIntegration;
