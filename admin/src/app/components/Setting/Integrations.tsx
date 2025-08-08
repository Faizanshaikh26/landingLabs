"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { CreditCard, BarChart3, Facebook } from "lucide-react";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const initialIntegrations = [
  {
    name: "Payment Gateway",
    status: "Connected",
    stats: [10, 20, 50, 100, 80],
    type: "line",
    icon: <CreditCard className="w-5 h-5 text-primary" />,
  },
  {
    name: "Facebook Ads",
    status: "Disconnected",
    stats: [5, 15, 40, 60, 55],
    type: "line",
    icon: <Facebook className="w-5 h-5 text-primary" />,
  },
  {
    name: "Google Analytics",
    status: "Connected",
    stats: [40, 50, 30, 80, 90],
    type: "bar",
    icon: <BarChart3 className="w-5 h-5 text-primary" />,
  },
];

function statusColor(status: string) {
  return status === "Connected"
    ? "bg-green-100 text-green-800"
    : "bg-red-100 text-red-700";
}

export default function Integrations() {
  const [integrations, setIntegrations] = useState(initialIntegrations);

  const toggleIntegration = (idx: number) => {
    setIntegrations((prev) =>
      prev.map((int, i) =>
        i === idx
          ? {
              ...int,
              status:
                int.status === "Connected" ? "Disconnected" : "Connected",
            }
          : int
      )
    );
  };

  const renderChart = (int: (typeof integrations)[0]) => {
    const commonData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          data: int.stats,
          backgroundColor:
            int.status === "Connected"
              ? "rgba(34,197,94,0.2)"
              : "rgba(239,68,68,0.2)",
          borderColor:
            int.status === "Connected" ? "#22c55e" : "#ef4444",
          tension: 0.4,
          fill: true,
          pointRadius: 3,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } },
    };

    return int.type === "bar" ? (
      <Bar data={commonData} options={options} height={100} />
    ) : (
      <Line data={commonData} options={options} height={100} />
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Integrations</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Connect and monitor your external services with beautiful, responsive
          charts.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {integrations.map((int, idx) => (
          <Card
            key={int.name}
            className={`flex flex-col p-6 rounded-xl border shadow-sm hover:shadow-md transition-all ${
              int.status === "Connected"
                ? "border-green-200 bg-green-50/40"
                : "border-gray-200 bg-white"
            } ${int.name === "Google Analytics" ? "md:col-span-2" : ""}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {int.icon}
                <h3 className="font-semibold text-lg">{int.name}</h3>
              </div>
              <Badge
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor(
                  int.status
                )}`}
              >
                {int.status}
              </Badge>
            </div>

            <div
              className={`${
                int.name === "Google Analytics" ? "h-40" : "h-28"
              } mb-4`}
            >
              {renderChart(int)}
            </div>

            <Button
              onClick={() => toggleIntegration(idx)}
              variant={int.status === "Connected" ? "outline" : "default"}
              className={`w-full rounded-md text-sm font-medium ${
                int.status === "Connected"
                  ? "border-green-300 text-green-700 hover:bg-green-50"
                  : ""
              }`}
            >
              {int.status === "Connected" ? "Disconnect" : "Connect"}
            </Button>

            <p
              className={`mt-3 text-xs italic text-center ${
                int.status === "Connected"
                  ? "text-green-600"
                  : "text-gray-400"
              }`}
            >
              {int.status === "Connected"
                ? "Live connection active"
                : "Not connected"}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
