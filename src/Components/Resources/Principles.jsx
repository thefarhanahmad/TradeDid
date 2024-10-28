import React from "react";

const cardData = [
  {
    title: "Provide highly personalized services",
    bgColor: "bg-blue-800",
    imageSrc: "https://www.didww.com/_next/static/media/services.9f31d38e.webp",
    altText: "Provide highly personalized services",
  },
  {
    title: "Listen and find accurate solutions quickly",
    bgColor: "bg-orange-500",
    imageSrc:
      "https://www.didww.com/_next/static/media/solutions.f59c2a04.webp",
    altText: "Listen and find accurate solutions quickly",
  },
  {
    title: "Perceive clients’ goals as our own",
    bgColor: "bg-orange-500",
    imageSrc: "https://www.didww.com/_next/static/media/goals.989881d7.webp",
    altText: "Perceive clients’ goals as our own",
  },
];

const Principles = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <div className=" w-3/4 mx-auto  py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#134391]">
            We follow these principles{" "}
            <span className="text-orange-500">in everything we do</span>
          </h2>
        </div>
        <div className="flex flex-col  md:flex-row  justify-center  gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} flex flex-col justify-between text-white rounded-lg overflow-hidden shadow-lg w-full md:w-1/3 transition-all`}
            >
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-4">
                  {card.title}
                </h3>
              </div>
              <div className=" h-96 overflow-hidden">
                <img
                  src={card.imageSrc}
                  alt={card.altText}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Principles;
