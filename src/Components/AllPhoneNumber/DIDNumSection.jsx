import React from "react";
import serviceBg from "../../assets/service-card.jpg";

const DIDNumbersSection = ({ data, texts }) => {
  return (
    <div className="relative  py-12 md:py-16 bg-gradient-to-b from-[#b7d0f8] to-[#e4f1f8]">
      <div className="container mx-auto px-4">
        <h2 className="text-center w-3/4 mx-auto text-3xl md:text-4xl font-bold text-[#134391] mb-3">
          {texts?.beforeText}{" "}
          <span className="text-orange-500 mx-2">{texts?.spanText}</span>
          {texts?.afterText}
        </h2>
        <p className="text-center text-lg md:text-xl font-bold text-[#134391] mb-8">
          {texts?.subPara}
        </p>

        <div className="grid  w-[75%] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data?.map((card, index) => (
            <div
              style={{
                backgroundImage: `url(${serviceBg})`,
              }}
              key={index}
              className="flex flex-col h-[180px]  p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-[#134391] mb-2">
                {card?.title}
              </h3>
              <p className="text-gray-600">{card?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DIDNumbersSection;
