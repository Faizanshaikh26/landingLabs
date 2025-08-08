import { useState } from "react"
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

export function AddProjectDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {[
            { label: "Client", id: "client", placeholder: "Client Name" },
            { label: "Project Name", id: "name", placeholder: "Project Name" },
            { label: "Services", id: "services", placeholder: "Services Offered" },
            { label: "Start Date", id: "start", placeholder: "YYYY-MM-DD", type: "date" },
            { label: "End Date", id: "end", placeholder: "YYYY-MM-DD", type: "date" },
            { label: "Budget", id: "budget", placeholder: "e.g. 50000" },
          ].map(({ label, id, placeholder, type }) => (
            <div key={id} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={id} className="text-right">{label}</Label>
              <Input id={id} type={type || "text"} placeholder={placeholder} className="col-span-3" />
            </div>
          ))}

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Status</Label>
            <Select>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" type="submit" onClick={() => setOpen(false)}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
