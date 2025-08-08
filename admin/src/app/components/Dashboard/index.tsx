import React from 'react'
import DashboardCards from './pages/graph/dashboard-card'
import { ClientServiceDoughnut, DashboardDoughnut } from './pages/graph/dashboard-Doughnut'
import { DashboardAnalysis } from './pages/graph/dashboard-analysis'
import DashboardTable from './pages/dashboard-table'
import { LeadPipelineOverview } from './pages/graph/dashboard-graph'
import { Input } from '@/components/ui/input'
import { ProjectTimeline } from './pages/graph/dashboard-projectTimeline'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">14th Aug 2023</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-
            ">
              <Input placeholder='type here' />
            </div>

            {/* Avatar placeholder */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="hidden sm:block text-sm">
                <div className="font-medium">Nora Watson</div>
                <div className="text-xs text-slate-500">Sales Manager</div>
              </div>
            </div>
          </div>
        </header>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT: main dashboard content */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Top cards */}
            <div className="">
              <DashboardCards />
            </div>


            <div>
              <LeadPipelineOverview />
            </div>


            <div className="">
              <ProjectTimeline />
            </div>

            {/* Table */}
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <DashboardTable />
            </div>
          </div>

          {/* RIGHT: red colored panel */}
          <div className="col-span-12 lg:col-span-4 py-4">
            <div className='space-y-5'>
              <ClientServiceDoughnut />



              <DashboardAnalysis />
            </div>

            <div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
