// import React from "react";

// import serviceImage from "../assets/images/service-image.jpg";
// const opportunities = [
//   {
//     title: "Staffing and Recruiting",
//     description: "Helping companies find the best talent.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/618x632/d19e67600d/industries-staffing-and-recruiting.png",
//   },
//   {
//     title: "Software Development",
//     description: "Building scalable and innovative solutions.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/619x632/15eaa07068/industries-software-development.png",
//   },
//   {
//     title: "E-Commerce",
//     description: "Creating seamless online shopping experiences.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/619x632/3c3685cec1/industries-ecommerce.png",
//   },
//   {
//     title: "Healthcare",
//     description: "Improving patient outcomes through technology.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/618x632/efdf7227ef/industries-consulting.png",
//   },
//   {
//     title: "Education",
//     description: "Delivering modern learning experiences.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/619x632/1b43e11447/industries-real-estate.png",
//   },
//   {
//     title: "Logistics and Supply Chain",
//     description: "Optimizing delivery and distribution networks.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/619x632/5af1ca29e1/industries-marketing-agencies.png",
//   },
// ];

// export default function ServicesSnapshot() {
//   return (
//     <div className="p-8">
//       {/* Header Section */}
//       <section className="text-center max-w-lg mx-auto py-8 px-4">
//         <h1 className="text-2xl md:text-4xl font-semibold text-[#EAEAEA]">
//          Services <span className="text-orange-500">Snapshot</span>
//         </h1>
//         <p className="mt-4 md:text-4xl text-3xl text-[#CFFFE2]">
//           What We Build  <span className="text-[#EAEAEA]">in the Lab:</span> 
//         </p>
//       </section>

//       {/* Content Section */}
//       <section className="max-w-6xl mx-auto p-4  rounded-lg ">
//         <div className="flex flex-col md:flex-row ">
//           {/* Left Section */}
//           <div
//   id="left"
//   className="w-full md:w-[75%] text-[#EAEAEA] p-4 rounded-lg"
// >
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//     {opportunities.map((opportunity, index) => (
//       <div
//         key={index}
//         className="relative group overflow-hidden rounded-lg shadow-lg bg-white border border-gray-300 transform transition-all duration-300 hover:shadow-xl"
//       >
//         {/* Opportunity Image */}
//         <img
//           src={opportunity.imageUrl}
//           alt={opportunity.title}
//           className="w-full h-[300px] object-cover transform group-hover:scale-110 transition duration-500"
//         />

//         {/* Title on Image */}
//         <div className="absolute bottom-[5px] w-full bg-opacity-50 text-[#EAEAEA] p-2 transition-opacity duration-500 group-hover:opacity-0">
//           <p className="text-sm font-semibold">
//             {opportunity.title}
//           </p>
//         </div>

//         {/* Overlay with Text */}
//         <div className="absolute inset-0 bg-[#76abaeb6] bg-opacity-90 text-[#EAEAEA] p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.3, 0.7, 0.4, 1)] flex flex-col justify-end">
//           <div>
//             <p className="text-[16px] mb-2">{opportunity.title}</p>
//             <p className="text-xs">{opportunity.description}</p>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>


//           {/* Right Section */}

//         <div
//   id="right"
//   className="w-full md:w-[25%] mt-4 text-black rounded-lg border border-gray-300 overflow-hidden flex flex-col"
// >
//   <div id="image" className="w-full flex-1">
//     <img
//       src={serviceImage}
//       alt="image"
//       className="w-full h-full object-cover"
//     />
//   </div>
// </div>

//         </div>
//       </section>
//     </div>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import serviceImage from "../assets/images/service-image.jpg";

// const opportunities = [
//   {
//     title: "Staffing and Recruiting",
//     description: "Helping companies find the best talent.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/618x632/d19e67600d/industries-staffing-and-recruiting.png",
//   },
//   {
//     title: "Software Development",
//     description: "Building scalable and innovative solutions.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/619x632/15eaa07068/industries-software-development.png",
//   },
//   {
//     title: "E-Commerce",
//     description: "Creating seamless online shopping experiences.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/619x632/3c3685cec1/industries-ecommerce.png",
//   },
//   {
//     title: "Healthcare",
//     description: "Improving patient outcomes through technology.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/618x632/efdf7227ef/industries-consulting.png",
//   },
//   {
//     title: "Education",
//     description: "Delivering modern learning experiences.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/619x632/1b43e11447/industries-real-estate.png",
//   },
//   {
//     title: "Logistics and Supply Chain",
//     description: "Optimizing delivery and distribution networks.",
//     imageUrl:
//       "https://a.storyblok.com/f/172398/619x632/5af1ca29e1/industries-marketing-agencies.png",
//   },
// ];

// export default function ServicesSnapshot() {
//   return (
//     <div className="p-8">
//       {/* Header Section */}
//       <motion.section
//         className="text-center max-w-lg mx-auto py-8 px-4"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
        // <h1 className="text-2xl md:text-4xl font-semibold text-[#EAEAEA]">
        //   Services <span className="text-orange-500">Snapshot</span>
        // </h1>
        // <p className="mt-4 md:text-4xl text-3xl text-[#CFFFE2]">
        //   What We Build <span className="text-[#EAEAEA]">in the Lab:</span>
        // </p>
//       </motion.section>

//       {/* Content Section */}
//       <section className="max-w-6xl mx-auto p-4 rounded-lg">
//         <div className="flex flex-col md:flex-row">
//           {/* Left Section */}
//           <div className="w-full md:w-[75%] text-[#EAEAEA] p-4 rounded-lg">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {opportunities.map((opportunity, index) => (
//                 <motion.div
//                   key={index}
//                   className="relative group overflow-hidden rounded-lg shadow-lg bg-white border border-gray-300 transform transition-all duration-300 hover:shadow-xl"
//                   initial={{ opacity: 0, y: 50 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   viewport={{ once: true, amount: 0.3 }}
//                 >
//                   {/* Opportunity Image */}
//                   <img
//                     src={opportunity.imageUrl}
//                     alt={opportunity.title}
//                     className="w-full h-[300px] object-cover transform group-hover:scale-110 transition duration-500"
//                   />

//                   {/* Title on Image */}
//                   <div className="absolute bottom-[5px] w-full bg-opacity-50 text-[#EAEAEA] p-2 transition-opacity duration-500 group-hover:opacity-0">
//                     <p className="text-sm font-semibold">
//                       {opportunity.title}
//                     </p>
//                   </div>

//                   {/* Overlay with Text */}
//                   <div className="absolute inset-0 bg-[#76abaeb6] bg-opacity-90 text-[#EAEAEA] p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.3, 0.7, 0.4, 1)] flex flex-col justify-end">
//                     <div>
//                       <p className="text-[16px] mb-2">{opportunity.title}</p>
//                       <p className="text-xs">{opportunity.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Right Section */}
//           <motion.div
//             className="w-full md:w-[25%] mt-4 text-black rounded-lg border border-gray-300 overflow-hidden flex flex-col"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.5 }}
//             viewport={{ once: true, amount: 0.5 }}
//           >
//             <div className="w-full flex-1">
//               <img
//                 src={serviceImage}
//                 alt="image"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Truck,
  Users,
  Megaphone,
  PenTool,
  LineChart,
  Search,
  ScrollText,
} from "lucide-react";

const tabs = ["IT", "Marketing"];

const servicesData = {
  IT: [
    {
      title: "Software Development",
      description: "Building scalable digital systems.",
      icon: <Code size={28} className="text-orange-400" />,
    },
    {
      title: "E-Commerce",
      description: "Streamlined shopping solutions.",
      icon: <ShoppingCart size={28} className="text-orange-400" />,
    },
    {
      title: "Healthcare Tech",
      description: "Improving care through innovation.",
      icon: <Stethoscope size={28} className="text-orange-400" />,
    },
    {
      title: "Education Platforms",
      description: "Next-gen learning experiences.",
      icon: <GraduationCap size={28} className="text-orange-400" />,
    },
    {
      title: "Logistics Systems",
      description: "Smart delivery optimization.",
      icon: <Truck size={28} className="text-orange-400" />,
    },
    {
      title: "Talent Systems",
      description: "Automated hiring pipelines.",
      icon: <Users size={28} className="text-orange-400" />,
    },
  ],
  Marketing: [
    {
      title: "Influencer Marketing",
      description: "Boosting reach via creators.",
      icon: <Megaphone size={28} className="text-pink-400" />,
    },
    {
      title: "Graphic Design",
      description: "Visual branding excellence.",
      icon: <PenTool size={28} className="text-pink-400" />,
    },
    {
      title: "SEO Optimization",
      description: "Climbing Google rankings.",
      icon: <Search size={28} className="text-pink-400" />,
    },
    {
      title: "Social Media Strategy",
      description: "Effective online presence.",
      icon: <Megaphone size={28} className="text-pink-400" />,
    },
    {
      title: "Content Marketing",
      description: "Stories that convert.",
      icon: <ScrollText size={28} className="text-pink-400" />,
    },
    {
      title: "PPC Advertising",
      description: "Clicks that bring value.",
      icon: <LineChart size={28} className="text-pink-400" />,
    },
  ],
};

export default function ServicesSnapshot() {
  const [activeTab, setActiveTab] = useState("IT");

  return (
    <div className="lg:p-8 bg-black text-white">
      {/* Header */}

     
      <section className="text-center max-w-xl mx-auto mb-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#EAEAEA]">
          Our <span className="text-orange-500">Core Services</span>
        </h2>
        <p className="mt-4 md:text-4xl text-2xl text-[#CFFFE2]">
          Choose a vertical to explore what we build
        </p>
      </section>

      {/* Tabs */}
      <div className="flex justify-center mb-6 space-x-6 relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative px-4 py-2 text-lg font-medium text-white"
          >
            {tab}
            {activeTab === tab && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-orange-500"
              />
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {servicesData[activeTab].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-[#1a1a1a] border border-gray-700 rounded-xl shadow hover:shadow-2xl transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h4 className="text-lg font-semibold mb-1">{service.title}</h4>
              <p className="text-sm text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
