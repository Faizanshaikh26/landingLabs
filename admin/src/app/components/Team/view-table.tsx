import React, { useState } from 'react'
import type { ColumnDef } from '@tanstack/react-table'
import type {
  SortingState,
  ColumnFiltersState,
  VisibilityState,
} from '@tanstack/react-table'

import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Button } from '@/components/ui/button'

// ------------------ Data -------------------
type TeamMember = {
  id: number
  name: string
  role: string
  department: string
}

const data: TeamMember[] = [
  { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', department: 'Development' },
  { id: 2, name: 'Bob Smith', role: 'Backend Developer', department: 'Development' },
  { id: 3, name: 'Clara Davis', role: 'UI/UX Designer', department: 'Design' },
  { id: 4, name: 'Daniel Evans', role: 'Marketing Lead', department: 'Marketing' },
  { id: 5, name: 'Ella Brown', role: 'Support Agent', department: 'Support' },
  { id: 6, name: 'George Lee', role: 'Product Manager', department: 'Development' },
  { id: 7, name: 'Daniel Evans', role: 'Marketing Lead', department: 'Marketing' },
  { id: 8, name: 'Ella Brown', role: 'Support Agent', department: 'Support' },
  { id: 9, name: 'George Lee', role: 'Product Manager', department: 'Development' },
]

// ------------------ Columns -------------------
const columns: ColumnDef<TeamMember>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: info => <span className="font-medium text-gray-800">{info.getValue()}</span>,
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: info => <span className="text-gray-700">{info.getValue()}</span>,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: info => <span className="text-blue-700 font-semibold">{info.getValue()}</span>,
  },
  {
    accessorKey: 'department',
    header: 'Department',
    cell: info => {
      const department = info.getValue()
      const colorMap: Record<string, string> = {
        // Development: 'bg-green-100 text-green-800',
        // Design: 'bg-purple-100 text-purple-800',
        // Marketing: 'bg-yellow-100 text-yellow-800',
        // Support: 'bg-red-100 text-red-800',
      }
      return (
        <span className={`px-2 py-1 rounded text-sm font-medium ${colorMap[department as string] || 'bg-gray-100 text-gray-800'}`}>
          {department }
        </span>
      )
    },
  },
]

// ------------------ Component -------------------
export default function ViewTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 })

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      <div className="rounded-xl border bg-white shadow-md overflow-hidden">
        <Table>
          <TableHeader className="bg-blue-50">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id} className="text-blue-800 font-semibold">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  className="hover:bg-blue-50 even:bg-gray-50 transition-all duration-200"
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id} className="px-4 py-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination & Row Info */}
      <div className="flex items-center justify-between py-4">
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  )
}
