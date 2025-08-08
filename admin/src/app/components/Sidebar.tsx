import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Mail,
  Briefcase,
  Users,
  ShieldCheck,
  Settings as SettingsIcon,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import React, { useState } from "react";

// Avatar image for Settings (replace with your own logo if desired)
const SettingsImage = () => (
  <span className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center">
    <SettingsIcon size={20} className="text-black" />
  </span>
);

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Contacts", path: "/contacts", icon: Mail },
  { name: "Careers", path: "/careers", icon: Briefcase },
];

const settingsNavItems = [
  { name: "Admin Users", path: "/settings/admin-users", icon: Users },
  { name: "Roles Permissions", path: "/settings/roles-permissions", icon: ShieldCheck },
  { name: "Integrations", path: "/settings/integrations", icon: SettingsIcon },
];

export default function Sidebar() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname.startsWith("/settings")) {
      setSettingsOpen(true);
    }
  }, [location.pathname]);

  return (
    <div className="w-64 bg-white text-black shadow-lg h-full flex flex-col border-r border-gray-200">
      <div className="p-4 text-xl font-bold border-b border-gray-200 bg-white">LandingLabs Admin</div>
      <nav className="flex flex-col mt-4 flex-1 overflow-y-auto">
        {/* Main nav items */}
        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 transition ${
                isActive ? "bg-gray-200 font-medium" : ""
              }`
            }
          >
            <Icon size={20} className="text-black" />
            {name}
          </NavLink>
        ))}

        <div className="border-t border-gray-200 my-4" />

        {/* Settings collapser */}
        <button
          type="button"
          onClick={() => setSettingsOpen(open => !open)}
          className={`flex items-center justify-between w-full px-4 py-2 rounded-md transition hover:bg-gray-100 focus:outline-none ${
            location.pathname.startsWith("/settings") ? "bg-gray-200 font-medium" : ""
          }`}
          aria-expanded={settingsOpen}
        >
          <span className="flex items-center gap-3">
            <SettingsImage />
            <span className="text-base font-medium">Settings</span>
          </span>
          {settingsOpen ? (
            <ChevronDown size={20} className="text-black" />
          ) : (
            <ChevronRight size={20} className="text-black" />
          )}
        </button>

        {/* Settings submenu */}
        {settingsOpen && (
          <div className="flex flex-col ml-8 mt-1">
            {settingsNavItems.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-100 text-sm transition 
                   ${isActive ? "bg-gray-200 font-medium" : ""}`
                }
              >
                <Icon size={16} className="text-black" />
                {name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
