import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const CopyableField = ({ label, value }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center justify-between mb-2">
      <span className="text-gray-600">{label}:</span>
      <div className="flex items-center">
        <span className="mr-2">{value}</span>
        <button
          onClick={copyToClipboard}
          className="text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
    </div>
  );
};

const BankDetails = ({ currency }) => {
  const details = {
    USD: {
      beneficiaryName: "TRADEDID Ireland Limited",
      beneficiaryBank: "Revolut Bank UAB",
      bankAddress: "2 Dublin Landings, North Dock, D01 V4A3, DUBLIN 1, Ireland",
      swiftBic: "REVOIE23",
      iban: "IE73REVO99539302819519",
      paymentReference: "UOF-GBV",
    },
    EUR: {
      beneficiaryName: "TRADEDID Ireland Limited",
      beneficiaryBank: "Revolut Bank UAB",
      bankAddress: "2 Dublin Landings, North Dock, D01 V4A3, DUBLIN 1, Ireland",
      swiftBic: "REVOIE23",
      iban: "IE23REVO99539302812330",
      paymentReference: "UOF-GBV",
    },
  };

  const currentDetails = details[currency];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">
        Bank details for funds in {currency}:
      </h3>
      <p className="mb-4 text-sm rounded text-gray-600">
        Please make sure to include the following details in the wire
        instructions to your bank:
      </p>
      <CopyableField
        label="Beneficiary Name"
        value={currentDetails.beneficiaryName}
      />
      <CopyableField
        label="Beneficiary Bank"
        value={currentDetails.beneficiaryBank}
      />
      <CopyableField label="Bank Address" value={currentDetails.bankAddress} />
      <CopyableField label="SWIFT/BIC" value={currentDetails.swiftBic} />
      <CopyableField label="IBAN" value={currentDetails.iban} />
      <CopyableField
        label="Payment Reference ID"
        value={currentDetails.paymentReference}
      />
    </div>
  );
};

export default function WireTransfer() {
  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-4">
        When making a payment by wire transfer, your account will be credited
        with the net amount after deduction of fees.
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Wire Transfers</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
          Create New
        </button>
      </div>

      <p className="mb-4 text-gray-600">
        TRADEDID accepts bank transfers in US Dollar ($) and Euro (€).
        <br />
        Before instructing your bank to transfer any funds, please click the
        "Create New" button.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <BankDetails currency="USD" />
        <BankDetails currency="EUR" />
      </div>
    </div>
  );
}
