import React from 'react'
import { Link } from 'react-router-dom'

const servicesData = [
  {
    title: "Search Engine Optimization (SEO)",
    path: "/services/search-engine-optimization",
    description: "Improve your website visibility and drive organic traffic with expert SEO strategies.",
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12c0 2.21 3.582 4 8 4s8-1.79 8-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    path: "/services/web-development",
    description: "Custom-built websites tailored to your brand, performance-optimized and scalable.",
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="12" rx="1" strokeWidth="1.5" />
        <circle cx="8" cy="10" r="2" strokeWidth="1.5" />
        <path d="M16 8h2M16 12h2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing",
    path: "/services/social-media-marketing",
    description: "Boost your brand presence and engagement across all social media platforms.",
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="1.5" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" strokeWidth="1.5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "PPC / Ads",
    path: "/services/ppc-ads",
    description: "Maximize ROI through targeted Pay-Per-Click advertising on Google and social media.",
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
        <path d="M8 7h8M8 11h8M8 15h4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "App Development",
    path: "/services/app-development",
    description: "Develop high-performing mobile apps that deliver seamless user experiences.",
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="6" y="3" width="12" height="18" rx="2" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="1" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    path: "/services/ui-ux-design",
    description: "Design intuitive and engaging interfaces to enhance user satisfaction and usability.",
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h16v4H4zM4 10h8v10H4zM14 10h6v6h-6z" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    path: "/services/graphic-design",
    description: "Create visually compelling designs that capture your brand and audience attention.",
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <path d="M12 2v20M2 12h20" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Influencer Marketing",
    path: "/services/influencer-marketing",
    description: "Leverage influencer partnerships to build trust and expand audience reach.",
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4" strokeWidth="1.5" />
        <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Content Marketing",
    path: "/services/content-marketing",
    description: "Craft high-quality content that informs, engages, and converts your target audience.",
    icon: (
      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M7 8h10M7 12h6M7 16h10" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ServiceCard() {
  return (
    <div className="bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-row-2 md:w-150 md:ml-17 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <Link
              to={service.path}
              key={index}
              className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-2"
            >
              <div className="mb-6 transition-colors duration-300 group-hover:text-cyan-300">
                {service.icon}
              </div>

              <h3 className="text-white text-xl font-semibold mb-4 leading-tight transition-colors duration-300 group-hover:text-blue-300">
                {service.title}
              </h3>

              <p className="text-gray-400 text-base mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center text-white hover:text-blue-400 transition-colors duration-200">
                <span className="mr-2">Read More</span>
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
