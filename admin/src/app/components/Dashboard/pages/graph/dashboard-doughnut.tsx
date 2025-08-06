'use client'

import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const salesData = [
  { name: 'Online Sales', value: 400, color: 'hsl(var(--chart-1))' },
  { name: 'In-store Sales', value: 300, color: 'hsl(var(--chart-2))' },
  { name: 'Wholesale', value: 200, color: 'hsl(var(--chart-3))' },
  { name: 'Other', value: 100, color: 'hsl(var(--chart-4))' },
]

export function DashboardDoughnut() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sales Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            'Online Sales': {
              label: 'Online Sales',
              color: 'hsl(var(--chart-1))',
            },
            'In-store Sales': {
              label: 'In-store Sales',
              color: 'hsl(var(--chart-2))',
            },
            'Wholesale': {
              label: 'Wholesale',
              color: 'hsl(var(--chart-3))',
            },
            'Other': {
              label: 'Other',
              color: 'hsl(var(--chart-4))',
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Pie
                data={salesData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
