import React, { useState } from "react";

// shadcn/ui components (make sure all are present)
import { Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

// --- Admin Users Data and State ---
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

// --- Roles & Permissions Data and State ---
const initialRoles = [
  { role: "Admin", permissions: ["Read", "Write", "Delete", "Manage Users"] },
  { role: "Editor", permissions: ["Read", "Write"] },
  { role: "Viewer", permissions: ["Read"] }
];
const allPermissions = ["Read", "Write", "Delete", "Manage Users"];

const initialUsersForPermissions = [
  { id: 1, name: "Alice Doe", role: "Admin", permissions: ["Read", "Write", "Delete", "Manage Users"] },
  { id: 2, name: "Bob Lee", role: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Carol Ray", role: "Viewer", permissions: ["Read"] }
];

// --- Integrations Data and State ---
const initialIntegrations = [
  { name: "Payment Gateway", status: "Connected", stats: [10, 20, 50, 100, 80] },
  { name: "Facebook Ads", status: "Disconnected", stats: [5, 15, 40, 60, 55] },
  { name: "Google Analytics", status: "Connected", stats: [40, 50, 30, 80, 90] },
];

// Utility for status styling
function statusColor(status: string) {
  return status === "Connected"
    ? "bg-green-100 text-green-800 border-green-200"
    : "bg-red-100 text-red-700 border-red-200";
}

export default function SettingsAllPage() {
  // ---- Admin Users ----
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("Admin");
  const [newStatus, setNewStatus] = useState<"Active" | "Inactive">("Active");
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
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editUser) return;
    setUsers(users.map(u => (u.id === editUser.id ? editUser : u)));
    setEditOpen(false);
    setEditUser(null);
  };
  // Activate/deactivate user
  const handleActivate = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: "Active" } : u));
  };
  const handleDeactivate = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: "Inactive" } : u));
  };

  // ---- Roles & Permissions ----
  const [roles, setRoles] = useState(initialRoles);
  const [usersForPermissions, setUsersForPermissions] = useState(initialUsersForPermissions);
  const [tabValue, setTabValue] = useState("roles");

  // Toggle permission for a role
  const togglePermissionByRole = (roleIndex: number, permission: string) => {
    setRoles(prev => {
      const updated = [...prev];
      const current = updated[roleIndex];
      const hasPermission = current.permissions.includes(permission);
      updated[roleIndex] = {
        ...current,
        permissions: hasPermission
          ? current.permissions.filter(p => p !== permission)
          : [...current.permissions, permission],
      };
      return updated;
    });
    setUsersForPermissions(prev =>
      prev.map(u =>
        u.role === roles[roleIndex].role
          ? {
              ...u,
              permissions: u.permissions.includes(permission)
                ? u.permissions.filter(p => p !== permission)
                : [...u.permissions, permission],
            }
          : u
      )
    );
  };

  // Toggle permission for a user
  const togglePermissionByUser = (userIndex: number, permission: string) => {
    setUsersForPermissions(prev => {
      const updated = [...prev];
      const current = updated[userIndex];
      const hasPermission = current.permissions.includes(permission);
      updated[userIndex] = {
        ...current,
        permissions: hasPermission
          ? current.permissions.filter(p => p !== permission)
          : [...current.permissions, permission],
      };
      return updated;
    });
  };

  // ---- Integrations ----
  const [integrations, setIntegrations] = useState(initialIntegrations);
  const toggleIntegration = (idx: number) => {
    setIntegrations(integrations =>
      integrations.map((int, i) =>
        i === idx
          ? { ...int, status: int.status === "Connected" ? "Disconnected" : "Connected" }
          : int
      )
    );
  };

  return (
    <main className="space-y-12 max-w-6xl mx-auto p-4 md:p-8">
      {/* --- Admin Users Section --- */}
      <section className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Admin Users</h2>
            <p className="text-gray-500 mt-1">
              Add, edit, activate, or deactivate users of your dashboard.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-900 focus:ring-black"
            onClick={() => setAddOpen(true)}
          >
            Add User
          </Button>
        </div>
        <div className="overflow-x-auto rounded-lg">
          <Table className="min-w-full divide-y divide-gray-200 shadow rounded-md">
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
                <Input id="name" placeholder="John Doe" value={newName} onChange={e => setNewName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
                <Input id="email" type="email" placeholder="john@email.com" value={newEmail} onChange={e => setNewEmail(e.target.value)} required />
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
              <DialogDescription>Update the user details and save changes.</DialogDescription>
            </DialogHeader>
            {editUser && (
              <form className="space-y-4 mt-4" onSubmit={handleEditSubmit}>
                <div>
                  <label htmlFor="edit-name" className="block mb-1 font-medium text-gray-700">Name</label>
                  <Input
                    id="edit-name"
                    value={editUser.name}
                    onChange={e => setEditUser({ ...editUser, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="edit-email" className="block mb-1 font-medium text-gray-700">Email</label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={editUser.email}
                    onChange={e => setEditUser({ ...editUser, email: e.target.value })}
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

      {/* --- Roles & Permissions Section --- */}
      <section className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Permissions & Roles</h2>
        <p className="text-gray-500 mb-5 text-base">
          Assign or review permissions for each role or user. Toggle any permission below.
        </p>

        <Tabs value={tabValue} onValueChange={setTabValue}>
          <TabsList className="bg-gray-100 rounded-lg px-1 py-1 w-fit">
            <TabsTrigger
              value="roles"
              className="font-medium px-5 py-2 transition focus:outline-none focus:ring-2 focus:ring-black data-[state=active]:bg-black data-[state=active]:text-white"
            >
              By Role
            </TabsTrigger>
            <TabsTrigger
              value="users"
              className="font-medium px-5 py-2 transition focus:outline-none focus:ring-2 focus:ring-black data-[state=active]:bg-black data-[state=active]:text-white"
            >
              By User
            </TabsTrigger>
          </TabsList>
          <TabsContent value="roles" className="pt-6">
            <div className="overflow-x-auto rounded-lg border border-gray-200 mb-2">
              <Table className="min-w-full text-sm text-gray-800 divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold">Role</th>
                    {allPermissions.map((perm) => (
                      <th key={perm} className="py-3 px-4 text-center font-semibold">{perm}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {roles.map((roleObj, i) => (
                    <tr key={roleObj.role} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition">
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        <Badge variant="outline" className="py-1 px-3 capitalize text-sm bg-gray-900 text-white">{roleObj.role}</Badge>
                      </td>
                      {allPermissions.map((perm) => (
                        <td key={perm} className="py-3 px-4 text-center">
                          <Switch
                            checked={roleObj.permissions.includes(perm)}
                            onCheckedChange={() => togglePermissionByRole(i, perm)}
                            aria-label={`Toggle ${perm} for ${roleObj.role}`}
                            className="data-[state=checked]:bg-black data-[state=checked]:border-black"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="users" className="pt-6">
            <div className="overflow-x-auto rounded-lg border border-gray-200 mb-2">
              <Table className="min-w-full text-sm text-gray-800 divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold">User</th>
                    <th className="py-3 px-4 text-left font-semibold">Role</th>
                    {allPermissions.map(perm => (
                      <th key={perm} className="py-3 px-4 text-center font-semibold">{perm}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {usersForPermissions.map((u, i) => (
                    <tr key={u.id} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition">
                      <td className="py-3 px-4 font-medium whitespace-nowrap">
                        <span className="inline-block w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-bold text-center mr-2 align-middle">{u.name.charAt(0)}</span>
                        {u.name}
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className="bg-gray-100 text-black capitalize font-semibold">{u.role}</Badge>
                      </td>
                      {allPermissions.map(perm => (
                        <td key={perm} className="py-3 px-4 text-center">
                          <Switch
                            checked={u.permissions.includes(perm)}
                            onCheckedChange={() => togglePermissionByUser(i, perm)}
                            aria-label={`Toggle ${perm} for ${u.name}`}
                            className="data-[state=checked]:bg-black data-[state=checked]:border-black"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* --- Integrations Section --- */}
      <section className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Integrations</h2>
            <p className="text-gray-500 text-base">
              Manage your platform connections. Connect or disconnect in one click and monitor quick stats for each.
            </p>
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {integrations.map((int, idx) => (
            <Card
              key={int.name}
              className={`relative group p-6 rounded-2xl border-2 ${int.status === "Connected" ? "border-green-200" : "border-gray-200"} shadow transition-shadow hover:shadow-xl bg-gray-50`}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-lg text-gray-900 inline-flex items-center">{int.name}</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full border transition ${statusColor(int.status)} text-xs font-semibold`}>
                  {int.status}
                </span>
              </div>
              <div className="mb-6">
                <Line
                  data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                    datasets: [
                      {
                        label: "Usage",
                        data: int.stats,
                        backgroundColor:
                          int.status === "Connected"
                            ? "rgba(34,197,94,0.14)"
                            : "rgba(239,68,68,0.13)",
                        borderColor:
                          int.status === "Connected" ? "#22c55e" : "#ef4444",
                        tension: 0.3,
                        fill: true,
                        pointRadius: 3,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    plugins: { legend: { display: false } },
                    scales: {
                      x: { display: false },
                      y: { display: false, beginAtZero: true },
                    },
                    elements: { line: { borderWidth: 2 } }
                  }}
                  height={80}
                />
              </div>
              <Button
                variant={int.status === "Connected" ? "outline" : "default"}
                className={`w-full py-2 rounded-lg font-semibold transition ${
                  int.status === "Connected"
                    ? "border-green-200 text-green-700 hover:bg-green-50"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
                aria-label={int.status === "Connected" ? `Disconnect ${int.name}` : `Connect ${int.name}`}
                onClick={() => toggleIntegration(idx)}
              >
                {int.status === "Connected" ? "Disconnect" : "Connect"}
              </Button>
              <div className={`absolute bottom-2 right-6 text-xs italic ${int.status === "Connected" ? "text-green-500" : "text-gray-400"}`}>
                {int.status === "Connected" ? "Live connection" : "Not connected"}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
