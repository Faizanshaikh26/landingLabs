"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import retail from "../assets/images/retail-Industries.jpg";
import finance from "../assets/images/finance-industries.jpg";
import realEstate from "../assets/images/realEstate-industries.jpg";
import healthCare from "../assets/images/healthCare-industries.jpg";
import foodAndRestaurant from "../assets/images/food-industries.jpg";
import education from "../assets/images/education-industries.jpg";
import techStartup from "../assets/images/tech-startUp-industries.jpg";

const industries = [
  { id: 1, title: "Retail", description: "Elevate your retail business with AI-led personalization, virtual shopping assistants, automated customer service, demand forecasting, and optimized inventory.", fullDescription: "...", imageUrl: retail },
  { id: 2, title: "Real Estate", description: "Leverage property listing marketplace, virtual tours, and AI-powered analytics to transform your real estate operations.", fullDescription: "...", imageUrl: realEstate },
  { id: 3, title: "Finance", description: "Personalize your banking experience, automate fraud detection, and optimize investment strategies with our AI-driven financial solutions.", fullDescription: "...", imageUrl: finance },
  { id: 4, title: "Education", description: "Provide the best experience with AI-powered personalized learning paths, automated grading, and smart content recommendations.", fullDescription: "...", imageUrl: education },
  { id: 5, title: "Healthcare", description: "Revolutionize patient care with AI diagnostics, personalized treatment plans, and efficient hospital management systems.", fullDescription: "...", imageUrl: healthCare },
  { id: 6, title: "Food & Restaurant", description: "Enhance dining experiences with AI-powered menu recommendations, smart ordering systems, and kitchen automation.", fullDescription: "...", imageUrl: foodAndRestaurant },
  { id: 7, title: "Startup", description: "Empower your startup with scalable AI tools, lean process automation, and data-driven decision-making platforms.", fullDescription: "...", imageUrl: techStartup },
];

export function Industries() {
  const len = industries.length;
  const [activeIndex, setActiveIndex] = useState(0); // absolute index into industries
  const [startIndex, setStartIndex] = useState(0);   // window start (absolute index)
  const windowSize = 5;
  const visibleSize = Math.min(windowSize, len);
  const currentIndustry = industries[activeIndex];

  // helper to check whether an absolute index is inside the current circular window
  const isIndexInWindow = (index, start, size) => {
    for (let i = 0; i < size; i++) {
      if ((start + i) % len === index) return true;
    }
    return false;
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % len;
      setStartIndex((prevStart) => {
        // if next would be outside the current window, shift window right by 1
        if (!isIndexInWindow(next, prevStart, visibleSize)) {
          return (prevStart + 1) % len;
        }
        return prevStart;
      });
      return next;
    });
  };

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const prevIx = (prev - 1 + len) % len;
      setStartIndex((prevStart) => {
        // if prev would be outside the current window, shift window left by 1
        if (!isIndexInWindow(prevIx, prevStart, visibleSize)) {
          return (prevStart - 1 + len) % len;
        }
        return prevStart;
      });
      return prevIx;
    });
  };

  // clicking a tab: set active, and if not visible, bring it into view (as start)
  const handleClickTab = (index) => {
    setActiveIndex(index);
    setStartIndex((prevStart) => (isIndexInWindow(index, prevStart, visibleSize) ? prevStart : index));
  };

  // mobile select change: set active and ensure visible
  const handleSelect = (e) => {
    const idx = Number(e.target.value);
    setActiveIndex(idx);
    setStartIndex((prevStart) => (isIndexInWindow(idx, prevStart, visibleSize) ? prevStart : idx));
  };

  // build visible window
  const visibleIndustries = Array.from({ length: visibleSize }, (_, i) => industries[(startIndex + i) % len]);

  // Animations (kept same as your original)
  const textContainer = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" } },
  };
  const textItem = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } } };
  const imageAnim = { hidden: { opacity: 0, scale: 0.9, x: 40 }, show: { opacity: 1, scale: 1, x: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }, exit: { opacity: 0, scale: 0.9, x: -40, transition: { duration: 0.4 } } };

  return (
    <section className="w-full lg:mt-29 pb-10 lg:pb-32 px-4 sm:px-6 lg:px-8 text-primaryText">
      <motion.h2 className="text-3xl md:text-4xl font-bold text-orange-500 text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        Industries <span className="text-primaryText"> We Empower</span>
      </motion.h2>

      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        {/* Mobile Dropdown */}
        <div className="block md:hidden mb-10">
          <label htmlFor="industrySelect" className="block text-sm font-medium text-primaryText mb-2">Industries We Empower</label>
          <select id="industrySelect" value={activeIndex} onChange={handleSelect} className="w-full border border-gray-600 text-primaryText px-4 py-2 rounded-md bg-transparent">
            {industries.map((industry, index) => (
              <option key={industry.id} value={index}>{industry.title}</option>
            ))}
          </select>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center min-h-[420px] relative">
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div key={currentIndustry.id + "-text"} variants={textContainer} initial="hidden" animate="show" exit={{ opacity: 0, x: -40, transition: { duration: 0.4 } }}>
              <motion.h3 variants={textItem} className="text-4xl md:text-5xl font-bold mb-4">{currentIndustry.title}</motion.h3>
              <motion.p variants={textItem} className="text-secondaryText text-lg leading-relaxed mb-6">{currentIndustry.description}</motion.p>
              <motion.button variants={textItem} whileHover={{ scale: 1.07, boxShadow: "0px 5px 20px rgba(255,165,0,0.5)" }} whileTap={{ scale: 0.95 }} className="px-6 py-3 border border-orange-500 text-primaryText rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-200">Read More</motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Right Image */}
          <AnimatePresence mode="wait">
            <motion.div key={currentIndustry.id + "-image"} className="flex justify-center md:justify-end relative" variants={imageAnim} initial="hidden" animate="show" exit="exit">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
                <motion.img src={currentIndustry.imageUrl} alt={currentIndustry.title} width={600} height={400} className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-500" />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Carousel Controls */}
        <div className="hidden md:flex relative mt-16 items-center justify-center">
          <motion.button onClick={handlePrev} whileHover={{ scale: 1.1 }} className="absolute left-0 p-3 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </motion.button>

          <div className="flex space-x-8 px-4 md:px-12">
            {visibleIndustries.map((industry) => {
              const index = industries.findIndex((ind) => ind.id === industry.id);
              const isActive = index === activeIndex;
              return (
                <motion.div key={industry.id} onClick={() => handleClickTab(index)} whileHover={{ scale: 1.05, y: -3 }} className={`flex-shrink-0 flex flex-col items-center cursor-pointer transition-all w-[180px] ${isActive ? "text-orange-500" : "text-primaryText"}`}>
                  <div className={`h-1 mb-4 rounded-full transition-all duration-300 ${isActive ? "w-24 bg-orange-500" : "w-12 bg-gray-600"}`} />
                  <h4 className="text-lg font-semibold mb-1 text-center">{industry.title}</h4>
                  <p className="text-sm text-secondaryText text-center max-w-[180px] truncate">{industry.description.split(".")[0]}...</p>
                </motion.div>
              );
            })}
          </div>

          <motion.button onClick={handleNext} whileHover={{ scale: 1.1 }} className="absolute right-0 p-3 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
