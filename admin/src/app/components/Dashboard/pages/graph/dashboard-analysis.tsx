import { BarChart2, Package, ChevronRight } from 'lucide-react'

export function DashboardAnalysis() {
  return (
    <div className="w-full p-6 rounded-xl bg-white shadow-sm flex flex-col gap-4">
      <h2 className="text-2xl font-bold">More Analysis</h2>
      <p className="text-sm text-gray-500">There are more to view</p>

      <div className="flex flex-col gap-3">
        <button className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-gray-200">
              <BarChart2 className="w-5 h-5 text-gray-700" />
            </div>
            <span className="font-medium text-gray-800">Store Sell Ratio</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </button>

        <button className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-gray-200">
              <Package className="w-5 h-5 text-gray-700" />
            </div>
            <span className="font-medium text-gray-800">Top item sold</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="mt-auto pt-4 text-sm text-gray-500 flex items-center gap-2">
        Analysis created by
        <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-white font-bold text-xs">
          W
        </div>
      </div>
    </div>
  )
}
