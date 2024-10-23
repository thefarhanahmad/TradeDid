import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const FilterUI = () => {
  const [moreFilters, setMoreFilters] = useState(false);

  return (
    <div className="  p-8 ">
      <div className="bg-white p-8 rounded-lg  w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Filter Phone Numbers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <select className=" border bg-gradient-to-b from-blue-100 to-blue-300 p-2 border-gray-300 rounded">
            <option>Country: United States</option>
          </select>
          <select className=" border bg-gradient-to-b from-blue-100 to-blue-300 p-2 border-gray-300 rounded">
            <option>Select State</option>
          </select>
          <select className=" border border-gray-300 bg-gradient-to-b from-blue-100 to-blue-300 p-2 rounded">
            <option>Select Code (NPA/NXX)</option>
          </select>
        </div>
        <div className="mb-4">
          <div className="flex w-1/2  items-center border border-gray-300 rounded">
            <input
              type="text"
              placeholder="Search by city name and prefix"
              className="w-full p-2 rounded-l "
            />
            <button className=" bg-gradient-to-b from-blue-100 to-blue-300 p-2 text-white rounded-r">
              <FaSearch />
            </button>
          </div>
        </div>
        <button
          className="text-blue-600 underline mb-4"
          onClick={() => setMoreFilters(!moreFilters)}
        >
          More filters
        </button>
        {moreFilters && (
          <div className="flex gap-4 mb-4">
            <div className=" w-1/2">
              {/* Add more filter options here */}
              <div className=" rounded-md bg-gradient-to-b from-blue-100 to-blue-300 p-2">
                <h2 className="text-lg font-bold mb-2">
                  Show only numbers that support all checked services:
                </h2>
                <div>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    Voice IN
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    Voice OUT
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    T.38 Fax
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    CNAM OUT
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    SMS IN
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    SMS OUT P2P
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    SMS OUT A2P
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    Emergency
                  </label>
                </div>
              </div>
            </div>
            <div className=" w-1/2 flex flex-col gap-6">
              <div className=" rounded-md bg-gradient-to-b from-blue-100 to-blue-300 p-2">
                <h2 className="text-lg font-bold mb-2">Number types:</h2>
                <div>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    Local
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    Mobile
                  </label>
                  {/* Add more checkboxes as needed */}
                </div>
              </div>
              <div className=" flex gap-3">
                <div className="w-1/2 rounded-md bg-gradient-to-b from-blue-100 to-blue-300 p-2">
                  <h2 className="text-lg font-bold mb-2">Billing Options:</h2>
                  <div className="">
                    <label className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2" />
                      Flat Rate
                    </label>
                    <label className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2" />
                      Metered
                    </label>
                    {/* Add more checkboxes as needed */}
                  </div>
                </div>
                <div className=" rounded-md bg-gradient-to-b from-blue-100 to-blue-300 p-2 w-1/2">
                  <h2 className="text-lg font-bold mb-2">Registration:</h2>
                  <div>
                    <label className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2" />
                      Required
                    </label>
                    <label className="flex items-center mb-2">
                      <input type="checkbox" className="mr-2" />
                      Not required
                    </label>
                    {/* Add more checkboxes as needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterUI;
