import { Lock, Home, TrendingUp } from 'lucide-react'

export default function DashboardCards() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50  items-center justify-center">
      {/* Total Earning Card */}
      <div className="flex flex-col items-start justify-between p-6 rounded-xl bg-[#E8E3FF] text-gray-900 w-full max-w-xs h-48">
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="p-1 rounded-full bg-gray-900 text-white">
            <Lock className="w-4 h-4" />
          </div>
          Total Earning
        </div>
        <div className="text-5xl font-bold">242.65K</div>
        <div className="text-sm text-gray-700">From the running month</div>
      </div>

      {/* Average Earning Card */}
      <div className="flex flex-col items-start justify-between p-6 rounded-xl bg-[#E3F0FF] text-gray-900 w-full max-w-xs h-48">
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="p-1 rounded-full bg-gray-900 text-white">
            <Home className="w-4 h-4" />
          </div>
          Average Earning
        </div>
        <div className="text-5xl font-bold">17.347K</div>
        <div className="text-sm text-gray-700">Daily Earning of this month</div>
      </div>

      {/* Conversation Rate Card */}
      <div className="flex flex-col items-start justify-between p-6 rounded-xl bg-[#E3FFE8] text-gray-900 w-full max-w-xs h-48">
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="p-1 rounded-full bg-gray-900 text-white">
            <TrendingUp className="w-4 h-4" />
          </div>
          Conversation Rate
        </div>
        <div className="text-5xl font-bold">74.86%</div>
        <div className="text-sm text-gray-700">+6.04% greater that last month</div>
      </div>
    </div>
  )
}
