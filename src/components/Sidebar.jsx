"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    "Dashboard",
    "Analytics",
    "Connect",
    "Dealroom",
    "Profile",
    "Settings"
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "grid":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        );
      case "chart":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
          </svg>
        );
      case "globe":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        );
      case "bell":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        );
      case "network":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 2 L15 2 L15 8 L9 8 Z"></path>
            <path d="M19 10 L21 10 L21 16 L19 16 Z"></path>
            <path d="M3 10 L5 10 L5 16 L3 16 Z"></path>
            <path d="M9 14 L15 14 L15 20 L9 20 Z"></path>
            <path d="M12 8 L12 14"></path>
            <path d="M5 13 L9 14"></path>
            <path d="M19 13 L15 14"></path>
          </svg>
        );
      case "user":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        );
      case "settings":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  // Desktop sidebar
  const DesktopSidebar = () => (
    <div className="w-64 bg-black border-r border-gray-800 flex flex-col">
      <div className="flex border-b border-r border-gray-800">
        {/* Left column with logo */}
        <div className="p-4 flex items-center ">
          <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
            <img src={"/logo.png"} alt="Vertx" className="text-black w-5 h-5" />
          </div>
        </div>

        {/* Middle column with company name */}
        <div className="flex-w p-4 text-center">
          <h1 className="text-lg font-bold pt-2">Vertxlabs, Inc</h1>
        </div>

        {/* Right column with empty space */}
        <div className="flex-1"></div>
      </div>

      <div className="flex">
        {/* Left column with user profile */}
        <div className="p-4 flex">
          <div className="relative w-10 h-10">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="User avatar"
              className="object-cover w-full h-full rounded-full"
            />

            <div className="absolute bottom-0 -right-1 w-3.5 h-3.5 bg-green-800 rounded-full border-2 border-black"></div>
          </div>
        </div>

        {/* Right column with navigation */}
        <div className="flex-1">
          <nav className="h-full">
            <ul className="h-full flex flex-col justify-between">
              {navItems.map((item) => (
                <li
                  key={item}
                  className={`px-4 py-4 cursor-pointer ${
                    activeSection === item.toLowerCase()
                      ? "text-white font-bold"
                      : "text-[#555555] font-bold text-base"
                  }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );

  // Mobile bottom navigation
  const MobileNavigation = () => (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-10">
      <div className="flex justify-around items-center py-2">
        {navItems.slice(0, 5).map((item) => (
          <button
            key={item}
            className={`flex flex-col items-center p-2 ${
              activeSection === item.toLowerCase()
                ? "text-white"
                : "text-gray-500"
            }`}
            onClick={() => setActiveSection(item.toLowerCase())}
          >
            <div className="w-6 h-6">{renderIcon(item.icon)}</div>
            <span className="text-xs mt-1">{item}</span>
          </button>
        ))}
      </div>
    </div>
  );

  // Mobile sidebar (slide-in)
  const MobileSidebar = () => (
    <div
      className={`fixed inset-0 z-50 md:hidden ${isOpen ? "block" : "hidden"}`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="fixed inset-y-0 left-0 w-64 bg-black border-r border-gray-800 flex flex-col">
        <div className="flex border-b border-r border-gray-800">
          <div className="p-4 flex items-center">
            <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
              <img
                src={"/logo.png"}
                alt="Vertx"
                className="text-black w-5 h-5"
              />
            </div>
          </div>
          <div className="flex-w p-4 text-center">
            <h1 className="text-lg font-bold pt-2">Vertxlabs, Inc</h1>
          </div>
          <div className="flex-1"></div>
        </div>

        <div className="flex flex-1">
          <div className="p-4 flex">
            <div className="relative w-10 h-10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="User avatar"
                className="object-cover w-full h-full rounded-full"
              />
              <div className="absolute bottom-0 -right-1 w-3.5 h-3.5 bg-green-800 rounded-full border-2 border-black"></div>
            </div>
          </div>
          <div className="flex-1">
            <nav className="h-full">
              <ul className="h-full flex flex-col justify-between">
                {navItems.map((item) => (
                  <li
                    key={item}
                    className={`px-4 py-4 cursor-pointer ${
                      activeSection === item.toLowerCase()
                        ? "text-white font-bold"
                        : "text-[#555555] font-bold text-base"
                    }`}
                    onClick={() => {
                      setActiveSection(item.toLowerCase());
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
      <MobileNavigation />
    </>
  );
};

export default Sidebar;
