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
import logoBlack from "../assets/images/Logo- landing labs-black.png";
import logoWhite from "../assets/images/Og-Logo.png";
import { NavLink } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

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


 const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 25,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
 exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};


const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};
  return (
    <div className="w-full text-primaryText fixed top-0 z-50">
      {/* Navbar Container with scroll logic */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled
            ? scrollDirection
              ? "backdrop-blur-md bg-gray-950/70 text-white py-2 shadow-md"
              : "backdrop-blur-md bg-gray-950/70 py-2 shadow-md"
            : "bg-transparent py-5 "
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
                  <Facebook className="w-4 h-4 hover:text-accentHover cursor-pointer transition-colors" />
                </a>
                <a href="https://www.instagram.com/landinglabs_?igsh=Njc1YjZvdjc1Y2J1">
                  <Instagram className="w-4 h-4 hover:text-accentHover cursor-pointer transition-colors" />
                </a>
                <a href="https://www.linkedin.com/company/landing-labs/">
                  <Linkedin className="w-4 h-4 hover:text-accentHover cursor-pointer transition-colors" />
                </a>
                <a href="https://www.youtube.com/@landinglabs">
                  <Youtube className="w-4 h-4 hover:text-accentHover cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          )}

          {/* Main Navbar */}
          <div className="flex items-center justify-between px-6 transition-all duration-300">
            {/* Logo */}
            <div className={`transition-all ${isScrolled ? "w-28" : "w-36"}`}>
              <NavLink to="/">

              {
          isScrolled
            ? scrollDirection
              ?  <img src={logoWhite} alt="Landing Labs Logo" className="w-full" />
              : <img src={logoBlack} alt="Landing Labs Logo" className="w-full" />
            : <img src={logoBlack} alt="Landing Labs Logo" className="w-full" />

        }

              
               
              </NavLink>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-accent font-medium"
                    : "text-accentHover transition-colors"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-primaryText font-medium"
                    : "hover:text-accentHover transition-colors"
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
                    ? "text-primaryText font-medium"
                    : "hover:text-accentHover transition-colors"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive
                    ? "text-primaryText font-medium"
                    : "hover:text-accentHover transition-colors"
                }
              >
                Career
              </NavLink>

              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "text-primaryText font-medium"
                    : "hover:text-accentHover transition-colors"
                }
              >
                Contact
              </NavLink>

              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive
                    ? "text-primaryText font-medium"
                    : "hover:text-accentHover transition-colors"
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
                className="lg:hidden text-secondaryText"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

  
  <AnimatePresence>
  {isOpen && (
    <motion.div
      key="mobile-drawer"
      initial="hidden"
      animate="visible"
      exit="exit"
      
      variants={drawerVariants}
      className="fixed inset-0 z-50 bg-black text-white p-6 transition-all duration-300"
    >
      <div className="flex justify-end">
        <button onClick={() => setIsOpen(false)}>
          <X className="w-6 h-6 text-white hover:text-accentHover" />
        </button>
      </div>

      <motion.div className="mt-8 flex flex-col space-y-6">
        <motion.div
          variants={itemVariants}
          className="space-y-2 text-sm border-b border-gray-800 pb-4"
        >
          <div>+91 738 739 2708</div>
          <div>Office 610, Suratwala Mark Plaza, Hinjewadi, 411057</div>
        </motion.div>

        {[
          { to: "/", label: "Home" },
          { to: "/services", label: "Services" },
          { to: "/about-us", label: "About" },
          { to: "/career", label: "Career" },
          { to: "/contact-us", label: "Contact" },
          { to: "/pricing", label: "Pricing" },
        ].map(({ to, label }) => (
          <motion.div key={to} variants={itemVariants}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-primaryText text-lg"
                  : "hover:text-accentHover text-lg"
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </NavLink>
          </motion.div>
        ))}

        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-4 pt-4 border-t border-gray-800"
        >
          <a href="https://www.facebook.com/share/16wqfNsNHL/">
            <Facebook className="w-5 h-5 hover:text-accentHover cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/landinglabs_?igsh=Njc1YjZvdjc1Y2J1">
            <Instagram className="w-5 h-5 hover:text-accentHover cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/company/landing-labs/">
            <Linkedin className="w-5 h-5 hover:text-accentHover cursor-pointer" />
          </a>
          <a href="https://www.youtube.com/@landinglabs">
            <Youtube className="w-5 h-5 hover:text-accentHover cursor-pointer" />
          </a>
        </motion.div>

        <motion.div variants={itemVariants}>
          <NavLink to="/contact-us">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium mt-4">
              BOOK A CALL
            </button>
          </NavLink>
        </motion.div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
