import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/images/Og-Logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      setScrollDirection(direction);
      setIsScrolled(currentScrollY > 20);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="w-full text-[#EAEAEA] fixed top-0 z-50">
      {/* Navbar Container with scroll logic */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled
            ? scrollDirection
              ? "backdrop-blur-md bg-gray-950/70 py-2 shadow-md"
              : "backdrop-blur-md bg-gray-950/70 py-2 shadow-md"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Topbar */}
          {!isScrolled && (
            <div className="hidden lg:flex justify-between items-center text-sm border-b border-gray-800 mb-3 transition-all duration-300 ease-in-out">
              <div className="flex items-center space-x-8 mx-6 py-2">
                <span>+91 738 739 2708</span>
                <span className="ml-64">
                  Office 610, Suratwala Mark Plazzo, Hinjewadi, 411057
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <a href="https://www.facebook.com/share/16wqfNsNHL/">
                  <Facebook className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.instagram.com/landinglabs_?igsh=Njc1YjZvdjc1Y2J1">
                  <Instagram className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.linkedin.com/company/landing-labs/">
                  <Linkedin className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.youtube.com/@landinglabs">
                  <Youtube className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          )}

          {/* Main Navbar */}
          <div className="flex items-center justify-between px-6 transition-all duration-300">
            {/* Logo */}
            <div className={`transition-all ${isScrolled ? "w-28" : "w-36"}`}>
              <NavLink to="/">
                <img src={logo} alt="Landing Labs Logo" className="w-full" />
              </NavLink>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-medium"
                    : "hover:text-orange-500 transition-colors"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-medium"
                    : "hover:text-orange-500 transition-colors"
                }
              >
                <span className="flex items-center space-x-1">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </NavLink>

              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-medium"
                    : "hover:text-orange-500 transition-colors"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-medium"
                    : "hover:text-orange-500 transition-colors"
                }
              >
                Career
              </NavLink>

              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-medium"
                    : "hover:text-orange-500 transition-colors"
                }
              >
                Contact
              </NavLink>

              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-medium"
                    : "hover:text-orange-500 transition-colors"
                }
              >
                Pricing
              </NavLink>
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <NavLink to="/contact-us">
                <button className="hidden lg:inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium">
                  BOOK A CALL
                </button>
              </NavLink>
              <button
                className="lg:hidden text-white"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white p-6 transition-all duration-300">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <X className="w-6 h-6 text-white hover:text-orange-500" />
            </button>
          </div>
          <div className="mt-8 flex flex-col space-y-6">
            <div className="space-y-2 text-sm border-b border-gray-800 pb-4">
              <div>+91 738 739 2708</div>
              <div>Office 610, Suratwala Mark Plaza, Hinjewadi, 411057</div>
            </div>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 text-lg"
                  : "hover:text-orange-500 text-lg"
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 text-lg"
                  : "hover:text-orange-500 text-lg"
              }
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 text-lg"
                  : "hover:text-orange-500 text-lg"
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 text-lg"
                  : "hover:text-orange-500 text-lg"
              }
              onClick={() => setIsOpen(false)}
            >
              Career
            </NavLink>

            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 text-lg"
                  : "hover:text-orange-500 text-lg"
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 text-lg"
                  : "hover:text-orange-500 text-lg"
              }
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </NavLink>

            <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
              <a href="https://www.facebook.com/share/16wqfNsNHL/">
                <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/landinglabs_?igsh=Njc1YjZvdjc1Y2J1">
                <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/landing-labs/">
                <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
              </a>
              <a href="https://www.youtube.com/@landinglabs">
                <Youtube className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
              </a>
            </div>

            <NavLink to="/contact-us">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium mt-4">
                BOOK A CALL
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
