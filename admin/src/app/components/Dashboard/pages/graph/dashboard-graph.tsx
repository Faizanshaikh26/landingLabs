'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChartTooltip } from '@/components/ui/chart'

const leadPipelineData = [
  { stage: 'Prospects', count: 5000 },
  { stage: 'Contacted', count: 3500 },
  { stage: 'Qualified', count: 2200 },
  { stage: 'Proposal Sent', count: 1400 },
  { stage: 'Closed/Won', count: 800 },
  { stage: 'Closed/Lost', count: 600 },
]

const COLORS = [
  '#A78BFA', // Prospects
  '#60A5FA', // Contacted
  '#34D399', // Qualified
  '#FBBF24', // Proposal Sent
  '#10B981', // Closed/Won
  '#EF4444', // Closed/Lost
]

export function LeadPipelineOverview() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-2xl font-bold">Lead Pipeline Overview</CardTitle>
        <Button className="bg-export-green text-gray-900 hover:bg-export-green/80 text-sm px-4 py-2 rounded-md">
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={leadPipelineData}
              margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis
                type="number"
                tickFormatter={(value) => `${value / 1000}k`}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="stage"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="bg-white border rounded px-3 py-2 shadow text-sm text-gray-900">
                        <strong>{payload[0].payload.stage}</strong>: {payload[0].value.toLocaleString()}
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Bar dataKey="count" radius={[0, 8, 8, 0]}>
                {leadPipelineData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
