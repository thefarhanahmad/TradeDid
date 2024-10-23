import React from "react";
import PlaceholderSection from "../../Components/Dashboard/CloudComponent";
import PricingPlan from "../../Components/Dashboard/PlannigPrice";

const CloudPhoneSystem = () => {
  return (
    <div>
      <PlaceholderSection />
      <PricingPlan />
      <div className="flex flex-col gap-6 px-6">
        <div className=" flex flex-col gap-2">
          <h2 className="text-2xl text-gray-900">
            Phone.systems™ makes cloud telephony available to everyone
          </h2>
          <p className="text-sm text-gray-700">
            Our unique, easy to use, drag-and-drop based management interface
            allows multiple users, remote offices and telecommuters to become
            part of a single and highly flexible phone system. This product is
            fully scalable, its configurations cover a wide range of
            applications from simple home use to complex, multi-branch voice
            systems.
          </p>
        </div>
        <div className=" flex flex-col gap-2">
          <h2 className="text-2xl text-gray-900">
            Use phone.systems™ with your current DIDWW DIDs:
          </h2>
          <p className="text-sm text-gray-700">
            Your selected DIDs may be mapped to a trunk "phone.systems v2
            Trunk", and those DIDs will then be provisioned for use by
            phone.systems™ v2.ns from simple home use to complex, multi-branch
            voice systems.
          </p>
        </div>
        <div className=" flex flex-col gap-2">
          <h2 className="text-2xl text-gray-900">
            Use phone.systems™ with a 3rd party service provider or your own
            infrastructure:
          </h2>
          <p className="text-sm text-gray-700">
            DIDs sourced from other providers may be used by phone.systems™ v2.
            Custom DID numbers can be entered in "Phone Number" section, and SIP
            URI addresses may be found in the "Inbound Trunk" section of the
            phone.systems™ v2 menu. Outbound SIP trunk services for termination
            may be sourced from DIDWW or any compatible SIP-based provider, and
            configured in the "Outbound Trunks" section of the phone.systems™ v2
            menu. To use DIDWW Outbound SIP Trunk services with phone.systems™
            v2, please contact customer.care@didww.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloudPhoneSystem;
