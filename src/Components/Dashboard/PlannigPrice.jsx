import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricingPlan = () => {
  const plans = [
    {
      name: "STARTER",
      price: "$12.25",
      period: "/month",
      description: "per channel",
      buttonText: "Get Started",
      buttonLink: "#",
      features: [
        "Unlimited features",
        "Pay per channel (4 minimum)",
        "Cancel any time",
        "24/7 customer support",
        "Special pricing for all DIDWW products",
        "DIDWW SIP trunks",
        "BYOC",
      ],
      color: "text-red-500",
    },
    {
      name: "ENTERPRISE",
      price: "$10.00",
      period: "/month",
      description: "per channel",
      buttonText: "Get Started",
      buttonLink: "#",
      features: [
        "Unlimited features",
        "30 channels",
        "Cancel any time",
        "24/7 customer support",
        "Special pricing for all DIDWW products",
        "DIDWW SIP trunks",
        "BYOC",
      ],
      color: "text-blue-800",
    },
    {
      name: "OPERATOR",
      price: "Get a proposal",
      period: "",
      description: "",
      buttonText: "Contact Us",
      buttonLink: "#",
      features: [
        "Unlimited features",
        "Pay per channel",
        "Full integration",
        "24/7 customer support",
        "DIDWW SIP trunks",
        "BYOC",
      ],
      color: "text-purple-600",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Pricing Plans
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-t-4"
              style={{ borderTopColor: plan.color.split("-")[1] }}
            >
              <h3 className={`text-xl font-bold ${plan.color} mb-2`}>
                {plan.name}
              </h3>
              <div className="text-2xl font-bold mb-2">
                {plan.price}
                <span className="text-sm font-normal"> {plan.period}</span>
              </div>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <a
                href={plan.buttonLink}
                className="block text-center shadow-lg bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-3xl mb-4"
              >
                {plan.buttonText}
              </a>
              <div className="flex flex-col gap-1">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className=" text-gray-700 flex items-start  gap-2"
                  >
                    <FaCheckCircle className="text-green-500 w-6" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
