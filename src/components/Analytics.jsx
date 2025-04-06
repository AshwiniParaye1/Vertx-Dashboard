//src/components/Analytics.jsx

"use client";

import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Demographics from "./Demographics";
import Overview from "./Overview";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      {/* Tab Navigation */}
      <div className="border-b border-gray-800">
        <div className="flex sm:justify-between justify-around">
          <div className="flex">
            <button
              className={`px-6 py-4 text-gray-500 border-r border-gray-800 ${
                activeTab === "overview"
                  ? "text-white border-b-2 border-b-white"
                  : ""
              }`}
              onClick={() => setActiveTab("overview")}
            >
              {isMobile ? "Overview" : "Overview"}
            </button>

            {isMobile && (
              <button
                className={`px-6 py-4 text-gray-500  border-r border-gray-800 ${
                  activeTab === "reports"
                    ? "text-white border-b-2 border-b-white"
                    : ""
                }`}
                onClick={() => setActiveTab("reports")}
              >
                {isMobile ? "Reports" : "Reports"}
              </button>
            )}

            <button
              className={`px-6 py-4 text-gray-500 ${
                activeTab === "demographics"
                  ? "text-white border-b-2 border-b-white"
                  : ""
              }`}
              onClick={() => setActiveTab("demographics")}
            >
              {isMobile ? "Demographics" : "Demographics"}
            </button>
          </div>
          {!isMobile && (
            <button className="px-6 py-4 text-gray-500 border-l border-gray-800">
              More
            </button>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 overflow-auto bg-black">
        {/* Always show both sections  */}
        <div className="mb-8">
          {!isMobile && (
            <h1 className="text-3xl font-extrabold mb-6">Overview</h1>
          )}

          <Overview />
        </div>

        <div className="mt-8">
          <Demographics />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
