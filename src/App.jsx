//src//App.jsx

"use client";

import { useState } from "react";
import Demographics from "./components/Demographics";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Sidebar from "./components/Sidebar";

function App() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        <Header />

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
          {activeTab === "overview" && (
            <>
              <h1 className="text-4xl font-bold mb-6">Overview</h1>
              <Overview />

              <div className="mt-8">
                <h1 className="text-4xl font-bold mb-6">Demographics</h1>
                <Demographics />
              </div>
            </>
          )}

          {activeTab === "demographics" && (
            <>
              <h1 className="text-4xl font-bold mb-6">Demographics</h1>
              <Demographics />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
