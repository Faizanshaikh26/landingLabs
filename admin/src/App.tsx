import { Routes, Route, Navigate } from "react-router-dom"
import AdminLayout from "./app/AdminLayout"
import Dashboard from "./app/components/Dashboard"
import CareerDashboard from "./app/components/Career" // ✅ Correct import

function App() {
  return (
    <Routes>
      {/* Admin Layout wrapper */}
      <Route path="/" element={<AdminLayout />}>
        {/* Redirect root to dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />

        {/* Pages inside AdminLayout */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="careers" element={<CareerDashboard />} /> {/* ✅ Fixed */}
      </Route>
    </Routes>
  )
}

export default App
