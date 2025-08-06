


import React from "react"
import ViewTable from "./view-table"
import { Button } from "@/components/ui/button" // Shadcn button import

export default function CareerDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header with Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Career</h1>
        <Button>Add Career</Button>
      </div>

      {/* Table */}
      <ViewTable />
    </div>
  )
}
