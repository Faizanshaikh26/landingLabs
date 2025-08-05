// import React from 'react';

// export default function Portfolio() {
//     return (
//         <div className="min-h-[90vh] md:min-h-screen  sm:py-8 lg:py-12">
//             <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//                 <div className="text-center mb-10">
//                     <h2 className=" text-3xl md:text-4xl tracking-tight font-bold  text-[#E82561] ">
//                         Our <span className="text-[#EAEAEA]">Portfolio</span>
//                     </h2>
//                     <p className="mt-4  md:text-2xl text-[#CFFFE2]">
//                         A full-service digital growth lab for startups, creators,
//                         <span className="text-[#EAEAEA]">and challenger brands who want to win.</span>
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
//                     {/* Image - 1 */}
//                     <a
//                         href="#"
//                         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
//                     >
//                         <img
//                             src="https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-3.png.webp"
//                             loading="lazy"
//                             alt="Photo by Minh Pham"
//                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
//                         />
//                         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
//                         <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
//                     </a>

//                     {/* Image - 2 */}
//                     <a
//                         href="#"
//                         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
//                     >
//                         <img
//                             src="https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-2.png.webp"
//                             loading="lazy"
//                             alt="Photo by Magicle"
//                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
//                         />
//                         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
//                         <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
//                     </a>

//                     {/* Image - 3 */}
//                     <a
//                         href="#"
//                         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
//                     >
//                         <img
//                             src="https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1.png.webp"
//                             loading="lazy"
//                             alt="Photo by Martin Sanchez"
//                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
//                         />
//                         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
//                         <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
//                     </a>

//                     {/* Image - 4 */}
//                     <a
//                         href="#"
//                         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
//                     >
//                         <img
//                             src="https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1024x1024.png.webp"
//                             loading="lazy"
//                             alt="Photo by Lorenzo Herrera"
//                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
//                         />
//                         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
//                         <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// }

//import React from 'react';
//import { motion } from 'framer-motion';
//
//export default function Portfolio() {
//    const cardVariants = {
//        hidden: { opacity: 0, scale: 0.95, y: 30 },
//        visible: (i) => ({
//            opacity: 1,
//            scale: 1,
//            y: 0,
//            transition: {
//                delay: i * 0.15,
//                duration: 0.6,
//                ease: 'easeOut',
//            },
//        }),
//    };
//
//    const items = [
//        {
//            label: 'VR',
//            image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-3.png.webp',
//        },
//        {
//            label: 'Tech',
//            image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-2.png.webp',
//            span: 'md:col-span-2',
//        },
//        {
//            label: 'Dev',
//            image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1.png.webp',
//            span: 'md:col-span-2',
//        },
//        {
//            label: 'Retro',
//            image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1024x1024.png.webp',
//        },
//    ];
//
//    return (
//        <div className="min-h-[70vh] md:min-h-screen   ">
//            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//                {/* Header */}
//                <motion.div
//                    className="text-center mb-12"
//                    initial={{ opacity: 0, y: 40 }}
//                    whileInView={{ opacity: 1, y: 0 }}
//                    transition={{ duration: 0.6, ease: 'easeOut' }}
//                    viewport={{ once: true }}
//                >
//                    <h2 className="text-3xl md:text-4xl font-bold text-accent">
//                        Our <span className="text-secondaryText">Portfolio</span>
//                    </h2>
//                    <p className="mt-4 md:text-2xl text-primaryText">
//                        A full-service digital growth lab for startups, creators,
//                        <span className="text-secondaryText"> and challenger brands who want to win.</span>
//                    </p>
//                </motion.div>
//
//                {/* Grid */}
//                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
//                    {items.map((item, i) => (
//                        <motion.a
//                            key={i}
//                            href="#"
//                            custom={i}
//                            variants={cardVariants}
//                            initial="hidden"
//                            whileInView="visible"
//                            viewport={{ once: true }}
//                            className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${item.span || ''}`}
//                        >
//                            <img
//                                src={item.image}
//                                alt={item.label}
//                                loading="lazy"
//                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
//                            />
//                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 transition duration-300 group-hover:opacity-60" />
//                            <motion.span
//                                initial={{ opacity: 0, y: 10 }}
//                                whileHover={{ opacity: 1, y: 0 }}
//                                transition={{ duration: 0.3 }}
//                                className="relative z-10 ml-4 mb-3 inline-block text-sm text-white md:text-lg"
//                            >
//                                {item.label}
//                            </motion.span>
//                        </motion.a>
//                    ))}
//                </div>
//            </div>
//        </div>
//    );
//}

import React, { useState } from "react";
import Footer from "../Footer";
import { FaPaintBrush, FaCode, FaObjectGroup, FaBullhorn } from "react-icons/fa";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("Website");

  const tabs = ["Website", "Landing Page", "Email", "Creatives"];

  const portfolioData = {
    Website: [
      {
        title: "Beetel",
        image: "https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg",
        tags: [
          { icon: <FaPaintBrush />, label: "Art Direction" },
          { icon: <FaCode />, label: "Development" },
          { icon: <FaObjectGroup />, label: "UI/UX" }
        ]
      },
      {
        title: "Elan",
        image: "https://img.freepik.com/free-photo/blurred-cityscape_1203-1484.jpg",
        tags: [
          { icon: <FaPaintBrush />, label: "Art Direction" },
          { icon: <FaBullhorn />, label: "Digital Marketing" },
          { icon: <FaCode />, label: "Development" },
          { icon: <FaObjectGroup />, label: "UI/UX" }
        ]
      }
    ],
    "Landing Page": [
      {
        title: "Aks Clothings",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24363425.jpg"
      },
      {
        title: "Spatika",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24363426.jpg"
      },
      {
        title: "UNITEES",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "REIFY",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      }
    ],
    Email: [
      { image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24363427.jpg" },
      { image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24363428.jpg" },
      { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
      { image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" },
      { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" }
    ],
    Creatives: [
      { image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" },
      { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" },
      { image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24363425.jpg" },
      { image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24363426.jpg" },
      { image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" },
      { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" }
    ]
  };

  // Responsive logic
  let colCount = 2;
  let showTitle = false;
  let showTags = false;

  if (activeTab === "Website") {
    showTitle = true;
    showTags = true;
    colCount = 2;
  } else if (activeTab === "Landing Page") {
    showTitle = true;
    showTags = false;
    colCount = 2;
  } else {
    showTitle = false;
    showTags = false;
    colCount = 3;
  }

  const activePortfolio = portfolioData[activeTab] || [];
  let rows = [];
  for (let i = 0; i < activePortfolio.length; i += colCount) {
    rows.push(activePortfolio.slice(i, i + colCount));
  }

  return (
    <>
      <section className="bg-black min-h-screen py-14 px-2 md:px-10">
        {/* Tabs Bar */}
        <div className="flex justify-center flex-wrap gap-6 mb-14">
          {tabs.map(tab => (
            <button
              key={tab}
              className={`px-12 py-3 text-lg font-extrabold border-2 border-yellow-400 uppercase tracking-widest
                ${
                  activeTab === tab
                    ? "bg-yellow-400 text-black"
                    : "bg-black text-yellow-400"
                }
                rounded transition-all duration-150 focus:outline-none shadow-md`}
              onClick={() => setActiveTab(tab)}
              style={{
                minWidth: 170,
                letterSpacing: "1.5px"
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Responsive rows */}
        <div className="max-w-[1800px] mx-auto flex flex-col gap-16">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 ${
                colCount === 2
                  ? "md:grid-cols-2"
                  : "sm:grid-cols-2 md:grid-cols-3"
              } gap-x-12 gap-y-16`}
            >
              {row.map((proj, i) => (
                <div
                  key={i}
                  className="bg-[#181818] border border-neutral-800 border-b-4 border-b-yellow-400 shadow-xl rounded-xl flex flex-col transition-transform duration-200 hover:scale-[1.025]"
                  style={{
                    minHeight: colCount === 2 ? 380 : 260,
                  }}
                >
                  {/* Image with top white border */}
                  <div className="overflow-hidden w-full border-t border-white rounded-t-xl">
                    <img
                      src={proj.image}
                      alt={showTitle ? proj.title : ""}
                      className={`w-full ${
                        colCount === 2
                          ? "h-[262px] md:h-[307px] lg:h-[352px]"
                          : "h-[200px] md:h-[240px] lg:h-[260px]"
                      } object-cover`}
                      style={{ minWidth: "100%", objectFit: "cover" }}
                    />
                  </div>
                  {showTitle && (
                    <div className="text-white text-[1.18rem] md:text-2xl font-bold tracking-wide mt-7 px-7 pb-4">
                      {proj.title}
                    </div>
                  )}
                  {showTags && proj.tags && (
                    <div className="flex flex-nowrap items-center space-x-12 mb-5 px-7 overflow-x-auto whitespace-nowrap">
                      {proj.tags.map((tag, j) => (
                        <div
                          key={j}
                          className="flex items-center text-yellow-400 font-medium text-base"
                        >
                          <span className="text-yellow-400 text-lg mr-2">{tag.icon}</span>
                          {tag.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Filler for alignment */}
              {row.length < colCount &&
                Array.from({ length: colCount - row.length }).map(
                  (_, idx2) => <div key={idx2} className="hidden md:block" />
                )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
