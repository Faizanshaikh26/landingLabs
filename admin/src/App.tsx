import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./app/AdminLayout";
import Dashboard from "./app/components/Dashboard";

function App() {
  return (
    <Routes>
      {/* Admin Layout wrapper */}
      <Route path="/" element={<AdminLayout />}>
        {/* Redirect root to dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />

        {/* Pages inside AdminLayout */}
        <Route path="dashboard" element={<Dashboard />} />
        {/* Add more routes here, e.g.: */}
        {/* <Route path="contacts" element={<Contacts />} /> */}
        {/* <Route path="careers" element={<Careers />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
