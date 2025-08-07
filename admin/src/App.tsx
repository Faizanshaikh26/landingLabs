import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./app/AdminLayout";
import Dashboard from "./app/components/Dashboard";
import Contact from "./app/components/Contact";
import Client from "./app/components/Client";


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
        <Route path="contacts" element={<Contact />} />
        {/* <Route path="careers" element={<Careers />} /> */}
        <Route path="client" element={<Client />} />
        {/* <Route path="settings" element={<Settings />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
