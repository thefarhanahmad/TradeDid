import React from "react";

const RegisterForm = () => {
  return (
    <div className="w-full  flex flex-col justify-between items-center ">
      <form className="w-full ">
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="First name*"
            className="w-1/2 p-2 border border-[#023f7f] rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Last name*"
            className="w-1/2 p-2 border border-[#023f7f] rounded-md outline-none"
          />
        </div>
        <input
          type="email"
          placeholder="Contact email*"
          className="w-full p-2 mb-4 border border-[#023f7f] rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Company name"
          className="w-full p-2 mb-4 border border-[#023f7f] rounded-md outline-none"
        />
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Phone number*"
            className="w-1/2 p-2 border border-[#023f7f] rounded-md outline-none"
          />
          <select className="w-1/2 p-2 border border-[#023f7f] rounded-md outline-none">
            <option>Country*</option>
            {/* Add country options here */}
          </select>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label>
            I have read and accept the DIDWW{" "}
            <a href="#" className="text-[#023f7f]">
              Terms & Agreements
            </a>{" "}
            and the DIDWW{" "}
            <a href="#" className="text-[#023f7f]">
              Privacy Notice
            </a>
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label>Subscribe to News and Updates</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" className="mr-2" />
          <label>I'm not a robot</label>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-[#023f7f] text-white rounded-md outline-none"
        >
          Register
        </button>
      </form>
      <div className="w-full h-full py-4 flex justify-between items-center font-serif ">
        <span className="text-xs">Help and Support</span>
        <span className="text-xs">Privacy Notice</span>
        <span className="text-xs">Terms and Agreements</span>
      </div>
    </div>
  );
};

export default RegisterForm;
