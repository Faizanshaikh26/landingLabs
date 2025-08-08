import React from "react"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

const pieData = [
  { name: "Completed", value: 40 },
  { name: "Pending", value: 25 },
  { name: "Failed", value: 35 },
]

const colors = ["#34D399", "#FBBF24", "#F87171"]

const lineData = [
  { name: "Week 1", value: 240 },
  { name: "Week 2", value: 180 },
  { name: "Week 3", value: 220 },
  { name: "Week 4", value: 160 },
]

const Token = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-gray-100 rounded-xl px-4 py-2 text-sm font-medium">
    {label}: <span className="font-semibold">{value}</span>
  </div>
)

export default function ReportAnalysis() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Reports & Analysis</h1>
      <Tabs defaultValue="campaign">
        <TabsList className="mb-4 flex gap-2">
          <TabsTrigger value="campaign" className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded px-3 py-1 transition">
            Client Campaign
          </TabsTrigger>
          <TabsTrigger value="leads" className="bg-green-100 text-green-700 hover:bg-green-200 rounded px-3 py-1 transition">
            Leads
          </TabsTrigger>
          <TabsTrigger value="roi" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 rounded px-3 py-1 transition">
            ROI Reports
          </TabsTrigger>
          <TabsTrigger value="summary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 rounded px-3 py-1 transition">
            Monthly Summary
          </TabsTrigger>
        </TabsList>

        {/* Client Campaign */}
        <TabsContent value="campaign">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="linear"
                      dataKey="value"
                      stroke="#6366F1"
                      strokeWidth={3}
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Token label="Total Campaigns" value="12" />
                <Token label="Success Rate" value="83%" />
                <Token label="Active Campaigns" value="5" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Leads */}
        <TabsContent value="leads">
          <Card>
            <CardHeader>
              <CardTitle>Leads Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={lineData}>
                    <defs>
                      <linearGradient id="colorLeadsArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#10B981"
                      fillOpacity={1}
                      fill="url(#colorLeadsArea)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Token label="Total Leads" value="340" />
                <Token label="Converted" value="125" />
                <Token label="Conversion Rate" value="36.7%" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ROI Reports */}
        <TabsContent value="roi">
          <Card>
            <CardHeader>
              <CardTitle>ROI Reports</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      innerRadius={40}
                      label={({ name }) => `${name}`}
                      labelLine={false}
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[(index + 1) % colors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Token label="ROI" value="4.2x" />
                <Token label="Revenue" value="$48,000" />
                <Token label="Ad Spend" value="$11,500" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Monthly Summary */}
        <TabsContent value="summary">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Summary</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      dataKey="value"
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % colors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Token label="Reach" value="15K Users" />
                <Token label="Engagement" value="3.1K Clicks" />
                <Token label="New Signups" value="890" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
