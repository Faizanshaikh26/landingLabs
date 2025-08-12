import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const tabData = [
  {
    tab: "Digital Marketing",
    icon: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    title: "Digital Marketing",
    intro:
      "Partnering with DI Infotech ensures higher conversions, increased revenue, and sustained growth. Our data-driven strategies boost visibility, attract the right audience, and maximize sales.",
    services: [
      { name: "Social Media Marketing", description: "Social media builds brand authority, engagement, and sales. We create expert-led campaigns on Facebook, Instagram, and LinkedIn." },
      { name: "Performance Marketing", description: "Drive measurable results with data-driven ad strategies. Performance marketing focuses on ROI, scaling your brand with precision targeting." },
      { name: "Email Marketing", description: "Nurture leads and increase retention with targeted email campaigns. Convert more with automation, segmentation, and smart personalization." },
      { name: "Brand Management", description: "We build, position, and grow your brand consistently across all platforms to create lasting impressions." },
    ],
  },
  {
    tab: "Web Development",
    icon: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    title: "Web Development",
    intro:
      "We craft fast, scalable, and conversion-optimized websites that help businesses establish authority and drive sales.",
    services: [
      { name: "Website Development", description: "We develop SEO-friendly, fast-loading, and responsive websites that enhance credibility and boost conversions." },
      { name: "Ecommerce Website", description: "Our eCommerce platforms offer seamless shopping experiences, secure transactions, and growth analytics." },
      { name: "UI/UX Designing", description: "We create visually compelling and intuitive interfaces for maximum engagement and conversion." },
    ],
  },
  {
    tab: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    title: "Search Engine Optimization (SEO)",
    intro:
      "Rank higher, attract the right audience, and drive conversions with expert SEO strategies.",
    services: [
      { name: "Website SEO", description: "We optimize site structure, content, and performance to boost rankings and drive leads." },
      { name: "Ecommerce SEO", description: "Boost product visibility and conversions with tailored eCommerce SEO." },
    ],
  },
  {
    tab: "Our Ventures",
    icon: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    title: "Our Ventures",
    intro:
      "We ideate, build, and scale innovative products that create a lasting impact.",
    services: [
      { name: "Startup Incubation", description: "We support startups with ideation, prototyping, branding, and market strategies." },
      { name: "Tech Products", description: "We build and scale SaaS products and marketplaces across multiple industries." },
    ],
  },
];

export default function NavbarServices() {
  const [activeTab, setActiveTab] = useState(tabData[0].tab);
  const [activeService, setActiveService] = useState(0);
  const currentTab = tabData.find((tab) => tab.tab === activeTab);

  return (
    <div className="w-full mx-auto  py-6 px-3">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabData.map((tab) => (
          <button
            key={tab.tab}
            className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.tab
                ? "bg-accent text-black"
                : "bg-gray-100 text-black hover:bg-yellow-100"
            }`}
            onClick={() => {
              setActiveTab(tab.tab);
              setActiveService(0);
            }}
          >
            {tab.tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white border rounded-lg p-4 lg:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Section */}
        <div className="space-y-2">
          <img src={currentTab.icon} alt="icon" className="w-8 h-8 object-contain" />
          <h2 className="text-base font-semibold">{currentTab.title}</h2>
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">{currentTab.intro}</p>
        </div>

        {/* Center Buttons */}
        <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
          {currentTab.services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`w-full flex items-center justify-between px-3 py-2 border rounded-md transition ${
                index === activeService
                  ? "bg-yellow-50 border-yellow-300"
                  : "hover:bg-gray-50"
              }`}
            >
              <span className="text-xs md:text-sm font-medium text-left">{service.name}</span>
              <span className="bg-accent p-1 rounded-full">
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </span>
            </button>
          ))}
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-between h-full space-y-3">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            {currentTab.services[activeService].description}
          </p>
          <button className="self-start flex items-center gap-1.5 bg-accent hover:bg-yellow-400 text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full transition">
            Discover More
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
