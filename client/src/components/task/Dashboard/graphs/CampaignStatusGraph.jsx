import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CampaignStatus() {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Traffic",
        data: [4000, 5000, 4500, 6000, 7000, 8000],
        backgroundColor: "rgba(59, 130, 246, 0.5)",
      },
      {
        label: "Leads",
        data: [200, 250, 300, 280, 350, 400],
        backgroundColor: "rgba(245, 158, 11, 0.5)",
      },
      {
        label: "ROI (%)",
        data: [12, 15, 18, 20, 22, 25],
        backgroundColor: "rgba(16, 185, 129, 0.5)",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Campaign Status" },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <Bar data={barData} options={barOptions} />
    </div>
  );
}
