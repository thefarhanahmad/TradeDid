import React from "react";

const PromoBanner = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center py-20 overflow-x-hidden  min-h-screen bg-gradient-to-b from-white to-blue-100 p-4">
        <h1 className="text-4xl font-bold text-[#023f7f]  mb-4">
          Are you ready to
        </h1>
        <h2 className="text-4xl font-bold text-orange-600 mb-4">
          remove the boundaries?
        </h2>
        <p className="text-lg text-blue-700 mb-8">
          Create or expand your cloud telecommunications
        </p>
        <div className="flex space-x-4 mb-12">
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
            Sign up now
          </button>
          <button className="bg-[#023f7f] text-white py-2 px-4 rounded hover:bg-blue-900">
            Request a demo
          </button>
        </div>

        {/* 2 */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#023f7f]">
            Stay <span className="text-orange-500">updated</span>
          </h1>
          <p className="text-gray-600 mb-10">
            Explore articles, e-books and other resources to help you make your
            VoIP business decisions
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-[#023f7f] text-white p-4 rounded-lg w-full md:w-1/2">
            <div className="bg-gray-300 h-52 rounded-lg overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover"
                src="https://news.didww.com/content/images/2024/10/DIDWW-at-Telecoms-World-Asia-2024.jpg"
                alt=""
              />
            </div>
            <div className=" pb-6">
              <h2 className="text-xl font-bold">
                Meet the DIDWW team at Telecoms World Asia 2024
              </h2>
              <p className="text-gray-300">5 days ago</p>
            </div>
          </div>
          <div className="bg-orange-500 text-white p-4 rounded-lg w-full md:w-1/2">
            <div className="bg-gray-300 h-52 rounded-lg overflow-hidden mb-4">
              <img
                className="w-full h-full object-cover"
                src="https://news.didww.com/content/images/2024/10/DID-numbers-DIDWW.jpg"
                alt=""
              />
            </div>
            <div className=" pb-6">
              <h2 className="text-xl font-bold">
                DID numbers - the key to improving business communications
              </h2>
              <p className="text-gray-300">6 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoBanner;
