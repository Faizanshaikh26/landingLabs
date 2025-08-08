import React from 'react'
import DataTable from './view-table'

export default function Services() {
  return (
     <div className="min-h-screen bg-slate-50 p-6">
            
                <div>
                    <h1 className="text-3xl font-semibold text-slate-900">Services</h1>
                    <p className="text-sm text-slate-500 mt-1">14th Aug 2023</p>
                </div>


                <div className='py-4'>
                    <DataTable/>
                </div>



    </div>
  )
}
