// client/view-table.tsx

import type { ColumnDef } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Client = {
  name: string;
  project: string;
  package: string;
  status: "Active" | "Pending" | "Inactive" | "Upcoming"  | "Completed";
};

const data: Client[] = [
  { name: "Alice Smith", project: "Website Redesign", package: "Pro", status: "Active" },
  { name: "Bob Johnson", project: "Mobile App", package: "Basic", status: "Pending" },
  { name: "Carol Davis", project: "Ecommerce Platform", package: "Enterprise", status: "Inactive" },
  { name: "David Wilson", project: "SEO Optimization", package: "Pro", status: "Active" },
  { name: "Emma Brown", project: "Analytics Dashboard", package: "Basic", status: "Pending" },
  { name: "Carol Davis", project: "Ecommerce Platform", package: "Enterprise", status: "Inactive" },
  { name: "David Wilson", project: "SEO Optimization", package: "Pro", status: "Active" },
  { name: "Emma Brown", project: "Analytics Dashboard", package: "Basic", status: "Pending" },
  { name: "Carol Davis", project: "Ecommerce Platform", package: "Enterprise", status: "Inactive" },
  { name: "David Wilson", project: "SEO Optimization", package: "Pro", status: "Active" },
  { name: "Emma Brown", project: "Analytics Dashboard", package: "Basic", status: "Pending" },
];

export default function DataTable() {
  const [filter, setFilter] = useState("");

  const columns = useMemo<ColumnDef<Client>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "project",
        header: "Project",
      },
      {
        accessorKey: "package",
        header: "Package",
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
      {
        header: "Manage",
        cell: () => <Button size="sm">Manage</Button>,
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="w-full bg-white border rounded-md p-4 space-y-4">

        <div className="flex justify-between">
   <Input
        placeholder="Search by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full max-w-sm"
      />

       <Button variant="outline">Add Client</Button>
        </div>
   

      

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No clients found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex gap-2">
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
  );
}