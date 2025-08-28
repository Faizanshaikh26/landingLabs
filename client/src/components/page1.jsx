//// Page1.jsx
//import React from "react";
//
//import logoSrc from "../assets/images/Logo- landing labs-black.png";
//import rightImg from "../assets/images/banner-image.jpg";
//
//export default function ViralLandingPage() {
//  return (
//    <div className="flex flex-col md:flex-row h-auto md:h-screen bg-white">
//      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 py-8 md:pl-20 md:pt-8 bg-white">
//        <img src={logoSrc} alt="LANDING LABS.IN Logo" className="w-32 md:w-40 mb-6 md:mb-10" />
//        <div className="relative">
//          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-900 tracking-wider z-10">
//            GO VIRAL
//          </h1>
//          <span
//            className="absolute top-8 sm:top-20 md:top-38 lg:top-20 left-0 text-xl sm:text-3xl md:text-6xl font-bold text-gray-400 opacity-85 font-cursive pointer-events-none z-0 ml-2 sm:ml-4 md:ml-8"
//            style={{
//              textShadow: "2px 4px 8px rgba(0,0,0,0.18)",
//              fontFamily: "'Pacifico', cursive",
//            }}
//          >
//            Go Further ....
//          </span>
//        </div>
//        <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-700 mt-7 sm:mt-16 md:mt-20 mb-2 md:mb-4">
//          Your business growth starts here, risk-free.
//        </p>
//        <p className="text-base sm:text-lg font-medium text-gray-800">
//          Visit us at <a href="https://www.landinglabs.in" className="underline">www.landinglabs.in</a>
//        </p>
//      </div>
//      <div className="w-full md:w-1/2 flex justify-center items-center bg-accent px-4 py-8 md:px-8 md:py-8">
//        <div className="relative w-full sm:w-[350px] md:w-[470px] h-[320px] sm:h-[420px] md:h-[600px] flex items-center justify-center rounded-2xl overflow-hidden shadow-xl">
//          <img
//            src={rightImg}
//            alt="Main Banner"
//            className="w-full h-auto object-cover rounded-2xl"
//          />
//        </div>
//      </div>
//    </div>
//  );
//}
//
//


////page-2
//import React from "react";
//import freeTrialImg from "../assets/images/page-logo/free-Trial.png";
//
//export default function ZeroToTrendingPage() {
//  return (
//    <div className="relative min-h-screen w-full bg-white">
//      <div className="flex justify-center pt-8 sm:pt-10 md:pt-14 mb-6 sm:mb-8 md:mb-10 w-full">
//        <img
//          src={freeTrialImg}
//          alt="Free Trial Badge"
//          className="h-24 sm:h-28 md:h-35 w-auto"
//        />
//      </div>
//      <div className="w-full flex flex-col items-center px-4">
//        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] font-bold tracking-tight leading-tight text-black text-center mb-2">
//          From Zero to Trending
//          
//        </h1>
//        <div className="text-[1.5rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[4rem] font-normal text-black text-center leading-snug max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mr-0 sm:mr-0 md:mr-0 lg:mr-70">
//          Your first 30 days on us<br />
//          — results included.
//        </div>
//      </div>
//      
//      <div className="absolute right-0 bottom-0 w-2 h-16 sm:h-20 bg-black"/>
//    </div>
//  );
//}
//
//


////page3
//
//import React from "react";
//
//import cinnamonImg from "../assets/images/food-industries.jpg";
//import kampoImg from "../assets/images/education-industries.jpg";
//import kiElementImg from "../assets/images/tech-startUp-industries.jpg";
//import stylishProductImg from "../assets/images/realEstate-industries.jpg"; 
//export default function LandingRightSection() {
//  return (
//    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#FF6A00]">
//      <div className="w-full lg:w-3/5">
//        <div className="mx-4 sm:mx-8 md:mx-12 lg:ml-15 w-auto lg:w-[100%] bg-white p-6 sm:p-10 md:p-16 relative flex flex-col justify-between">
//          <p className="uppercase tracking-widest text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
//            your audience is online. are you?
//          </p>
//          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 sm:mb-6 leading-tight text-black">
//            The <br /> Digital Reality
//          </h1>
//          <div className="text-base sm:text-lg text-gray-900 mb-6 sm:mb-8">
//            <span className="font-bold">73%</span> of buying decisions start online <br />
//            <span className="font-bold">Social media</span> now drives more brand trust than traditional ads <br />
//            Without <span className="font-bold">digital presence</span>, businesses lose to competitors every day
//          </div>
//          <p className="text-sm sm:text-base text-gray-900">
//            Visit us at www.landinglabs.in
//          </p>
//        </div>
//
//        <div className="w-full lg:w-[120%] h-auto sm:h-60 md:h-80 bg-gray-300 flex flex-col sm:flex-row gap-4 sm:gap-2 p-4 sm:p-0 mt-0 lg:-mt-25">
//          <div className="shadow-md rounded-md p-3 sm:p-6">
//            <img
//              src={cinnamonImg}
//              alt="Cinnamon"
//              className="w-full h-40 sm:h-50 object-cover rounded mt-0 lg:mt-20 ml-0 lg:ml-18"
//            />
//          </div>
//
//          <div className="shadow-md rounded-md p-3 sm:p-6">
//            <img
//              src={kampoImg}
//              alt="How to Kampo"
//              className="w-full h-40 sm:h-50 object-cover rounded mt-0 lg:mt-20 ml-0 lg:ml-5"
//            />
//            
//          </div>
//
//          <div className="shadow-md rounded-md p-3 sm:p-6">
//            <img
//              src={kiElementImg}
//              alt="Ki Element"
//              className="w-full h-40 sm:h-50 object-cover rounded mt-0 lg:mt-20 ml-0 lg:-ml-8"
//            />
//          </div>
//        </div>
//      </div>
//
//      <div className="w-full lg:w-2/5 relative flex flex-col items-center justify-center py-10 lg:py-0 lg:-mt-40">
//        <div className="relative w-[80%] sm:w-[60%] md:w-[50%] lg:w-full max-w-xs mb-6 sm:mb-10">
//          <img
//            src={stylishProductImg}
//            alt="Stylish Product"
//            className="rounded-lg shadow-lg w-full"
//          />
//          <span
//            className="absolute -bottom-6 right-0 sm:ml-0 md:ml-20 lg:ml-40 text-white text-3xl sm:text-4xl md:text-5xl font-[Pacifico] select-none pointer-events-none"
//            style={{ textShadow: "2px 2px 12px rgba(0,0,0,0.18)" }}
//          >
//            Stylish
//          </span>
//        </div>
//
//        <div className="text-content-container">
//          <div className="text-white text-4xl sm:text-5xl text-center lg:text-left ml-0 lg:ml-65 font-semibold mt-16 lg:mt-28">100X</div>
//          <div className="text-black text-2xl sm:text-3xl text-center lg:text-right ml-0 lg:ml-35">
//            Launch Smarter,<br />Grow Faster.
//          </div>
//        </div>
//      </div>
//    </div>
//  );
//}
//

//page-4
import React from "react";
import leftBgImg from "../assets/images/about-us-banner.webp";
import rightCardImg from "../assets/images/services-banner.png";

export default function ProblemSectionReplication() {
  return (
    <div className="relative w-full min-h-screen bg-white font-sans overflow-hidden">
      <div className="w-full h-[200px] sm:h-[280px] md:h-[320px] relative z-0">
        <img
          src={leftBgImg}
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
          src={rightCardImg}
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


