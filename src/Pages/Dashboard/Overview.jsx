import React from "react";
import Banner from "../../Components/Dashboard/Banner";
import Card from "../../Components/Dashboard/Card";

import Notifications from "../../Components/Dashboard/Notifications";

const Overview = () => {
  const cardData = [
    {
      title: "Get Voice OUT services",
      content:
        "Outbound voice termination service is not enabled. Contact us to get premium quality local and A-Z routes.",
    },
    {
      title: "Your price lists",
      content: "TRADEDID Price List October 2024",
    },
    {
      title: "Get SMS OUT services",
      content:
        "Outbound SMS service is not enabled. Contact us to get premium quality P2P and A2P outbound SMS.",
    },
    {
      title: "Get number selection tool",
      content:
        "Vanity and Gold number selection are not activated. Contact us to get access to the number selection tool.",
    },
    {
      title: "Add DID number capacity",
      content:
        "Get additional voice channels for more concurrent call capacity on your DID numbers.",
    },
    {
      title: "Get new DID numbers",
      content:
        "Geographical, national, toll-free and UIFN numbers for business in 91+ countries.",
    },
  ];

  return (
    <div className="mt-6 md:mt-3">
      <Banner />
      <div className="flex">
        {/* left */}
        <div className=" p-3 w-[75%]">
          <Notifications />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardData.map((card, index) => (
              <Card key={index} title={card.title} content={card.content} />
            ))}
          </div>
        </div>
        {/* right */}
        <div className=" w-[25%] p-3">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">News and Updates</h3>
            <img
              src="https://cdn.vectorstock.com/i/500p/78/96/latest-news-icon-with-speaker-vector-34267896.avif"
              alt="News"
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h4 className="font-semibold">
              TRADEDID now offers A2P SMS in Ukraine (+380)
            </h4>
            <p className="text-sm text-gray-600">TRADEDID Teams 5 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
