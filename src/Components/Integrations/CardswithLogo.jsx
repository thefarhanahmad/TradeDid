// CardWithCompany.js
import React from "react";

const CardWithCompany = ({ data, preText, spanText, nextText, subHeading }) => {
  return (
    <div className="bg-gray-50 w-full">
      <div className="py-10 px-5 w-[85%] mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-3">
            {preText}
            <span className="text-orange-500 mx-1">{spanText}</span>
            {nextText}
          </h2>
          <p className="text-gray-600 mb-8">{subHeading}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data?.map((company, index) => (
              <div
                key={index}
                className="bg-white flex group transform hover:-translate-y-2 transition-transform duration-300 flex-col w-full justify-between p-4 rounded-lg shadow-md hover:shadow-lg"
              >
                <div className="">
                  <div className="flex w-full justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {company.name}
                    </h3>
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="mb-4 w-20 h-20 object-contain"
                    />
                  </div>

                  <p className="text-gray-600">{company.description}</p>
                </div>

                <div className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-orange-500 mt-4 rounded-xl px-6 py-1 text-white">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
            {/* <button className="bg-white flex group transform hover:-translate-y-2 transition-transform duration-300 flex-col w-full justify-between p-4 rounded-lg shadow-md hover:shadow-lg">
              More Coming Soon
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithCompany;
