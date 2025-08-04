import { NavLink } from "react-router-dom";
import { LayoutDashboard, Mail, Briefcase } from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Contacts", path: "/contacts", icon: Mail },
  { name: "Careers", path: "/careers", icon: Briefcase },
];

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-white shadow-md h-full">
      <div className="p-4 text-xl font-bold border-b">LandingLabs Admin</div>
      <nav className="flex flex-col mt-4">
        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 hover:bg-gray-200 ${
                isActive ? "bg-gray-200 font-medium" : ""
              }`
            }
          >
            <Icon size={20} />
            {name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
