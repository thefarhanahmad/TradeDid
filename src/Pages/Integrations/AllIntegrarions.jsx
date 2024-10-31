import React from "react";
import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import PromoBanner from "../../Components/Home/LastSection";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import TopSection from "../../Components/common/TopSection";
import CardWithCompany from "../../Components/Integrations/CardswithLogo";

const AllIntegrations = () => {
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
      name: "Ribbon",
      description:
        "Combining DIDWW’s powerful two-way SIP trunking with Ribbon’s SBCs SWe Edge & CNe Edge for the ultimate unified communication solution.",
      logo: "https://www.didww.com/_next/static/media/ribbon.c73129aa.png", // Placeholder image URL
    },
    {
      name: "Zapier",
      description:
        "Easy access to thousands of the most popular apps for business process automation.",
      logo: "https://www.didww.com/_next/static/media/zapier.6f41d5d4.png", // Placeholder image URL
    },
    {
      name: "Genesys",
      description:
        "Maximum efficiency with collaboration, communications, and contact center services for businesses of any size.",
      logo: "https://www.didww.com/_next/static/media/genesys.8979786b.png", // Placeholder image URL
    },
    {
      name: "Amazon",
      description:
        "Enhanced customer experience with real-time audio, video conferencing and online meeting capabilities combined with phone numbers in over 80 countries.",
      logo: "https://www.didww.com/_next/static/media/amazon.21d7fe7e.png", // Placeholder image URL
    },
    {
      name: "Pabbly",
      description:
        "Streamline your business Voice and SMS services while accessing 1,500+ web applications to boost productivity.",
      logo: "https://www.didww.com/_next/static/media/pabbly.9b91e28f.png", // Placeholder image URL
    },
  ];
  return (
    <div>
      <TopSection
        preText={""}
        spanText={"Integrations"}
        nextText={"for powerful communications"}
        subheading={
          "Bring high quality Voice and SMS services to your existing platforms"
        }
        bgImg={
          "https://c4.wallpaperflare.com/wallpaper/712/806/489/alabama-hills-4k-amazing-desktop-wallpaper-preview.jpg"
        }
      />
      <CardWithCompany
        data={companiesData}
        preText={"Bring Your Own Carrier (BYOC)"}
        subHeading={
          "  TRADEDID services to complement UCaaS, CCaaS, CPaaS providers and other communication platforms"
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

export default AllIntegrations;
