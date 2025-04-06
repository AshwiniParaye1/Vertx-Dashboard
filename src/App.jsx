"use client";

import { Globe, LayoutDashboard, Network } from "lucide-react";
import { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa6";
import Analytics from "./components/Analytics";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const [activeSection, setActiveSection] = useState("analytics");
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Mobile navigation items
  const mobileNavItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Analytics", icon: BiWorld },
    { name: "Connect", icon: Globe },
    { name: "Activity", icon: FaRegBell },
    { name: "Dealroom", icon: Network }
  ];

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar - only show on desktop */}
      {!isMobile && (
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        <Header activeSection={activeSection} />

        {/* Render appropriate section based on activeSection */}
        {activeSection === "analytics" && <Analytics />}

        {activeSection !== "analytics" && (
          <div className="flex-1 p-6 overflow-auto bg-black">
            <h1 className="text-4xl font-bold mb-6">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h1>
            <p>This section is under construction.</p>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        {isMobile && (
          <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-10">
            <div className="flex justify-around items-center">
              {mobileNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    className={`flex flex-col items-center p-3 ${
                      activeSection === item.name.toLowerCase()
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveSection(item.name.toLowerCase())}
                  >
                    <Icon size={20} />
                    <span className="text-xs mt-1">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
