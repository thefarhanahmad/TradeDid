// src/PricingPlans.js
import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      title: "STARTER",
      color: "text-red-500",
      features: [
        "Unlimited features",
        "Pay per channel (4 minimum)",
        "Cancel any time ⓘ",
        "24/7 customer support",
        "Special pricing for all DIDWW products",
        "DIDWW SIP trunks",
        "BYOC ⓘ",
      ],
      price: "$12.25",
      buttonText: "Get started",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
    },
    {
      title: "ENTERPRISE",
      color: "text-blue-800",
      features: [
        "Unlimited features",
        "30 channels",
        "Cancel any time ⓘ",
        "24/7 customer support",
        "Special pricing for all DIDWW products",
        "DIDWW SIP trunks",
        "BYOC ⓘ",
      ],
      price: "$10.00",
      buttonText: "Get started",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
    },
    {
      title: "OPERATORS",
      color: "text-purple-600",
      features: [
        "Unlimited features",
        "Pay per channel",
        "Full integration",
        "24/7 customer support",
        "DIDWW SIP trunks",
        "BYOC ⓘ",
      ],
      price: null,
      buttonText: "Contact us",
      buttonColor: "bg-blue-800 hover:bg-blue-900",
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-blue-100 to-orange-100 p-4 md:p-8">
      <div className="max-w-6xl md:my-12 mx-auto grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan?.title}
            className="w-full bg-white flex flex-col justify-between  shadow-lg rounded-lg"
          >
            <div>
              <div className="p-4 border-b">
                <h2 className={`text-2xl font-bold ${plan?.color}`}>
                  {plan?.title}
                </h2>
              </div>
              <div className="p-4 flex-grow">
                <ul className="space-y-2">
                  {plan?.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start ${plan?.color}`}
                    >
                      <span className="mr-2 text-xl">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-4   flex flex-col items-center border-t">
              {plan?.price && (
                <div className="mb-4 text-center">
                  <span className="text-3xl font-bold text-blue-800">
                    {plan?.price}
                  </span>
                  <span className="text-sm text-blue-800">
                    /month per channel
                  </span>
                </div>
              )}
              <button
                className={`w-full ${plan?.buttonColor} text-white py-2 rounded`}
              >
                {plan?.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
