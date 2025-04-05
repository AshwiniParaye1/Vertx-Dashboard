"use client";

import * as d3 from "d3";
import { geoEquirectangular, geoPath } from "d3-geo";
import { useEffect, useRef } from "react";
import worldData from "../data/world.json";

const Demographics = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const width = mapRef.current.clientWidth;
    const height = 400;

    // Clear previous SVG
    d3.select(mapRef.current).selectAll("*").remove();

    // Create SVG
    const svg = d3
      .select(mapRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "transparent");

    // Define projection
    const projection = geoEquirectangular()
      .fitSize([width, height], worldData)
      .center([0, 0])
      .scale(width / 6)
      .translate([width / 2, height / 2]);

    // Create path generator
    const path = geoPath().projection(projection);

    // Draw map with dot pattern
    svg
      .append("defs")
      .append("pattern")
      .attr("id", "dots")
      .attr("width", 4)
      .attr("height", 4)
      .attr("patternUnits", "userSpaceOnUse")
      .append("circle")
      .attr("cx", 2)
      .attr("cy", 2)
      .attr("r", 0.5)
      .attr("fill", "#333");

    svg
      .selectAll("path")
      .data(worldData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "url(#dots)")
      .attr("stroke", "none");

    // Add markers for countries
    const countries = [
      { name: "India", coords: [78.9629, 20.5937], color: "#6366f1" },
      { name: "USA", coords: [-95.7129, 37.0902], color: "#f97316" },
      { name: "CANADA", coords: [-106.3468, 56.1304], color: "#eab308" },
      { name: "UAE", coords: [53.8478, 23.4241], color: "#10b981" }
    ];

    // Add anonymous marker
    svg
      .append("g")
      .attr(
        "transform",
        `translate(${projection([-95.7129, 37.0902])[0]}, ${
          projection([-95.7129, 37.0902])[1]
        })`
      )
      .append("g")
      .attr("transform", "translate(-40, -30)")
      .append("rect")
      .attr("width", 80)
      .attr("height", 24)
      .attr("rx", 4)
      .attr("fill", "#f97316")
      .attr("opacity", 0.9);

    svg
      .append("text")
      .attr("x", projection([-95.7129, 37.0902])[0])
      .attr("y", projection([-95.7129, 37.0902])[1] - 20)
      .attr("text-anchor", "middle")
      .attr("fill", "white")
      .text("Anonymous");

    // Add country markers
    countries.forEach((country) => {
      svg
        .append("circle")
        .attr("cx", projection(country.coords)[0])
        .attr("cy", projection(country.coords)[1])
        .attr("r", 6)
        .attr("fill", country.color);
    });
  }, [mapRef]);

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-black border border-gray-800 rounded-lg p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* World Map */}
            <div ref={mapRef} className="w-full h-[400px]"></div>

            {/* Legend */}
            <div className="flex items-center justify-start mt-4 space-x-6 bg-black bg-opacity-80 p-2 rounded-full w-fit">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-indigo-500 mr-2"></div>
                <span>India</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
                <span>USA</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                <span>CANADA</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-emerald-500 mr-2"></div>
                <span>UAE</span>
              </div>
            </div>
          </div>

          <div>
            {/* Country Stats */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <img
                    src="https://flagcdn.com/in.svg"
                    alt="India"
                    className="w-8 h-6 mr-2"
                  />
                  <span className="text-xl">India</span>
                  <span className="ml-auto">40%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-indigo-500 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <img
                    src="https://flagcdn.com/us.svg"
                    alt="USA"
                    className="w-8 h-6 mr-2"
                  />
                  <span className="text-xl">USA</span>
                  <span className="ml-auto">25%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-orange-500 h-2 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <img
                    src="https://flagcdn.com/ca.svg"
                    alt="CANADA"
                    className="w-8 h-6 mr-2"
                  />
                  <span className="text-xl">CANADA</span>
                  <span className="ml-auto">10%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <img
                    src="https://flagcdn.com/ae.svg"
                    alt="UAE"
                    className="w-8 h-6 mr-2"
                  />
                  <span className="text-xl">UAE</span>
                  <span className="ml-auto">7%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{ width: "7%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="flex items-center text-gray-300 hover:text-white">
                <span>View all countries</span>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demographics;
