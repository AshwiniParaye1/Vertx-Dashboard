"use client";

import * as d3 from "d3";
import { geoEquirectangular, geoPath } from "d3-geo";
import { useEffect, useRef } from "react";
import * as topojson from "topojson-client";

const Demographics = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const width = mapRef.current.clientWidth;
    const height = 300;

    // Clear previous SVG
    d3.select(mapRef.current).selectAll("*").remove();

    // Create SVG
    const svg = d3
      .select(mapRef.current)
      .append("svg")
      .attr("width", "100%") // Make SVG width responsive
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`) // Set viewBox
      .style("background-color", "transparent");

    // Load TopoJSON data
    d3.json(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
    ).then((data) => {
      const worldData = topojson.feature(data, data.objects.countries);

      // Define projection
      const projection = geoEquirectangular()
        .fitSize([width, height], worldData)
        .center([0, 10]) // Center slightly north to match image
        .scale(width / 6.5)
        .translate([width / 2, height / 2]);

      // Create path generator
      const path = geoPath().projection(projection);

      // Draw map with dot pattern
      svg
        .append("defs")
        .append("pattern")
        .attr("id", "dots")
        .attr("width", 3)
        .attr("height", 3)
        .attr("patternUnits", "userSpaceOnUse")
        .append("circle")
        .attr("cx", 1.5)
        .attr("cy", 1.5)
        .attr("r", 0.5)
        .attr("fill", "#555");

      svg
        .selectAll("path")
        .data(worldData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "url(#dots)")
        .attr("stroke", "none");

      // Add country markers
      const countries = [
        {
          name: "India",
          flagCode: "in",
          coords: [78.9629, 20.5937],
          color: "#4834D4",
          percentage: "40%"
        },
        {
          name: "USA",
          flagCode: "us",
          coords: [-95.7129, 37.0902],
          color: "#BD5302",
          percentage: "25%"
        },
        {
          name: "Canada",
          flagCode: "ca",
          coords: [-106.3468, 56.1304],
          color: "#E9C16B",
          percentage: "10%"
        },
        {
          name: "UAE",
          flagCode: "ae",
          coords: [53.8478, 23.4241],
          color: "#01754F",
          percentage: "7%"
        }
      ];

      // Add country markers
      countries.forEach((country) => {
        svg
          .append("circle")
          .attr("cx", projection(country.coords)[0])
          .attr("cy", projection(country.coords)[1])
          .attr("r", 6)
          .attr("fill", country.color)
          .attr("stroke", "#000")
          .attr("stroke-width", 0.5);

        // Add glow effect
        svg
          .append("circle")
          .attr("cx", projection(country.coords)[0])
          .attr("cy", projection(country.coords)[1])
          .attr("r", 10)
          .attr("fill", country.color)
          .attr("opacity", 0.2);
      });

      return () => {
        // Cleanup function (optional)
        d3.select(mapRef.current).selectAll("*").remove();
      };
    });
  }, [mapRef]);

  const countries = [
    {
      name: "India",
      flagCode: "in",
      coords: [78.9629, 20.5937],
      color: "#4834D4",
      percentage: "40%"
    },
    {
      name: "USA",
      flagCode: "us",
      coords: [-95.7129, 37.0902],
      color: "#BD5302",
      percentage: "25%"
    },
    {
      name: "Canada",
      flagCode: "ca",
      coords: [-106.3468, 56.1304],
      color: "#E9C16B",
      percentage: "10%"
    },
    {
      name: "UAE",
      flagCode: "ae",
      coords: [53.8478, 23.4241],
      color: "#01754F",
      percentage: "7%"
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-black border border-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Demographics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* World Map */}
            <div ref={mapRef} className="w-full h-64 overflow-hidden"></div>

            {/* Legend */}
            <div className="flex items-center justify-start mt-4 space-x-4 bg-black bg-opacity-80 p-2 rounded-full w-fit border-[#1D1D1D] border">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#4834D4] mr-2"></div>
                <span className="text-xs font-semibold">India</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#BD5302] mr-2"></div>
                <span className="text-xs font-semibold">USA</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#E9C16B] mr-2"></div>
                <span className="text-xs font-semibold">Canada</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#01754F] mr-2"></div>
                <span className="text-xs font-semibold">UAE</span>
              </div>
            </div>
          </div>

          {/* Country Stats */}
          <div>
            <div className="space-y-4">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex flex-row items-start gap-2"
                >
                  <img
                    src={`https://flagcdn.com/${country.flagCode}.svg`}
                    alt={country.name}
                    className="w-8 h-8 mt-1 rounded"
                  />
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">
                        {country.name}
                      </span>
                      <span className="text-sm font-medium">
                        {country.percentage}
                      </span>
                    </div>
                    <div className="w-full bg-[#27272A] rounded-full h-2 relative overflow-hidden">
                      <div
                        className="h-2 rounded-full absolute left-0 top-0"
                        style={{
                          width: country.percentage,
                          backgroundColor: country.color
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demographics;
