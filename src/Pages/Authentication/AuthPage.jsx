import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AuthPage = () => {
  const location = useLocation();
  console.log("location  : ", location);

  return (
    <div className="flex min-h-screen pt-16">
      <div className="bg-[#023f7f] w-[60%] md:flex hidden justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">TRADEDID'S</h1>
          <p className="mt-2">Remove the boundaries</p>
        </div>
      </div>

      <div className=" min-h-full w-[100%] px-0 sm:px-20 md:px-0 mx-auto md:w-[40%] bg-[#e6f9ff]">
        {/* buttons */}
        <div className=" flex justify-evenly pt-5 mb-5">
          <Link
            className={` w-[40%] py-4 flex justify-center ${
              location.pathname === "/auth/login"
                ? " border-b-4 border-[#023f7f]"
                : "border-b-0"
            } `}
            to={"login"}
          >
            Login
          </Link>
          <Link
            className={` w-[40%] py-4 flex justify-center ${
              location.pathname === "/auth/signup"
                ? " border-b-4 border-[#023f7f]"
                : "border-b-0"
            } `}
            to={"signup"}
          >
            Register
          </Link>
        </div>

        {/* form */}
        <div className=" h-full  pt-6 p-2 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
