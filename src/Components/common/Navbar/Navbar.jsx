import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import { navData } from "../../../rawData";
import Logo from "../../../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolledPastTop, setIsScrolledPastTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation;
  // Create a ref for the mobile menu
  const mobileMenuRef = useRef(null);

  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null); // Close the dropdown after clicking a link
    setIsMobileMenuOpen(false); // Close the mobile menu as well
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
  };

  // Handle clicks outside of the mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false); // Close mobile menu if clicked outside
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll event only for larger screens
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolledPastTop(true);
      } else {
        setIsScrolledPastTop(false);
      }
    };

    const updateNavbar = () => {
      if (window.innerWidth >= 768) {
        // 768px is the breakpoint for tablet screens
        window.addEventListener("scroll", handleScroll);
      } else {
        setIsScrolledPastTop(true); // Keep navbar white for mobile and tablet
      }
    };

    updateNavbar();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed md:top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolledPastTop ? "bg-white shadow-md " : "bg-white md:bg-transparent"
      }`}
      style={{ height: "80px", paddingBottom: "10px" }} // Keep padding consistent
    >
      <div className="flex justify-between md:justify-evenly items-center  w-[90%] mx-auto h-full">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src={Logo}
            width={150}
            className=" p-1 rounded cursor-pointer"
            alt="Logo"
          />
        </Link>

        {/* Navigation Items */}
        <div
          ref={mobileMenuRef} // Attach the ref here
          className={` gap-6 text-[#023f7f] font-sans ${
            isMobileMenuOpen
              ? "flex-col absolute flex justify-center items-center bg-white shadow-lg w-full top-[80px] py-10 left-0 z-40"
              : "hidden md:flex "
          }`}
        >
          {navData?.map((menu, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex justify-center   items-center cursor-pointer">
                <span
                  className={`transition text-[#023f7f] ${
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
                className={`absolute md:-left-6 -left-20 z-50 top-full mt-4 w-64 p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 transform origin-top ${
                  openDropdown === index
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0"
                }`}
              >
                {menu.items.map((item, i) => {
                  return (
                    <div className="">
                      {item.logo ? (
                        <div className="pl-3 mb-3">
                          <Link onClick={handleLinkClick} to={item.url}>
                            <img
                              src={item.logo}
                              alt="logo"
                              // height={20}
                              width={60}
                            />
                          </Link>
                        </div>
                      ) : (
                        <Link
                          key={i}
                          to={item?.url}
                          className="block px-4 py-2 text-[#023f7f] hover:opacity-85 transition duration-200"
                          onClick={handleLinkClick} // Close dropdown and mobile menu on click
                        >
                          {item?.text}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Sign Up Button for Mobile View */}
          <Link
            to={"/auth/signup"}
            className="bg-orange-500 text-white font-semibold py-1 px-6 flex md:hidden justify-center items-center rounded-full hover:bg-orange-600 transition duration-200 mt-4"
            onClick={handleLinkClick} // Close the mobile menu on click
          >
            Sign Up
          </Link>
        </div>

        {/* Sign In Button */}
        <div>
          <Link
            to={"/auth/signup"}
            className="bg-orange-500 hidden text-white font-semibold py-1 px-6 md:flex justify-center items-center rounded-full hover:bg-orange-600 transition duration-200"
          >
            Sign in
          </Link>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            {/* Show on mobile only */}
            <button onClick={toggleMobileMenu} className="p-2">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}{" "}
              {/* Toggle between icons */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
