import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className="flex justify-center items-center  p-1">
      <div className="w-16 px-2 py-1 flex justify-between items-center rounded">
        <span className="text-lg">{value}</span>
        <div className="flex flex-col items-center gap-1 justify-between">
          <button onClick={increment}>
            <FaChevronUp />
          </button>
          <button onClick={decrement}>
            <FaChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
