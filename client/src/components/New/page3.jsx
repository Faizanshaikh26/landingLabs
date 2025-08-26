import React from "react";
import img1 from "./imag1.jpg";
import img2 from "./imag2.jpg";

export default function NewTrailPage3() {
  return (
    <div
  className="text-white min-h-screen flex flex-col items-center justify-center px-8 py-12 max-w-7xl mx-auto"
  style={{
    background: " radial-gradient(circle at center, #1e1e2f, #000000)"
  }}
>

      {/* Top Bar */}
      <div className="w-full flex justify-between items-center mb-12">
        <div className="text-sm tracking-widest">LANDINGLABS</div>
        <div className="flex items-center space-x-4">
          <span className="text-lg cursor-pointer">🔍</span>
          <span className="text-lg cursor-pointer">☰</span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-6xl font-bold text-center mb-12">
        Why a Free Trial?
      </h1>

      {/* Content Section */}
      <div className="flex w-full max-w-6xl justify-between items-center">
        {/* Left Images */}
        <div className="flex space-x-6">
          <img
            src={img1}
            alt="Ad 1"
            className="w-64 h-64 object-cover"
          />
          <img
            src={img2}
            alt="Ad 2"
            className="w-64 h-64 object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col items-start ml-12">
          <button className="border border-white px-6 py-2 rounded-full mb-6 text-sm tracking-wider">
            TRY BEFORE YOU INVEST
          </button>
          <ul className="space-y-3 text-lg">
            <li>• We believe results speak louder than promises</li>
            <li>• No upfront cost for the first 30 days</li>
            <li>• We build trust through action, not just words</li>
            <li>• You see the real impact before committing</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex justify-between items-center mt-16 text-sm">
        <p>VISIT US AT WWW.LANDINGLABS.IN</p>
        <p>@LANDINGLABS_</p>
      </div>
    </div>
  );
}
