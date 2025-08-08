'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export function AddServiceDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className="bg-red-700 text-white hover:bg-red-800">
          Add Service
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Service</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Service Name</Label><br />
            <Input placeholder="Enter service name" />
          </div>
          <div>
            <Label>Description</Label><br />
            <Textarea placeholder="Enter description" />
          </div>
          <div>
            <Label>Status</Label><br />
            <select className="w-full border rounded px-3 py-2">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setOpen(false)}>Submit</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
