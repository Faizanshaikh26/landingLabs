import React from 'react'
import DashboardCards from './pages/graph/dashboard-card'
import { DashboardDoughnut } from './pages/graph/dashboard-Doughnut'
import { DashboardAnalysis } from './pages/graph/dashboard-analysis'
import DashboardTable from './pages/dashboard-table'
import { DashboardGraph } from './pages/graph/dashboard-graph'

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
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center shadow-sm">
                💬
              </button>
              <button className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center shadow-sm">
                🔔
              </button>
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
              <DashboardGraph/>
            </div>

            {/* Chart + Analysis row */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <DashboardDoughnut />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <DashboardAnalysis />
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <DashboardTable />
            </div>
          </div>

          {/* RIGHT: red colored panel */}
          <div className="col-span-12 lg:col-span-4">
            <div className="h-full rounded-xl p-6 shadow-sm bg-red-500 text-white flex flex-col">
              {/* Put your right side content here. Example placeholders below: */}
              <h3 className="text-lg font-semibold mb-2">Right Panel</h3>
              <p className="text-sm mb-4 opacity-90">
                This is the right column. It has a red background as requested.
              </p>

              <div className="mt-4 space-y-3">
                <div className="bg-white/10 rounded-md p-3">Placeholder item 1</div>
                <div className="bg-white/10 rounded-md p-3">Placeholder item 2</div>
                <div className="bg-white/10 rounded-md p-3">Placeholder item 3</div>
              </div>

              {/* push button to bottom */}
              <div className="mt-auto">
                <button className="w-full py-2 rounded-full bg-white text-red-600 font-semibold">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
