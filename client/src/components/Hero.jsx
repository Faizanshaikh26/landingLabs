


import React from "react";
import hero from "../assets/images/hero-image-4.jpg"

export default function HeroSection() {
  return (

    <section className="text-primaryText pt-20 lg:pt-32   ">
  {/* Headings */}
  <div className="text-center mt-10">
    <h4 className="text-md md:text-lg mx-[4px] font-medium  text-orange-500">
      From AI-backed marketing funnels to custom-built CRMs
    </h4>
    <h1 className="text-3xl mb-8 md:text-5xl font-bold mt-2 text-primaryText">
      —all under one roof.
    </h1>
  </div>

  <div className="lg:max-w-7xl w-full mx-auto px-4 py-4 lg:py-16 relative">
    {/* Background Image */}
    <div
      className="relative w-full h-[400px] bg-cover bg-center rounded-[5px] md:rounded-3xl "
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Floating Text Box */}
     <div
  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] 
  p-3 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[70%] 
  rounded-xl text-center shadow-md border border-gray-700 z-20
  [@media(max-width:350px)]:p-1"
>
  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed text-gray-200
  [@media(max-width:450px)]:text-[8px]">
    With over 3 years in digital marketing and IT, our expert team brings deep domain knowledge, proven frameworks, and technical brilliance —{" "}
    <span className="font-semibold text-orange-500">we innovate with purpose</span> to solve real business problems.
  </p>
</div>

    </div>

    {/* CTA Button */}
    <div className="mt-10 text-center">
      <button className="border border-orange-500 px-6 py-2 rounded-full font-semibold text-sm text-orange-500 hover:bg-orange-500 hover:text-black transition">
        LEARN HOW WE DO IT
      </button>
    </div>
  </div>
</section>


  );
}
