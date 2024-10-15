import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <form className="w-full">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-[#023f7f] rounded-md outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-[#023f7f] rounded-md outline-none"
        />
        <button
          type="submit"
          className="w-full p-2 bg-[#023f7f] text-white rounded-md outline-none"
        >
          Sign in
        </button>
        {/* <button
          type="submit"
          className="w-full p-2 bg-[#023f7f] text-white rounded-lg outline-none"
        >
          Continue
        </button> */}

        <div className="w-full flex justify-center items-center">
          <Link className="p-2  mx-auto text-[#023f7f]">Forgot Password ?</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
