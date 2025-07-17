import React from "react";

import serviceImage from "../assets/images/service-image.jpg";
const opportunities = [
  {
    title: "Staffing and Recruiting",
    description: "Helping companies find the best talent.",
    imageUrl:
      "https://a.storyblok.com/f/172398/618x632/d19e67600d/industries-staffing-and-recruiting.png",
  },
  {
    title: "Software Development",
    description: "Building scalable and innovative solutions.",
    imageUrl:
      "https://a.storyblok.com/f/172398/619x632/15eaa07068/industries-software-development.png",
  },
  {
    title: "E-Commerce",
    description: "Creating seamless online shopping experiences.",
    imageUrl:
      "https://a.storyblok.com/f/172398/619x632/3c3685cec1/industries-ecommerce.png",
  },
  {
    title: "Healthcare",
    description: "Improving patient outcomes through technology.",
    imageUrl:
      "https://a.storyblok.com/f/172398/618x632/efdf7227ef/industries-consulting.png",
  },
  {
    title: "Education",
    description: "Delivering modern learning experiences.",
    imageUrl:
      "https://a.storyblok.com/f/172398/619x632/1b43e11447/industries-real-estate.png",
  },
  {
    title: "Logistics and Supply Chain",
    description: "Optimizing delivery and distribution networks.",
    imageUrl:
      "https://a.storyblok.com/f/172398/619x632/5af1ca29e1/industries-marketing-agencies.png",
  },
];

export default function ServicesSnapshot() {
  return (
    <div className="p-8">
      {/* Header Section */}
      <section className="text-center max-w-lg mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-[#EAEAEA]">
         Services <span className="text-orange-500">Snapshot</span>
        </h1>
        <p className="mt-4 md:text-4xl text-3xl text-[#CFFFE2]">
          What We Build  <span className="text-[#EAEAEA]">in the Lab:</span> 
        </p>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto p-4  rounded-lg ">
        <div className="flex flex-col md:flex-row ">
          {/* Left Section */}
          <div
  id="left"
  className="w-full md:w-[75%] text-[#EAEAEA] p-4 rounded-lg"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {opportunities.map((opportunity, index) => (
      <div
        key={index}
        className="relative group overflow-hidden rounded-lg shadow-lg bg-white border border-gray-300 transform transition-all duration-300 hover:shadow-xl"
      >
        {/* Opportunity Image */}
        <img
          src={opportunity.imageUrl}
          alt={opportunity.title}
          className="w-full h-[300px] object-cover transform group-hover:scale-110 transition duration-500"
        />

        {/* Title on Image */}
        <div className="absolute bottom-[5px] w-full bg-opacity-50 text-[#EAEAEA] p-2 transition-opacity duration-500 group-hover:opacity-0">
          <p className="text-sm font-semibold">
            {opportunity.title}
          </p>
        </div>

        {/* Overlay with Text */}
        <div className="absolute inset-0 bg-[#76abaeb6] bg-opacity-90 text-[#EAEAEA] p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.3, 0.7, 0.4, 1)] flex flex-col justify-end">
          <div>
            <p className="text-[16px] mb-2">{opportunity.title}</p>
            <p className="text-xs">{opportunity.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


          {/* Right Section */}

        <div
  id="right"
  className="w-full md:w-[25%] mt-4 text-black rounded-lg border border-gray-300 overflow-hidden flex flex-col"
>
  <div id="image" className="w-full flex-1">
    <img
      src={serviceImage}
      alt="image"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>
      </section>
    </div>
  );
}