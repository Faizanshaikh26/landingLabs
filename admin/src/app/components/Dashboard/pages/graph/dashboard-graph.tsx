'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const regularSellData = [
  { day: 'Sun', series1: 32000, series2: 26000 },
  { day: 'Mon', series1: 38000, series2: 31000 },
  { day: 'Tue', series1: 48000, series2: 35000 },
  { day: 'Wed', series1: 29000, series2: 27000 },
  { day: 'Thu', series1: 26000, series2: 22000 },
  { day: 'Fri', series1: 27000, series2: 20000 },
  { day: 'Sat', series1: 41000, series2: 35000 },
]

export function DashboardGraph() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-2xl font-bold">Regular Sell</CardTitle>
        <Button className="bg-export-green text-gray-900 hover:bg-export-green/80 text-sm px-4 py-2 rounded-md">
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            series1: {
              label: 'Series 1',
              color: 'var(--bar-purple)',
            },
            series2: {
              label: 'Series 2',
              color: 'var(--bar-green)',
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={regularSellData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis
                tickFormatter={(value) => `${value / 1000}k`}
                domain={[0, 50000]}
                axisLine={false}
                tickLine={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar dataKey="series1" fill="var(--color-series1)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="series2" fill="var(--color-series2)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
