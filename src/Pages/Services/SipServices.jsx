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

const SipServices = () => {
  const cardData = [
    {
      title: "Quality SIP Trunks",
      description:
        "SIP traffic delivered via TRADEDID high-capacity platform, for excellent audio quality and rock-solid reliability to maintain a high ASR and ACD.",
    },
    {
      title: "Scalable VoIP Network",
      description:
        "Virtually unlimited call Capacity and advanced trunk configurations to support the specific communication needs of operators and enterprises.",
    },
    {
      title: "Wholesale VoIP Termination",
      description:
        "A valuable addition to the VoIP service portfolio of a wholesale SIP Trunking provider.",
    },
    {
      title: "API Integration",
      description:
        "Remote trunk management via a REST API with real-time call event streaming.",
    },
    {
      title: "PSTN Replacement",
      description:
        "Cost saving and innovative cloud-based solution to replace traditional telephony with VoIP SIP Trunks at competitive global rates.",
    },
    {
      title: "Advanced Online Monitoring",
      description:
        "Flexible SIP Trunk settings, monitoring tools, and CDRs generated on a per SIP trunk basis.",
    },
    {
      title: "Live Support",
      description:
        "Highly professional, customer-oriented network operations and customer support teams available on a 24/7/365 basis.",
    },
  ];

  const texts = {
    beforeText: "Why do customers choose the TRADEDID",
    afterText: "solution?",
    spanText: "two-way SIP Trunking",
    subPara: "",
  };

  const voipData = [
    {
      title: "PSTN replacement",
      description:
        "Premium quality and affordable communications, including Local Dialing and Emergency Services.",
    },
    {
      title: "Call center & queue",
      description:
        "Call queueing services to ensure that your business never misses an important call.",
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
        preText={"Two-way"}
        spanText={"SIP Trunking"}
        nextText={", with mission-critical reliability"}
        subheading={"Expand your business communications globally"}
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <SIPTrunking />
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

export default SipServices;
