import React from 'react'
import { Routes, Route ,Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Contact from './Pages/Contact';
import Career from './Pages/Career';
import AdminLayout from './components/AdminLayout';

export default function App() {
  return (
    <div>

 <Routes>
      {/* Parent route for Admin pages */}
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="careers" element={<Career />} />
      </Route>
    </Routes>
 


    </div>
  )
}
