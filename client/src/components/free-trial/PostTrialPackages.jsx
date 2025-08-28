import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function PostTrialPackages() {
  return (
    <section className="w-full bg-white">
      {/* Image with text */}
      <div className="relative flex flex-col items-center">
        {/* Image */}
        <img
          src="/images/post-trial-bg.jpg"
          alt="Post Trial Packages"
          className="h-60 w-160 mt-4"
        />

        {/* Centered Text at bottom of image */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl md:text-5xl font-extrabold text-center py-60">
          <span className="text-black uppercase">POST-TRIAL </span>
          <span className="text-orange-600 uppercase">PACKAGES</span>
        </h1>

        
{/* Show on right side for medium+ screens */}
<div className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-6 sm:right-6 md:right-16 lg:right-28">
  <BsArrowRight className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9" />
</div>
</div>

      {/* Table */}
      <div className="overflow-x-auto px-4 md:px-8 py-20 md:py-20">
        <table className="w-full border-collapse border border-gray-300 text-left text-sm md:text-base">
          <thead>
            <tr className="bg-[#DAD6D5] text-center">
              <th className="px-2 md:px-4 py-2 md:py-3">Package</th>
              <th className="px-2 md:px-4 py-2 md:py-3">Monthly Price (INR)</th>
              <th className="px-2 md:px-4 py-2 md:py-3">Platforms</th>
              <th className="px-2 md:px-4 py-2 md:py-3">Posts/Reels</th>
              <th className="px-2 md:px-4 py-2 md:py-3">Extra Services</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-[#EB714C] text-black font-bold px-6 md:px-12 py-2 md:py-3">Starter</td>
              <td className="border border-gray-300 px-2 md:px-4 font-bold py-2 md:py-3">₹8,999</td>
              <td className="border border-gray-300 px-2 md:px-4 font-bold py-2 md:py-3">2</td>
              <td className="border border-gray-300 px-2 md:px-4 font-bold py-2 md:py-3">12 & 4</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3">
                Social media management: posting & scheduling, graphics, many more
              </td>
            </tr>
            <tr>
              <td className="bg-[#EB714C] border border-gray-300 text-black font-bold px-6 md:px-12 py-2 md:py-3">Growth</td>
              <td className="border border-gray-300 font-bold px-2 md:px-4 py-2 md:py-3">₹14,500</td>
              <td className="border border-gray-300 font-bold px-2 md:px-4 py-2 md:py-3">3</td>
              <td className="border border-gray-300 font-bold px-2 md:px-4 py-2 md:py-3">16/6</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3">
                SEO blogs, meta ads, community management, UGC Content
              </td>
            </tr>
            <tr>
              <td className="bg-[#EB714C] border border-gray-300 text-black font-bold px-6 md:px-12 py-2 md:py-3">Pro</td>
              <td className="border border-gray-300 font-bold px-2 md:px-4 py-2 md:py-3">₹28,799</td>
              <td className="border border-gray-300 font-bold px-2 md:px-4 py-2 md:py-3">4+</td>
              <td className="border border-gray-300 font-bold px-2 md:px-4 py-2 md:py-3">20+/8+</td>
              <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3">
                Basic landing page, analytics and reporting, 1/Y maintenance
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-center mt-6">
          Visit us at{" "}
          <a href="https://www.landinglabs.in" className="text-black-200">
            www.landinglabs.in
          </a>
        </p>
      </div>
    </section>
  );
}
