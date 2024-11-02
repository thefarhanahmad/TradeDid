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

const DIDPricing = () => {
  const texts = {
    beforeText: "",
    spanText: "Profitable outcome",
    afterText: "for any business",
    subPara:
      "Leverage DIDWW Virtual Phone Numbers to enhance your business efficiency",
  };

  const cardData = [
    {
      title: "Flexible pay-as-you-grow pricing",
      description:
        "Transparent tier-based pricing to grow your business in a cost-efficient manner.",
    },
    {
      title: "No long-term contract",
      description: "Complete freedom with flexible terms.",
    },
    {
      title: "Free Phone Number Porting",
      description: "Global number portability at no cost.",
    },
    {
      title: "Competitive market presence",
      description:
        "Cost-efficient and flexible pricing for any type of business.",
    },
    {
      title: "Expert customer support",
      description:
        "Highly professional, customer-oriented team available 24/7/365.",
    },
    {
      title: "Compliant Voice and SMS",
      description:
        "Full regulatory compliance globally for all services, including Local Dialing and Emergency Calling.",
    },
    {
      title: "Free phone number selection",
      description:
        "Instant access to an extensive global Phone Number inventory.",
    },
    {
      title: "Unique capacity options",
      description:
        "Optimised voice traffic costs with flat-rate, metered, and hybrid pro-rated capacity models.",
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
        preText={"Scalable DID Number"}
        spanText={"pricing"}
        nextText={"to support your business model"}
        subheading={
          "Experience DIDWW versatility with our customer-oriented approach"
        }
        textClr={"text-[#023f7f]"}
        bgImg={
          "https://thumbs.dreamstime.com/b/world-map-design-white-background-environment-concept-earth-illustration-continents-vector-graphic-world-map-design-113872560.jpg"
        }
      />
      <DIDNumbersSection texts={texts} data={cardData} />
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

export default DIDPricing;
