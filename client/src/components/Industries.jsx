"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import retailCol from "../assets/images/retail-IndustriesCol.jpg.png"
import retail from "../assets/images/retail-Industries.jpg"

const industries = [
  {
    id: 1,
    title: "Retail",
    description:
      "Elevate your retail business with AI-led personalization, virtual shopping assistants, automated customer service, demand forecasting, and optimized inventory.",
    fullDescription:
      "Elevate your retail business with AI-led personalization, virtual shopping assistants, automated customer service, demand forecasting, and optimized inventory. Our solutions help you enhance customer experience, streamline operations, and boost sales.",
    imageUrl: retailCol,
  },
  {
    id: 2,
    title: "Real Estate",
    description:
      "Leverage property listing marketplace, virtual tours, and AI-powered analytics to transform your real estate operations.",
    fullDescription:
      "Leverage property listing marketplace, virtual tours, and AI-powered analytics to transform your real estate operations. We provide tools for better client matching, efficient property management, and insightful market predictions.",
    imageUrl: retail
  },
  {
    id: 3,
    title: "Finance",
    description:
      "Personalize your banking experience, automate fraud detection, and optimize investment strategies with our AI-driven financial solutions.",
    fullDescription:
      "Personalize your banking experience, automate fraud detection, and optimize investment strategies with our AI-driven financial solutions. Secure and efficient, our platforms help you stay ahead in the competitive financial landscape.",
    imageUrl: "https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_640.jpg",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Provide the best experience with AI-powered personalized learning paths, automated grading, and smart content recommendations.",
    fullDescription:
      "Provide the best experience with AI-powered personalized learning paths, automated grading, and smart content recommendations. Our educational tools foster engagement and improve learning outcomes for students of all ages.",
    imageUrl: "https://cdn.pixabay.com/photo/2014/10/14/20/14/library-488690_640.jpg",
  },
  {
    id: 5,
    title: "Healthcare",
    description:
      "Revolutionize patient care with AI diagnostics, personalized treatment plans, and efficient hospital management systems.",
    fullDescription:
      "Revolutionize patient care with AI diagnostics, personalized treatment plans, and efficient hospital management systems. Improve patient outcomes and operational efficiency with our cutting-edge healthcare solutions.",
    imageUrl: "https://cdn.pixabay.com/photo/2020/05/14/02/31/covid-19-5169689_640.jpg",
  },
];

export function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentIndustry = industries[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? industries.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === industries.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="w-full lg:mt-29 pb-10 lg:pb-32  px-4 sm:px-6 lg:px-8  text-primaryText">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Industries <span className="text-primaryText"> We Empower</span>
      </motion.h2>

      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        {/* Mobile Dropdown */}
        <div className="block md:hidden mb-10">
          <label htmlFor="industrySelect" className="block text-sm font-medium text-primaryText mb-2">
            Industries We Empower
          </label>
          <select
            id="industrySelect"
            value={activeIndex}
            onChange={(e) => setActiveIndex(Number(e.target.value))}
            className="w-full border border-gray-600  text-primaryText px-4 py-2 rounded-md"
          >
            {industries.map((industry, index) => (
              <option key={industry.id} value={index}>
                {industry.title}
              </option>
            ))}
          </select>
        </div>

        {/* Content Grid with animation */}
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndustry.id + "-text"}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primaryText mb-4">
                {currentIndustry.title}
              </h3>
              <p className="text-secondaryText text-lg leading-relaxed mb-6">
                {currentIndustry.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-orange-500 text-primaryText rounded-full hover:bg-orange-500 hover:text-primaryText transition-colors duration-200"
              >
                Read More
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Right Image with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndustry.id + "-image"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center md:justify-end"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={currentIndustry.imageUrl || "/placeholder.svg"}
                  alt={currentIndustry.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Carousel Navigation */}
        <div className="hidden md:flex relative mt-16 items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 p-3 rounded-full bg-gray-800  hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Previous industry"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex overflow-x-auto md:overflow-hidden space-x-8 px-4 md:px-12 scrollbar-hide">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 flex flex-col items-center cursor-pointer group transition-all w-[180px] ${
                  index === activeIndex ? "text-orange-500" : "text-primaryText"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={`h-1 mb-4 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-24 bg-blue-500" : "w-12 bg-gray-600 group-hover:bg-gray-500"
                  }`}
                />
                <h4 className="text-lg font-semibold mb-1 text-center">{industry.title}</h4>
                <p className="text-sm text-secondaryText text-center max-w-[180px] truncate">
                  {industry.description.split(".")[0]}...
                </p>
              </motion.div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Next industry"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
