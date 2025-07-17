import React from "react";
import heroVideo from "../assets//videos/hero-video.mp4"; 

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden  md:pt-60">
   
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col  justify-center h-full max-w-7xl mx-auto px-4 text-white">
        <h4 className="text-white text-lg font-semibold mb-2">
          This Isn’t Just a Platform. It’s a Possibility Engine
        </h4>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Launch Smarter <br /> Grow Faster.
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-6">
          Empower your brand, engage your audience, elevate your success —
          <br />
          Tailored growth solutions fueled by creativity and data.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full w-fit">
          GET STARTED
        </button>

        
        

        
      </div>
    </div>
  );
}
