// ConnectTools.jsx
import React from "react";
import {
  FaGoogleDrive,
  FaDropbox,
  FaEnvelope,
  FaCloud,
  FaServer,
} from "react-icons/fa"; // Importing relevant icons from react-icons
import { GoDot } from "react-icons/go";

export default function ConnectTools() {
  const tools = [
    {
      name: "Google Drive",
      icon: <FaGoogleDrive className="text-blue-500" size={32} />,
    },
    { name: "OneDrive", icon: <FaCloud className="text-blue-700" size={32} /> },
    {
      name: "Dropbox",
      icon: <FaDropbox className="text-blue-600" size={32} />,
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-orange-500" size={32} />,
    },
    {
      name: "FTP and SFTP",
      icon: <FaServer className="text-gray-700" size={32} />,
    },
  ];

  const features = [
    "Compatible with 3rd party operators",
    "Compatible with standard SIP devices",
    "Call event notifications",
    "Global Phone Numbers",
    "And more...",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="text-[#ff6900]">Connect</span>{" "}
        <span className="text-[#0066cc]">
          with your existing business tools
        </span>
      </h2>

      <div className="grid grid-cols-5 gap-8 mb-12">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#f0f4f9] rounded-full flex items-center justify-center mb-2">
              {tool.icon}
            </div>
            <span className="text-sm text-center text-[#0066cc]">
              {tool.name}
            </span>
          </div>
        ))}
      </div>

      <div className="relative w-[80%] mx-auto my-12">
        {/* Gradient line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        {/* Center circle */}
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <GoDot className="text-4xl text-orange-500 bg-white rounded-full" />
        </div>
      </div>

      <div className="space-y-2 text-center">
        {features.map((feature, index) => (
          <p key={index} className="text-[#0066cc]">
            {feature}
          </p>
        ))}
      </div>
    </div>
  );
}
