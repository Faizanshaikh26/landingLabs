import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DeleteClientDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Client</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          Are you sure you want to delete this client? This action cannot be undone.
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="outline">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
