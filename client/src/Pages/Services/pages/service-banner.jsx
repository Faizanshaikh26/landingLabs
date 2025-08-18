// import { Star } from 'lucide-react';
// import React from 'react'

// export default function ServiceBanner() {

//       const services = [
//   "Search Engine Optimization (SEO)",
//   "Web Development",
//   "Social Media Marketing",
//   "PPC / Ads",
//   "App Development",
//   "UI/UX Design",
//   "Graphic Design",
//   "Influencer Marketing",
//   "Content Marketing",
// ];
//   return (
//    <div className="h-[70vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Background pattern/texture */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

//       {/* Vertical accent line */}
//       <div className="absolute left-1/2 top-8 w-px h-12 bg-gradient-to-b from-blue-400 to-purple-500 transform -translate-x-1/2"></div>

//       {/* Main content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
//         {/* Main heading */}
//         <div className="text-center mb-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             <span className="text-white">Our </span>
//             <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               services
//             </span>
//           </h1>

//           {/* Breadcrumb */}
//           <nav className="text-gray-400 text-lg">
//             <span>Home</span>
//             <span className="mx-3">/</span>
//             <span>Services</span>
//           </nav>
//         </div>
//       </div>

//       {/* Services ticker at bottom */}
//       <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
//         <div className="overflow-hidden py-6">
//           <div className="flex animate-scroll whitespace-nowrap">
//             {/* First set of services */}
//             {services.map((service, index) => (
//               <div key={index} className="flex items-center text-white text-xl md:text-2xl font-medium">
//                 <span className="px-8">{service}</span>
//                 <span className="text-blue-400 text-3xl">+</span>
//               </div>
//             ))}
//             {/* Duplicate for seamless loop */}
//             {services.map((service, index) => (
//               <div key={`duplicate-${index}`} className="flex items-center text-white text-xl md:text-2xl font-medium">
//                 <span className="px-8">{service}</span>
//                 <span className="text-blue-400 text-3xl">
//                     <Star/>
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
        
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//       `}</style>
//     </div>
//   )
// }





import { Star } from "lucide-react";

export default function ServiceBanner() {
  const services = [
    "Search Engine Optimization (SEO)",
    "Web Development",
    "Social Media Marketing",
    "PPC / Ads",
    "App Development",
    "UI/UX Design",
    "Graphic Design",
    "Influencer Marketing",
    "Content Marketing",
  ];

  return (
    <div className="w-full relative overflow-hidden text-primaryText">
      {/* Hero Content Section */}
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight max-w-4xl">
          This Isn’t Just a Platform. It’s a{" "}
          <span className="text-accent">Possibility Engine</span>
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-secondaryText">
          Launch Smarter. Grow Faster.
        </h2>

        <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 px-2">
          Empower your brand, engage your audience, elevate your success —
          Tailored growth solutions fueled by creativity and data.
        </p>

        <button className="mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent hover:bg-accentHover rounded-full text-base sm:text-lg font-medium shadow-md transition">
          Get Started
        </button>
      </div>

      {/* Services ticker below hero */}
      <div className="bg-primaryCardBg border-t border-secondaryText">
  <div className="overflow-hidden py-3 sm:py-6">
    <div className="flex animate-scroll whitespace-nowrap">
      {/* First set of services */}
      {services.map((service, index) => (
        <div
          key={index}
          className="flex items-center text-primaryText text-sm sm:text-lg md:text-xl lg:text-2xl font-medium"
        >
          <span className="px-2 sm:px-4 md:px-6 lg:px-8">{service}</span>
          <span className="text-accent text-lg sm:text-2xl md:text-3xl">+</span>
        </div>
      ))}
      {/* Duplicate for seamless loop */}
      {services.map((service, index) => (
        <div
          key={`duplicate-${index}`}
          className="flex items-center text-primaryText text-sm sm:text-lg md:text-xl lg:text-2xl font-medium"
        >
          <span className="px-2 sm:px-4 md:px-6 lg:px-8">{service}</span>
          <span className="text-accent text-lg sm:text-2xl md:text-3xl">
            <Star />
          </span>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* CSS Animation */}
      <style jsx>{`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll 20s linear infinite; /* default faster for mobile */
  }
  @media (min-width: 640px) {
    .animate-scroll {
      animation: scroll 30s linear infinite; /* normal speed on tablets */
    }
  }
  @media (min-width: 1024px) {
    .animate-scroll {
      animation: scroll 40s linear infinite; /* slower on big screens */
    }
  }
`}</style>

    </div>
  );
}




