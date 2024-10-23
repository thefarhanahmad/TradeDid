// Chart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ label }) => {
  // Sample data for the line chart
  const data = {
    labels: [
      "15/10/24",
      "16 Oct",
      "17 Oct",
      "18 Oct",
      "19 Oct",
      "20 Oct",
      "21 Oct",
      "22 Oct",
    ],
    datasets: [
      {
        label: label,
        data: [0, 10, 5, 2, 20, 30, 45, 0], // Sample data points
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
        grid: {
          color: "rgba(204, 204, 204, 0.1)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Calls",
        },
        grid: {
          color: "rgba(204, 204, 204, 0.1)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="mt-10 p-10 bg-white h-96 shadow rounded-md">
      <h3 className="text-gray-700 text-lg mb-4">{label}</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
