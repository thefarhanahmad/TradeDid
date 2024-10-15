import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
("react-icons/fa");
export const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-4 overflow-x-hidden">
      <div className="w-[80%] text-white text-normal flex flex-col justify-center md:justify-between items-center gap-4">
        <div className="container bg-white mx-auto p-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
            {/* Left Section */}
            <div className="mb-6 text-center  md:mb-0 flex flex-col justify-center items-center">
              <h3 className="text-lg font-bold text-center text-gray-800 mb-2">
                Join the <span className="text-orange-500 ">DIDWW</span>{" "}
                community
              </h3>
              <p className="text-gray-600 mb-4">
                Receive access to exclusive news and offers
              </p>
              <button className="bg-orange-500 w-fit text-white py-2 px-4 rounded-md hover:bg-orange-600">
                Join now
              </button>
              {/* Social Media Links */}
              <div className="mt-8 flex justify-center  md:justify-start self-center space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaTwitter size={25} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaFacebookF size={25} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaLinkedinIn size={25} />
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <FaYoutube size={25} />
                </a>
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex text-center  flex-col items-center md:flex-row justify-between w-full md:w-auto mb-6 md:mb-0 space-y-6 md:space-y-0 md:space-x-12">
              <div>
                <h4 className="text-gray-700 font-semibold mb-2">
                  USEFUL INFORMATION
                </h4>
                <ul className="text-gray-600 space-y-1">
                  <li>
                    <a href="#" className="hover:text-gray-800">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-800">
                      Terms & Agreements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-800">
                      Privacy notice
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-800">
                      Free phone number widget
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-gray-700 font-semibold mb-2">OTHER</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>
                    <a href="#" className="hover:text-gray-800">
                      Request a demo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-800">
                      Request a quote
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-800">
                      Leave feedback
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-800">
                      Report unwanted calls
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-center">
              <h4 className="text-gray-700 font-semibold mb-2">GET IN TOUCH</h4>
              <p className="text-gray-600 mb-2">+1 (800) 825-57-71</p>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Contacts
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full overflow-x-hidden bg-[#023f7f] py-4">
        <div className="flex w-[80%] mx-auto text-center flex-col-reverse  text-white  md:flex-row justify-between items-center">
          <div>
            Copyright © 2024 DIDWW Ireland Limited. All rights reserved.
          </div>
          <div className="flex gap-9">
            <img src="https://www.didww.com/images/footer/CFCA.svg" alt="img" />
            <img src="https://www.didww.com/images/footer/RIPE.svg" alt="img" />
            <img src="https://www.didww.com/images/footer/PTC.svg" alt="img" />
            <img src="https://www.didww.com/images/footer/GSMA.svg" alt="img" />
            <img src="https://www.didww.com/images/footer/ITU.svg" alt="img" />
            <img
              src="https://www.didww.com/images/footer/ISO-27001.svg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
