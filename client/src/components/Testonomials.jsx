// // Testonomials.jsx
// import React from "react";
// const testimonials = [
//   {
//     name: "Rohit Sharma",
//     role: "CTO at Landing Labs",
//     message: "Working with Landing Labs helped us scale our digital presence in no time.",
//     imageUrl: "https://i.pravatar.cc/150?img=32",
//     profileUrl: "https://linkedin.com/in/rohitsharma"
//   },
//   {
//     name: "Ayesha Khan",
//     role: "UI/UX Designer at Landing Labs",
//     message:
//       "The creative freedom and team support at Landing Labs make it the perfect place to grow as a designer.",
//     imageUrl: "https://i.pravatar.cc/150?img=47",
//     profileUrl: "https://linkedin.com/in/ayeshakhan"
//   },
//   {
//     name: "Ankit Mehra",
//     role: "Full Stack Developer at Landing Labs",
//     message:
//       "I’ve grown both technically and professionally through exciting projects and a talented team.",
//     imageUrl: "https://i.pravatar.cc/150?img=33",
//     profileUrl: "https://linkedin.com/in/ankitmehra"
//   },
//   {
//     name: "Sneha Joshi",
//     role: "Marketing Head at Landing Labs",
//     message:
//       "Landing Labs is redefining tech innovation. It’s thrilling to be part of this journey.",
//     imageUrl: "https://i.pravatar.cc/150?img=21",
//     profileUrl: "https://linkedin.com/in/snehajoshi"
//   },
//   {
//     name: "Nikhil Arora",
//     role: "Product Manager at Landing Labs",
//     message:
//       "The culture, the team, and the vision — Landing Labs has all the right ingredients for success.",
//     imageUrl: "https://i.pravatar.cc/150?img=56",
//     profileUrl: "https://linkedin.com/in/nikhilarora"
//   },
//   {
//     name: "Divya Suresh",
//     role: "QA Engineer at Landing Labs",
//     message:
//       "Every day brings a new challenge and opportunity. Proud to be a part of Landing Labs.",
//     imageUrl: "https://i.pravatar.cc/150?img=28",
//     profileUrl: "https://linkedin.com/in/divyasuresh"
//   }
// ];

// export default function Testimonials() {
//   return (
//  <div>
//       <section id="testimonies" className="md:py-10 ">
//         <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
//           <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
//             <div className="mb-12 space-y-5 md:mb-16 md:text-center">
//               <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
//                 Words from Others
//               </div>
//               <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
//                 It's not just  <span className="text-orange-500">us.</span> 
//               </h1>
//                 <p className="mt-4  md:text-2xl text-[#CFFFE2]">
//                  <span className="text-orange-500"> Here's what </span> others have to say about us.
//               </p>
//             </div>
//           </div>

//           {/* Testimonials Grid with all data */}
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
//             {testimonials.map((item, index) => (
//               <div key={index} className="text-sm leading-6">
//                 <div className="relative group">
//                   <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
//                   <a
//                     href={item.profileUrl}
//                     className="cursor-pointer"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
//                       <div className="flex items-center space-x-4">
//                         <img
//                           src={item.imageUrl}
//                           className="w-12 h-12 bg-center bg-cover border rounded-full"
//                           alt={item.name}
//                         />
//                         <div>
//                           <h3 className="text-lg font-semibold text-white">
//                             {item.name}
//                           </h3>
//                           <p className="text-gray-500 text-md">{item.role}</p>
//                         </div>
//                       </div>
//                       <p className="leading-normal text-gray-300 text-md">
//                         {item.message}
//                       </p>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import React from "react";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     name: "Rohit Sharma",
//     role: "CTO at Landing Labs",
//     message: "Working with Landing Labs helped us scale our digital presence in no time.",
//     imageUrl: "https://i.pravatar.cc/150?img=32",
//     profileUrl: "https://linkedin.com/in/rohitsharma"
//   },
//   {
//     name: "Ayesha Khan",
//     role: "UI/UX Designer at Landing Labs",
//     message: "The creative freedom and team support at Landing Labs make it the perfect place to grow as a designer.",
//     imageUrl: "https://i.pravatar.cc/150?img=47",
//     profileUrl: "https://linkedin.com/in/ayeshakhan"
//   },
//   {
//     name: "Ankit Mehra",
//     role: "Full Stack Developer at Landing Labs",
//     message: "I’ve grown both technically and professionally through exciting projects and a talented team.",
//     imageUrl: "https://i.pravatar.cc/150?img=33",
//     profileUrl: "https://linkedin.com/in/ankitmehra"
//   },
//   {
//     name: "Sneha Joshi",
//     role: "Marketing Head at Landing Labs",
//     message: "Landing Labs is redefining tech innovation. It’s thrilling to be part of this journey.",
//     imageUrl: "https://i.pravatar.cc/150?img=21",
//     profileUrl: "https://linkedin.com/in/snehajoshi"
//   },
//   {
//     name: "Nikhil Arora",
//     role: "Product Manager at Landing Labs",
//     message: "The culture, the team, and the vision — Landing Labs has all the right ingredients for success.",
//     imageUrl: "https://i.pravatar.cc/150?img=56",
//     profileUrl: "https://linkedin.com/in/nikhilarora"
//   },
//   {
//     name: "Divya Suresh",
//     role: "QA Engineer at Landing Labs",
//     message: "Every day brings a new challenge and opportunity. Proud to be a part of Landing Labs.",
//     imageUrl: "https://i.pravatar.cc/150?img=28",
//     profileUrl: "https://linkedin.com/in/divyasuresh"
//   }
// ];

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15
//     }
//   }
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40, rotateX: -10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }
//   }
// };

// export default function Testimonials() { 
//   return (
//     <section id="testimonies" className="md:py-16 px-6 ">
//       <div className="max-w-6xl mx-auto">
//         {/* Heading */}
//         <motion.div
//           className="mb-12 space-y-5 text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg bg-[#202c47] bg-opacity-60 hover:bg-opacity-40 transition">
//             Words from Others
//           </div>
//           <h1 className="text-3xl font-semibold text-white md:text-5xl">
//             It's not just <span className="text-orange-500">us.</span>
//           </h1>
//           <p className="mt-4 text-xl md:text-2xl text-[#CFFFE2]">
//             <span className="text-orange-500">Here's what</span> others have to say about us.
//           </p>
//         </motion.div>

//         {/* Testimonials Grid */}
//         <motion.div
//           className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {testimonials.map((item, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{
//                 scale: 1.03,
//                 rotate: 0.5,
//                 transition: { type: "spring", stiffness: 200 }
//               }}
//               className="relative group text-sm leading-6"
//             >
//               {/* Glowing Blur Background on Hover */}
//               <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-[#9333ea] to-[#ec4899] blur-lg duration-500 group-hover:opacity-80 group-hover:blur-xl"></div>

//               <a
//                 href={item.profileUrl}
//                 className="cursor-pointer"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5 hover:ring-orange-500 transition duration-300">
//                   <div className="flex items-center space-x-4">
//                     <img
//                       src={item.imageUrl}
//                       className="w-12 h-12 bg-center bg-cover border-2 border-orange-500 rounded-full"
//                       alt={item.name}
//                     />
//                     <div>
//                       <h3 className="text-lg font-semibold text-white">
//                         {item.name}
//                       </h3>
//                       <p className="text-gray-400 text-sm">{item.role}</p>
//                     </div>
//                   </div>
//                   <p className="leading-normal text-gray-300 text-md">
//                     {item.message}
//                   </p>
//                 </div>
//               </a>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }
  }
};

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "CTO at Landing Labs",
    message: "Working with Landing Labs helped us scale our digital presence in no time.",
    imageUrl: "https://i.pravatar.cc/150?img=32",
    
  },
  {
    name: "Ayesha Khan",
    role: "UI/UX Designer at Landing Labs",
    message: "The creative freedom and team support at Landing Labs make it the perfect place to grow as a designer.",
    imageUrl: "https://i.pravatar.cc/150?img=47",
      },
  {
    name: "Ankit Mehra",
    role: "Full Stack Developer at Landing Labs",
    message: "I’ve grown both technically and professionally through exciting projects and a talented team.",
    imageUrl: "https://i.pravatar.cc/150?img=33",
      },
  {
    name: "Sneha Joshi",
    role: "Marketing Head at Landing Labs",
    message: "Landing Labs is redefining tech innovation. It’s thrilling to be part of this journey.",
    imageUrl: "https://i.pravatar.cc/150?img=21",
      },
  {
    name: "Nikhil Arora",
    role: "Product Manager at Landing Labs",
    message: "The culture, the team, and the vision — Landing Labs has all the right ingredients for success.",
    imageUrl: "https://i.pravatar.cc/150?img=56",
    
  },
  {
    name: "Divya Suresh",
    role: "QA Engineer at Landing Labs",
    message: "Every day brings a new challenge and opportunity. Proud to be a part of Landing Labs.",
    imageUrl: "https://i.pravatar.cc/150?img=28",
    
  }
];
export default function Testimonials() {
  return (
    <section id="testimonies" className="md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-12 space-y-5 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 text-sm font-semibold text-primaryText rounded-lg bg-primaryCardBg bg-opacity-60 hover:bg-opacity-40 transition">
            Words from Others
          </div>
          <h1 className="text-3xl font-semibold text-primaryText md:text-5xl">
            It's not just <span className="text-orange-500">us.</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-secondaryText">
            <span className="text-orange-500">Here's what</span> others have to say about us.
          </p>
        </motion.div>

        {/* Swiper Carousel */}

        <div className="relative px-4">
  <Swiper
    modules={[Navigation, Pagination, A11y, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    navigation
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }}
    className="pb-16"
  >
    {testimonials.map((item, index) => (
      <SwiperSlide key={index} className="px-3">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative group text-sm leading-6"
        >
          <div className="relative p-8 space-y-6 leading-normal rounded-xl bg-slate-800 ring-1 ring-gray-900/5 transition duration-300">
            <div className="flex items-center space-x-5">
              <img
                src={item.imageUrl}
                className="w-14 h-14 bg-center bg-cover border-2 border-orange-500 rounded-full"
                alt={item.name}
              />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </div>
            <p className="text-md text-gray-300">{item.message}</p>
          </div>
        </motion.div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Optional: Custom styling for arrows and pagination */}
  <style jsx>{`
    .swiper-button-next,
    .swiper-button-prev {
      color: #EC780C;
      top: 35%;
      width: 2.25rem;
      height: 2.25rem;
    }
    .swiper-button-next {
      right: 0;
    }
    .swiper-button-prev {
      left: 0;
    }
    .swiper-pagination-bullets {
      bottom: -1.5rem !important;
    }
    .swiper-pagination-bullet {
      background: white;
      opacity: 0.5;
    }
    .swiper-pagination-bullet-active {
      background: #EC780C;
      opacity: 1;
    }
  `}</style>
</div>

       

      </div>
    </section>
  );
}