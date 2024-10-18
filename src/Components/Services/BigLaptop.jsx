import React from "react";
import laptop from "../../assets/Laptop.png";

const BigLaptop = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-50 md:pl-0 md:-ml-3 p-6 flex flex-col items-center justify-center">
      <div className="w-full  rounded-xl flex flex-col md:flex-row overflow-hidden p-8 ">
        <div className=" w-full p-2 md:w-1/2 h-96 ">
          <img
            className="w-full h-full object-cover md:object-fill md:scale-125  md:-ml-24"
            src={laptop}
            alt="img"
          />
        </div>
        <div className=" text-[#134391] w-full p-2 md:w-1/2 h-96 flex flex-col gap-5 justify-center">
          <h1 className="text-3xl">
            Achieve <span className="text-orange-600">maximum</span> flexibility
            with VoIP Capacity groups Capacity groups
          </h1>
          <p>
            provide a cost-efficient approach to manage your Capacity and
            ensures that your projects are maintained in separate groups,
            determined by company, region or any other required parameter. A set
            of voice channels may be shared amongst a number of DIDs, separated
            by virtual Capacity groups. DIDWW users can easily manage and build
            groups suited for any usage model to achieve maximum flexibility and
            availability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigLaptop;
