'use client'

import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const clientServiceData = [
  { name: 'Web Development', value: 12, color: '#6366F1' }, // Indigo
  { name: 'SEO Optimization', value: 8, color: '#10B981' }, // Green
  { name: 'Mobile Apps', value: 6, color: '#F59E0B' },      // Amber
  { name: 'Branding', value: 4, color: '#EF4444' },         // Red
]


export function ClientServiceDoughnut() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Client Distribution by Service</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
  config={{
    'Web Development': {
      label: 'Web Development',
      color: '#6366F1',
    },
    'SEO Optimization': {
      label: 'SEO Optimization',
      color: '#10B981',
    },
    'Mobile Apps': {
      label: 'Mobile Apps',
      color: '#F59E0B',
    },
    'Branding': {
      label: 'Branding',
      color: '#EF4444',
    },
  }}
  className="h-[300px] w-full"
>

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Pie
                data={clientServiceData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {clientServiceData.map((entry, index) => (
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
