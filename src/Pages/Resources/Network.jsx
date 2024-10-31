import React from "react";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import PromoBanner from "../../Components/Home/LastSection";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import TopSection from "../../Components/common/TopSection";
import CompanyCards from "../../Components/Solutions/CompaniesCard";
import SolutionForm from "../Solutions/SolutionForm";
import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import PriceList from "../../Components/AllPhoneNumber/PriceList";
import MapInfrastructure from "../../Components/Resources/MapInfrastructure";
import QuoteRequest from "../../Components/Services/QuoteRequest";

const Networks = () => {
  const texts = {
    beforeText: "Why do customers rely on the global",
    spanText: "TRADEDID",
    afterText: "network?",
    subPara: "",
  };

  const cardData = [
    {
      title: "99.998% network uptime",
      description:
        "Global infrastructure designed to support billions of minutes per day with an in-house 24/7/365 Network Operations Center.",
    },
    {
      title: "High redundancy",
      description:
        "Private network interconnected with the world’s leading ISPs, ensuring full geo-redundancy with strategically placed physical POPs across the globe.",
    },
    {
      title: "Security and VPN",
      description:
        "The highest level of security for end-to-end Voice and SMS services over VPN and TLS/SRTP encryption.",
    },
    {
      title: "Direct interconnection",
      description:
        "Private peering and interconnection via Internet Exchange Points (IXPs) or TDM for complete control of termination and origination.",
    },
    {
      title: "High service quality",
      description:
        "Our low latency network delivers premium VoIP quality resulting in long ACD and high ASR.",
    },
    {
      title: "Service Level Agreement",
      description:
        "SLAs available on a per-country basis ensuring excellent quality, security, reliability and support.",
    },
  ];

  const voipData = [
    {
      title: "Number masking services",
      description: "Voice communications without exposing real Phone Numbers.",
    },
    {
      title: "SMS surveys",
      description: "Two-way messaging for gathering user responses.",
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

  const companiesData = [
    {
      name: "Invade",
      description:
        "Reliable SIP trunking solution for rapid worldwide deployment",
      logo: "https://www.didww.com/_next/static/media/invade.1743db41.png", // Placeholder image URL
    },

    {
      name: "PBX On The Cloud",
      description:
        "High quality VoIP services with extensive coverage in Latin America",
      logo: "https://www.didww.com/_next/static/media/pbx.506565e1.png", // Placeholder image URL
    },

    {
      name: "VCC Live",
      description:
        "Business expansion with an unrivaled range of top quality services",
      logo: "https://www.didww.com/_next/static/media/vcc-live.fd61f37a.png", // Placeholder image URL
    },
  ];

  const solutionPartnersData = [
    {
      name: "PortaOne",
      description:
        "PortaOne creates software solutions that enable VoIP service providers and carriers to offer multiple telecommunication services with just a single software platform. PortaOne products are built around a converged VoIP billing software platform combined with a class 4–5 SIP soft switch and media applications for conferencing, IVR and unified messaging.",
      logo: "https://www.didww.com/_next/static/media/porta-one-logo.4da23c61.webp", // Placeholder image URL
    },
    {
      name: "Telinta",
      description:
        "Telinta, founded in 2002, offers secure and reliable cloud-based solutions for VoIP service providers. Their extensive portfolio of white label solutions is highly customizable for a wide range of applications. TeliCore™ is a robust platform, integrating world-class carrier-grade switching and billing capabilities, brandable portals, mobile and desktop softphones, and more.",
      logo: "https://www.didww.com/_next/static/media/telinta-logo.636ca6bf.webp", // Placeholder image URL
    },
    {
      name: "New Concept Technologies (NCT)",
      description:
        "New Concept Technologies (NCT) is a leading application development and telecommunications company with offices in Australia and the USA, supported by a global resellers network. Their products are compatible with SIP-based applications/equipment manufactured around the world. NCT solutions are highly scalable, user-friendly, modular, flexible and integrated with a mature VoIP billing system, provisioning system, auto-configuration system and offer a variety of other advanced features.",
      logo: "https://www.didww.com/_next/static/media/concept-logo.43aa7e2e.webp", // Placeholder image URL
    },
  ];

  return (
    <div>
      <TopSection
        preText={""}
        spanText={"Designed"}
        nextText={"for carriers, excellent for enterprises"}
        subheading={
          "Reliable global network infrastructure for your business growth"
        }
        bgImg={
          "https://plus.unsplash.com/premium_photo-1682320426935-f0614a9a6517?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZGdlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
        }
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <MapInfrastructure />
      <QuoteRequest />

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

export default Networks;
