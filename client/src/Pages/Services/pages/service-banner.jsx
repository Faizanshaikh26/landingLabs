import React from 'react'

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
   <div className="h-[70vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background pattern/texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

      {/* Vertical accent line */}
      <div className="absolute left-1/2 top-8 w-px h-12 bg-gradient-to-b from-blue-400 to-purple-500 transform -translate-x-1/2"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Main heading */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              services
            </span>
          </h1>

          {/* Breadcrumb */}
          <nav className="text-gray-400 text-lg">
            <span>Home</span>
            <span className="mx-3">/</span>
            <span>Services</span>
          </nav>
        </div>
      </div>

      {/* Services ticker at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="overflow-hidden py-6">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of services */}
            {services.map((service, index) => (
              <div key={index} className="flex items-center text-white text-xl md:text-2xl font-medium">
                <span className="px-8">{service}</span>
                <span className="text-blue-400 text-3xl">+</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {services.map((service, index) => (
              <div key={`duplicate-${index}`} className="flex items-center text-white text-xl md:text-2xl font-medium">
                <span className="px-8">{service}</span>
                <span className="text-blue-400 text-3xl">+</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
