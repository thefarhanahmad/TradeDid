import React from "react";

const PlaceholderSection = () => {
  return (
    <div className="bg-blue-900 text-white p-6 mr-2 flex gap-6 justify-between items-center">
      <div className="w-[75%] ">
        <h2 className="text-xl  font-semibold mb-2">
          phone.systems™ is an advanced cloud telephony solution for everyone
        </h2>
        <p className="mb-4 text-sm">
          phone.systems™ is a feature-rich virtual phone system that includes
          voice menus, voice mail to email, conferencing, time and caller
          routing, internal extensions and more.
        </p>
        <button className="bg-transparent text-white font-bold py-2 px-4 border rounded-2xl">
          Visit Website
        </button>
      </div>
      <div className="w-[25%]   overflow-hidden">
        <img
          src="https://my.didww.com/assets/images/8a50d360c6be8fcc2e06.png"
          alt="Placeholder"
          className="rounded-lg shadow-md w-full h-full "
        />
      </div>
      {/* Background Decorative Pattern */}
      {/* <div className="absolute inset-0 bg-blue-800 opacity-20 z-0 pointer-events-none" />
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          opacity: 0.3,
        }}
      ></div> */}
    </div>
  );
};

export default PlaceholderSection;
