import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DeleteProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Project</DialogTitle>
        </DialogHeader>
        <p>This action is irreversible. Do you really want to delete this project?</p>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="outline">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
