import React from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ProjectSummary() {
  // Pie Chart (Ongoing vs Upcoming)
  const pieData = {
    labels: ["Ongoing Projects", "Upcoming Projects"],
    datasets: [
      {
        data: [8, 4], // example values
        backgroundColor: [
          "rgba(59, 130, 246, 0.6)",
          "rgba(245, 158, 11, 0.6)"
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(245, 158, 11, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Project Summary" },
    },
  };

  // Line Chart (Monthly trend of projects)
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Ongoing",
        data: [5, 6, 7, 8, 7, 8],
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Upcoming",
        data: [2, 3, 3, 4, 3, 4],
        borderColor: "rgba(245, 158, 11, 1)",
        backgroundColor: "rgba(245, 158, 11, 0.3)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Projects Over Time" },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      <div className="bg-white p-6 rounded-lg shadow">
        <Pie data={pieData} options={pieOptions} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <Line data={lineData} options={lineOptions} />
      </div>
    </div>
  );
}
