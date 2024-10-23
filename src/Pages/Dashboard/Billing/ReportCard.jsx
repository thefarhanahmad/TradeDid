import React from "react";

const ReportCard = ({ heading, description, width }) => {
  return (
    <div className={` p-1 rounded-lg shadow-lg w-[${width}]`}>
      <h2 className="text-lg font-bold mb-2">{heading}</h2>
      <div className=" h-64 flex">
        <p className="text-gray-600 h-full bg-white w-full flex justify-center items-center rounded-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ReportCard;
