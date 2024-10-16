import Blob from "../../assets/blob.png";
import bg from "../../assets/bg-service.svg";

import ServiceCard from "./ServiceCard";

const Services = () => {
  const phoneNumberData = [
    {
      title: "Local Phone Numbers",
      description:
        "Instantly available Local Phone Numbers worldwide combined with premium quality, reliability and full regulatory compliance.",
    },
    {
      title: "National Phone Numbers",
      description:
        "Complete freedom with National Phone Numbers for businesses in multi-regional markets across the globe.",
    },
    {
      title: "Mobile Phone Numbers",
      description:
        "A wide selection of Voice and SMS-enabled phone numbers for cost-effective communications.",
    },
    {
      title: "Toll Free Phone Numbers",
      description:
        "An extensive worldwide coverage of Toll Free Numbers for global businesses with local customers.",
    },
    {
      title: "Shared Cost Numbers",
      description:
        "Effortless business phone number setup with country-wide accessibility.",
    },
    {
      title: "Universal International Freephone Numbers",
      description:
        "A single Toll Free Number for a truly global brand presence and reachability.",
    },
  ];

  const trunkData = [
    {
      title: "Inbound SMS Trunk",
      description:
        "A reliable Inbound (E-mail, HTTP, SMPP ESME, SMPP SMSC) SMS trunk service for receiving messages sent to local, national, and mobile SMS-enabled DIDs.",
    },
    {
      title: "Inbound SIP Trunk",
      description:
        "A powerful inbound (SIP and PSTN) trunking solution for the reliable delivery of inbound VoIP traffic with load balancing for maximum scalability and high service availability.",
    },
    {
      title: "Outbound SMS Trunk",
      description:
        "A powerful outbound SMS (HTTP, SMPP ESME, SMPP SMSC) trunk service for sending messages from DIDs to mobile phones around the globe.",
    },
    {
      title: "Outbound SIP Trunk",
      description:
        "A highly scalable and flexible SIP trunking solution for cost-efficient calling with the highest level of audio quality using TRADEDID local and global VoIP termination routes.",
    },
  ];

  const capacityData = [
    {
      title: "Metered Capacity",
      description:
        "Cost-effective solution for unpredictable call volumes with a fixed per minute rate globally.",
    },
    {
      title: "Hybrid Capacity",
      description:
        "Flat-rate and metered capacity combined to achieve maximum availability and cost-efficiency.",
    },
    {
      title: "Flat-rate Capacity",
      description:
        "Dedicated and shared concurrent voice channels for predictable call volumes.",
    },
  ];

  const serviceData = [
    {
      title: "Emergency Calling",
      description:
        "DID numbers routed to the relevant Public Safety Answering Point (PSAP) for full service compliance.",
    },
    {
      title: "Cloud Fax Services",
      description:
        "Fax messages to selected numbers or to email, delivered via T.38 or G.711u protocols.",
    },
    {
      title: "Call Forwarding",
      description:
        "A wide range of voice call forwarding options including SIP and PSTN.",
    },
    {
      title: "SMS Delivery",
      description:
        "Extensive SMS delivery options including SMS to email, SMS to HTTP, and SMPP.",
    },
    {
      title: "Phone Number Portability Globally",
      description:
        "Wide porting coverage for the seamless migration of your numbers to TRADEDID free of charge.",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="flex bg-gradient-to-b from-cyan-100 to-cyan-50 relative flex-col items-center p-8 md:p-16"
    >
      <img
        src={Blob}
        alt="blob"
        className="up-down-animation absolute w-60 opacity-50 z-0"
      />
      <div className="text-center  z-10">
        <h1 className="text-3xl font-semibold">Our Services</h1>
        <p className="text-lg mt-4 mb-8 ">
          Get VoIP Building blocks for telecom or business professionals
        </p>
      </div>

      {/* Card */}
      <div className="flex flex-col gap-7">
        <ServiceCard data={phoneNumberData} heading={"Phone Numbers"} />
        <ServiceCard data={trunkData} heading={"Voice and SMS trunks"} />
        <ServiceCard data={capacityData} heading={"Capacity"} />
        <ServiceCard
          data={serviceData}
          heading={"Emergency, Porting, Forwarding, Fax"}
        />
      </div>
    </div>
  );
};

export default Services;
