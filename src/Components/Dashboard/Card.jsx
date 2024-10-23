import React from "react";

const Card = ({ title, content }) => (
  <div className="bg-white p-4 rounded-lg shadow mb-4">
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-500">{content}</p>
  </div>
);

export default Card;
