import React from "react";

const CompanyCards = ({ companies, preText, spanText, nextText }) => {
  return (
    <div className="bg-gray-50 py-12">
      <div className=" w-11/12 md:w-3/4 mx-auto flex flex-col px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#023f7f] mb-8">
          {preText} <span className="text-orange-500">{spanText}</span>
        </h2>
        <div className="space-y-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center border-t pt-8"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="w-24 h-24 mb-4 object-fill md:mb-0 md:mr-8"
              />
              <div className="text-center  pl-4 border-0 md:border-l-2 md:border-[#023f7f] md:text-left">
                <p className="mt-2 text-gray-700">
                  <span className="text-orange-500 mr-1">{company.name}</span>
                  {company.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCards;
