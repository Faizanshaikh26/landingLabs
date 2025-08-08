import { AddClientDialog } from "./dialog/add/add-dialog";
import DataTable from "./view-table";

export default function Client() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Clients</h1>
        <AddClientDialog />
      </div>

      <DataTable />
    </div>
  );
}
