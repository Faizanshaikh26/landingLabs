
import { GanttChartView } from './graph/GanttChartView'
import { ProjectOverview } from './pages/ProjectOverview'
import { DataTable } from './view-table'

export default function Projects() {
    return (
           <div className="min-h-screen bg-slate-50 p-6">
            
                <div>
                    <h1 className="text-3xl font-semibold text-slate-900">Projects</h1>
                    <p className="text-sm text-slate-500 mt-1">14th Aug 2023</p>
                </div>


                <div className='py-5'>

                    <DataTable />
                </div>


                

                <div className='py-5'>
                    <GanttChartView/>
                </div>
            </div>

    
    )
}
