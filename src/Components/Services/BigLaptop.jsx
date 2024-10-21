import React from "react";
import laptop from "../../assets/Laptop.png";

const BigLaptops = ({ list, tools }) => {
  return (
    <div className=" bg-gradient-to-b from-blue-50 to-orange-50 md:pl-0 md:-ml-3 p-6 flex flex-col items-center justify-center">
      <div className="w-full  rounded-xl flex flex-col md:flex-row overflow-hidden p-8 ">
        <div className=" w-full p-2 md:w-1/2  ">
          <img
            className="w-full h-full object-cover md:object-fill md:scale-125  md:-ml-24"
            src={laptop}
            alt="img"
          />
        </div>
        <div className=" text-[#134391] w-full p-2 md:w-1/2  flex flex-col gap-5 justify-center">
          {list ? (
            <div className="text-[#134391] w-full  md:mt-0 items-center p-2 md:w-1/2  flex flex-col gap-5 justify-center">
              {" "}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Enterprise grade{" "}
                <span className="text-orange-500">configurations</span>
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2  text-2xl">•</span> Call
                  encryption (TLS, SRTP)
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 text-2xl">•</span> Call
                  forwarding (SIP, PSTN, SIP LINE)
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 text-2xl">•</span> Full
                  scalability
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 text-2xl">•</span>{" "}
                  Flexible SIP Trunk configuration
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 text-2xl">•</span>{" "}
                  Multi-language support
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 text-2xl">•</span>{" "}
                  Real-time configuration deployment
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 text-2xl">•</span>{" "}
                  Web-based management UI
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 text-2xl">•</span>{" "}
                  Attended and unattended call transfers
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2 text-2xl">•</span> And
                  more...
                </li>
              </ul>
            </div>
          ) : (
            <>
              {tools ? (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                    <span className="text-[#ff6900]">API</span>{" "}
                    <span className="text-[#134391]">
                      for phone.systems™ distribution
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="text-center text-[#33475b] mb-8">
                    The phone.systems™ API provides the ability to provision and
                    combine third party SIP services and deliver a full
                    multi-tenant PBX solution to help you expand service
                    offerings, monetize resources and nurture valuable customer
                    relationships.
                  </p>

                  {/* Button */}
                  <div className="text-center">
                    <button className="bg-[#ff6900] text-white font-bold py-2 px-6 rounded-full hover:bg-[#e55d00] transition-colors duration-300">
                      Get more info
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl mb-5">
                    Achieve <span className="text-orange-600">maximum</span>{" "}
                    flexibility with VoIP Capacity groups Capacity groups
                  </h1>
                  <p>
                    provide a cost-efficient approach to manage your Capacity
                    and ensures that your projects are maintained in separate
                    groups, determined by company, region or any other required
                    parameter. A set of voice channels may be shared amongst a
                    number of DIDs, separated by virtual Capacity groups. DIDWW
                    users can easily manage and build groups suited for any
                    usage model to achieve maximum flexibility and availability.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BigLaptops;
