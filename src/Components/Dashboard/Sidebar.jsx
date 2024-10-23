import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import {
  MdDashboard,
  MdPhone,
  MdMessage,
  MdCloud,
  MdBarChart,
  MdGroup,
  MdCode,
  MdCreditCard,
  MdArrowDropDown,
  MdClose,
} from "react-icons/md";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      icon: <MdDashboard />,
      path: "overview",
    },
    {
      name: "Phone Numbers",
      icon: <MdPhone />,
      navLinks: [
        { label: "Buy Numbers", path: "phone/buy-numbers" },
        { label: "My Numbers", path: "phone/my-numbers" },
        { label: "Number Porting", path: "phone/porting/porting-request" },
        { label: "Capacity", path: "phone/capacity/extend-capacity" },
        { label: "Configuration Profile", path: "phone/configuration/profile" },
      ],
    },
    {
      name: "Voice",
      icon: <MdMessage />,
      navLinks: [
        { label: "Inbound Trunks", path: "voice/inbound-trunks" },
        { label: "Outbound Trunks", path: "voice/outbound-trunks" },
        { label: "Emergency Calling", path: "voice/emergency-calling" },
      ],
    },
    {
      name: "SMS",
      icon: <MdMessage />,
      navLinks: [
        { label: "SMS Trunks", path: "sms-trunks" },
        { label: "A2P Campaigns", path: "sms-campaigns" },
      ],
    },
    {
      name: "Cloud Phone System",
      icon: <MdCloud />,
      path: "cloud-phone-system",
    },
    {
      name: "Logs & Analytics",
      icon: <MdBarChart />,
      navLinks: [
        { label: "Statistics", path: "statistics/voice-in" },
        { label: "Reports", path: "reports/voice-in" },
        { label: "Call Logs", path: "call-logs/inbound" },
        { label: "SMS Logs", path: "sms-logs/inbound" },
        { label: "Exports", path: "exports" },
      ],
    },
    {
      name: "Identities & Addresses",
      icon: <MdGroup />,
      path: "identity-addresses/identities",
    },
    {
      name: "APIs",
      icon: <MdCode />,
      navLinks: [
        { label: "TRADEDID API 3", path: "tradedid-apis" },
        { label: "Call Events API", path: "call-event-apis" },
      ],
    },
    {
      name: "Billing",
      icon: <MdCreditCard />,
      navLinks: [
        { label: "Payment Methods", path: "billing/payment-methods" },
        { label: "Billing History", path: "billing-history/bill-reports" },
      ],
    },
  ];

  // Close sidebar when clicking outside of it, but exclude header and hamburger button
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".header")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      className={`sidebar bg-[#134391] text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <div className="p-4 relative border-b border-[#3265b7] mt-24 md:mt-0 flex justify-between items-center header">
        <Link to={"/"} className="text-2xl font-bold">
          <img src={Logo} width={180} alt="logo" />
        </Link>
        {/* Close button for small devices */}
        <button
          className="lg:hidden border absolute -right-0 m-1 -top-6"
          onClick={() => setIsOpen(false)}
        >
          <MdClose size={24} />
        </button>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <div key={item.name}>
            {item.path ? (
              <Link
                to={`${item.path}`}
                className={`flex items-center w-full p-3 text-left hover:bg-[#3265b7] ${
                  location.pathname === `${item.path}` ? "bg-[#3265b7]" : ""
                }`}
                onClick={() => {
                  setActiveMenu(item.name);
                  setIsOpen(false);
                }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ) : (
              <>
                <button
                  className="flex items-center w-full p-3 text-left hover:bg-[#3265b7]"
                  onClick={() =>
                    setActiveMenu(activeMenu === item.name ? "" : item.name)
                  }
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                  <MdArrowDropDown
                    className={`ml-auto transform transition-transform ${
                      activeMenu === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeMenu === item.name && item.navLinks && (
                  <div className="bg-[#3265b7] pl-6 py-1 pr-2">
                    {item.navLinks.map((link) => (
                      <Link
                        to={`${link.path}`}
                        key={link.label}
                        className={`block w-full p-2 text-left hover:bg-blue-700 ${
                          location.pathname === `${link.path}`
                            ? "bg-blue-700"
                            : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
