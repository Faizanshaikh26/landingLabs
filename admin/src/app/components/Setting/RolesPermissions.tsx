import React, { useState } from "react";
import { Table } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Demo role and user data
const initialRoles = [
  { role: "Admin", permissions: ["Read", "Write", "Delete", "Manage Users"] },
  { role: "Editor", permissions: ["Read", "Write"] },
  { role: "Viewer", permissions: ["Read"] },
];

const initialUsers = [
  { id: 1, name: "Alice Doe", role: "Admin", permissions: ["Read", "Write", "Delete", "Manage Users"] },
  { id: 2, name: "Bob Lee", role: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Carol Ray", role: "Viewer", permissions: ["Read"] },
];

const allPermissions = ["Read", "Write", "Delete", "Manage Users"];

export default function RolesPermissions() {
  // Roles state (by role tab)
  const [roles, setRoles] = useState(initialRoles);

  // Users state (by user tab)
  const [users, setUsers] = useState(initialUsers);

  // Tab selection ("roles" or "users")
  const [tabValue, setTabValue] = useState("roles");

  // Toggle permission for a role (by role tab)
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

    // Also sync users: update permissions for users with the same role (for demo)
    setUsers(prev =>
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

  // Toggle permission for a user (by user tab)
  const togglePermissionByUser = (userIndex: number, permission: string) => {
    setUsers(prev => {
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

  return (
    <section className="max-w-5xl mx-auto px-3 py-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Permissions & Roles</h2>
      <p className="text-gray-500 mb-5 text-base">
        Assign or review permissions for each role or user below. Toggle any permission. All changes are instant.
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

        {/* --- By Role Tab --- */}
        <TabsContent value="roles" className="pt-6">
          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-2">
            <Table className="min-w-full text-sm text-gray-800 divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Role</th>
                  {allPermissions.map(perm => (
                    <th key={perm} className="py-3 px-4 text-center font-semibold">
                      {perm}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {roles.map((roleObj, i) => (
                  <tr
                    key={roleObj.role}
                    className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      <Badge variant="outline" className="py-1 px-3 capitalize text-sm bg-gray-900 text-white">
                        {roleObj.role}
                      </Badge>
                    </td>
                    {allPermissions.map(perm => (
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

        {/* --- By User Tab --- */}
        <TabsContent value="users" className="pt-6">
          <div className="overflow-x-auto rounded-lg border border-gray-200 mb-2">
            <Table className="min-w-full text-sm text-gray-800 divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">User</th>
                  <th className="py-3 px-4 text-left font-semibold">Role</th>
                  {allPermissions.map(perm => (
                    <th key={perm} className="py-3 px-4 text-center font-semibold">
                      {perm}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map((userObj, i) => (
                  <tr
                    key={userObj.id}
                    className="odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <td className="py-3 px-4 font-medium whitespace-nowrap">
                      <span className="inline-block w-7 h-7 rounded-full text-xs font-bold bg-gray-900 text-white text-center mr-2 align-middle">
                        {userObj.name.charAt(0)}
                      </span>
                      {userObj.name}
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="bg-gray-100 text-black capitalize font-semibold">
                        {userObj.role}
                      </Badge>
                    </td>
                    {allPermissions.map(perm => (
                      <td key={perm} className="py-3 px-4 text-center">
                        <Switch
                          checked={userObj.permissions.includes(perm)}
                          onCheckedChange={() => togglePermissionByUser(i, perm)}
                          aria-label={`Toggle ${perm} for ${userObj.name}`}
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
  );
}
