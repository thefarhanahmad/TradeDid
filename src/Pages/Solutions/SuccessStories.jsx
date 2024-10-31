import React from "react";
import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import PromoBanner from "../../Components/Home/LastSection";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import TopSection from "../../Components/common/TopSection";
import CardWithCompany from "../../Components/Integrations/CardswithLogo";
import ImageAnimation from "../../Components/Home/ImageAnimation";
import SelectedCard from "../../Components/Solutions/SelectedCard";
import QuoteRequest from "../../Components/Services/QuoteRequest";

const SuccessStories = () => {
  const texts = {
    beforeText: "Why choose",
    spanText: "phone.systems™",
    afterText: "provisioning via the API?",
    subPara: "",
  };

  const cardData = [
    {
      title: "Live inventory management",
      description: "Instant addition or removal of Phone Numbers.",
    },
    {
      title: "Flexible configuration",
      description: "Full functionality and unlimited programmable scenarios.",
    },
    {
      title: "Readily accessible coverage",
      description: "A vast inventory of Phone Numbers available via the API.",
    },
    {
      title: "Number Selection",
      description:
        "Comprehensive phone number search and reservation capabilities.",
    },
    {
      title: "Cost-efficient solution",
      description: "Saving money on DID set-up fees.",
    },
    {
      title: "Effortless end-user registration",
      description: "Automated submission of regulatory data via the API.",
    },
    {
      title: "Developer friendly",
      description:
        "Multiple libraries available for key programming languages.",
    },
    {
      title: "Complete API documentation",
      description:
        "Access to extensive resources with examples for API implementation.",
    },
    {
      title: "Effortless scalability",
      description: "Enabling your business growth with minimal resources.",
    },
    {
      title: "Automated onboarding",
      description: "Giving your customers full self-service capabilities.",
    },
    {
      title: "Suitable for any business case",
      description: "Freedom to choose your preferred billing model.",
    },
    {
      title: "Open for integrations",
      description:
        "Enriching your VoIP or mobile offering with a cloud PBX solution.",
    },
    {
      title: "Dedicated administration dashboard",
      description: "Pre-built Operator UI to minimize development efforts.",
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

  return (
    <div>
      <TopSection
        preText={"Customer"}
        spanText={"success"}
        nextText={"stories"}
        subheading={
          "From enterprise to operator - how industry leaders empower their businesses with TRADEDID"
        }
        bgImg={
          "https://img.freepik.com/premium-photo/green-grass-red-flowers-hill-blue-sky-with-clouds-spring-flowers-field-background_124717-1459.jpg"
        }
      />
      <CardWithCompany
        data={companiesData}
        spanText={"Success"}
        nextText={"stories"}
      />
      <QuoteRequest />
      {/* <ImageAnimation />
      <SelectedCard /> */}

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

export default SuccessStories;
