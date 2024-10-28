import React, { useState } from "react";
import { Search, Moon, Sun } from "lucide-react";

const services = [
  "Local Numbers",
  "National Numbers",
  "Mobile Numbers",
  "Toll Free Numbers",
  "UIFN",
  "Shared Cost Numbers",
  "Origination",
  "Local Termination",
  "SMS IN",
  "A2P SMS OUT",
  "P2P SMS OUT",
  "Emergency Calling",
  "Number Portability",
  "Fax Support",
];

const countries = [
  {
    name: "Denmark",
    services: [
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      false,
      "partial",
      true,
      true,
      true,
      true,
    ],
  },
  {
    name: "Finland",
    services: [
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ],
  },
  {
    name: "Lithuania",
    services: [
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      true,
      false,
      "partial",
      true,
      true,
      true,
      true,
    ],
  },
];

const ToggleButton = ({ label, checked, onChange }) => (
  <label className="flex items-center space-x-2 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
    />
    <span className="text-sm text-blue-900">{label}</span>
  </label>
);

const ServiceIndicator = ({ available }) => {
  if (available === true)
    return <div className="w-4 h-4 bg-blue-900 rounded-full mx-auto" />;
  if (available === "partial")
    return (
      <div className="w-4 h-4 bg-blue-900 rounded-full mx-auto opacity-50" />
    );
  return (
    <div className="w-4 h-4 border-2 border-blue-900 rounded-full mx-auto" />
  );
};

export default function CountryTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeServices, setActiveServices] = useState(
    services.reduce((acc, service) => ({ ...acc, [service]: false }), {})
  );

  const toggleService = (service) => {
    setActiveServices((prev) => ({ ...prev, [service]: !prev[service] }));
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 bg-white">
      <h1 className="text-4xl font-bold text-center mb-2">
        <span className="text-blue-900">DIDWW</span>{" "}
        <span className="text-orange-500">coverage and services</span>
      </h1>
      <h2 className="text-xl text-blue-900 text-center mb-8">
        The VoIP platform for telecommunication and business professionals
      </h2>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search by country"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          {/* <div className="absolute right-3 top-2.5 flex space-x-1">
            <Moon className="text-gray-400" size={20} />
            <Sun className="text-gray-400" size={20} />
          </div> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {services.map((service) => (
            <ToggleButton
              key={service}
              label={service}
              checked={activeServices[service]}
              onChange={() => toggleService(service)}
            />
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm text-blue-900">
                {["Country", ...services].map((header, index) => (
                  <th
                    key={header}
                    className={`py-2 px-3 ${
                      index > 3 && index < 6 ? "bg-blue-50" : ""
                    } ${index > 9 && index < 12 ? "bg-blue-50" : ""}`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredCountries.map((country) => (
                <tr key={country.name} className="border-t">
                  <td className="py-2 px-3 text-blue-900">{country.name}</td>
                  {country.services.map((service, index) => (
                    <td
                      key={index}
                      className={`py-2 px-3 ${
                        index > 2 && index < 5 ? "bg-blue-50" : ""
                      } ${index > 8 && index < 11 ? "bg-blue-50" : ""}`}
                    >
                      <ServiceIndicator available={service} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
