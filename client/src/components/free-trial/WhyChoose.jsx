import React from "react";

export default function WhyChoose() {
  return (
    <section className="bg-[#f4f0e8] px-8 md:px-20 py-16 md:py-24 flex flex-col md:flex-row gap-12">
      {/* Left side - Text */}
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-snug">
          Why Choose <br /> <span className="text-black">Landing Labs..</span>
        </h2>
        <ul className="space-y-4 text-lg md:text-xl font-semibold">
          <li>EXPERIENCED CROSS-INDUSTRY TEAM</li>
          <li>CREATIVE + DATA-DRIVEN APPROACH</li>
          <li>TRANSPARENT REPORTING</li>
          <li>SCALABLE STRATEGIES FOR SMALL TO LARGE BUSINESSES</li>
          <li>COMMITMENT TO CLIENT GROWTH</li>
        </ul>
        <p className="mt-10 text-lg">
          Visit us at{" "}
          <a
            href="https://www.landinglabs.in"
            className="underline text-black hover:text-orange-500 transition"
          >
            www.landinglabs.in
          </a>
        </p>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="/images/why-choose.png"
          alt="Why Choose Landing Labs"
          className="max-w-full h-auto bg-[#f4f0e8]"
        />
      </div>
    </section>
  );
}
