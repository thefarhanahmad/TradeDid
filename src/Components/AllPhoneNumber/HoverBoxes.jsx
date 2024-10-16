import { useState } from "react";
import { RxDot } from "react-icons/rx";

export default function HoverBoxes({ data }) {
  console.log("data in hover box  : ", data);
  const [hoveredBox, setHoveredBox] = useState(null);

  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-gray-100 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Get more from <span className="text-orange-500">TRADEDID</span>
        </h1>
        <p className="text-xl md:text-2xl text-center text-gray-600 mb-12">
          The platform for telecommunication professionals
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data?.map((box, index) => (
            <div
              key={index}
              className={`${box?.color} ${box?.hoverColor} rounded-lg p-6 md:p-3 h-80 md:h-96 md:hover:h-full flex flex-col justify-between transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer relative overflow-hidden`}
              onMouseEnter={() => setHoveredBox(index)}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <h3 className="text-xl font-semibold text-center text-white z-10">
                {box?.title}
              </h3>
              {hoveredBox === index && box?.solutions && (
                <div className="bg-white  py-3 px-5 md:py-1 md:px-2 w-full h-full mt-2 rounded-md ">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-800">
                        Key solutions -
                      </h4>
                      <ul className="list-disc list-inside text-sm text-start text-gray-600">
                        {box?.solutions.map((solution, i) => (
                          <div className="flex gap-1" key={i}>
                            <RxDot />
                            {solution}
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full justify-center flex my-2  items-center">
                      <button className="bg-orange-500  rounded-2xl hover:bg-orange-600 text-sm text-white py-1 px-5 ">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-tl-full transform translate-x-16 translate-y-16"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
