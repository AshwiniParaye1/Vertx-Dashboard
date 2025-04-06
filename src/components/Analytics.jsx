"use client";

import { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import Demographics from "./Demographics";
import Overview from "./Overview";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const reportRef = useRef(null);

  // useEffect(() => {
  //   if (isMobile && activeTab === "reports") {
  //     // Mobile specific logic for Reports
  //     const width = reportRef.current.clientWidth;
  //     const height = 200; // Adjusted height for mobile

  //     const data = [
  //       { name: "India", value: 40, color: "#4834D4", flagCode: "in" },
  //       { name: "USA", value: 25, color: "#BD5302", flagCode: "us" },
  //       { name: "Canada", value: 10, color: "#E9C16B", flagCode: "ca" },
  //       { name: "UAE", value: 7, color: "#579560", flagCode: "ae" }
  //     ];

  //     // Clear previous content
  //     d3.select(reportRef.current).selectAll("*").remove();

  //     // Create SVG
  //     const svg = d3
  //       .select(reportRef.current)
  //       .append("svg")
  //       .attr("width", "100%")
  //       .attr("height", height);

  //     // Create groups for each bar
  //     const bars = svg
  //       .selectAll(".bar")
  //       .data(data)
  //       .enter()
  //       .append("g")
  //       .attr("class", "bar")
  //       .attr(
  //         "transform",
  //         (d, i) => `translate(0, ${i * (height / data.length)})`
  //       );

  //     // Background rectangles
  //     bars
  //       .append("rect")
  //       .attr("x", 0)
  //       .attr("y", 5)
  //       .attr("width", "100%")
  //       .attr("height", height / data.length - 10)
  //       .attr("fill", "#27272A");

  //     // Value rectangles
  //     bars
  //       .append("rect")
  //       .attr("x", 0)
  //       .attr("y", 5)
  //       .attr("width", (d) => `${d.value}%`)
  //       .attr("height", height / data.length - 10)
  //       .attr("fill", (d) => d.color);

  //     // Flag images
  //     bars
  //       .append("image")
  //       .attr("xlink:href", (d) => `https://flagcdn.com/${d.flagCode}.svg`)
  //       .attr("x", 5)
  //       .attr("y", 5)
  //       .attr("width", 30)
  //       .attr("height", height / data.length - 10);

  //     // Country names
  //     bars
  //       .append("text")
  //       .attr("x", 40)
  //       .attr("y", height / data.length / 2 + 4)
  //       .style("font-size", "0.8em")
  //       .attr("fill", "white")
  //       .text((d) => d.name);

  //     // Percentages
  //     bars
  //       .append("text")
  //       .attr("x", width - 40)
  //       .attr("y", height / data.length / 2 + 4)
  //       .style("font-size", "0.8em")
  //       .style("text-anchor", "end")
  //       .attr("fill", "white")
  //       .text((d) => `${d.value}%`);
  //   }
  // }, [isMobile, activeTab]);

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
          <h1 className="text-3xl font-extrabold mb-6">Overview</h1>
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
