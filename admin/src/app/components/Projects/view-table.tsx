'use client';

import * as React from 'react';
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
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, Trash2 } from 'lucide-react';

import { AddProjectDialog } from './dialog/add/add-dialog';
import { EditProjectDialog } from './dialog/edit/edit-dialog';
import { DeleteProjectDialog } from './dialog/delete/delete-dialog';

type Project = {
  client: string;
  name: string;
  services: string;
  startDate: string;
  endDate: string;
  budget: string;
  status: 'Active' | 'Upcoming' | 'Completed';
};

export function DataTable() {
  const [data, setData] = React.useState<Project[]>([
    {
      client: 'Acme Corp',
      name: 'Website Revamp',
      services: 'Web Development',
      startDate: '2025-07-01',
      endDate: '2025-09-30',
      budget: '₹1,50,000',
      status: 'Active',
    },
    {
      client: 'Globex Ltd',
      name: 'SEO Boost',
      services: 'SEO Optimization',
      startDate: '2025-10-01',
      endDate: '2025-12-15',
      budget: '₹85,000',
      status: 'Upcoming',
    },
    {
      client: 'Initech Inc',
      name: 'App Launch',
      services: 'Mobile Apps',
      startDate: '2025-03-01',
      endDate: '2025-06-30',
      budget: '₹2,00,000',
      status: 'Completed',
    },
  ]);

  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleDelete = (project: Project) => {
    setSelectedProject(project);
    setOpenDelete(true);
  };

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
    setOpenEdit(true);
  };

  const columns: ColumnDef<Project>[] = [
    {
      accessorKey: 'client',
      header: 'Client',
    },
    {
      accessorKey: 'name',
      header: 'Project',
    },
    {
      accessorKey: 'services',
      header: 'Services',
    },
    {
      accessorKey: 'startDate',
      header: 'Start Date',
    },
    {
      accessorKey: 'endDate',
      header: 'End Date',
    },
    {
      accessorKey: 'budget',
      header: 'Budget',
    },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ getValue }) => {
        const status = getValue() as Project['status'];
        const colorMap = {
          Active: 'bg-green-100 text-green-800',
          Upcoming: 'bg-yellow-100 text-yellow-800',
          Completed: 'bg-blue-100 text-blue-800',
        };
        return (
          <span className={`px-2 py-1 text-xs rounded-full ${colorMap[status]}`}>
            {status}
          </span>
        );
      },
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => handleEdit(row.original)}>
            <Pencil className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => handleDelete(row.original)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ];

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
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
        <Input placeholder="Search Project..." className="max-w-sm" />
      </div>

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
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center h-24">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-sm text-muted-foreground flex-1">
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
      <AddProjectDialog open={openAdd} setOpen={setOpenAdd} setData={setData} />
      <EditProjectDialog open={openEdit} setOpen={setOpenEdit} project={selectedProject} setData={setData} />
      <DeleteProjectDialog open={openDelete} setOpen={setOpenDelete} project={selectedProject} setData={setData} />
    </div>
  );
}
