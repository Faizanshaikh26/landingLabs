


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
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-2 sm:px-6 md:px-8 lg:px-12 ">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight 
                 w-full  sm:max-w-4xl">
          This Isn’t Just a Platform. It’s a{" "}
          <span className="text-accent">Possibility Engine</span>
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-secondaryText w-full sm:w-auto">
          Launch Smarter. Grow Faster.
        </h2>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600  w-full sm:max-w-2xl">
          Empower your brand, engage your audience, elevate your success —
          Tailored growth solutions fueled by creativity and data.
        </p>

        <button className="mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent hover:bg-accentHover rounded-full text-base sm:text-lg font-medium shadow-md transition">
          Get Started
        </button>
      </div>


      {/* Services ticker below hero */}
      <div className="bg-primaryCardBg border-y border-secondaryText">
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
    animation: scroll 5s linear infinite; /* default faster for mobile */
  }
  @media (min-width: 640px) {
    .animate-scroll {
      animation: scroll 10s linear infinite; /* normal speed on tablets */
    }
  }
  @media (min-width: 1024px) {
    .animate-scroll {
      animation: scroll 15s linear infinite; /* slower on big screens */
    }
  }
`}</style>

    </div>
  );
}




