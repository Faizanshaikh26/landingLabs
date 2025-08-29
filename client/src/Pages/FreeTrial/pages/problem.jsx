import React from "react";



export default function ProblemSectionReplication() {
  return (
    <div className="relative w-full min-h-screen bg-white font-sans overflow-hidden">
      <div className="w-full h-[200px] sm:h-[280px] md:h-[320px] relative z-0">
        <img
          src="https://landing-labs.vercel.app/assets/realEstate-industries-DuTQFo6-.jpg"
          alt="Brand Banner"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.85)" }}
        />
      </div>
      
      <div
        className="
          absolute z-20
          left-1/2 lg:left-2/3
          top-[130px] sm:top-[160px] lg:top-[180px]
          -translate-x-1/2 lg:-translate-x-12
          w-[88vw] sm:w-[400px] min-h-[250px] lg:min-h-[340px]
          flex flex-col shadow-2xl rounded-lg overflow-hidden
        "
        style={{ boxShadow: "0 10px 40px rgba(80,30,10,0.18)" }}
      >
        <img
          src="https://landing-labs.vercel.app/assets/retail-Industries-BB3XYCoD.jpg"
          alt="Oktoberfest"
          className="w-full h-[180px] sm:h-[260px] lg:h-[360px] object-cover"
        />
        <div className="bg-[#FF6A00] w-full h-[56px] sm:h-[72px] lg:h-[86px] flex flex-col justify-center items-start px-4 lg:px-7">
          <div className="text-base sm:text-lg font-semibold text-white">
            Startup Launch Kits
          </div>
          <div className="text-xs sm:text-sm text-black">
            Brand + Website + GTM Strategy
          </div>
        </div>
      </div>

      <div 
        className="
          relative z-10 w-full flex flex-col 
          px-4 sm:px-8 lg:px-16 
          pt-[280px] sm:pt-[320px] lg:pt-8 
          pb-10 bg-white
        "
        style={{ 
          marginTop: window.innerWidth >= 1024 ? "-30px" : "0px" 
        }}
      >
        <div className="uppercase tracking-[.18em] sm:tracking-[.22em] lg:tracking-[.28em] text-gray-700 text-base sm:text-lg mb-2 lg:mt-2 -mt-18">
          What's Holding Your Brand Back?
        </div>
        <div className="text-4xl sm:text-6xl lg:text-8xl font-bold text-black mb-3 sm:mb-5 lg:mb-7 leading-tight lg:-mt-2">
          The Problem
        </div>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-800 mb-5 sm:mb-6 ml-4 sm:ml-6 lg:-mt-2">
          <li>Low engagement on social media</li>
          <li>Poor website traffic &amp; SEO ranking</li>
          <li>No clear brand identity or voice</li>
          <li>Wasted ad spend with no measurable ROI</li>
        </ul>
        <div className="text-xs sm:text-base text-gray-900 ml-4 sm:ml-6 lg:-mt-1">
          Visit us at <a href="https://www.landinglabs.in" className="underline">www.landinglabs.in</a>
        </div>
      </div>
    </div>
  );
}