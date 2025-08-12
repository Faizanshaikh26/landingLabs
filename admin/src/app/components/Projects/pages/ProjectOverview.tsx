'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GanttChartView } from '../graph/GanttChartView'
import { KanbanBoardView } from '../graph/KanbanBoardView'


export function ProjectOverview() {
  const [view, setView] = useState<'gantt' | 'kanban'>('gantt')

  return (
       <div className="w-full bg-white border rounded-md p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Project Work Items Overview</h2>
        <Tabs defaultValue="gantt" onValueChange={(v) => setView(v as any)}>
          <TabsList>
            <TabsTrigger value="gantt">Gantt View</TabsTrigger>
            <TabsTrigger value="kanban">Kanban View</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {view === 'gantt' ? <GanttChartView /> : <KanbanBoardView />}
    </div>
  )
}
