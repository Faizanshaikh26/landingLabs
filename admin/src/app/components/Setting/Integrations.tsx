import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const initialIntegrations = [
  {
    name: "Payment Gateway",
    status: "Connected",
    stats: [10, 20, 50, 100, 80],
  },
  {
    name: "Facebook Ads",
    status: "Disconnected",
    stats: [5, 15, 40, 60, 55],
  },
  {
    name: "Google Analytics",
    status: "Connected",
    stats: [40, 50, 30, 80, 90],
  },
];

function statusColor(status: string) {
  return status === "Connected"
    ? "bg-green-100 text-green-800 border-green-200"
    : "bg-red-100 text-red-700 border-red-200";
}

export default function Integrations() {
  const [integrations, setIntegrations] = useState(initialIntegrations);

  const toggleIntegration = (idx: number) => {
    setIntegrations(integrations =>
      integrations.map((int, i) =>
        i === idx
          ? {
              ...int,
              status: int.status === "Connected" ? "Disconnected" : "Connected",
            }
          : int
      )
    );
  };

  return (
    <section className="max-w-5xl mx-auto px-3 py-6 bg-white rounded-2xl shadow-lg">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Integrations</h2>
          <p className="text-gray-500 text-base">
            Manage your platform connections. Connect or disconnect in one click and monitor quick stats for each.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrations.map((int, idx) => (
          <Card
            key={int.name}
            className={`relative group p-6 rounded-2xl border-2 ${int.status === "Connected" ? "border-green-200" : "border-gray-200"} shadow transition-shadow hover:shadow-xl bg-gray-50`}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg text-gray-900 inline-flex items-center">
                {/* Add a subtle icon if desired here */}
                {int.name}
              </span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full border transition ${statusColor(
                  int.status
                )} text-xs font-semibold`}
              >
                {int.status}
              </span>
            </div>

            <div className="mb-6">
              <Line
                data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                  datasets: [
                    {
                      label: "Usage",
                      data: int.stats,
                      backgroundColor:
                        int.status === "Connected"
                          ? "rgba(34,197,94,0.14)"
                          : "rgba(239,68,68,0.13)",
                      borderColor:
                        int.status === "Connected" ? "#22c55e" : "#ef4444",
                      tension: 0.3,
                      fill: true,
                      pointRadius: 3,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: { display: false },
                    y: { display: false, beginAtZero: true },
                  },
                  elements: {
                    line: { borderWidth: 2 },
                  },
                }}
                height={80}
              />
            </div>

            <Button
              variant={int.status === "Connected" ? "outline" : "default"}
              className={`w-full py-2 rounded-lg transition font-semibold ${
                int.status === "Connected"
                  ? "border-green-200 text-green-700 hover:bg-green-50"
                  : "bg-black text-white hover:bg-gray-900"
              }`}
              aria-label={
                int.status === "Connected"
                  ? `Disconnect ${int.name}`
                  : `Connect ${int.name}`
              }
              onClick={() => toggleIntegration(idx)}
            >
              {int.status === "Connected" ? "Disconnect" : "Connect"}
            </Button>

            {/* Subtle connection feedback at the card footer */}
            <div
              className={`absolute bottom-2 right-6 text-xs italic ${
                int.status === "Connected"
                  ? "text-green-500"
                  : "text-gray-400"
              }`}
            >
              {int.status === "Connected"
                ? "Live connection"
                : "Not connected"}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
