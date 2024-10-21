import { GoDotFill } from "react-icons/go";
import DIDNumbersSection from "../../Components/AllPhoneNumber/DIDNumSection";
import TopSection from "../../Components/Services/TopSection";
import VoIPUseCases from "../../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../../Components/Home/SecondSection";
import Testimonial from "../../Components/Home/Testimonials";
import HoverBoxes from "../../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../../Components/Home/LastSection";

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
      title: "Phone Numbers as a value-added service",
      description:
        "Voice and SMS-enabled Virtual Phone Numbers covering 91 countries and 5259 area codes.",
    },
    {
      title: "Call centers",
      description:
        "Empowering call centers with reliable two-way voice communication solutions.",
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
        preText={"Expand your business portfolio with the"}
        spanText={"DIDWW cloud PBX"}
        nextText={""}
        subheading={
          "Integrate phone.systems™ into your service offerings with the Operator API"
        }
        bgImg={"https://www.didww.com/_next/static/media/hill.71af72cb.webp"}
      />
      <DIDNumbersSection data={cardData} texts={texts} />

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
