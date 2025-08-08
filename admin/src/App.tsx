import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./app/AdminLayout";

import Dashboard from "./app/components/Dashboard";
import Services from "./app/components/Dashboard/services";
import Packages from "./app/components/Dashboard/packages";
import AddService from "./app/components/Dashboard/AddService";
import AddPackage from "./app/components/Dashboard/AddPackage";

import { ServicesProvider } from "./app/components/Dashboard/ServicesContext";
import { PackagesProvider } from "./app/components/Dashboard/PackagesContext";

import AdminUser from "./app/components/Setting/AdminUser";
import RolesPermissions from "./app/components/Setting/RolesPermissions";
import Integrations from "./app/components/Setting/Integrations";
import SettingsAllPage from './app/components/Setting/all';

function App() {
  return (
    <ServicesProvider>
      <PackagesProvider>
        <Routes>
          {/* Admin Layout wrapper */}
          <Route path="/" element={<AdminLayout />}>
            {/* Redirect root to dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} />

            {/* Service routes */}
            <Route path="services">
              <Route index element={<Services />} />
              <Route path="add" element={<AddService />} />
            </Route>

            {/* Package routes */}
            <Route path="packages">
              <Route index element={<Packages />} />
              <Route path="add" element={<AddPackage />} />
            </Route>

            {/* Pages inside AdminLayout */}
            <Route path="dashboard" element={<Dashboard />} />
            {/* Add more routes here, e.g.: */}
            {/* <Route path="contacts" element={<Contacts />} /> */}
            {/* <Route path="careers" element={<Careers />} /> */}

            {/* Settings nested routes */}
            <Route path="settings">
              <Route path="integrations" element={<Integrations />} />
              <Route path="roles-permissions" element={<RolesPermissions />} />
              <Route path="admin-users" element={<AdminUser />} />
            </Route>
            <Route path="settings/all" element={<SettingsAllPage />} />

            {/* Catch-all route */}
            {/* Add additional routes here */}
          </Route>
        </Routes>
      </PackagesProvider>
    </ServicesProvider>
  );
}

export default App;
