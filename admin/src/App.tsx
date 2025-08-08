import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./app/AdminLayout";
import Dashboard from "./app/components/Dashboard";
import Projects from "./app/components/Projects";
import Client from "./app/components/Client";
import Team from "./app/components/Team";
import Services from "./app/components/Services";
import ReportAnalysis from "./app/components/Reports"

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* Add more routes here, e.g.: */}
        {/* <Route path="contacts" element={<Contacts />} /> */}
        {/* <Route path="careers" element={<Careers />} /> */}


        <Route path="/projects" element={<Projects />} />
        <Route path="/client" element={<Client />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reportAnalysis" element={<ReportAnalysis/>} />



      </Route>
    </Routes>
  )
}

export default App
