// import React from "react";
// import bannerImg from "../assets/images/banner-image.jpg"

// export default function Banner() {
//   return (
//     <div className="relative bg-[#060606] text-white h-auto min-h-[300px] rounded-lg max-w-7xl mx-auto my-10 mb-40 overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${bannerImg})` }}
//       >
//         {/* Blur Overlay */}
//         <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
//       </div>

//       {/* Foreground Content */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-10 gap-6 md:gap-0">
//         {/* Text Section */}
//         <div className="w-full md:w-1/2">
//           <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
//             Landing Labs Is Your Business Growth Partner.
//           </h1>
//           <p className="mb-6 text-base sm:text-lg">
//             Founded on storytelling, and guided by data, Landing Labs blends
//             creative flair and tailored strategies to help brands shine online.
//           </p>
//           <button className="bg-orange-500 hover:bg-[#A2D5C6] text-white px-6 py-3 sm:px-7 sm:py-4 rounded-lg font-medium transition">
//             Book a free Consultation
//           </button>
//         </div>

       
//       </div>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../assets/images/banner-image.jpg";

export default function Banner() {
  return (


<div className="px-4 sm:px-6 lg:px-8 ">

    <motion.div
      className="relative bg-[#060606] text-white h-auto min-h-[300px] rounded-lg max-w-7xl mx-auto my-10 mb-20 overflow-hidden  "
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-10 gap-6 md:gap-0">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-snug">
            Landing Labs Is Your Business Growth Partner.
          </h1>
          <p className="mb-6 text-base sm:text-lg">
            Founded on storytelling, and guided by data, Landing Labs blends
            creative flair and tailored strategies to help brands shine online.
          </p>
          <motion.button
            className="bg-orange-500 hover:bg-[#A2D5C6] text-white px-6 py-3 sm:px-7 sm:py-4 rounded-lg font-medium transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a free Consultation
          </motion.button>
        </motion.div>
      </div>
    </motion.div>

    </div>
  );
}
