//src/App.jsx

"use client";

import { useState } from "react";
import Analytics from "./components/Analytics";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [activeSection, setActiveSection] = useState("analytics");

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

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
      </div>
    </div>
  );
}

export default App;
