import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ChevronsUpDown } from "lucide-react";

const sampleData = [
  {
    client: "LunaTech Studios",
    location: "Austin, Texas",
    service: "Web Development",
    budget: "$12,500",
  },
  {
    client: "Nimbus Agency",
    location: "Denver, Colorado",
    service: "SEO Optimization",
    budget: "$7,850",
  },
  {
    client: "EchoSoft Systems",
    location: "Miami, Florida",
    service: "Mobile App Development",
    budget: "$16,400",
  },
  {
    client: "Crimson Pixel Co.",
    location: "Seattle, Washington",
    service: "UI/UX Design",
    budget: "$23,640",
  },
  {
    client: "SolarEdge Media",
    location: "San Francisco, California",
    service: "Content Marketing",
    budget: "$15,750",
  },
  {
    client: "BrightWave Labs",
    location: "Chicago, Illinois",
    service: "Custom Software",
    budget: "$19,200",
  },
  {
    client: "Twilight Ventures",
    location: "New York, New York",
    service: "Brand Identity",
    budget: "$10,300",
  },
  {
    client: "Zephyr Interactive",
    location: "Phoenix, Arizona",
    service: "E-commerce Development",
    budget: "$22,450",
  },
  {
    client: "NovaReach Digital",
    location: "Portland, Oregon",
    service: "Digital Strategy",
    budget: "$13,980",
  },
  {
    client: "Artemis Solutions",
    location: "Atlanta, Georgia",
    service: "Email Campaigns",
    budget: "$8,600",
  },
];


export default function DashboardTable({ data = sampleData }) {
  const [sorting, setSorting] = useState([]);

 const columns = useMemo(
  () => [
    {
      accessorKey: "client",
      header: () => <div className="text-sm font-medium">Client</div>,
      cell: (info) => (
        <div className="text-sm font-medium text-slate-800">
          {info.getValue()}
        </div>
      ),
    },
    {
      accessorKey: "location",
      header: () => <div className="text-sm font-medium">Location</div>,
      cell: (info) => (
        <div className="text-sm text-slate-600">{info.getValue()}</div>
      ),
    },
    {
      accessorKey: "service",
      header: () => <div className="text-sm font-medium">Service</div>,
      cell: (info) => (
        <div className="text-sm text-slate-800">{info.getValue()}</div>
      ),
    },
    {
      accessorKey: "budget",
      header: () => <div className="text-sm font-medium">Budget</div>,
      cell: (info) => (
        <div className="text-sm font-medium text-slate-800">{info.getValue()}</div>
      ),
      meta: { align: "right" },
    },
  ],
  []
);


  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="max-w-4xl mx-auto">
      {/* Card */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Top Store</h3>
            <p className="text-xs text-slate-500 mt-1">Overview of top performing stores</p>
          </div>

          <button
            type="button"
            className="inline-flex items-center px-3 py-1.5 rounded-full bg-lime-300 text-slate-900 text-sm font-medium shadow-sm hover:brightness-95"
          >
            Share
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-transparent">
              {table.getHeaderGroups().map((hg) => (
                <tr key={hg.id}>
                  {hg.headers.map((header) => {
                    const canSort = header.column.getCanSort();
                    const sortDir = header.column.getIsSorted();

                    return (
                      <th
                        key={header.id}
                        colSpan={header.colSpan}
                        className={`px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider ${
                          header.column.columnDef.meta?.align === "right"
                            ? "text-right"
                            : ""
                        }`}
                      >
                        <div
                          className={`flex items-center gap-2 select-none ${
                            header.column.columnDef.meta?.align === "right"
                              ? "justify-end"
                              : ""
                          }`}
                          onClick={canSort ? header.column.getToggleSortingHandler() : undefined}
                          role={canSort ? "button" : undefined}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {canSort && (
                            <ChevronsUpDown size={14} className="text-slate-400" />
                          )}
                          {sortDir ? (
                            <span className="text-xs text-slate-500">
                              {sortDir === "asc" ? "↑" : "↓"}
                            </span>
                          ) : null}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>

            <tbody className="bg-white divide-y divide-slate-100">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={`px-6 py-4 whitespace-nowrap text-sm ${
                        cell.column.columnDef.meta?.align === "right"
                          ? "text-right"
                          : ""
                      }`}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Optional: simple pagination / footer */}
        <div className="px-6 py-3 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs text-slate-500">{data.length} results</div>
          {/* Placeholder for pagination controls if needed */}
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <button
              type="button"
              className="px-2 py-1 rounded border border-slate-100 hover:bg-slate-50"
            >
              Prev
            </button>
            <button
              type="button"
              className="px-2 py-1 rounded border border-slate-100 hover:bg-slate-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
