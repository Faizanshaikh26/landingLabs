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
import { Input } from '@/components/ui/input'

import { AddDialog } from '../Team/dialog/add/add-dialog'
import { EditDialog } from '../Team/dialog/edit/edit-dialog'
import { DeleteDialog } from '../Team/dialog/delete/delete-dialog'

// ------------------ Data -------------------
type TeamMember = {
  id: number
  name: string
  role: string
  department: string
}

const initialData: TeamMember[] = [
  { id: 1, name: 'Alice Johnson', role: 'Frontend Developer', department: 'Development' },
  { id: 2, name: 'Bob Smith', role: 'Backend Developer', department: 'Development' },
  { id: 3, name: 'Clara Davis', role: 'UI/UX Designer', department: 'Design' },
  { id: 4, name: 'Daniel Evans', role: 'Marketing Lead', department: 'Marketing' },
  { id: 5, name: 'Ella Brown', role: 'Support Agent', department: 'Support' },
  { id: 6, name: 'George Lee', role: 'Product Manager', department: 'Development' },
  { id: 7, name: 'Diana Green', role: 'Data Analyst', department: 'Analytics' },
  { id: 8, name: 'Henry White', role: 'HR Executive', department: 'HR' },
  { id: 9, name: 'Sophie Black', role: 'QA Engineer', department: 'Testing' },
]

// ------------------ Component -------------------
export default function DataTable() {
  const [data, setData] = useState<TeamMember[]>(initialData)

  // State for table
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 })

  // Dialog state
  const [openAdd, setOpenAdd] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  // ------------------ Columns -------------------
  const columns: ColumnDef<TeamMember>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      cell: info => <span className="font-medium text-gray-800">{info.getValue() as string}</span>,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: info => <span className="text-gray-700">{info.getValue() as string}</span>,
    },
    {
      accessorKey: 'role',
      header: 'Role',
      cell: info => <span className="text-blue-700 font-semibold">{info.getValue() as string}</span>,
    },
    {
      accessorKey: 'department',
      header: 'Department',
      cell: info => (
        <span className="px-2 py-1 rounded text-sm font-medium bg-gray-100 text-gray-800">
          {info.getValue() as string}
        </span>
      ),
    },
    {
      id: 'actions',
      header: 'Action',
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-100"
            onClick={() => {
              setSelectedMember(row.original)
              setOpenEdit(true)
            }}
          >
            Edit
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-red-600 text-red-600 hover:bg-red-100"
            onClick={() => {
              setSelectedMember(row.original)
              setOpenDelete(true)
            }}
          >
            Delete
          </Button>
        </div>
      )
    }
  ]

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
    <div className="w-full bg-white border rounded-md p-4">
      {/* Search + Add Button */}
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Search Team..."
          className="max-w-sm"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
        />
        <Button
          variant="outline"
          className="bg-red-700 text-white hover:bg-red-800"
          onClick={() => setOpenAdd(true)}
        >
          Add Member
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
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

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
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

      {/* Dialogs */}
      <AddDialog open={openAdd} onOpenChange={setOpenAdd} onAdd={(newMember) => setData(prev => [...prev, newMember])} />
      {selectedMember && (
        <EditDialog
          open={openEdit}
          onOpenChange={setOpenEdit}
          member={selectedMember}
          onSave={(updated) => {
            setData(prev => prev.map(m => m.id === updated.id ? updated : m))
          }}
        />
      )}
      {selectedMember && (
        <DeleteDialog
          open={openDelete}
          onOpenChange={setOpenDelete}
          memberId={selectedMember.id}
          onDelete={(id) => {
            setData(prev => prev.filter(m => m.id !== id))
          }}
        />
      )}
    </div>
  )
}
