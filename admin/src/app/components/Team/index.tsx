import React from "react"

import { Button } from "@/components/ui/button"
import {
  BarChart3,
  TrendingUp,
  Users,
  Plus,
  Minus,
} from "lucide-react"
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import DataTable from "./view-table"

export default function Team() {
  const pieData = [
    { name: "Development", value: 40 },
    { name: "Marketing", value: 25 },
    { name: "Design", value: 20 },
    { name: "Support", value: 15 },
  ]

  const pieColors = ["#6390BF", "#88ACD3", "#A5C5E7", "#3F6EA0"] // green, blue, yellow, red

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Team Dashboard</h1>
       
      </div>

      {/* Team Table */}
      <DataTable />

      {/* Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="bg-green-100 text-green-900 rounded-xl p-6 shadow">
          <div className="flex items-center mb-2">
            <TrendingUp className="mr-2 text-green-700" />
            <h2 className="text-lg font-semibold">Growth Rate</h2>
          </div>
          <p className="text-2xl font-bold">18%</p>
        </div>

        <div className="bg-blue-100 text-blue-900 rounded-xl p-6 shadow">
          <div className="flex items-center mb-2">
            <BarChart3 className="mr-2 text-blue-700" />
            <h2 className="text-lg font-semibold">Tasks Completed</h2>
          </div>
          <p className="text-2xl font-bold">25</p>
        </div>

        <div className="bg-yellow-100 text-yellow-900 rounded-xl p-6 shadow">
          <div className="flex items-center mb-2">
            <Users className="mr-2 text-yellow-700" />
            <h2 className="text-lg font-semibold">Active Members</h2>
          </div>
          <p className="text-2xl font-bold">09</p>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="bg-white rounded-xl shadow p-6 mt-10">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Team Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              dataKey="value"
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}