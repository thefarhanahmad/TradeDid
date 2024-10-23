import React from "react";

const DescCard = ({ preText, spanText, nextText }) => {
  return (
    <div>
      <div>
        <div className="flex py-24 w-full justify-center items-center">
          <div className="w-1/2 bg-white shadow-xl border p-6">
            <p className="text-sm text-center">
              {preText}
              <span className="mx-2">{spanText}</span>
              {nextText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescCard;
