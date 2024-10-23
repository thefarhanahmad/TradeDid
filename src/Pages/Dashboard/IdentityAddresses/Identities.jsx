import React from "react";
import { FaFilter } from "react-icons/fa";

const Identities = () => {
  // Sample data array
  const data = [
    {
      name: "techizebuilder",
      subText: "hello",
      type: "Business",
      phoneNumber: "+91 90605 19532",
      addresses: 0,
      proofs: 0,
    },
    {
      name: "devcompany",
      subText: "world",
      type: "Business",
      phoneNumber: "+91 98765 43210",
      addresses: 2,
      proofs: 1,
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        {/* Filters Section */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <label className="text-gray-600">Name</label>
            <select className="bg-white border border-gray-300 rounded-md p-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-gray-600">Description</label>
            <select className="bg-white border border-gray-300 rounded-md p-2">
              <option>Any</option>
              <option>123456789</option>
              <option>987654321</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-gray-600">Type</label>
            <select className="bg-white border border-gray-300 rounded-md p-2">
              <option>Any</option>
              <option>Inbound</option>
              <option>Outbound</option>
            </select>
          </div>

          <button className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md">
            <FaFilter />
            <span>Filters</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md">
            Add New Identity
          </button>
        </div>

        {/* Identities Table */}
        <div className="bg-white flex justify-center items-center rounded">
          <div className="shadow-md rounded-lg w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">Name</th>
                  <th className="py-3 px-6 text-left">Type</th>
                  <th className="py-3 px-6 text-left">Phone Number</th>
                  <th className="py-3 px-6 text-center">Addresses</th>
                  <th className="py-3 px-6 text-center">Proofs</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm font-light">
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className="text-gray-500 text-xs">
                        {item.subText}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">{item.type}</td>
                    <td className="py-3 px-6 text-left">{item.phoneNumber}</td>
                    <td className="py-3 px-6 text-center">{item.addresses}</td>
                    <td className="py-3 px-6 text-center">{item.proofs}</td>
                    <td className="py-3 px-6 text-center">
                      <button className="text-blue-500 hover:text-blue-700">
                        ...
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identities;
