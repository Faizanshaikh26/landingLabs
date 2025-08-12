'use client'

import * as React from 'react'
import {
     ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

// 1. Define the type for each row of the table
type Client = {
  clientName: string
  service: string
  startDate: string
  endDate: string
  budget: string
  status: 'Active' | 'Upcoming' | 'Completed'
}

// 2. Sample data
const clientData: Client[] = [
  {
    clientName: 'Acme Corp',
    service: 'Web Development',
    startDate: '2025-07-01',
    endDate: '2025-09-30',
    budget: '₹1,50,000',
    status: 'Active',
  },
  {
    clientName: 'Globex Ltd',
    service: 'SEO Optimization',
    startDate: '2025-10-01',
    endDate: '2025-12-15',
    budget: '₹85,000',
    status: 'Upcoming',
  },
  {
    clientName: 'Initech Inc',
    service: 'Mobile Apps',
    startDate: '2025-03-01',
    endDate: '2025-06-30',
    budget: '₹2,00,000',
    status: 'Completed',
  },
]

// 3. Define the column definitions
const columns: ColumnDef<Client>[] = [
  {
    accessorKey: 'clientName',
    header: 'Client Name',
    cell: ({ getValue }) => <span>{getValue() as string}</span>,
  },
  {
    accessorKey: 'service',
    header: 'Service',
    cell: ({ getValue }) => <span>{getValue() as string}</span>,
  },
  {
    accessorKey: 'startDate',
    header: 'Start Date',
    cell: ({ getValue }) => <span>{getValue() as string}</span>,
  },
  {
    accessorKey: 'endDate',
    header: 'End Date',
    cell: ({ getValue }) => <span>{getValue() as string}</span>,
  },
  {
    accessorKey: 'budget',
    header: 'Budget',
    cell: ({ getValue }) => <span>{getValue() as string}</span>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ getValue }) => {
      const status = getValue() as Client['status']
      const statusStyles: Record<Client['status'], string> = {
        Active: 'bg-green-100 text-green-800',
        Upcoming: 'bg-yellow-100 text-yellow-800',
        Completed: 'bg-blue-100 text-blue-800',
      }

      return (
        <span className={`px-2 py-1 text-xs rounded-full ${statusStyles[status]}`}>
          {status}
        </span>
      )
    },
  },
]

// 4. The main table component
export function DataTable() {

 const [sorting, setSorting] = React.useState<SortingState>([]);
     const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        [],
    );

    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({

    
    data: clientData,

    columns,
    onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
  });

  return (
    <div className="w-full bg-white border rounded-md p-4">
       
 <div className="flex items-center justify-between py-4">
                <Input placeholder="Search Project..."   className="max-w-sm bg-gh"  />
                <Button variant="outline" className='bg-red-700'>Add Project</Button>
            </div>
      <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext(),
                                                )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map(row => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && 'selected'}
                                >
                                    {row.getVisibleCells().map(cell => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
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
    </div>
  )
}
