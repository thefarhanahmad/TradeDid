import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const CallLogs = () => {
  const location = useLocation();
  return (
    <div>
      <div className=" min-h-full w-full  bg-[#e6f9ff]">
        {/* buttons */}
        <div className=" flex w-1/2 mx-auto  pt-5 mb-5">
          <Link
            className={` w-[40%] py-4 flex justify-center ${
              location.pathname === "/dashboard/call-logs/inbound"
                ? " border-b-4 border-[#023f7f]"
                : "border-b-0"
            } `}
            to={"inbound"}
          >
            Inbound
          </Link>
          <Link
            className={` w-[40%] py-4 flex justify-center ${
              location.pathname === "/dashboard/call-logs/Outbound"
                ? " border-b-4 border-[#023f7f]"
                : "border-b-0"
            } `}
            to={"Outbound"}
          >
            Outbound
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

export default CallLogs;
