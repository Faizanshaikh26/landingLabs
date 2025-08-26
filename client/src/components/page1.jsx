//// Page1.jsx
//import React from "react";
//
//import logoSrc from "../assets/images/Logo- landing labs-black.png";
//import rightImg from "../assets/images/banner-image.jpg";
//
//export default function ViralLandingPage() {
//  return (
//    <div className="flex h-screen bg-white">
//      <div className="flex flex-col justify-center pl-20 pt-8 w-[50%] bg-white">
//        <img src={logoSrc} alt="LANDING LABS.IN Logo" className="w-40 mb-10" />
//        <div className="relative">
//          <h1 className="text-9xl font-bold text-gray-900 tracking-wider z-10">
//            GO VIRAL
//          </h1>
//          <span
//            className="absolute top-28 left-0 text-6xl font-bold text-gray-400 opacity-85 font-cursive pointer-events-none z-0 ml-8"
//            style={{
//              textShadow: "2px 4px 8px rgba(0,0,0,0.18)",
//              fontFamily: "'Pacifico', cursive",
//            }}
//          >
//            Go Further ....
//          </span>
//        </div>
//        <p className="text-2xl font-extrabold text-gray-700 mt-20 mb-4">
//          Your business growth starts here, risk-free.
//        </p>
//        <p className="text-lg font-medium text-gray-800">
//          Visit us at www.landinglabs.in
//        </p>
//      </div>
//      <div className="flex justify-center items-center w-[50%] bg-accent">
//        <div className="relative w-[470px] h-[600px] flex items-center justify-center rounded-2xl overflow-hidden shadow-xl">
//          <img
//            src={rightImg}
//            alt="Main Banner"
//            className="w-full h-full object-cover rounded-2xl"
//          />
//        </div>
//      </div>
//    </div>
//  );
//}
//

//page-2

//import React from "react";
//import freeTrialImg from "../assets/images/page-logo/free-Trial.png";
//
//export default function ZeroToTrendingPage() {
//  return (
//    <div className="relative min-h-screen w-full bg-white">
//      <div className="flex justify-center pt-14 mb-10 w-full">
//        <img
//          src={freeTrialImg}
//          alt="Free Trial Badge"
//          className="h-35 w-auto"
//        />
//      </div>
//      <div className="w-full flex flex-col items-center">
//        <h1 className="text-[4.5rem] md:text-[6rem] font-bold tracking-tight leading-tight text-black text-center mb-2">
//          From Zero to Trending
//          
//        </h1>
//        <div className="text-[2.6rem] md:text-[4rem] font-normal text-black text-center leading-snug max-w-4xl mr-70">
//          Your first 30 days on us<br />
//          — results included.
//        </div>
//      </div>
//      
//      <div className="absolute right-0 bottom-0 w-2 h-20 bg-black"/>
//    </div>
//  );
//}
//



////page3
//
//import React from "react";
//
//import cinnamonImg from "../assets/images/food-industries.jpg";
//import kampoImg from "../assets/images/education-industries.jpg";
//import kiElementImg from "../assets/images/tech-startUp-industries.jpg";
//import stylishProductImg from "../assets/images/realEstate-industries.jpg"; 
//export default function Page4Replication() {
//  return (
//    <div className="w-full h-screen flex bg-[#FF6A00]">
//      <div >
//        <div className="ml-15 w-[100%] bg-white p-16 relative flex flex-col justify-between">
//          <p className="uppercase tracking-widest text-sm text-gray-700 mb-4">
//            your audience is online. are you?
//          </p>
//          <h1 className="text-6xl font-semibold mb-6 leading-tight text-black">
//            The <br /> Digital Reality
//          </h1>
//          <div className="text-lg text-gray-900 mb-8">
//            <span className="font-bold">73%</span> of buying decisions start online <br />
//            <span className="font-bold">Social media</span> now drives more brand trust than traditional ads <br />
//            Without <span className="font-bold">digital presence</span>, businesses lose to competitors every day
//          </div>
//          <p className="text-base text-gray-900">
//            Visit us at www.landinglabs.in
//          </p>
//        </div>
//
//        <div className="w-[120%] h-80 bg-gray-300 flex gap-2 -mt-26">
//          <div className=" shadow-md rounded-md p-6">
//            <img
//              src={cinnamonImg}
//              alt="Cinnamon"
//              className="w-full h-50 object-cover rounded mt-20 ml-18"
//            />
//          </div>
//
//          <div className="shadow-md rounded-md p-6">
//            <img
//              src={kampoImg}
//              alt="How to Kampo"
//              className="w-full h-50 object-cover rounded mt-20 ml-5"
//            />
//            
//          </div>
//
//          <div className="shadow-md rounded-md p-6">
//            <img
//              src={kiElementImg}
//              alt="Ki Element"
//              className="w-full h-50 object-cover rounded mt-20 -ml-8"
//            />
//          </div>
//        </div>
//      </div>
//
//      <div className="w-2/5 relative flex flex-col items-center justify-center -mt-40">
//        <div className="relative w-full max-w-xs mb-10">
//          <img
//            src={stylishProductImg}
//            alt="Stylish Product"
//            className="rounded-lg shadow-lg w-full"
//          />
//          <span
//            className="absolute -bottom-8 ml-40 text-white text-5xl font-[Pacifico] select-none pointer-events-none"
//            style={{ textShadow: "2px 2px 12px rgba(0,0,0,0.18)" }}
//          >
//            Stylish
//          </span>
//        </div>
//
//        <div className="text-white text-5xl text-left ml-65 font-semibold mt-28">100X</div>
//        <div className="text-black text-3xl ml-35 text-right">
//          Launch Smarter,<br />Grow Faster.
//        </div>
//      </div>
//    </div>
//  );
//}

//page 4

import React from "react";
import leftBgImg from "../assets/images/about-us-banner.webp";
import rightCardImg from "../assets/images/services-banner.png";

export default function ProblemSectionReplication() {
  return (
    <div className="relative w-full h-screen bg-white font-sans overflow-hidden">
      <div className="w-full h-[320px] relative z-0">
        <img
          src={leftBgImg}
          alt="Brand Banner"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.85)" }}
        />
      </div>

      <div
        className="absolute z-20 top-[180px] left-2/3 -translate-x-12 w-[400px] min-h-[340px] flex flex-col shadow-2xl rounded-lg overflow-hidden"
        style={{ 
          boxShadow: "0 10px 40px rgba(80,30,10,0.18)"
        }}
      >
        <img
          src={rightCardImg}
          alt="Oktoberfest"
          className="w-full h-[360px] object-cover"
        />
        
        <div className="bg-[#FF6A00] w-full h-[86px] flex flex-col justify-center items-start px-7">
          <div className="text-lg font-semibold text-white">
            Startup Launch Kits
          </div>
          <div className="text-sm text-black">
            Brand + Website + GTM Strategy
          </div>
        </div>
      </div>

      
      <div className="relative z-10 w-full flex flex-col px-16 pt-16 pb-10 bg-white"
        style={{ marginTop: "-40px" }} 
      >
        <div className="uppercase tracking-[.28em] text-gray-700 text-lg mb-2 -mt-2">
          What’s Holding Your Brand Back?
        </div>
        <div className="text-8xl font-bold text-black mb-7 leading-tight -mt-2">
          The Problem
        </div>
        <ul className="list-disc list-inside text-lg text-gray-800 mb-6 ml-6 -mt-2">
          <li>Low engagement on social media</li>
          <li>Poor website traffic &amp; SEO ranking</li>
          <li>No clear brand identity or voice</li>
          <li>Wasted ad spend with no measurable ROI</li>
        </ul>
        <div className="text-base text-gray-900 ml-6 -mt-1">
          Visit us at www.landinglabs.in
        </div>
      </div>
    </div>
  );
}



