import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Mail,
  Briefcase,
  Users,
  BarChart2,
  Settings,
  LogOut,
  PersonStanding,
  PersonStandingIcon,
  Projector,
  DollarSign,
  Workflow,
} from "lucide-react";

const navItems = [
  { name: "Clients", path: "/client", icon: PersonStandingIcon },
  { name: "Projects", path: "/projects", icon: Projector },
  { name: "My Team", path: "/team", icon: Users },
  { name: "Services", path: "/services", icon: BarChart2 },
  { name: "Billing", path: "/services", icon: DollarSign },
  { name: "Integartion", path: "/services", icon: Workflow },
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "Report Analysis", path: "/reportAnalysis", icon: Settings },

 
  
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col">
      {/* Scrollable section */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-slate-900 flex items-center justify-center text-white font-semibold">
              LL
            </div>
            <div className="text-lg font-bold">Landing Labs</div>
          </div>

          {/* Dashboard Highlight */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `mt-5 flex items-center gap-3 px-4 py-3 rounded-md ${isActive
                ? "bg-lime-300 text-slate-900 font-medium"
                : "text-slate-700"
              }`
            }
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </NavLink>

          {/* Other Nav Items */}
          <nav className="flex flex-col mt-4 space-y-1">
            {navItems.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md mx-1 hover:bg-slate-100 transition ${isActive ? "bg-slate-100 font-medium" : "text-slate-700"
                  }`
                }
              >
                <Icon size={18} />
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Fixed bottom profile */}
      <div className="p-5 border-t">
        <div className="flex items-center gap-3">
          <img
            src="/path/to/avatar.jpg"
            alt="Nora Watson"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-medium">Nora Watson</div>
            <div className="text-xs text-slate-500">Sales Manager</div>
          </div>
        </div>

        <button className="w-full mt-4 text-sm flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100">
          <LogOut size={16} />
          Log Out
        </button>
      </div>
    </aside>
  );
}
