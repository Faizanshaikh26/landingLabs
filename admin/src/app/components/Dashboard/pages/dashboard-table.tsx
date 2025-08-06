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
    store: "Solaris Sparkle",
    location: "Miami, Florida",
    sell: "102 Quantity",
    amount: "12.50K",
  },
  {
    store: "Crimson Dusk",
    location: "Denver, Colorado",
    sell: "214 Quantity",
    amount: "07.85K",
  },
  {
    store: "Indigo Zephyr",
    location: "Orlando, Florida",
    sell: "143 Quantity",
    amount: "16.40K",
  },
  {
    store: "Roseate Crest",
    location: "Las Vegas, Nevada",
    sell: "185 Quantity",
    amount: "23.64K",
  },
  // add more rows as needed
];

export default function DashboardTable({ data = sampleData }) {
  const [sorting, setSorting] = useState([]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "store",
        header: () => <div className="text-sm font-medium">Store Name</div>,
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
        accessorKey: "sell",
        header: () => <div className="text-sm font-medium">Sell</div>,
        cell: (info) => (
          <div className="text-sm text-slate-800">{info.getValue()}</div>
        ),
      },
      {
        accessorKey: "amount",
        header: () => <div className="text-sm font-medium">Amount</div>,
        cell: (info) => (
          <div className="text-sm font-medium text-slate-800">{info.getValue()}</div>
        ),
        // align right visually
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
