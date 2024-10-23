import React from "react";
import { Info } from "lucide-react";

const countries = [
  "Albania",
  "Bosnia And Herzegovina",
  "Croatia",
  "Finland",
  "Iceland",
  "Latvia",
  "New Zealand",
  "Puerto Rico",
  "Spain",
  "United Kingdom",
  "Argentina",
  "Brazil",
  "Cyprus",
  "France",
  "Ireland",
  "Lithuania",
  "Nicaragua",
  "Romania",
  "Sweden",
  "United States",
  "Australia",
  "Bulgaria",
  "Czech Republic",
  "Georgia",
  "Israel",
  "Luxembourg",
  "Norway",
  "Serbia",
  "Switzerland",
  "Venezuela",
  "Austria",
  "Canada",
  "Denmark",
  "Germany",
  "Italy",
  "Malaysia",
  "Panama",
  "Singapore",
  "Thailand",
  "Bahrain",
  "Chile",
  "Dominican Republic",
  "Greece",
  "Japan",
  "Malta",
  "Peru",
  "Slovakia",
  "Turkey",
  "Belgium",
  "Colombia",
  "Ecuador",
  "Hong Kong",
  "Kazakhstan",
  "Mexico",
  "Poland",
  "Slovenia",
  "Uganda",
  "Bolivia",
  "Costa Rica",
  "Estonia",
  "Hungary",
  "Kenya",
  "Netherlands",
  "Portugal",
  "South Africa",
  "Ukraine",
];

const highlightedCountries = [
  "Bahrain",
  "Bolivia",
  "Colombia",
  "Ecuador",
  "Kenya",
  "Nicaragua",
  "Uganda",
  "Venezuela",
];

const Card = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

export default function CapacityDashboard() {
  return (
    <div className="container mx-auto p-4 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Extended Channels Pool</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
          Add New Channels
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-6">
        {countries.map((country, index) => (
          <div
            key={index}
            className={`text-xs ${
              highlightedCountries.includes(country)
                ? "text-blue-500"
                : "text-gray-600"
            }`}
          >
            {country}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Channel pool details">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Channel(s):</span>
              <span>0</span>
            </div>
            <div className="flex justify-between">
              <span>Unassigned Channel(s):</span>
              <span>0</span>
            </div>
            <div className="flex justify-between">
              <span>Minimum limit:</span>
              <span>0</span>
            </div>
          </div>
        </Card>

        <Card title="Pricing">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Renew date:</span>
              <span>22.11.2024</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Channel cost:</span>
              <div className="flex items-center">
                <span>$25.00 /mo</span>
                <Info className="w-4 h-4 ml-1 text-blue-500" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span>Metered capacity cost:</span>
              <div className="flex items-center">
                <span>$0.02 /min.</span>
                <Info className="w-4 h-4 ml-1 text-blue-500" />
              </div>
            </div>
          </div>
        </Card>

        <Card title="Channel allocation">
          <div className="flex items-center justify-center  h-32">
            <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No data</span>
            </div>
          </div>
          <div className="mt-4 py-2  flex flex-col  justify-center items-center ">
            <div className="flex items-center w-full justify-start ">
              <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
              <span className="text-xs">Dedicated: 0</span>
            </div>
            <div className="flex items-center w-full justify-start">
              <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
              <span className="text-xs">Shared: 0</span>
            </div>
            <div className="flex items-center w-full justify-start">
              <span className="w-3 h-3 rounded-full bg-gray-400 mr-2"></span>
              <span className="text-xs">Unassigned: 0</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
