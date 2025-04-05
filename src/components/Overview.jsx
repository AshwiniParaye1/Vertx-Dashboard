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
import { useRef } from "react";
import { Line } from "react-chartjs-2";

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

  // Generate dates for March 1-30
  const generateDates = () => {
    const dates = [];
    for (let i = 1; i <= 30; i++) {
      dates.push(`Mar ${i}`);
    }
    return dates;
  };

  // Generate random data that resembles the chart in the image
  const generateData = () => {
    return [
      400, 600, 900, 1200, 1000, 900, 1000, 1200, 1000, 800, 750, 700, 750, 700,
      650, 700, 650, 700, 1200, 800, 600, 900, 700, 1000, 800, 1100, 900, 1000,
      800, 1200
    ];
  };

  const chartData = {
    labels: generateDates(),
    datasets: [
      {
        data: generateData(),
        borderColor: "white",
        borderWidth: 2,
        pointRadius: 0,
        tension: 0.1
      }
    ]
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
          maxRotation: 0
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
      <div className="lg:col-span-2 bg-black border border-gray-800 rounded-lg p-6">
        <div className="flex items-center mb-6">
          <div className="relative">
            <button className="px-4 py-2 bg-black border border-gray-700 rounded-full flex items-center">
              <span>Visitors</span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="relative ml-2">
            <button className="px-4 py-2 bg-black border border-gray-700 rounded-full flex items-center">
              <span>Last 30 days</span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <button className="ml-2 px-4 py-2 bg-black border border-gray-700 rounded-full">
            + Add
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline">
            <h2 className="text-5xl font-bold">13.49K</h2>
            <div className="ml-4">
              <span className="text-green-500">+469%</span>
              <div className="text-gray-500">(897)</div>
            </div>
          </div>
        </div>

        <div className="h-64">
          <Line ref={chartRef} data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Insights */}
      <div className="bg-black border border-gray-800 rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6">Insights</h2>

        <div className="mb-8">
          <div className="text-xl mb-2">Founders</div>
          <div className="flex items-baseline">
            <h3 className="text-4xl font-bold">7.4K</h3>
            <div className="ml-4">
              <span className="text-green-500">+000%</span>
              <div className="text-gray-500">(000)</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-xl mb-2">Investors</div>
          <div className="flex items-baseline">
            <h3 className="text-4xl font-bold">6.09K</h3>
            <div className="ml-4">
              <span className="text-green-500">+000%</span>
              <div className="text-gray-500">(000)</div>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8">
          <button className="flex items-center text-gray-300 hover:text-white">
            <span>View detailed insights</span>
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
  );
};

export default Overview;
