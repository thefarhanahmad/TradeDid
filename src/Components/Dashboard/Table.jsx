import React from "react";
import {
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  ShoppingCart,
  Info,
} from "lucide-react";
import Counter from "./Counter";

const data = [
  {
    prefix: "1-855",
    name: "Toll-free",
    registration: "Not required",
    voice: true,
    t38: false,
    smsIn: true,
    smsOut: "partial",
    emergency: false,
    cnamOut: true,
    capacity: "300 Dedicated",
    rateVoice: "0.029",
    rateSms: "0.005",
    setup: "5.00",
    monthly: "5.00",
  },
  {
    prefix: "1-844",
    name: "Toll-free",
    registration: "Not required",
    voice: true,
    t38: false,
    smsIn: true,
    smsOut: "partial",
    emergency: false,
    cnamOut: true,
    capacity: "300 Dedicated",
    rateVoice: "0.029",
    rateSms: "0.005",
    setup: "5.00",
    monthly: "5.00",
  },
  {
    prefix: "1-833",
    name: "Toll-free",
    registration: "Not required",
    voice: true,
    t38: false,
    smsIn: true,
    smsOut: "partial",
    emergency: false,
    cnamOut: true,
    capacity: "300 Dedicated",
    rateVoice: "0.029",
    rateSms: "0.005",
    setup: "5.00",
    monthly: "5.00",
  },
  {
    prefix: "1-877",
    name: "Toll-free",
    registration: "Not required",
    voice: true,
    t38: false,
    smsIn: true,
    smsOut: "partial",
    emergency: false,
    cnamOut: true,
    capacity: "300 Dedicated",
    rateVoice: "0.029",
    rateSms: "0.005",
    setup: "5.00",
    monthly: "5.00",
  },
  {
    prefix: "1-866",
    name: "Toll-free",
    registration: "Not required",
    voice: true,
    t38: false,
    smsIn: true,
    smsOut: "partial",
    emergency: false,
    cnamOut: true,
    capacity: "300 Dedicated",
    rateVoice: "0.029",
    rateSms: "0.005",
    setup: "5.00",
    monthly: "5.00",
  },
  {
    prefix: "1-888",
    name: "Toll-free",
    registration: "Not required",
    voice: true,
    t38: false,
    smsIn: true,
    smsOut: "partial",
    emergency: false,
    cnamOut: true,
    capacity: "300 Dedicated",
    rateVoice: "0.029",
    rateSms: "0.005",
    setup: "5.00",
    monthly: "5.00",
  },
];

const FeatureDot = ({ active, partial = false }) => (
  <div
    className={`w-3 h-3 rounded-full ${
      active
        ? "bg-green-500"
        : partial
        ? "bg-gradient-to-r from-green-500 to-gray-300"
        : "bg-gray-300"
    }`}
  ></div>
);

export default function TollFreeTable() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Toll-free</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">
                Prefix {/*<ChevronDown className="inline" />*/}
              </th>
              <th className="py-3 px-6 text-left">
                Name {/*<ChevronUp className="inline" />*/}
              </th>
              <th className="py-3 px-6 text-left">
                Registration {/*<ChevronDown className="inline" />*/}
              </th>
              <th className="py-3 px-6 text-center">Voice</th>
              <th className="py-3 px-6 text-center">T.38</th>
              <th className="py-3 px-6 text-center">SMS IN</th>
              <th className="py-3 px-6 text-center">SMS OUT</th>
              <th className="py-3 px-6 text-center">Emergency</th>
              <th className="py-3 px-6 text-center">CNAM OUT</th>
              <th className="py-3 px-6 text-left">Capacity</th>
              <th className="py-3 px-6 text-left">Rate</th>
              <th className="py-3 px-6 text-left">
                Setup {/*<ChevronDown className="inline" />*/}
              </th>
              <th className="py-3 px-6 text-left">
                Monthly {/*<ChevronDown className="inline" />*/}
              </th>
              <th className="py-3 px-6 text-center">Quantity</th>
              <th className="py-3 px-6 text-center">Cart</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {data.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {row.prefix}
                </td>
                <td className="py-3 px-6 text-left">{row.name}</td>
                <td className="py-3 px-6 text-left">{row.registration}</td>
                <td className="py-3 px-6 text-center">
                  <FeatureDot active={row.voice} />
                </td>
                <td className="py-3 px-6 text-center">
                  <FeatureDot active={row.t38} />
                </td>
                <td className="py-3 px-6 text-center">
                  <FeatureDot active={row.smsIn} />
                </td>
                <td className="py-3 px-6 text-center">
                  <FeatureDot
                    active={row.smsOut === true}
                    partial={row.smsOut === "partial"}
                  />
                </td>
                <td className="py-3 px-6 text-center">
                  <FeatureDot active={row.emergency} />
                </td>
                <td className="py-3 px-6 text-center">
                  <FeatureDot active={row.cnamOut} />
                </td>
                <td className="py-3 px-6 text-left">
                  {row.capacity}{" "}
                  <Info className="inline w-4 h-4 text-blue-500" />
                </td>
                <td className="py-3 px-6 text-left">
                  <div>
                    <Phone className="inline w-4 h-4 text-blue-500" /> From $
                    {row.rateVoice}
                  </div>
                  <div>
                    <Mail className="inline w-4 h-4 text-blue-500" /> From $
                    {row.rateSms}
                  </div>
                </td>
                <td className="py-3 px-6 text-left">${row.setup}</td>
                <td className="py-3 px-6 text-left">${row.monthly}</td>
                <td className="py-3 px-6 text-center">
                  <Counter />
                </td>
                <td className="py-3 px-6 text-center">
                  <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
