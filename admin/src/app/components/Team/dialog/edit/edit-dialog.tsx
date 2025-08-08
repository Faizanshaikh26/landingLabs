"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Props = {
  member: {
    id: string;
    name: string;
    role: string;
    department: string;
  };
};

export function EditDialog({ member }: Props) {
  const [open, setOpen] = useState(false);

  const [id, setId] = useState(member.id);
  const [name, setName] = useState(member.name);
  const [role, setRole] = useState(member.role);
  const [department, setDepartment] = useState(member.department);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedMember = {
      id,
      name,
      role,
      department,
    };

    console.log("Updated Member:", updatedMember);
    // TODO: Replace this with an API call or global state update

    setOpen(false); // Close dialog after submit
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Member</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
          <Input placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="outline" type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
