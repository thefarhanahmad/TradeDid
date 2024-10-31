import React from "react";

import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import PriceList from "../../Components/AllPhoneNumber/PriceList";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../../Components/Home/LastSection";
import TopSection from "../../Components/common/TopSection";
import SIPTrunking from "../../Components/Services/SipTrunks";
import SMSIntegration from "../../Components/Services/SMSIntegration";
import QuoteRequest from "../../Components/Services/QuoteRequest";
import DIDPlusZero from "../../Components/Services/DIDplusZero";

import Helicopter from "../../Components/Services/Helicopter";

import BusinessPBX from "../../Components/Tools/BusinessPBX";
import ConnectTools from "../../Components/Tools/ConnectTools";
import BigLaptops from "../../Components/Services/BigLaptop";
import BigLaptop from "../../Components/Tools/BigLaptop";
import PricingPlans from "../../Components/Tools/PricingPlans";

const BusinessPhoneSystem = () => {
  const texts = {
    beforeText: "Why is phone.systems™ the",
    spanText: "ultimate ",
    afterText: "business PBX?",
    subPara: "",
  };

  const cardData = [
    {
      title: "Innovative interface",
      description: "Intuitive drag-and-drop UI design.",
    },
    {
      title: "Cloud PBX",
      description: "No hardware or software required.",
    },
    {
      title: "Call encryption",
      description: "Secure communications with TLS and SRTP protocols.",
    },
    {
      title: "Fully scalable",
      description:
        "From a small business to a global enterprise with multiple locations.",
    },
    {
      title: "User-friendly",
      description: "Easy to set up - no special skills or training required.",
    },
    {
      title: "Full feature set",
      description: "Extensive functionality for businesses of any size.",
    },
    {
      title: "Competitive pricing",
      description: "Multiple pricing plans for any business model.",
    },
    {
      title: "Free integrated softphone",
      description:
        "Complete business phone system with a softphone for iOS, MacOS, Android and Windows.",
    },
  ];

  const voipData = [
    {
      title: "Conference calling",
      description:
        "Secure, enterprise-grade audio conferencing around the globe.",
    },
    {
      title: "Global presence",
      description:
        "The largest coverage of premium quality Local, Mobile, National and Toll Free Virtual Phone Numbers.",
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
        preText={"A business phone system that is"}
        spanText={"simple "}
        nextText={"to set up"}
        subheading={"Cloud-based PBX with an intuitive drag-and-drop interface"}
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <BusinessPBX />
      <BigLaptops list={true} />
      <ConnectTools />
      <BigLaptop list={true} />
      <BigLaptops tools={true} />
      <PricingPlans />
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

export default BusinessPhoneSystem;
