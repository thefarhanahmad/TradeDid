import React from "react";

const MyNumbers = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3">
        <p>You have no DIDs.</p>
        <button className="bg-green-600 rounded-2xl flex justify-center items-center px-6 py-2 text-white font-semibold">
          Order New DIDs
        </button>
      </div>
    </div>
  );
};

export default MyNumbers;
