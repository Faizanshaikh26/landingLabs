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
import { AddServiceDialog } from "./dialog/add/add-dialog";
import { EditServiceDialog } from "./dialog/edit/edit-dialog";
import { DeleteServiceDialog } from "./dialog/delete/delete-dialog";



export default function DataTable() {
  return (
    <div className="p-6 bg-white rounded shadow">
      <div className="w-full border rounded-md p-4 bg-white">
        <div className="flex items-center justify-between py-4">
          <Input placeholder="Search Service..." className="max-w-sm bg-slate-100" />
          <AddServiceDialog />
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
                    <EditServiceDialog
                      data={{
                        name: "Web Development",
                        description: "Build modern web apps",
                        status: "Active",
                      }}
                    />
                    <DeleteServiceDialog id={1} />
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
                    <EditServiceDialog
                      data={{
                        name: "SEO Optimization",
                        description: "Improve site ranking",
                        status: "Upcoming",
                      }}
                    />
                    <DeleteServiceDialog id={2} />
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
                    <EditServiceDialog
                      data={{
                        name: "UI/UX Design",
                        description: "Design user interfaces",
                        status: "Active",
                      }}
                    />
                    <DeleteServiceDialog id={3} />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
