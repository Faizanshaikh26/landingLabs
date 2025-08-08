'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export function EditServiceDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" onClick={() => setOpen(true)}>Edit</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Service</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label>Service Name</Label><br />
            <Input defaultValue="Web Development" />
          </div>
          <div>
            <Label>Description</Label><br />
            <Textarea defaultValue="Full-stack web apps" />
          </div>
          <div>
            <Label>Status</Label><br />
            <select className="w-full border rounded px-3 py-2" defaultValue="Active">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="flex justify-end">
            <Button  variant="outline" onClick={() => setOpen(false)}>Update</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
