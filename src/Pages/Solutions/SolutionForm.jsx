import React, { useState } from "react";

const SolutionForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add any additional form submission logic here
  };

  return (
    <div className="bg-gray-50 py-12 flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl"
      >
        <h2 className="text-center text-2xl font-semibold text-[#023f7f] mb-3">
          Want to become a{" "}
          <span className="text-orange-500">TRADEDID solution partner</span>?
        </h2>
        <p className="text-center text-lg font-semibold text-[#023f7f] mb-6">
          Please provide your contact details below
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            className="border rounded-md p-3 w-full bg-gray-100 focus:outline-none"
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            value={formData.companyName}
            onChange={handleChange}
            className="border rounded-md p-3 w-full bg-gray-100 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md p-3 w-full bg-gray-100 focus:outline-none"
          />
          <div className="flex">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="border rounded-l-md p-3 bg-gray-100 focus:outline-none"
            >
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-r-md p-3 w-full bg-gray-100 focus:outline-none"
            />
          </div>
        </div>
        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          className="border rounded-md p-3 w-full bg-gray-100 focus:outline-none h-32 mb-4"
        ></textarea>
        <p className="text-sm text-gray-500 mb-4">
          Any data that you provide to DIDWW will be treated in accordance with
          our{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          
        </p>
        <button
          type="submit"
          className="bg-orange-500 text-white font-semibold rounded-2xl py-3 px-6 w-fit  hover:bg-orange-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SolutionForm;
