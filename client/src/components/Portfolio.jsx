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

import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    const items = [
        {
            label: 'VR',
            image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-3.png.webp',
        },
        {
            label: 'Tech',
            image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-2.png.webp',
            span: 'md:col-span-2',
        },
        {
            label: 'Dev',
            image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1.png.webp',
            span: 'md:col-span-2',
        },
        {
            label: 'Retro',
            image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1024x1024.png.webp',
        },
    ];

    return (
        <div className="min-h-[90vh] md:min-h-screen sm:py-12 ">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#E82561]">
                        Our <span className="text-[#EAEAEA]">Portfolio</span>
                    </h2>
                    <p className="mt-4 md:text-2xl text-[#CFFFE2]">
                        A full-service digital growth lab for startups, creators,
                        <span className="text-[#EAEAEA]"> and challenger brands who want to win.</span>
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                    {items.map((item, i) => (
                        <motion.a
                            key={i}
                            href="#"
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${item.span || ''}`}
                        >
                            <img
                                src={item.image}
                                alt={item.label}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 transition duration-300 group-hover:opacity-60" />
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileHover={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10 ml-4 mb-3 inline-block text-sm text-white md:text-lg"
                            >
                                {item.label}
                            </motion.span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}