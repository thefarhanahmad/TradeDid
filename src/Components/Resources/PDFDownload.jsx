import React from "react";

const Card = ({ title, image, hoverTitle, hoverDescription }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg bg-white">
      {/* Image Section */}
      <img src={image} alt={title} className="object-cover w-full h-64" />

      {/* Title Section */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
      </div>

      {/* Hover Overlay Section */}
      <div className="absolute inset-0 bg-blue-900 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">{hoverTitle}</h3>
          <p className="text-sm">{hoverDescription}</p>
        </div>
        <button className="bg-white text-blue-900 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default function PDFDownload() {
  const insights = [
    {
      title: "5 Steps to become a super IT admin in VoiP",
      image: "https://www.didww.com/_next/static/media/5-steps.8787f25a.webp",
      hoverTitle: "5 Steps to Success",
      hoverDescription:
        "Learn the key steps to achieve success in cloud communications.",
    },
    {
      title: "Telco Compliance",
      image: "https://www.didww.com/_next/static/media/telco.e51ce8e8.webp",
      hoverTitle: "Telco Compliance Guide",
      hoverDescription:
        "Understand the essential compliance requirements for telecom companies.",
    },
    {
      title: "Enterprise Communications",
      image:
        "https://www.didww.com/_next/static/media/enterprise.9bd97f3e.webp",
      hoverTitle: "Enterprise Communications",
      hoverDescription: "The benefits of using Virtual Phone Numbers (DIDs).",
    },
  ];

  return (
    <div className="bg-gray-50 w-full py-12">
      <div className="w-3/4 mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold text-center mb-2">
          <span className="text-orange-500">Latest</span>{" "}
          <span className="text-blue-900">insights, tips and guides</span>
        </h1>
        <p className="text-xl text-blue-900 text-center mb-8">
          Free access to your ultimate cloud communications library
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card key={index} {...insight} />
          ))}
        </div>
      </div>
    </div>
  );
}
