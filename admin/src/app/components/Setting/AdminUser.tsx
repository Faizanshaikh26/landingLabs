import React, { useState } from "react";
import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
}

const initialUsers: User[] = [
  { id: 1, name: "Alice Doe", email: "alice@email.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Lee", email: "bob@email.com", role: "Editor", status: "Inactive" },
];

export default function AdminUser() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [addOpen, setAddOpen] = useState(false);

  // For Add User dialog
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("Admin");
  const [newStatus, setNewStatus] = useState<"Active" | "Inactive">("Active");

  // For Edit User dialog
  const [editOpen, setEditOpen] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);

  // Add user
  const addNewUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newEmail) return;
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name: newName,
        email: newEmail,
        role: newRole,
        status: newStatus,
      },
    ]);
    setAddOpen(false);
    setNewName("");
    setNewEmail("");
    setNewRole("Admin");
    setNewStatus("Active");
  };

  // Open edit dialog
  const handleEdit = (user: User) => {
    setEditUser(user);
    setEditOpen(true);
  };

  // Submit edit changes
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editUser) return;
    setUsers(users.map(u => (u.id === editUser.id ? editUser : u)));
    setEditOpen(false);
    setEditUser(null);
  };

  // Activate user
  const handleActivate = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: "Active" } : u));
  };

  // Deactivate user
  const handleDeactivate = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: "Inactive" } : u));
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-4 md:p-6 max-w-5xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-semibold text-gray-900">Admin Users</h2>
        <Button
          size="lg"
          className="bg-black text-white hover:bg-gray-900 focus:ring-black transition-colors"
          onClick={() => setAddOpen(true)}
        >
          Add User
        </Button>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <Table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-md overflow-hidden">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-3 md:px-6 py-3 text-left text-sm font-medium text-gray-700">User</th>
              <th className="px-3 md:px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-3 md:px-6 py-3 text-left text-sm font-medium text-gray-700">Role</th>
              <th className="px-3 md:px-6 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-3 md:px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-gray-100 transition">
                <td className="px-3 md:px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8 bg-gray-100 text-black font-bold flex items-center justify-center">
                      {u.name.charAt(0)}
                    </Avatar>
                    <span className="text-gray-900 font-medium">{u.name}</span>
                  </div>
                </td>
                <td className="px-3 md:px-6 py-4 text-gray-700">{u.email}</td>
                <td className="px-3 md:px-6 py-4">
                  <Badge variant="outline" className="capitalize">{u.role}</Badge>
                </td>
                <td className="px-3 md:px-6 py-4">
                  <Badge color={u.status === "Active" ? "green" : "red"} className="capitalize">
                    {u.status}
                  </Badge>
                </td>
                <td className="px-3 md:px-6 py-4 text-right space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 text-gray-900 hover:bg-gray-200"
                    aria-label="Edit"
                    onClick={() => handleEdit(u)}
                  >
                    Edit
                  </Button>
                  {u.status === "Inactive" ? (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-600 text-green-700 hover:bg-green-50"
                      aria-label="Activate"
                      onClick={() => handleActivate(u.id)}
                    >
                      Activate
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-600 text-red-700 hover:bg-red-50"
                      aria-label="Deactivate"
                      onClick={() => handleDeactivate(u.id)}
                    >
                      Deactivate
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      {/* Add User Dialog */}
      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Please fill out the form below to add a new admin user.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 mt-4" onSubmit={addNewUser}>
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
              <Input
                id="name"
                placeholder="John Doe"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
              <Input
                id="email"
                type="email"
                placeholder="john@email.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="block mb-1 font-medium text-gray-700">Role</label>
              <Select onValueChange={setNewRole} value={newRole}>
                <SelectTrigger id="role" className="w-full min-h-[2.5rem]">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Editor">Editor</SelectItem>
                  <SelectItem value="Viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="status" className="block mb-1 font-medium text-gray-700">Status</label>
              <Select onValueChange={val => setNewStatus(val as "Active" | "Inactive")} value={newStatus}>
                <SelectTrigger id="status" className="w-full min-h-[2.5rem]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <DialogFooter className="flex justify-end gap-3">
              <Button type="submit" className="bg-black text-white hover:bg-gray-900 focus:ring-black">
                Save
              </Button>
              <Button variant="outline" onClick={() => setAddOpen(false)} type="button">
                Cancel
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      {/* Edit User Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Update the user details and save changes.
            </DialogDescription>
          </DialogHeader>
          {editUser && (
            <form className="space-y-4 mt-4" onSubmit={handleEditSubmit}>
              <div>
                <label htmlFor="edit-name" className="block mb-1 font-medium text-gray-700">Name</label>
                <Input
                  id="edit-name"
                  value={editUser.name}
                  onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="edit-email" className="block mb-1 font-medium text-gray-700">Email</label>
                <Input
                  id="edit-email"
                  type="email"
                  value={editUser.email}
                  onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="edit-role" className="block mb-1 font-medium text-gray-700">Role</label>
                <Select onValueChange={val => setEditUser({ ...editUser, role: val })} value={editUser.role}>
                  <SelectTrigger id="edit-role" className="w-full min-h-[2.5rem]">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Editor">Editor</SelectItem>
                    <SelectItem value="Viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="edit-status" className="block mb-1 font-medium text-gray-700">Status</label>
                <Select
                  onValueChange={val => setEditUser({ ...editUser, status: val as "Active" | "Inactive" })}
                  value={editUser.status}
                >
                  <SelectTrigger id="edit-status" className="w-full min-h-[2.5rem]">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter className="flex justify-end gap-3">
                <Button type="submit" className="bg-black text-white hover:bg-gray-900 focus:ring-black">
                  Save
                </Button>
                <Button variant="outline" onClick={() => setEditOpen(false)} type="button">
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
