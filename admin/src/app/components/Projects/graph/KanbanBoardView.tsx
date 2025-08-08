'use client'

const kanbanData = [
  { id: 1, title: 'Design Landing Page', status: 'To Do' },
  { id: 2, title: 'Develop API', status: 'In Progress' },
  { id: 3, title: 'Write Unit Tests', status: 'In Progress' },
  { id: 4, title: 'Deploy to Production', status: 'Completed' },
]

const statusColumns = ['To Do', 'In Progress', 'Completed']

export function KanbanBoardView() {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {statusColumns.map((status) => (
        <div key={status} className="min-w-[250px] w-1/3 bg-gray-100 p-4 rounded-md">
          <h3 className="text-md font-semibold mb-2">{status}</h3>
          <div className="space-y-2">
            {kanbanData
              .filter((item) => item.status === status)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3 rounded shadow-sm border"
                >
                  {item.title}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
