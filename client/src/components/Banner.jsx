import React from "react";
import bannerImg from "../../public/images/banner-image.jpg";

export default function Banner() {
  return (
    <div className="relative bg-[#060606] text-white h-auto min-h-[300px] rounded-lg max-w-7xl mx-auto my-10 mb-40 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-10 gap-6 md:gap-0">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
            Landing Labs Is Your Business Growth Partner.
          </h1>
          <p className="mb-6 text-base sm:text-lg">
            Founded on storytelling, and guided by data, Landing Labs blends
            creative flair and tailored strategies to help brands shine online.
          </p>
          <button className="bg-orange-500 hover:bg-[#A2D5C6] text-white px-6 py-3 sm:px-7 sm:py-4 rounded-lg font-medium transition">
            Book a free Consultation
          </button>
        </div>

       
      </div>
    </div>
  );
}
