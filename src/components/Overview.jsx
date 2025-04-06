/* eslint-disable no-unused-vars */
"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
} from "chart.js";
import { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { useMediaQuery } from "../hooks/useMediaQuery";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const Overview = () => {
  const chartRef = useRef(null);
  const [visitorsDropdownOpen, setVisitorsDropdownOpen] = useState(false);
  const [dateRangeDropdownOpen, setDateRangeDropdownOpen] = useState(false);
  const [addDropdownOpen, setAddDropdownOpen] = useState(false);
  const [selectedVisitor, setSelectedVisitor] = useState("Visitors");
  const [selectedDateRange, setSelectedDateRange] = useState("Last 30 days");
  const [addedMetric, setAddedMetric] = useState(null);
  const [visitorsData, setVisitorsData] = useState({
    value: "13.49K",
    percentageChange: "+469%",
    changeValue: "(897)"
  });
  const [connectionsData, setConnectionsData] = useState({
    value: "3.49K",
    percentageChange: "+180%",
    changeValue: "(497)"
  });

  const isMobile = useMediaQuery("(max-width: 768px)");

  // Dropdown options
  const visitorOptions = [
    "Visitors",
    "Connections",
    "Interactions",
    "Impressions"
  ];
  const dateRangeOptions = [
    "Today",
    "Yesterday",
    "This week",
    "Last week",
    "Last 7 days",
    "Last 30 days"
  ];
  const addOptions = ["Connections", "Interactions", "Impressions"];

  // Generate dates for March 1-30
  const generateDates = () => {
    const dates = [];
    for (let i = 1; i <= 30; i++) {
      dates.push(`Mar ${i}`);
    }
    return dates;
  };

  // Generate random data that resembles the chart in the image
  const generateData = (type = "visitors") => {
    // Different data based on the selected type
    let data;
    if (type === "visitors") {
      data = [
        400, 600, 900, 1200, 1000, 900, 1000, 1200, 1000, 800, 750, 700, 750,
        700, 650, 700, 650, 700, 1200, 800, 600, 900, 700, 1000, 800, 1100, 900,
        1000, 800, 1200
      ];
    } else if (type === "connections") {
      data = [
        200, 600, 1000, 800, 900, 1000, 900, 900, 700, 1000, 650, 900, 450, 400,
        350, 400, 850, 400, 900, 1500, 300, 500, 1400, 700, 500, 800, 600, 900,
        500, 900
      ];
    } else {
      // Default data
      data = [
        100, 200, 300, 400, 300, 200, 300, 400, 300, 200, 150, 100, 150, 100,
        50, 100, 50, 100, 400, 200, 100, 200, 100, 300, 200, 300, 200, 300, 200,
        400
      ];
    }
    return data;
  };

  const chartData = {
    labels: generateDates(),
    datasets: [
      {
        data: generateData("visitors"),
        borderColor: "white",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.1,
        label: "Visitors"
      },
      addedMetric && {
        data: generateData(addedMetric.toLowerCase()),
        borderColor: "purple",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.1,
        label: addedMetric
      }
    ].filter(Boolean) // remove null dataset
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#333",
        titleColor: "white",
        bodyColor: "white",
        borderColor: "#555",
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: "#666",
          font: {
            size: 10
          },
          maxRotation: 0,
          maxTicksLimit: isMobile ? 5 : 10
        }
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
          drawBorder: false
        },
        ticks: {
          color: "#666",
          font: {
            size: 10
          },
          callback: (value) => {
            if (value === 0) return "0";
            if (value === 400) return "400";
            if (value === 800) return "800";
            if (value === 1200) return "1.2K";
            if (value === 1600) return "1.6K";
            if (value === 2000) return "2K";
            return "";
          }
        },
        min: 0,
        max: 2000
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Visitors Chart */}
      <div className="lg:col-span-2 bg-black border border-gray-800 rounded-lg p-6 relative">
        <div className="flex items-center mb-6">
          {/* Visitors Dropdown */}
          <div className="relative">
            <button
              className="px-4 py-1 bg-black border border-gray-700 rounded-full flex items-center"
              onClick={() => setVisitorsDropdownOpen(!visitorsDropdownOpen)}
              aria-expanded={visitorsDropdownOpen}
              aria-label="Toggle Visitors Dropdown"
            >
              <span className="text-xs font-semibold">{selectedVisitor}</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  visitorsDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {visitorsDropdownOpen && (
              <div
                className="absolute left-0 mt-2 bg-black border border-gray-700 rounded-md shadow-lg z-10"
                style={{ width: "100%" }}
              >
                {visitorOptions.map((option) => (
                  <button
                    key={option}
                    className={`block w-full text-left px-2 py-2 text-xs font-semibold hover:bg-[#1D1D1D] hover:text-white focus:outline-none ${
                      selectedVisitor === option
                        ? "bg-[#1D1D1D] text-white"
                        : "text-[#555555]"
                    }`}
                    onClick={() => {
                      setSelectedVisitor(option);
                      setVisitorsDropdownOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date Range Dropdown */}
          <div className="relative ml-2">
            <button
              className="px-4 py-1 bg-black border border-gray-700 rounded-full flex items-center "
              onClick={() => setDateRangeDropdownOpen(!dateRangeDropdownOpen)}
              aria-expanded={dateRangeDropdownOpen}
              aria-label="Toggle Date Range Dropdown"
            >
              <span className="text-xs font-semibold">{selectedDateRange}</span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  dateRangeDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dateRangeDropdownOpen && (
              <div
                className="absolute left-0 mt-2 bg-black border border-gray-700 rounded-md shadow-lg z-10"
                style={{ width: "100%" }}
              >
                {dateRangeOptions.map((option) => (
                  <button
                    key={option}
                    className={`block w-full text-left px-2 py-2 text-xs font-semibold hover:bg-[#1D1D1D] hover:text-white focus:outline-none ${
                      selectedDateRange === option
                        ? "bg-[#1D1D1D] text-white"
                        : "text-[#555555]"
                    }`}
                    onClick={() => {
                      setSelectedDateRange(option);
                      setDateRangeDropdownOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Add Dropdown */}
          <div className="relative ml-2">
            <button
              className="px-4 py-1 bg-black border border-gray-700 rounded-full flex items-center"
              onClick={() => setAddDropdownOpen(!addDropdownOpen)}
              aria-expanded={addDropdownOpen}
              aria-label="Toggle Add Metric Dropdown"
            >
              <span className="text-xs font-semibold">
                {addedMetric ? addedMetric : "+ Add"}
              </span>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  addDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {addDropdownOpen && (
              <div
                className="absolute left-0 mt-2 bg-black border border-gray-700 rounded-md shadow-lg z-10"
                style={{ width: "100%" }}
              >
                {addOptions.map((option) => (
                  <button
                    key={option}
                    className={`block w-full text-left px-2 py-2 text-xs font-semibold hover:bg-[#1D1D1D] hover:text-white focus:outline-none ${
                      addedMetric === option
                        ? "bg-[#1D1D1D] text-white"
                        : "text-[#555555]"
                    }`}
                    onClick={() => {
                      setAddedMetric(option);
                      setAddDropdownOpen(false);
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mb-6 flex items-start">
          <div>
            <div className="flex items-start">
              <h2 className="text-3xl font-extrabold">{visitorsData.value}</h2>
              <div className="ml-4">
                <span className="text-green-500 text-xs font-semibold">
                  {visitorsData.percentageChange}
                </span>
                <div className="text-[#555555] text-xs font-semibold">
                  {visitorsData.changeValue}
                </div>
              </div>
            </div>
          </div>

          {addedMetric === "Connections" && (
            <div className="ml-8">
              <div className="flex items-baseline">
                <h2 className="text-5xl font-bold">{connectionsData.value}</h2>
                <div className="ml-4">
                  <span className="text-green-500">
                    {connectionsData.percentageChange}
                  </span>
                  <div className="text-gray-500">
                    {connectionsData.changeValue}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="h-48">
          <Line ref={chartRef} data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Insights */}
      <div className="bg-black border border-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-6">Insights</h2>

        <div className="mb-8">
          <div className="text-base font-semibold mb-2">Founders</div>
          <div className="flex items-start">
            <h3 className="text-3xl font-extrabold">7.4K</h3>
            <div className="ml-4">
              <span className="text-[#01754F] text-xs font-semibold">
                +000%
              </span>
              <div className="text-[#555555] text-xs font-semibold">(000)</div>
            </div>
          </div>
        </div>

        <div className="mb-8 ">
          <div className="text-base font-semibold mb-2">Investors</div>
          <div className="flex items-start">
            <h3 className="text-3xl font-extrabold">6.09K</h3>
            <div className="ml-4">
              <span className="text-[#01754F] text-xs font-semibold">
                +000%
              </span>
              <div className="text-[#555555] text-xs font-semibold">(000)</div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-800"></div>

        <div className="mt-auto pt-8 flex justify-end">
          <button className="flex items-center text-gray-300 hover:text-white">
            <span className="text-xs font-semibold">
              View detailed insights
            </span>
            <svg
              className="w-4 h-4 ml-2"
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
  );
};

export default Overview;
