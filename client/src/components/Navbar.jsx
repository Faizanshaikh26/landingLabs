// import { ChevronDown, Facebook, Instagram, Linkedin, Youtube, Menu, X } from "lucide-react"
// import { useState } from "react"
// import logo from '../../public/images/landingLabs-logo.webp'

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <div className="w-full text-[#EAEAEA] bg-black">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Topbar */}
//         <div className="hidden lg:flex justify-between items-center py-2 text-sm border-b border-gray-800">
//           <div className="flex items-center space-x-8 mx-6">
//           <span>+91 738 739 2708</span>
//           <div className="flex mx-64">
//             <span className="items-center">Office 610, Suratwala Mark Plaza, Hinjewadi, 411057</span>
//           </div>
//         </div>
//         <div className="flex items-center space-x-4">
//           <Facebook className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
//           <Instagram className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
//           <Linkedin className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
//           <Youtube className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" />
//         </div>
//         </div>

//         {/* Navbar Main */}
//          <div className="flex items-center justify-between px-6 py-4">
//                {/* Logo */}
//                <div className="text-2xl font-bold">
//                 <img src={logo} alt="" />
//                </div>

//                {/* Desktop Nav */}
//                <div className="hidden lg:flex items-center space-x-8">
//                  <a href="#" className="hover:text-orange-500 transition-colors">Home</a>
//                  <div className="relative group">
//                    <button className="flex items-center space-x-1 hover:text-orange-500 transition-colors">
//                      <span>Services</span>
//                      <ChevronDown className="w-4 h-4" />
//                    </button>
//                  </div>
//                  <a href="#" className="hover:text-orange-500 transition-colors">About</a>
//                  <a href="#" className="hover:text-orange-500 transition-colors">Industries</a>
//                  <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
//                </div>

//                {/* CTA and Mobile Toggle */}
//                <div className="flex items-center space-x-4">
//                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium">
//                    BOOK A CALL
//                  </button>

//                  {/* Mobile Menu Button */}
//                  <button
//                    className="lg:hidden text-white"
//                    onClick={() => setIsOpen(true)}
//                  >
//                    <Menu className="h-6 w-6" />
//                  </button>
//                </div>
//              </div>
//       </div>

//       {isOpen && (
//         <div className="fixed inset-0 z-50 bg-black text-white p-6 transition-all duration-300">
//           <div className="flex justify-end">
//             <button onClick={() => setIsOpen(false)}>
//               <X className="w-6 h-6 text-white hover:text-orange-500" />
//             </button>
//           </div>
//           <div className="mt-8 flex flex-col space-y-6">
//             {/* Mobile Contact */}
//             <div className="space-y-2 text-sm border-b border-gray-800 pb-4">
//               <div>+91 738 739 2708</div>
//               <div>Office 610, Suratwala Mark Plaza, Hinjewadi, 411057</div>
//             </div>

//             {/* Nav Links */}
//             <a href="#" className="text-lg hover:text-orange-500">Home</a>
//             <button className="flex items-center justify-between text-lg hover:text-orange-500">
//               <span>Services</span>
//               <ChevronDown className="w-4 h-4" />
//             </button>
//             <a href="#" className="text-lg hover:text-orange-500">About</a>
//             <a href="#" className="text-lg hover:text-orange-500">Industries</a>
//             <a href="#" className="text-lg hover:text-orange-500">Contact</a>

//             {/* Social Links */}
//             <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
//               <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
//               <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
//               <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
//               <Youtube className="w-5 h-5 hover:text-orange-500 cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


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
import { Link } from 'react-router-dom'

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
        className={`transition-all duration-500 ease-in-out ${isScrolled ? scrollDirection
          ? "backdrop-blur-md bg-gray-950/70 py-2 shadow-md" : "backdrop-blur-md bg-gray-950/70 py-2 shadow-md"
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
                <a href="https://www.facebook.com/share/16wqfNsNHL/"> <Facebook className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" /></a>


                <a href="https://www.instagram.com/landinglabs_?igsh=Njc1YjZvdjc1Y2J1"> <Instagram className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" /></a>
                <a href="https://www.linkedin.com/company/landing-labs/">   <Linkedin className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" /></a>
                <a href="https://www.youtube.com/@landinglabs">  <Youtube className="w-4 h-4 hover:text-orange-500 cursor-pointer transition-colors" /></a>



              </div>
            </div>
          )}


          {/* Main Navbar */}
          <div className="flex items-center justify-between px-6 transition-all duration-300">
            {/* Logo */}
            <div className={`transition-all ${isScrolled ? "w-28" : "w-36"}`}>
              <Link to='/'><img src={logo} alt="Landing Labs Logo" className="w-full" /></Link>

            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
              <Link to='/' className="hover:text-orange-500 transition-colors">
                Home
              </Link>
              <div className="relative group">
                <Link to='/services'> <button className="flex items-center space-x-1 hover:text-orange-500 transition-colors">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button></Link>

              </div>


              <Link to='/about-us' className="hover:text-orange-500 transition-colors">  About</Link>
              <Link to="/career " className="hover:text-orange-500 transition-colors">
                Career
              </Link>
              <Link to="/contact-us" className="hover:text-orange-500 transition-colors">
                Contact
              </Link>
              <Link to="/pricing" className="hover:text-orange-500 transition-colors">
                Pricing
              </Link>
            </div>

            {/* CTA & Mobile Button */}
            <div className="flex items-center space-x-4">
              {/* Hide this button on mobile */}

              <Link to='/contact-us'> <button className="hidden lg:inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium">
                BOOK A CALL
              </button></Link>


              {/* Always show Menu on mobile */}
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
            <Link to="/" className="text-lg hover:text-orange-500">
              Home
            </Link>
            <button className="flex items-center justify-between text-lg hover:text-orange-500">

              <Link to="/services"> <span>Services</span></Link>

              <ChevronDown className="w-4 h-4" />
            </button>
            <Link to="/about-us" className="text-lg hover:text-orange-500">
              About
            </Link>
            <Link to="/career "className="text-lg hover:text-orange-500">
              Career
            </Link>
            <Link to="/contact-us" className="text-lg hover:text-orange-500">
              Contact
            </Link>
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">

              <a href="https://www.facebook.com/share/16wqfNsNHL/"> <Facebook className="w-5 h-5 hover:text-orange-500 cursor-pointer" /></a>
              <a href="https://www.instagram.com/landinglabs_?igsh=Njc1YjZvdjc1Y2J1">       <Instagram className="w-5 h-5 hover:text-orange-500 cursor-pointer" /></a>
              <a href="https://www.linkedin.com/company/landing-labs/">  <Linkedin className="w-5 h-5 hover:text-orange-500 cursor-pointer" /></a>
              <a href="https://www.youtube.com/@landinglabs">      <Youtube className="w-5 h-5 hover:text-orange-500 cursor-pointer" /></a>
              +



            </div>
          </div>


          <button className=" bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium mt-4">
            BOOK A CALL
          </button>


        </div>
      )}
    </div>
  );
}

