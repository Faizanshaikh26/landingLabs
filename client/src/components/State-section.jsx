// import React from 'react'

// export default function StateSection() {
//   return (
//     <>
    
//    <section className="md:py-10 border   px-4 sm:py-16 sm:px-8 bg-[#000000]">

//   <div className="container mx-auto px-8 text-center">
//     {/* Heading with Divider */}
//     <div className="flex items-center justify-center gap-4">
//       <span className="flex-grow h-px bg-gray-600"></span>
//       <h2 className="text-xl font-semibold text-white">
//         Trusted by Startups & Enterprises to{" "}
//         <span className="text-orange-500 font-bold">Build Digital Products</span>
//       </h2>
//       <span className="flex-grow h-px bg-gray-600"></span>
//     </div>

//     {/* Stats Section */}
//     <div className="mt-12 flex flex-wrap justify-center gap-16">
//       <div className="text-center">
//         <h3 className="text-4xl font-extrabold text-[#CFFFE2]">100+</h3>
//         <p className="mt-2 text-base text-[#CFFFE2]">Projects Delivered</p>
//       </div>
//       <div className="text-center">
//         <h3 className="text-4xl font-extrabold text-[#CFFFE2]">50+</h3>
//         <p className="mt-2 text-base text-[#CFFFE2]">Satisfied Clients</p>
//       </div>
//       <div className="text-center">
//         <h3 className="text-4xl font-extrabold text-[#CFFFE2]">20+</h3>
//         <p className="mt-2 text-base text-[#CFFFE2]">Industries Served</p>
//       </div>
//       <div className="text-center">
//         <h3 className="text-4xl font-extrabold text-[#CFFFE2]">5+</h3>
//         <p className="mt-2 text-base text-[#CFFFE2]">Years of Experience</p>
//       </div>
//     </div>

//     {/* Moving Brand Logos */}
//     <div className="mt-16 pb-3.5 overflow-hidden relative">
//       <div className="flex gap-12 animate-marquee whitespace-nowrap">
//         <img
//           src="https://a.storyblok.com/f/298810/79x20/4f5ce2a824/ahrefs-logo.svg"
//           alt="Ahrefs"
//           className="h-6 opacity-80"
//         />
//         <img
//           src="https://a.storyblok.com/f/298810/128x20/9e2e70ccb8/instacart-logo.svg"
//           alt="Instacart"
//           className="h-6 opacity-80"
//         />
//         <img
//           src="https://a.storyblok.com/f/298810/99x16/364e2223b5/groupon-logo.svg"
//           alt="Groupon"
//           className="h-6 opacity-80"
//         />
//         <img
//           src="https://a.storyblok.com/f/298810/143x16/1474e3dbaa/century21-logo.svg"
//           alt="Century 21"
//           className="h-6 opacity-80"
//         />
//         <img
//           src="https://a.storyblok.com/f/298810/166x20/495b032848/cleardesk-logo.svg"
//           alt="ClearDesk"
//           className="h-6 opacity-80"
//         />
//         <img
//           src="https://a.storyblok.com/f/298810/107x20/9859e82bee/oneims-logo.svg"
//           alt="OneIMS"
//           className="h-6 opacity-80"
//         />
//         <img
//           src="https://a.storyblok.com/f/298810/33x20/742b4a9222/ring-logo.svg"
//           alt="Ring"
//           className="h-6 opacity-80"
//         />
//       </div>
//     </div>
    
//   </div>
// </section>


//     </>
//   )
// }




// import zelcConsultaation from '../assets/images/zelc-consultaation.png'
// import techmark from '../assets/images/tech-mark.webp'
// import networkgs from '../assets/images/network-gs.webp'
// import kohinoorCP from '../assets/images/kohinoor-CP.webp'

// export default function StateSection() {

//   const data=[{
//     id:1,
//     imgUrl:zelcConsultaation
//   },{
//     id:2,
//     imgUrl:techmark
//   },{
//     id:3,
//     imgUrl:networkgs
//   },
//   {
//     id:4,
//     imgUrl:kohinoorCP
//   },

// ]
//   return (
//     <>
    
//    <section className="md:py-10 border   px-4 sm:py-16 sm:px-8 bg-[#000000]">

//   <div className="container mx-auto px-8 text-center">
//     {/* Heading with Divider */}
//     <div className="flex items-center justify-center gap-4">
//       <span className="flex-grow h-px bg-gray-600"></span>
//       <h2 className="text-xl font-semibold text-white">
//         Trusted by Startups & Enterprises to{" "}
//         <span className="text-orange-500 font-bold">Build Digital Products</span>
//       </h2>
//       <span className="flex-grow h-px bg-gray-600"></span>
//     </div>

//     {/* Stats Section */}
//     <div className="mt-12 flex flex-wrap justify-center gap-16">
//       <div className="text-center">
//         <h3 className="text-4xl font-extrabold text-[#CFFFE2]">100+</h3>
//         <p className="mt-2 text-base text-[#CFFFE2]">Projects Delivered</p>
//       </div>
//       <div className="text-center">
//         <h3 className="text-4xl font-extrabold text-[#CFFFE2]">50+</h3>
//         <p className="mt-2 text-base text-[#CFFFE2]">Satisfied Clients</p>
//       </div>
//       <div className="text-center">
//         <h3 className="text-4xl font-extrabold text-[#CFFFE2]">20+</h3>
//         <p className="mt-2 text-base text-[#CFFFE2]">Industries Served</p>
//       </div>
//       <div className="text-center">
//         <h3 className="text-4xl font-extrabold text-[#CFFFE2]">5+</h3>
//         <p className="mt-2 text-base text-[#CFFFE2]">Years of Experience</p>
//       </div>
//     </div>

//     {/* Moving Brand Logos */}
// {/* Moving Brand Logos */}
// <div className="mt-16 overflow-hidden relative">
//   <div className="flex gap-12 animate-marquee whitespace-nowrap">
//     {data.map((item) => (
//       <img
//         key={item.id}
//         src={item.imgUrl}
//         alt="img"
//         className="h-20 opacity-90" //
//       />
//     ))}
//   </div>
// </div>


//   </div>
// </section>


//     </>
//   )
// }


import React from 'react';
import { motion } from 'framer-motion';

export default function StateSection() {
  const stats = [
    { label: 'Projects Delivered', value: '100+' },
    { label: 'Satisfied Clients', value: '50+' },
    { label: 'Industries Served', value: '20+' },
    { label: 'Years of Experience', value: '5+' },
  ];

  const logos = [
    "https://a.storyblok.com/f/298810/79x20/4f5ce2a824/ahrefs-logo.svg",
    "https://a.storyblok.com/f/298810/128x20/9e2e70ccb8/instacart-logo.svg",
    "https://a.storyblok.com/f/298810/99x16/364e2223b5/groupon-logo.svg",
    "https://a.storyblok.com/f/298810/143x16/1474e3dbaa/century21-logo.svg",
    "https://a.storyblok.com/f/298810/166x20/495b032848/cleardesk-logo.svg",
    "https://a.storyblok.com/f/298810/107x20/9859e82bee/oneims-logo.svg",
    "https://a.storyblok.com/f/298810/33x20/742b4a9222/ring-logo.svg",
  ];

  const logoMotion = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.4 },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <section className="relative md:py-10 border px-4 sm:py-16 sm:px-8 bg-[#000000] overflow-hidden">
      <div className="container mx-auto px-8 text-center">
        {/* Heading with Divider */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="flex-grow h-px bg-gray-600"></span>
          <h2 className="text-xl font-semibold text-white">
            Trusted by Startups & Enterprises to{" "}
            <span className="text-orange-500 font-bold">Build Digital Products</span>
          </h2>
          <span className="flex-grow h-px bg-gray-600"></span>
        </motion.div>

        {/* Stats Section */}
        <div className="mt-12 flex flex-wrap justify-center gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-4xl font-extrabold text-[#CFFFE2]">{stat.value}</h3>
              <p className="mt-2 text-base text-[#CFFFE2]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Animated Logo Marquee Section */}
        <motion.div
          className="mt-16 pb-4 overflow-hidden relative"
          {...logoMotion}
        >
          <div className="marquee flex gap-12 whitespace-nowrap">
            {[...logos, ...logos].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Logo ${index}`}
                className="h-6 opacity-80 hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* CSS for Infinite Marquee */}
      <style jsx>{`
        .marquee {
          animation: scroll-left 25s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
