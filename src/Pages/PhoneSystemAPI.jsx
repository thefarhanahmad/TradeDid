import React from "react";

import DIDNumbersSection from "../Components/AllPhoneNumber/DIDNumSection";
import PriceList from "../Components/AllPhoneNumber/PriceList";
import VoIPUseCases from "../Components/AllPhoneNumber/VipUseCases";
import SecondSection from "../Components/Home/SecondSection";
import Testimonial from "../Components/Home/Testimonials";
import HoverBoxes from "../Components/AllPhoneNumber/HoverBoxes";
import PromoBanner from "../Components/Home/LastSection";
import TopSection from "../Components/Services/TopSection";
import SIPTrunking from "../Components/Services/SipTrunks";
import SMSIntegration from "../Components/Services/SMSIntegration";
import QuoteRequest from "../Components/Services/QuoteRequest";
import DIDPlusZero from "../Components/Services/DIDplusZero";

import Helicopter from "../Components/Services/Helicopter";
import {
  FaSignInAlt,
  FaUserPlus,
  FaCheck,
  FaCogs,
  FaUsers,
  FaRobot,
} from "react-icons/fa";
import BusinessPBX from "../Components/Tools/BusinessPBX";
import ConnectTools from "../Components/Tools/ConnectTools";
import BigLaptops from "../Components/Services/BigLaptop";
import BigLaptop from "../Components/Tools/BigLaptop";
import PricingPlans from "../Components/Tools/PricingPlans";
import BusinessTools from "../Components/Tools/BusinessTools";
import { GoDotFill } from "react-icons/go";
import DevEnvironment from "../Components/Tools/DevEnvironment";

const PhoneSystemAPI = () => {
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
      />
      <DIDNumbersSection data={cardData} texts={texts} />
      <div>
        <div className=" py-12 flex items-center justify-center">
          <div className=" p-8 rounded-lg  max-w-5xl w-full">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  A wide range of{" "}
                  <span className="text-orange-500">capabilities</span>
                </h1>
                <p className="text-gray-600 mb-4">
                  Extensive opportunities for your business offerings
                </p>
              </div>
              <div className="md:w-1/2 p-4  self-start md:self-center">
                <ul className="list-disc list-inside text-gray-800 space-y-2">
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>Multi-tenant PBX</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>Flexible call termination options</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>
                      Seamless integration with VoIP and mobile networks
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>
                      Multiple billing models, including per seat, channel or
                      DID
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>Co-branding</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>User permission customization</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GoDotFill className="text-orange-500" />
                    <span>And more...</span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-600 to-red-500 flex items-center justify-center p-8">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 p-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  <span className="text-orange-500">phone.system™</span>{" "}
                  maintains both a sandbox and a production environment for the
                  API
                </h1>
                <p className="text-gray-600 mb-4">
                  While both environments are perfect replicas of one another,
                  they are maintained separately so as not to interfere with
                  your live data. This structure provides your developers with
                  full access to extensive testing for unlimited time before
                  rolling out your services to production.
                </p>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
                  <FaSignInAlt className="mr-2" /> Get started
                </button>
              </div>
              <div className="md:w-1/2 p-4">
                <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
                  <code className="block text-gray-800">
                    &#123;
                    <br />
                    &nbsp;&nbsp;"data": &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"type": "incoming_trunks",
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"attributes": &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "From provider",
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"transport_protocol":
                    "UDP",
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"destination_field":
                    "RURI_USER",
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"codecs": ["PCMU",
                    "PCMA", "telephone-event"]
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"relationships": &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"customer": &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"data":
                    &#123;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id":
                    "123",
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type":
                    "customers"
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                    <br />
                    &#125;
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BusinessPBX />
      <BigLaptops list={true} />
      <ConnectTools />
      <BigLaptop list={true} />
      <BigLaptops tools={true} />
      <PricingPlans /> */}
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

export default PhoneSystemAPI;
