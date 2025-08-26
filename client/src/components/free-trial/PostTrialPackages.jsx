import React from "react";
import {  ArrowRight } from "lucide-react"; // using lucide-react for icons (already available in Vite + Tailwind setup)

export default function PostTrialPackages() {
  return (
    <section className="w-full bg-white">
      {/* Image with text */}
      <div className="relative flex flex-col justify-items-center-safe">
        {/* Arrow on left side */}
        <div className="absolute right-40 px-10 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <ArrowRight size={32} className="text-black hover:text-orange-600" />
        </div>

        {/* Image */}
        <img
          src="/images/post-trial-bg.jpg"
          alt="Post Trial Packages"
          className="h-60 w-200 object-cover ml-80 mt-4"
        />

        {/* Centered Text */}
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-center absolute top-54  left-90">
          <span className="text-black uppercase">POST-TRIAL </span>
          <span className="text-orange-600 uppercase">PACKAGES</span>
        </h1>
      </div>

      {/* Table */}
      <div className="overflow-x-auto px-8 py-20">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-[#DAD6D5]">
              <th className="px-4 py-3">Package</th>
              <th className="px-4 py-3">Monthly Price (INR)</th>
              <th className="px-4 py-3">Platforms</th>
              <th className="px-4 py-3">Posts/Reels</th>
              <th className="px-4 py-3">Extra Services</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-[#EB714C] text-black font-bold px-12 py-3">Starter</td>
              <td className="border border-gray-300 px-4 font-bold py-3">₹8,999</td>
              <td className="border border-gray-300 px-4 font-bold py-3">2</td>
              <td className="border border-gray-300 px-4 font-bold py-3">12 & 4</td>
              <td className="border border-gray-300 px-4  py-3">
                Social media management: posting & scheduling, graphics, many more
              </td>
            </tr>
            <tr>
              <td className="bg-[#EB714C] border border-gray-300 text-black font-bold px-12 py-3">Growth</td>
              <td className="border border-gray-300 font-bold px-4 py-3">₹14,500</td>
              <td className="border border-gray-300 font-bold px-4 py-3">3</td>
              <td className="border border-gray-300 font-bold px-4 py-3">16/6</td>
              <td className="border border-gray-300  px-4 py-3">
                SEO blogs, meta ads, community management, UGC Content
              </td>
            </tr>
            <tr>
              <td className="bg-[#EB714C] border border-gray-300 text-black font-bold px-12 py-3">Pro</td>
              <td className="border border-gray-300 font-bold px-4 py-3">₹28,799</td>
              <td className="border border-gray-300 font-bold px-4 py-3">4+</td>
              <td className="border border-gray-300 font-bold px-4 py-3">20+/8+</td>
              <td className="border border-gray-300  px-4 py-3">
                Basic landing page, analytics and reporting, 1/Y maintenance
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-center mt-6">
          Visit us at{" "}
          <a href="https://www.landinglabs.in" className="text-black-200 ">
            www.landinglabs.in
          </a>
        </p>
      </div>
    </section>
  );
}
