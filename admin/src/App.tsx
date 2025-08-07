import { Routes, Route, Navigate } from "react-router-dom"
import AdminLayout from "./app/AdminLayout"
import Dashboard from "./app/components/Dashboard"
import CareerDashboard from "./app/components/Career"
import TeamDashboard from "./app/components/Team/Team" // ✅ Corrected import

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="careers" element={<CareerDashboard />} />
        <Route path="team" element={<TeamDashboard />} />
      </Route>
    </Routes>
  )
}

export default App
