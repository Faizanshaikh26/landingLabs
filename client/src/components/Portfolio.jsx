

// import { useState } from "react";
// import {
//   Paintbrush,
//   Code,
//   Smartphone,
//   Megaphone,
//   Mail,
//   Phone,
//   MessageSquare,
// } from "lucide-react";
// import Navbar from "./Navbar";
// import Footer from "../Footer";

// export default function Portfolio() {
//   const [activeTab, setActiveTab] = useState("Website");

//   const tabs = ["Website", "Landing Page", "Email", "Creatives"];

//   const cards = [
//     {
//       title: "Beetel",
//       image:
//         "https://tse3.mm.bing.net/th/id/OIP.4spHsN1O1hRm-INK_6zBQwHaHO?w=1349&h=1315&rs=1&pid=ImgDetMain&o=7&rm=3",
//       tags: [
//         { icon: Paintbrush, label: "Art Direction" },
//         { icon: Code, label: "Development" },
//         { icon: Smartphone, label: "UI/UX" },
//       ],
//     },
//     {
//       title: "Elan",
//       image:
//         "https://static.vecteezy.com/system/resources/previews/000/457/092/original/landing-page-template-of-online-copyright-and-trademark-illustration-concept-isometric-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg",
//       tags: [
//         { icon: Paintbrush, label: "Art Direction" },
//         { icon: Megaphone, label: "Digital Marketing" },
//         { icon: Code, label: "Development" },
//         { icon: Smartphone, label: "UI/UX" },
//       ],
//       showContacts: true,
//     },
//     {
//       title: "AutumnLane",
//       image: "https://i.ibb.co/WfxmYdH/autumnlane.png",
//       tags: [
//         { icon: Megaphone, label: "Digital Marketing" },
//         { icon: Paintbrush, label: "Art Direction" },
//         { icon: Code, label: "Development" },
//         { icon: Smartphone, label: "UI/UX" },
//       ],
//     },
//     {
//       title: "Style Union",
//       image: "https://i.ibb.co/Xbgdjkt/styleunion.png",
//       tags: [
//         { icon: Megaphone, label: "Digital Marketing" },
//         { icon: Paintbrush, label: "Art Direction" },
//         { icon: Smartphone, label: "UI/UX" },
//         { icon: Code, label: "Development" },
//       ],
//     },
//   ];

//   return (
// <>

// <Navbar/>

//     <div className="min-h-screen bg-white text-primaryText p-6 sm:p-8 lg:p-12 py-20 mt-32">
//       {/* Tabs */}
//       <div className="flex justify-center gap-3 sm:gap-4 my-6 ">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 sm:px-6 py-2 border border-yellow-400 text-base sm:text-lg font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition ${
//               activeTab === tab ? "bg-yellow-400 text-black" : "bg-transparent"
//             }`}
//             aria-pressed={activeTab === tab}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Grid with equal height cards */}
//       <div className="grid md:grid-cols-2 gap-5">
//         {cards.map((card, index) => (
//           <article
//             key={index}
//             className="bg-primaryCardBg border border-yellow-500 p-4 flex flex-col justify-between h-[420px] relative rounded-md overflow-hidden"
//             aria-labelledby={`card-title-${index}`}
//           >
//             <img
//               src={card.image}
//               alt={`${card.title} preview`}
//               className="w-full h-64 sm:h-56 md:h-60 object-cover mb-3 rounded"
//               loading="lazy"
//             />

//             <div>
//               <h2 id={`card-title-${index}`} className="text-2xl font-semibold mb-2">
//                 {card.title}
//               </h2>

//               <div className="flex flex-wrap gap-3 items-center text-sm text-secondaryText">
//                 {card.tags.map((tag, i) => {
//                   const Icon = tag.icon;
//                   return (
//                     <span
//                       key={i}
//                       className="flex items-center gap-2 bg-white/3 px-2 py-1 rounded"
//                     >
//                       <Icon className="w-4 h-4 text-yellow-400" aria-hidden="true" />
//                       <span className="text-xs sm:text-sm">{tag.label}</span>
//                     </span>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Contact icons only for Elan */}
//             {card.showContacts && (
//               <div className="absolute bottom-4 right-4 flex flex-col gap-3">
//                 <a
//                   href="mailto:hello@example.com"
//                   className="bg-yellow-400 text-black p-2 rounded-full shadow-md inline-flex items-center justify-center"
//                   aria-label="Email Elan"
//                   rel="noopener noreferrer"
//                 >
//                   <Mail size={18} />
//                 </a>

//                 <a
//                   href="tel:+917387392708"
//                   className="bg-gray-800 border border-gray-700 text-white p-2 rounded-full inline-flex items-center justify-center"
//                   aria-label="Call Elan"
//                   rel="noopener noreferrer"
//                 >
//                   <Phone size={18} />
//                 </a>

//                 {/* Using MessageSquare as WhatsApp alternative */}
//                 <a
//                   href="https://wa.me/917387392708"
//                   target="_blank"
//                   className="bg-green-500 text-white p-2 rounded-full inline-flex items-center justify-center"
//                   aria-label="WhatsApp Elan"
//                   rel="noopener noreferrer"
//                 >
//                   <MessageSquare size={18} />
//                 </a>
//               </div>
//             )}
//           </article>
//         ))}
//       </div>
//     </div>

// <Footer/>
//     </>
//   );
// }




import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Portfolio() {
  const appear = {
    off: { opacity: 0, y: 40 },
    on: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
  };

  const overlayV = {
    rest: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.25 } },
  };
  const titleV = {
    rest: { opacity: 0, y: 6 },
    hover: { opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.35 } },
  };
  const metaV = {
    rest: { opacity: 0, y: 18 },
    hover: { opacity: 1, y: 0, transition: { delay: 0.30, duration: 0.40 } },
  };

  // 🔹 NOTE: all spans/positions are now md:*
 const items = [
  {
    title: "Immersive VR Experience",
    year: "2024",
    name: "Meta Labs",
    image: "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-3.png.webp",
    className: "md:row-span-6",
    mobileHeight: "h-[400px]",   // big
  },
  {
    title: "AI Tech Platform",
    year: "2023",
    name: "TechNova",
    image: "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-2.png.webp",
    className: "md:row-span-3",
    mobileHeight: "h-[220px]",   // small
  },
  {
    title: "Developer Tools",
    year: "2022",
    name: "CodeFlow",
    image: "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1.png.webp",
    className: "md:row-span-3 md:col-start-2 md:row-start-4",
    mobileHeight: "h-[400px]",   // big
  },
  {
    title: "Retro Branding",
    year: "2024",
    name: "Pixel Studio",
    image: "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1024x1024.png.webp",
    className: "md:col-span-2 md:row-span-6 md:col-start-3 md:row-start-1",
    mobileHeight: "h-[220px]",   // small
  },
  {
    title: "Creative Design System",
    year: "2023",
    name: "Designify",
    image: "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-2.png.webp",
    className: "md:col-span-2 md:row-span-6 md:row-start-7",
    mobileHeight: "h-[400px]",   // big
  },
  {
    title: "Modern UI Kit",
    year: "2022",
    name: "UIX",
    image: "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-3.png.webp",
    className: "md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-7",
    mobileHeight: "h-[220px]",   // small
  },
  {
    title: "Brand Identity",
    year: "2024",
    name: "Brandify",
    image: "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1.png.webp",
    className: "md:row-span-3 md:col-start-3 md:row-start-10",
    mobileHeight: "h-[220px]",   // small
  },
  {
    title: "Creative Strategy",
    year: "2025",
    name: "ThinkLab",
    image: "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1024x1024.png.webp",
    className: "md:row-span-3 md:col-start-4 md:row-start-10",
    mobileHeight: "h-[220px]",   // small
  },
];


  return (
    <>
      <Navbar />

      <div className="min-h-[70vh] md:min-h-screen py-30 lg:py-44">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          {/* Heading */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-accent">
              Our <span className="text-secondaryText">Portfolio</span>
            </h2>
            <p className="mt-4 md:text-2xl text-primaryText max-w-2xl mx-auto">
              A full-service digital growth lab for startups, creators,
              <span className="text-secondaryText">
                {" "}
                and challenger brands who want to win.
              </span>
            </p>
          </motion.div>

          {/* 🔹 Mobile: 1 col + auto height. md+/lg: unchanged grid */}
          <div
            className="
              grid grid-cols-1 lg:grid-cols-4
              gap-4 md:gap-6
              h-auto md:h-[1000px] lg:h-[1200px]
              p-4
              md:grid-rows-12
            "
          >
            {items.map((item, i) => (
             <motion.div
  key={i}
  className={`${item.className}`}
  variants={appear}
  initial="off"
  whileInView="on"
  custom={i}
  viewport={{ once: false, amount: 0.2 }}
>
  <motion.div
    className={`relative group w-full ${item.mobileHeight} md:h-full overflow-hidden`}
    initial="rest"
    whileHover="hover"
  >
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-full object-cover"
      loading="lazy"
    />


                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none bg-black/30 backdrop-blur-md flex flex-col items-center justify-center px-4"
                    variants={overlayV}
                  >
                    <motion.h3
                      className="text-white text-lg md:text-2xl font-semibold text-center"
                      variants={titleV}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-200 text-xs md:text-sm mt-1 text-center"
                      variants={metaV}
                    >
                      {item.year} • {item.name}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}



