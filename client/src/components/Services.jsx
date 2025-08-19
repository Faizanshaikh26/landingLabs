// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Code,
//   ShoppingCart,
//   Stethoscope,
//   GraduationCap,
//   Truck,
//   Users,
//   Megaphone,
//   PenTool,
//   LineChart,
//   Search,
//   ScrollText,
// } from "lucide-react";

// const tabs = ["IT", "Marketing"];

// const servicesData = {
//   IT: [
//     {
//       title: "Software Development",
//       longDescription:
//         "We create robust software tailored to your business needs. From full-stack applications to seamless integrations, our engineering team ensures scalable, secure, and high-performance solutions.",
//       icon: <Code className="text-cyan-400 w-8 h-8" />,
//       hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//     {
//       title: "E-Commerce",
//       longDescription:
//         "Powerful e-commerce platforms that drive sales and optimize shopping experiences. We specialize in building intuitive storefronts and backend systems.",
//       icon: <ShoppingCart className="text-cyan-400 w-8 h-8" />,
//        hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//     {
//       title: "Healthcare Tech",
//       longDescription:
//         "Innovative platforms for health management, diagnostics, and telemedicine that streamline operations and improve patient care.",
//       icon: <Stethoscope className="text-cyan-400 w-8 h-8" />,
//        hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//     {
//       title: "Education Platforms",
//       longDescription:
//         "Dynamic e-learning systems that support educators and engage students through interactive, accessible learning experiences.",
//       icon: <GraduationCap className="text-cyan-400 w-8 h-8" />,
//        hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//     {
//       title: "Logistics Systems",
//       longDescription:
//         "Tech-driven logistics tools for tracking, routing, and managing deliveries efficiently and intelligently.",
//       icon: <Truck className="text-cyan-400 w-8 h-8" />,
//        hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//     {
//       title: "Talent Systems",
//       longDescription:
//         "Streamlined hiring and onboarding platforms powered by automation and data-driven insights.",
//       icon: <Users className="text-cyan-400 w-8 h-8" />,
//        hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//   ],
//   Marketing: [
//     {
//       title: "Influencer Marketing",
//       longDescription:
//         "Collaborate with key voices in your niche to expand reach and build authentic engagement across digital channels.",
//       icon: <Megaphone className="text-cyan-400 w-8 h-8" />,
//        hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//     {
//       title: "Graphic Design",
//       longDescription:
//         "Crafting visual identities that are both compelling and consistent. From logos to campaigns, we deliver visual impact.",
//       icon: <PenTool className="text-cyan-400 w-8 h-8" />,
//        hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//     {
//       title: "SEO Optimization",
//       longDescription:
//         "Boost your visibility on search engines with cutting-edge keyword strategy, technical SEO, and content optimization.",
//       icon: <Search className="text-cyan-400 w-8 h-8" />,
//        hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//     {
//       title: "Social Media Strategy",
//       longDescription:
//         "We create data-backed strategies and content plans that grow your presence across social media platforms.",
//       icon: <Megaphone className="text-cyan-400 w-8 h-8" />,
//        hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//     {
//       title: "Content Marketing",
//       longDescription:
//         "Drive value through storytelling. We create blogs, videos, and campaigns that educate, entertain, and convert.",
//       icon: <ScrollText className="text-cyan-400 w-8 h-8" />,
//        hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//     {
//       title: "PPC Advertising",
//       longDescription:
//         "Maximize ROI with pay-per-click campaigns designed to attract, convert, and scale your paid traffic performance.",
//       icon: <LineChart className="text-cyan-400 w-8 h-8" />,
//        hoverImage:"https://up.yimg.com/ib/th/id/OIP.6vWqpserGl2a5WvzUGdZIgHaEo?pid=Api&rs=1&c=1&qlt=95&w=186&h=116"
//     },
//   ],
// };

// export default function ServicesSnapshot() {
//   const [activeTab, setActiveTab] = useState("IT");

//   return (
//     <div className="bg-black text-white min-h-screen lg:p-8">
//       {/* Header */}
//       <section className="text-center max-w-xl mx-auto mb-10">
//         <h2 className="text-2xl md:text-4xl font-semibold text-[#EAEAEA]">
//           Our <span className="text-orange-500">Core Services</span>
//         </h2>
//         <p className="mt-4 md:text-4xl text-2xl text-[#CFFFE2]">
//           Choose a vertical to explore what we build
//         </p>
//       </section>

//       {/* Layout */}
//       <div className="flex max-w-7xl mx-auto">
//         {/* Fixed Tabs */}
//         <div className="sticky top-36 self-start flex flex-col space-y-4 min-w-[160px]">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className="relative px-4 py-2 text-lg font-medium text-white text-left"
//             >
//               {tab}
//               {activeTab === tab && (
//                 <motion.div
//                   layoutId="activeTabUnderline"
//                   className="absolute left-0 right-0 -bottom-1 h-[2px] bg-orange-500"
//                 />
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Scrollable Cards */}
//         <div className="ml-10 h-[70vh] overflow-y-auto pr-4 w-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.4 }}
//               className="space-y-6"
//             >
//               {servicesData[activeTab].map((service, index) => (
//   <motion.div
//   key={index}
//   initial={{ opacity: 0, y: 20 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.3, delay: index * 0.1 }}
//   viewport={{ once: true }}
//   className="group relative bg-[#0E1021] text-white p-10 rounded-2xl border border-white/10 max-w-5xl w-full"
// >
//   <div className="flex items-start space-x-6">
//     {/* Icon Section */}
//     <div className="w-20 h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center">
//       {service.icon}
//     </div>

//     {/* Text Content */}
//     <div className="space-y-3">
//       <h3 className="text-2xl font-bold">{service.title}</h3>
//       <p className="text-white/80 text-base leading-relaxed text-justify">
//         {service.longDescription}
//       </p>
//     </div>
//   </div>
// </motion.div>

// ))}

//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./service-card";

import smmBack from "../assets/images/services/smm-back.png"
import seoBack from "../assets/images/services/seo-back.png"
import smmFront from "../assets/images/services/smm-front.png"
import seoFront from "../assets/images/services/seo-front.png"
import appDevFront from "../assets/images/services/appdev-front.png"
import appDevBack from "../assets/images/services/appdev-back.png"
import UIUXFront from "../assets/images/services/uiux-1.png"
import UIUXBack from "../assets/images/services/uiux-2.png"
import cMarketingBack from "../assets/images/services/cMarketing-back.png"
import cMarketingFront from "../assets/images/services/cMarketing-front.png"
import graphicDesignBack from "../assets/images/services/graphicDesign-back.png"
import graphicDesignFront from "../assets/images/services/graphicDesign-front.png"
import ppcBack from "../assets/images/services/ppc-back.png"
import ppcFront from "../assets/images/services/ppc-front.png"
import webDevBack from "../assets/images/services/webDev-back.png"
import webDevFront from "../assets/images/services/webDev-front.png"
import influMaketingFront from "../assets/images/services/influMaketing-front.png"
import influMaketingBack from "../assets/images/services/influMaketing-back.png"

const servicesData = [
  {
    id: 1,
    title: "Search Engine Optimization(SEO)",
    image: seoFront,
    hoverImage:
      seoBack
  },
  {
    id: 2,
    title: "Web Development",
    image: webDevFront,
    hoverImage: webDevBack,
  },
  {
    id: 3,
    title: "Social Media Marketing",
    image: smmFront,
    hoverImage:
      smmBack
  },
  {
    id: 4,
    title: "PPC / Ads",
    image: ppcFront,
    hoverImage: ppcBack,
  },
  {
    id: 5,
    title: "App Development",
    image: appDevFront,
    hoverImage: appDevBack
  },
  {
    id: 6,
    title: "UI/UX Design",
    image: UIUXFront,
    hoverImage: UIUXBack,
  },
  {
    id: 7,
    title: "Graphic Design",
    image: graphicDesignFront,
    hoverImage: graphicDesignBack,
  },
  {
    id: 8,
    title: "Influencer Marketing",
    image: influMaketingFront,
    hoverImage: influMaketingBack,
  },
  {
    id: 9,
    title: "Content Marketing",
    image: cMarketingFront,
    hoverImage: cMarketingBack,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ServicesSnapshot() {


  return (
    <div className="bg-black w-full text-white min-h-screen lg:p-8 rounded-t-[80px] py-10">
      {/* Header */}
      <section className="text-center mx-auto mb-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#EAEAEA]">
          Our <span className="text-orange-500">Core Services</span>
        </h2>
        <p className="mt-4 md:text-4xl text-2xl text-[#CFFFE2]">
          Choose a vertical to explore what we build
        </p>
      </section>

      {/* Grid Layout with animation */}
      <div className="w-full px-[20%] sm:px-8 md:px-20">
        <motion.div
          className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >
          {servicesData.map((service, index) => {
            const isDown = index % 2 === 1;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={isDown ? "xl:translate-y-24" : "xl:translate-y-0"}
              >
                <ServiceCard
                  number={`/${String(index + 1).padStart(2, "0")}`}
                  title={service.title}
                  iconSrc={service.image}
                  hoverIconSrc={service.hoverImage}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
