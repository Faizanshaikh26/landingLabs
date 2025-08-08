import { Users, DollarSign, AlarmClock } from 'lucide-react'

export default function DashboardCards() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 items-center justify-center">
      
      {/* Active Clients Card */}
      <div className="flex flex-col items-start justify-between p-6 rounded-xl bg-[#FFF3E3] text-gray-900 w-full max-w-xs h-48">
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="p-1 rounded-full bg-gray-900 text-white">
            <Users className="w-4 h-4" />
          </div>
          Active Clients
        </div>
        <div className="text-5xl font-bold">1,205</div>
        <div className="text-sm text-gray-700">Currently subscribed clients</div>
      </div>

      {/* MRR Card */}
      <div className="flex flex-col items-start justify-between p-6 rounded-xl bg-[#E3F0FF] text-gray-900 w-full max-w-xs h-48">
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="p-1 rounded-full bg-gray-900 text-white">
            <DollarSign className="w-4 h-4" />
          </div>
          Monthly Recurring Revenue
        </div>
        <div className="text-5xl font-bold">$39.8K</div>
        <div className="text-sm text-gray-700">Based on active subscriptions</div>
      </div>

      {/* Overdue Tasks Card */}
      <div className="flex flex-col items-start justify-between p-6 rounded-xl bg-[#FFE3E9] text-gray-900 w-full max-w-xs h-48">
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="p-1 rounded-full bg-gray-900 text-white">
            <AlarmClock className="w-4 h-4" />
          </div>
          Overdue Tasks
        </div>
        <div className="text-5xl font-bold">47</div>
        <div className="text-sm text-gray-700">Pending past due date</div>
      </div>

    </div>
  )
}
