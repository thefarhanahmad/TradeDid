// SelectedCard.js
import React, { useState } from "react";

const data = [
  {
    title: "Premium quality VoIP",
    cards: [
      {
        title: "Global Reach",
        description: "Expand your communication worldwide with ease.",
      },
      {
        title: "Commercial Flexibility",
        description: "Flexible plans tailored to your business needs.",
      },
      {
        title: "Quick Onboarding",
        description: "Seamless setup and quick integration.",
      },
      {
        title: "24/7 Support",
        description: "Always available support for uninterrupted service.",
      },
    ],
  },
  {
    title: "Powerful tools and services",
    cards: [
      {
        title: "Redundant Network",
        description: "Ensures high availability and reliability.",
      },
      {
        title: "Enterprise SIP Trunking",
        description: "Optimized for high-standard communication.",
      },
      {
        title: "99.99% Uptime",
        description: "Minimize downtime with robust infrastructure.",
      },
      {
        title: "Disaster Recovery",
        description: "Prepared for unexpected disruptions.",
      },
    ],
  },
  {
    title: "Commercial flexibility",
    cards: [
      {
        title: "Carrier-grade Service",
        description: "High-quality connections for business needs.",
      },
      {
        title: "Direct Peering",
        description: "Optimized routing for better performance.",
      },
      {
        title: "Low Latency",
        description: "Smooth communication without delays.",
      },
      {
        title: "HD Voice Quality",
        description: "Crystal-clear audio for professional calls.",
      },
    ],
  },
  {
    title: "Quick onboarding and support",
    cards: [
      {
        title: "Data Encryption",
        description: "Protect your communications with strong encryption.",
      },
      {
        title: "Private Interconnections",
        description: "Dedicated pathways for secure data transfer.",
      },
      {
        title: "SRTP Support",
        description: "Secure Real-Time Transport Protocol for voice.",
      },
      {
        title: "TLS Encryption",
        description: "End-to-end security for data integrity.",
      },
    ],
  },
];

function SelectedCard() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-gray-50 py-24">
      <div className=" flex flex-col gap-5 w-[90%] mx-auto p-4">
        <h2 className="md:text-4xl text-2xl font-bold  text-center">
          Why do <span className="text-orange-500">operators</span> choose
          TRADEDID?
        </h2>
        <div className="flex justify-center gap-2 ">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`px-4 py-2 text-xl w-[18%] text-[#023f7f] font-bold rounded-md transition ${
                selected === index ? "opacity-100" : "opacity-60"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1  md:grid-cols-4 gap-6">
          {data[selected].cards.map((card, index) => (
            <div
              key={index}
              className="p-4 bg-white hover:-translate-y-1 transition-transform ease-in-out duration-200 text-gray-800 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SelectedCard;
