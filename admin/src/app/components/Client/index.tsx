// client/index.tsx

import { Button } from "@/components/ui/button";
import ViewTable from "./view-table";

export default function ClientPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <Button>Add Client</Button>
      </div>
      <ViewTable />
    </div>
  );
}