


import React from 'react';

export default function ServiceSidebar() {
  const serviceCategories = [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      link: "/services/search-engine-optimization",
    },
    {
      id: 2,
      title: "Web Development",
      link: "/services/web-development",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      link: "/services/social-media-marketing",
    },
    {
      id: 4,
      title: "PPC / Ads",
      link: "/services/ppc-ads",
    },
    {
      id: 5,
      title: "App Development",
      link: "/services/app-development",
    },
    {
      id: 6,
      title: "UI/UX Design",
      link: "/services/ui-ux-design",
    },
    {
      id: 7,
      title: "Graphic Design",
      link: "/services/graphic-design",
    },
    {
      id: 8,
      title: "Influencer Marketing",
      link: "/services/influencer-marketing",
    },
    {
      id: 9,
      title: "Content Marketing",
      link: "/services/content-marketing",
    },
  ];

  return (
    <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-20 self-start">
      {/* Service Category Section */}
      <div className=" border border-slate-700/50 rounded-3xl md:p-8">
        <h3 className="text-primaryText text-xl font-semibold md:mb-3 p-3 md:p-0 ">Service Category</h3>
        <div className="space-y-2">
          {serviceCategories.map((service) => (
            <a
              href={service.link}
              key={service.id}
              className="flex items-center justify-between py-3 px-4 rounded-xl hover:bg-primaryCardBg transition-colors cursor-pointer group"
            >
              <span className="text-primaryText  transition-colors">
                {service.title}
              </span>
              <svg
                className="w-5 h-5 text-secondaryText group-hover:text-secondaryText group-hover:translate-x-1 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* How Can We Help Section */}
      <div className="border border-slate-700/50 rounded-3xl p-4">
        <div className="w-16 h-16 rounded-full  flex items-center justify-center ">
          <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        </div>
        <h3 className="text-primaryText text-xl font-semibold mb-2">How Can We Help</h3>
        <p className="text-secondaryText mb-8 leading-relaxed">
          Whenever you need help, our team is just a message or call away.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-secondaryText">+91 738 739 2708</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-secondaryText">info@landinglabs.in</span>
          </div>
        </div>
      </div>
    </div>
  );
}