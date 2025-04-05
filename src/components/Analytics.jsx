import React, { useState } from "react";
import Demographics from "./Demographics";
import Overview from "./Overview";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      {/* Tab Navigation */}
      <div className="border-b border-gray-800">
        <div className="flex">
          <button
            className={`px-6 py-4 ${
              activeTab === "overview"
                ? "border-b-2 border-white"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`px-6 py-4 ${
              activeTab === "demographics"
                ? "border-b-2 border-white"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("demographics")}
          >
            Demographics
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 overflow-auto bg-black">
        {/* Always show both sections, regardless of tab */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">Overview</h1>
          <Overview />
        </div>

        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-6">Demographics</h1>
          <Demographics />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
