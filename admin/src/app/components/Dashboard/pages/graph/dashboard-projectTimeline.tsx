'use client'

import { useState } from 'react'
import { format, isBefore, isAfter, isWithinInterval, parseISO } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Task = {
  id: number
  name: string
  startDate: string // ISO string
  endDate: string   // ISO string
}

const allTasks: Task[] = [
  { id: 1, name: 'Design UI', startDate: '2025-08-01', endDate: '2025-08-05' },
  { id: 2, name: 'Develop Backend', startDate: '2025-08-03', endDate: '2025-08-10' },
  { id: 3, name: 'API Integration', startDate: '2025-08-10', endDate: '2025-08-15' },
  { id: 4, name: 'Testing', startDate: '2025-08-15', endDate: '2025-08-18' },
  { id: 5, name: 'Deployment', startDate: '2025-08-20', endDate: '2025-08-22' },
]

const FILTERS = ['All', 'Ongoing', 'Upcoming', 'Completed'] as const
type Filter = typeof FILTERS[number]

function filterTasks(tasks: Task[], filter: Filter): Task[] {
  const today = new Date()
  return tasks.filter((task) => {
    const start = parseISO(task.startDate)
    const end = parseISO(task.endDate)

    if (filter === 'All') return true
    if (filter === 'Ongoing') return isWithinInterval(today, { start, end })
    if (filter === 'Upcoming') return isAfter(start, today)
    if (filter === 'Completed') return isBefore(end, today)

    return true
  })
}

export function ProjectTimeline() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')
  const tasks = filterTasks(allTasks, activeFilter)

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <CardTitle className="text-2xl font-bold">Project Timeline</CardTitle>
        <div className="flex gap-2">
          {FILTERS.map((status) => (
            <Button
              key={status}
              variant={activeFilter === status ? 'default' : 'outline'}
              onClick={() => setActiveFilter(status)}
              className="text-sm"
            >
              {status}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {tasks.map((task) => {
            const start = parseISO(task.startDate)
            const end = parseISO(task.endDate)
            const durationDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24) + 1

            return (
              <div key={task.id} className="flex flex-col">
                <div className="text-sm font-medium text-gray-700 mb-1">
                  {task.name} — {format(start, 'MMM d')} to {format(end, 'MMM d')}
                </div>
                <div className="relative w-full h-4 bg-gray-200 rounded">
                  <div
                    className="absolute h-4 bg-indigo-500 rounded"
                    style={{
                      width: `${durationDays * 4}%`,
                      left: `${(start.getDate() - 1) * 4}%`,
                    }}
                  />
                </div>
              </div>
            )
          })}
          {tasks.length === 0 && (
            <div className="text-center text-sm text-gray-500 py-10">No tasks found for this filter.</div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
