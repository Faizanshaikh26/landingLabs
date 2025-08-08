"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function AddDialog({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMember = {
      id,
      name,
      role,
      department,
    };

    console.log("New Team Member:", newMember);

    // TODO: Add your API call or state update logic here

    // Reset form and close dialog
    setId("");
    setName("");
    setRole("");
    setDepartment("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Team Member</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
          <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} />
          <Input placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
          <Button variant="outline" type="submit">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
