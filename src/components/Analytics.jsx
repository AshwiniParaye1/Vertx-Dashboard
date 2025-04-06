//src/componnets/Analytics.jsx

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Demographics from "./Demographics";
import Overview from "./Overview";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      {/* Tab Navigation */}
      <div className="border-b border-gray-800">
        <div className="flex ">
          <button
            className={"px-6 py-4 text-gray-500 border-r border-gray-800 "}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={"px-6 py-4 text-gray-500 border-r border-gray-800"}
            onClick={() => setActiveTab("demographics")}
          >
            Demographics
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 overflow-auto bg-black ">
        {/* Always show both sections, regardless of tab */}
        <div className="mb-8 pl-8 pr-8">
          <h1 className="text-3xl font-extrabold mb-6">Overview</h1>
          <Overview />
        </div>

        <div className="mt-8 pl-8 pr-8">
          <Demographics />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
