import React from "react";
import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import PromoBanner from "../../Components/Home/LastSection";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import TopSection from "../../Components/Services/TopSection";
import CardWithCompany from "../../Components/Integrations/CardswithLogo";
import ImageAnimation from "../../Components/Home/ImageAnimation";
import SelectedCard from "../../Components/Solutions/SelectedCard";
import QuoteRequest from "../../Components/Services/QuoteRequest";

const UseCases = () => {
  const texts1 = {
    beforeText: "Voice use cases",
    spanText: "",
    afterText: "",
    subPara: "",
  };
  const texts2 = {
    beforeText: "SMS use cases",
    spanText: "",
    afterText: "",
    subPara: "",
  };
  const texts3 = {
    beforeText: "Business telephony use cases",
    spanText: "",
    afterText: "",
    subPara: "",
  };

  const cardData1 = [
    {
      title: "Phone Numbers as a value-added service",
      description:
        "Voice and SMS-enabled Virtual Phone Numbers covering 91 countries and 5274 area codes.",
    },
    {
      title: "Call tracking",
      description:
        "Deep insights into your marketing campaigns and sales performance.",
    },
    {
      title: "Number masking services",
      description: "Voice communications without exposing real Phone Numbers.",
    },
    {
      title: "Call centers",
      description:
        "Empowering call centers with reliable two-way voice communication solutions.",
    },
    {
      title: "Contact centers",
      description:
        "High quality and reliable SIP Trunking services for world-class contact centers.",
    },
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
  const cardData2 = [
    {
      title: "SMS customer support",
      description: "Two-way business and customer communications.",
    },
    {
      title: "SMS marketing",
      description: "SMS marketing campaigns for promoting customer engagement.",
    },
    {
      title: "SMS notifications",
      description: "Business messaging for operational efficiency.",
    },
    {
      title: "SMS verifications",
      description: "One-time password SMS verifications for maximum security.",
    },
    {
      title: "SMS surveys",
      description: "Two-way messaging for gathering user responses.",
    },
  ];
  const cardData3 = [
    {
      title: "Call center & queue",
      description:
        "Call queueing services to ensure that your business never misses an important call.",
    },
    {
      title: "Conference calling",
      description:
        "Secure, enterprise-grade audio conferencing around the globe.",
    },
    {
      title: "Cloud IVR",
      description:
        "Easy to set up, interactive voice response service for companies of any size.",
    },
    {
      title: "Business phone system",
      description:
        "Fully-scalable, simple to use, cloud-based PBX with a unique interface and an extensive feature set.",
    },
    {
      title: "Global presence",
      description:
        "The largest coverage of premium quality Local, Mobile, National, and Toll Free Virtual Phone Numbers.",
    },
    {
      title: "PSTN replacement",
      description:
        "Premium quality and affordable communications, including Local Dialing and Emergency Services.",
    },
  ];

  const voipData = [
    {
      title: "Number masking services",
      description: "Voice communications without exposing real Phone Numbers.",
    },
    {
      title: "SMS customer support",
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
        preText={"Explore TRADEDID"}
        spanText={"use cases"}
        nextText={""}
        subheading={
          "Build Voice and SMS telecommunication solutions with the DIDWW platform"
        }
        bgImg={
          "https://img.freepik.com/premium-photo/green-grass-red-flowers-hill-blue-sky-with-clouds-spring-flowers-field-background_124717-1459.jpg"
        }
      />
      <DIDNumbersSection texts={texts1} data={cardData1} />
      <DIDNumbersSection texts={texts2} data={cardData2} />
      <DIDNumbersSection texts={texts3} data={cardData3} />
      {/* <CardWithCompany /> */}
      {/* <ImageAnimation />
      <SelectedCard /> */}
      <QuoteRequest />

      <SecondSection />
      <VoIPUseCases
        data={voipData}
        subHeading={
          "Learn what you can build with TRADEDID cloud communications"
        }
      />

      <Testimonial />
      <HoverBoxes data={hoverBoxes} />
      <PromoBanner />
    </div>
  );
};

export default UseCases;
