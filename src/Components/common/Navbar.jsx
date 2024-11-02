import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { navData } from "../../rawData";
import Logo from "../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolledPastTop, setIsScrolledPastTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledPastTop(window.scrollY > 0);
    };

    const updateNavbar = () => {
      if (window.innerWidth >= 768) {
        window.addEventListener("scroll", handleScroll);
      } else {
        setIsScrolledPastTop(true);
      }
    };

    updateNavbar();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`fixed hidden md:block md:top-0 left-0 z-50 w-full transition-all duration-300 ${
          isScrolledPastTop
            ? "bg-white shadow-md"
            : "bg-white md:bg-transparent"
        }`}
        style={{ height: "80px", paddingBottom: "10px" }}
      >
        <div className="flex  w-[96%] justify-between lg:justify-evenly  gap-1 items-center px-1 mx-auto h-full">
          {/* Logo */}
          <Link to={"/"} className="">
            <img
              src={Logo}
              className="p-1 rounded w-32 lg:w-36 cursor-pointer "
              alt="Logo"
            />
          </Link>

          <div className="flex gap-3 lg:gap-7 text-[#023f7f] font-sans">
            {navData?.map((menu, index) => (
              <div
                key={index}
                className="relative group "
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-center items-center cursor-pointer">
                  <span
                    className={`transition text-[#023f7f] text-[90%] lg:text-[100%]  ${
                      isScrolledPastTop ? "opacity-100" : "opacity-85"
                    }`}
                  >
                    {menu.label}
                  </span>
                  <FaChevronDown
                    className={`ml-1 text-[#023f7f] text-sm transition-transform duration-300 transform ${
                      openDropdown === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Dropdown Menu */}
                <div
                  className={`absolute -left-6 z-50 top-full mt-4 w-64 p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 transform origin-top ${
                    openDropdown === index
                      ? "scale-y-100 opacity-100"
                      : "scale-y-0 opacity-0"
                  }`}
                >
                  {menu.items.map((item, i) => (
                    <div key={i}>
                      {item.logo ? (
                        <div className="pl-3 mb-3">
                          <Link onClick={handleLinkClick} to={item.url}>
                            <img src={item.logo} alt="logo" width={60} />
                          </Link>
                        </div>
                      ) : (
                        <Link
                          to={item?.url}
                          className="block px-4 py-2 text-[#023f7f] hover:opacity-85 transition duration-200"
                          onClick={handleLinkClick}
                        >
                          {item?.text}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Link
            to={"/auth/signup"}
            className="bg-orange-500 text-white font-semibold py-1 flex justify-center items-center text-xs px-6 rounded-full hover:bg-orange-600 transition duration-200"
            // className="  text-[80%] lg:text-[100%]"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed md:top-0 left-0 md:hidden  z-50 w-full transition-all duration-300 ${
          isScrolledPastTop
            ? "bg-white shadow-md"
            : "bg-white md:bg-transparent"
        }`}
        style={{ height: "80px", paddingBottom: "10px" }}
      >
        <div className="flex justify-between md:justify-evenly items-center  w-[96%] md:w-[90%] mx-auto h-full">
          {/* Logo */}
          <Link to={"/"} className="">
            <img
              src={Logo}
              width={150}
              className="p-1 rounded cursor-pointer "
              alt="Logo"
            />
          </Link>
          <div ref={mobileMenuRef} className="">
            <button onClick={toggleMobileMenu} className="p-2">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <div
              className={`absolute flex flex-col items-center bg-white shadow-lg w-full top-[80px] py-6 left-0 z-40 text-[#023f7f] font-sans transform transition-all duration-500 ease-in-out ${
                isMobileMenuOpen
                  ? "opacity-100 scale-y-100"
                  : "opacity-0 scale-y-0"
              }`}
              style={{
                maxHeight: "calc(100vh - 80px)", // Adjust the height to fit within the screen
                overflowY: "auto", // Enable vertical scrolling
              }}
            >
              {navData?.map((menu, index) => (
                <div key={index} className="relative group w-full">
                  <div
                    className="flex justify-center py-1 text-lg items-center cursor-pointer"
                    onClick={() =>
                      setOpenDropdown(openDropdown === index ? null : index)
                    }
                  >
                    <span className="transition  text-[#023f7f] opacity-100">
                      {menu.label}
                    </span>
                    <FaChevronDown
                      className={`ml-1 text-[#023f7f] text-sm transition-transform duration-300 transform ${
                        openDropdown === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  {/* Dropdown Menu for Mobile */}
                  <div
                    className={`w-full flex flex-col items-center py-1.5 bg-slate-50 transition-all duration-500 ease-in-out ${
                      openDropdown === index
                        ? "opacity-100 max-h-screen"
                        : "opacity-0 max-h-0 overflow-hidden"
                    }`}
                  >
                    {menu.items.map((item, i) => (
                      <div key={i}>
                        {item.logo ? (
                          <div className="py-1.5">
                            <Link onClick={handleLinkClick} to={item.url}>
                              <img src={item.logo} alt="logo" width={60} />
                            </Link>
                          </div>
                        ) : (
                          <Link
                            to={item?.url}
                            className="block text-[#023f7f] py-1.5 hover:opacity-85 transition duration-200"
                            onClick={handleLinkClick}
                          >
                            {item?.text}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                to={"/auth/signup"}
                className="bg-orange-500 text-white font-semibold py-1 px-6 mt-4 rounded-full hover:bg-orange-600 transition duration-200"
                onClick={handleLinkClick}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
