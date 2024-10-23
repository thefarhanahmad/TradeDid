import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Reports = () => {
  const location = useLocation();
  return (
    <div>
      <div className=" min-h-full w-full  bg-[#e6f9ff]">
        {/* buttons */}
        <div className=" flex w-1/2 mx-auto  pt-5 mb-5">
          <Link
            className={` w-[40%] py-4 flex justify-center ${
              location.pathname === "/dashboard/reports/voice-in"
                ? " border-b-4 border-[#023f7f]"
                : "border-b-0"
            } `}
            to={"voice-in"}
          >
            Voice IN
          </Link>
          <Link
            className={` w-[40%] py-4 flex justify-center ${
              location.pathname === "/dashboard/reports/voice-out"
                ? " border-b-4 border-[#023f7f]"
                : "border-b-0"
            } `}
            to={"voice-out"}
          >
            Voice OUT
          </Link>
          <Link
            className={` w-[40%] py-4 flex justify-center ${
              location.pathname === "/dashboard/reports/sms-in"
                ? " border-b-4 border-[#023f7f]"
                : "border-b-0"
            } `}
            to={"sms-in"}
          >
            SMS IN
          </Link>
          <Link
            className={` w-[40%] py-4 flex justify-center ${
              location.pathname === "/dashboard/reports/sms-out"
                ? " border-b-4 border-[#023f7f]"
                : "border-b-0"
            } `}
            to={"sms-out"}
          >
            SMS OUT
          </Link>
        </div>

        {/* form */}
        <div className=" h-full pt-6 p-2 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Reports;
