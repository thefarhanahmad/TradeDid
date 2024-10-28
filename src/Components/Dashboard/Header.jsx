import React from "react";
import { Bell, ShoppingCart, Menu } from "lucide-react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = ({ setIsOpen }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  // console.log("isAuthenticated : ", isAuthenticated);
  // console.log("user : ", user);

  return (
    <header className="bg-white  shadow-md header p-4 fixed top-0 left-0 w-full md:w-[calc(100%-16rem)] md:ml-64 z-10">
      <div className="flex items-center justify-between">
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
        <div className="w-full flex justify-between items-center">
          <h1 className="text-xl font-semibold ml-4 md:ml-0">Dashboard</h1>
          <div className="flex items-center text-xs md:text-sm space-x-4">
            <div className="p-2 rounded-full md:flex gap-4 hidden">
              <span className="flex items-center">
                <span> Need Help?</span>
                <RiArrowDropDownLine className="text-lg" />
              </span>
              <span className="flex items-center">
                <span>Documentation</span>
                <RiArrowDropDownLine className="text-lg" />
              </span>
              <span className="flex items-center">
                <span>Quick Links</span>
                <RiArrowDropDownLine className="text-lg" />
              </span>
              <span className="flex items-center">
                <span>$0.00</span>
                <RiArrowDropDownLine className="text-lg" />
              </span>
            </div>
            <button>
              <div className="relative">
                <AiOutlineShoppingCart className="text-2xl" />
                {/* {cart.length > 0 && ( */}
                <span
                  className="absolute -top-1 -right-2 bg-blue-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                >
                  {2}
                </span>
                {/* )} */}
              </div>
            </button>
            <div className="flex flex-col md:flex-row  items-center space-x-2">
              <CiUser className="text-2xl" />
              <span>{user}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
