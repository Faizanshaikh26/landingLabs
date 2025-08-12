"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function DataTable() {
  return (
    <div className="p-6 bg-white rounded shadow">
     

      <div className="w-full bg-white border rounded-md p-4">
        <div className="flex items-center justify-between py-4">
          <Input placeholder="Search Project..." className="max-w-sm bg-gh" />
          <Button variant="outline" >
            Add Services
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Web Development</TableCell>
                <TableCell>Build modern web apps</TableCell>
                <TableCell>
                  <span className="text-green-600 font-semibold">Active</span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-4">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SEO Optimization</TableCell>
                <TableCell>Improve site ranking</TableCell>
                <TableCell>
                  <span className="text-red-600 font-semibold">Upcoming</span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-4">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>UI/UX Design</TableCell>
                <TableCell>Design user interfaces</TableCell>
                <TableCell>
                  <span className="text-green-600 font-semibold">Active</span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-4">
                    <button className="text-blue-600 hover:underline">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              {/* Add more static rows if needed */}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
