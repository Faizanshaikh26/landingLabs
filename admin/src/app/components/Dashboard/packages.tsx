"use client";

import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import { usePackages, type Package, type PackageStatus } from "./PackagesContext";

export default function Packages() {
  const navigate = useNavigate();
  const { packages, deletePackage } = usePackages();

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this package?")) {
      deletePackage(id);
    }
  };

  const columns: ColumnDef<Package>[] = [
    {
      accessorKey: "name",
      header: "Package Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => {
        const status = info.getValue() as PackageStatus;
        return (
          <span
            className={
              status === "Active"
                ? "text-green-600 font-semibold"
                : "text-red-600 font-semibold"
            }
          >
            {status}
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "Action",
      cell: ({ row }) => {
        const pkg = row.original;
        return (
          <div className="flex space-x-4">
            <button
              className="text-blue-600 hover:underline"
              onClick={() => alert(`Edit package '${pkg.name}' not implemented yet`)}
              aria-label={`Edit package ${pkg.name}`}
            >
              Edit
            </button>
            <button
              className="text-red-600 hover:underline"
              onClick={() => handleDelete(pkg.id)}
              aria-label={`Delete package ${pkg.name}`}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: packages,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-6 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Our Packages</h1>
        <Button onClick={() => navigate("/packages/add")}>Add Package</Button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 border border-gray-200 rounded">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
