// // import React from 'react';

// // export default function Portfolio() {
// //     return (
// //         <div className="min-h-[90vh] md:min-h-screen  sm:py-8 lg:py-12">
// //             <div className="max-w-screen-xl mx-auto px-4 md:px-8">
// //                 <div className="text-center mb-10">
// //                     <h2 className=" text-3xl md:text-4xl tracking-tight font-bold  text-[#E82561] ">
// //                         Our <span className="text-[#EAEAEA]">Portfolio</span>
// //                     </h2>
// //                     <p className="mt-4  md:text-2xl text-[#CFFFE2]">
// //                         A full-service digital growth lab for startups, creators,
// //                         <span className="text-[#EAEAEA]">and challenger brands who want to win.</span>
// //                     </p>
// //                 </div>

// //                 <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
// //                     {/* Image - 1 */}
// //                     <a
// //                         href="#"
// //                         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
// //                     >
// //                         <img
// //                             src="https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-3.png.webp"
// //                             loading="lazy"
// //                             alt="Photo by Minh Pham"
// //                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
// //                         />
// //                         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
// //                         <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
// //                     </a>

// //                     {/* Image - 2 */}
// //                     <a
// //                         href="#"
// //                         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
// //                     >
// //                         <img
// //                             src="https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-2.png.webp"
// //                             loading="lazy"
// //                             alt="Photo by Magicle"
// //                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
// //                         />
// //                         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
// //                         <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span>
// //                     </a>

// //                     {/* Image - 3 */}
// //                     <a
// //                         href="#"
// //                         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
// //                     >
// //                         <img
// //                             src="https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1.png.webp"
// //                             loading="lazy"
// //                             alt="Photo by Martin Sanchez"
// //                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
// //                         />
// //                         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
// //                         <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span>
// //                     </a>

// //                     {/* Image - 4 */}
// //                     <a
// //                         href="#"
// //                         className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
// //                     >
// //                         <img
// //                             src="https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1024x1024.png.webp"
// //                             loading="lazy"
// //                             alt="Photo by Lorenzo Herrera"
// //                             className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
// //                         />
// //                         <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
// //                         <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span>
// //                     </a>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Portfolio() {
//     const cardVariants = {
//         hidden: { opacity: 0, scale: 0.95, y: 30 },
//         visible: (i) => ({
//             opacity: 1,
//             scale: 1,
//             y: 0,
//             transition: {
//                 delay: i * 0.15,
//                 duration: 0.6,
//                 ease: 'easeOut',
//             },
//         }),
//     };

//     const items = [
//         {
//             label: 'VR',
//             image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-3.png.webp',
//         },
//         {
//             label: 'Tech',
//             image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-2.png.webp',
//             span: 'md:col-span-2',
//         },
//         {
//             label: 'Dev',
//             image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1.png.webp',
//             span: 'md:col-span-2',
//         },
//         {
//             label: 'Retro',
//             image: 'https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1024x1024.png.webp',
//         },
//     ];

//     return (
//         <div className="min-h-[70vh] md:min-h-screen   ">
//             <div className="max-w-screen-xl mx-auto px-4 md:px-8">
//                 {/* Header */}
//                 <motion.div
//                     className="text-center mb-12"
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, ease: 'easeOut' }}
//                     viewport={{ once: true }}
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold text-accent">
//                         Our <span className="text-secondaryText">Portfolio</span>
//                     </h2>
//                     <p className="mt-4 md:text-2xl text-primaryText">
//                         A full-service digital growth lab for startups, creators,
//                         <span className="text-secondaryText"> and challenger brands who want to win.</span>
//                     </p>
//                 </motion.div>

//                 {/* Grid */}
//                 <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
//                     {items.map((item, i) => (
//                         <motion.a
//                             key={i}
//                             href="#"
//                             custom={i}
//                             variants={cardVariants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                             className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 ${item.span || ''}`}
//                         >
//                             <img
//                                 src={item.image}
//                                 alt={item.label}
//                                 loading="lazy"
//                                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
//                             />
//                             <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 transition duration-300 group-hover:opacity-60" />
//                             <motion.span
//                                 initial={{ opacity: 0, y: 10 }}
//                                 whileHover={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.3 }}
//                                 className="relative z-10 ml-4 mb-3 inline-block text-sm text-white md:text-lg"
//                             >
//                                 {item.label}
//                             </motion.span>
//                         </motion.a>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

//import React from 'react';
//import { motion } from 'framer-motion';
//import Navbar from './Navbar';
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
//  return (
//<>
//
//<Navbar/>
//
//    <div className="min-h-screen bg-white text-primaryText p-6 sm:p-8 lg:p-12 py-20 mt-32">
//      {/* Tabs */}
//      <div className="flex justify-center gap-3 sm:gap-4 mb-6">
//        {tabs.map((tab) => (
//          <button
//            key={tab}
//            onClick={() => setActiveTab(tab)}
//            className={`px-4 sm:px-6 py-2 border border-yellow-400 text-base sm:text-lg font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition ${
//              activeTab === tab ? "bg-yellow-400 text-black" : "bg-transparent"
//            }`}
//            aria-pressed={activeTab === tab}
//          >
//            {tab}
//          </button>
//        ))}
//      </div>
//
//      {/* Grid with equal height cards */}
//      <div className="grid md:grid-cols-2 gap-5">
//        {cards.map((card, index) => (
//          <article
//            key={index}
//            className="bg-primaryCardBg border border-yellow-500 p-4 flex flex-col justify-between h-[420px] relative rounded-md overflow-hidden"
//            aria-labelledby={`card-title-${index}`}
//          >
//            <img
//              src={card.image}
//              alt={`${card.title} preview`}
//              className="w-full h-64 sm:h-56 md:h-60 object-cover mb-3 rounded"
//              loading="lazy"
//            />
//
//            <div>
//              <h2 id={`card-title-${index}`} className="text-2xl font-semibold mb-2">
//                {card.title}
//              </h2>
//
//              <div className="flex flex-wrap gap-3 items-center text-sm text-secondaryText">
//                {card.tags.map((tag, i) => {
//                  const Icon = tag.icon;
//                  return (
//                    <span
//                      key={i}
//                      className="flex items-center gap-2 bg-white/3 px-2 py-1 rounded"
//                    >
//                      <Icon className="w-4 h-4 text-yellow-400" aria-hidden="true" />
//                      <span className="text-xs sm:text-sm">{tag.label}</span>
//                    </span>
//                  );
//                })}
//              </div>
//            </div>
//
//            {/* Contact icons only for Elan */}
//            {card.showContacts && (
//              <div className="absolute bottom-4 right-4 flex flex-col gap-3">
//                <a
//                  href="mailto:hello@example.com"
//                  className="bg-yellow-400 text-black p-2 rounded-full shadow-md inline-flex items-center justify-center"
//                  aria-label="Email Elan"
//                  rel="noopener noreferrer"
//                >
//                  <Mail size={18} />
//                </a>
//
//                <a
//                  href="tel:+917387392708"
//                  className="bg-gray-800 border border-gray-700 text-white p-2 rounded-full inline-flex items-center justify-center"
//                  aria-label="Call Elan"
//                  rel="noopener noreferrer"
//                >
//                  <Phone size={18} />
//                </a>
//
//                {/* Using MessageSquare as WhatsApp alternative */}
//                <a
//                  href="https://wa.me/917387392708"
//                  target="_blank"
//                  className="bg-green-500 text-white p-2 rounded-full inline-flex items-center justify-center"
//                  aria-label="WhatsApp Elan"
//                  rel="noopener noreferrer"
//                >
//                  <MessageSquare size={18} />
//                </a>
//              </div>
//            )}
//          </article>
//        ))}
//      </div>
//    </div>
//
//<Footer/>
//    </>
//  );
//}
//
//
//

// first code

//

//import React, { useMemo, useState } from "react";
//import { motion, AnimatePresence } from "framer-motion";
//import PhotoAlbum from "react-photo-album";
//import Lightbox from "yet-another-react-lightbox";
//import Marquee from "react-fast-marquee";
//import { ArrowUpRight, BadgeCheck, Filter, Images, Star } from "lucide-react";
//
//// ✅ Import images from local assets
//import hero from "../assets/images/hero-image-4.jpg";
//import proj1 from "../assets/images/finance-industries.jpg";
//import proj2 from "../assets/images/Education.jpg";
//import proj3 from "../assets/images/food-industries.jpg";
//import proj4 from "../assets/images/healthCare-industries.jpg";
//import proj5 from "../assets/images/retail-Industries.jpg";
//import proj6 from "../assets/images/tech-startUp-industries.jpg";
//import client1 from "../assets/images/hero-image-4.jpg";
//import client2 from "../assets/images/hero-image-4.jpg";
//import client3 from "../assets/images/hero-image-4.jpg";
//
//
//
//// Project Data
//const RAW_PROJECTS = [
//  { id: 1, title: "E-Commerce Revamp", category: "Web", img: proj1, tags: ["Next.js", "Tailwind"], width: 1600, height: 1040 },
//  { id: 2, title: "SaaS Growth Landing", category: "Web", img: proj2, tags: ["SEO", "Analytics"], width: 1600, height: 1000 },
//  { id: 3, title: "Fintech App UI", category: "App", img: proj3, tags: ["iOS", "Design"], width: 1600, height: 1067 },
//  { id: 4, title: "Brand Identity", category: "Branding", img: proj4, tags: ["Logo", "Typography"], width: 1600, height: 1000 },
//  { id: 5, title: "EdTech Portal", category: "Web", img: proj5, tags: ["CMS", "Accessibility"], width: 1600, height: 1067 },
//  { id: 6, title: "Food Delivery UI", category: "App", img: proj6, tags: ["Android", "UX"], width: 1600, height: 1000 },
//];
//
//const CATEGORIES = ["All", "Web", "App", "Branding"];
//
//const fadeIn = {
//  hidden: { opacity: 0, y: 24 },
//  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//};
//
//export default function Portfolio() {
//  const [filter, setFilter] = useState("All");
//  const [lightboxIndex, setLightboxIndex] = useState(-1);
//
//  const projects = useMemo(
//    () => (filter === "All" ? RAW_PROJECTS : RAW_PROJECTS.filter((p) => p.category === filter)),
//    [filter]
//  );
//
//  const photos = useMemo(
//    () =>
//      projects.map((p) => ({
//        src: p.img,
//        width: p.width,
//        height: p.height,
//        alt: p.title,
//        key: p.id,
//      })),
//    [projects]
//  );
//
//  return (
//    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
//      {/* HERO */}
//      <section className="relative min-h-[72vh] grid place-items-center overflow-hidden">
//        <img src={hero} alt="Hero" className="absolute inset-0 size-full object-cover opacity-40 dark:opacity-30" />
//        <div className="relative z-10 px-6 text-center max-w-4xl">
//          <motion.p variants={fadeIn} initial="hidden" animate="show" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-medium text-gray-900 shadow-sm backdrop-blur dark:bg-gray-900/50 dark:text-white">
//            <BadgeCheck className="h-4 w-4" /> Results-driven Web Agency
//          </motion.p>
//          <motion.h1 variants={fadeIn} initial="hidden" animate="show" className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
//            Work that ships. Results that stick.
//          </motion.h1>
//          <motion.p variants={fadeIn} initial="hidden" animate="show" className="mx-auto mt-3 max-w-2xl text-base text-gray-700 dark:text-gray-300 sm:text-lg">
//            Websites, apps and brand systems built for growth—fast, accessible and SEO-ready.
//          </motion.p>
//          <motion.div variants={fadeIn} initial="hidden" animate="show" className="mt-6 flex flex-wrap justify-center gap-3">
//            <a href="#work" className="inline-flex items-center rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white shadow-lg hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
//              Explore Work <ArrowUpRight className="ml-2 h-4 w-4" />
//            </a>
//            <a href="#contact" className="inline-flex items-center rounded-xl border px-5 py-3 font-semibold hover:bg-gray-50 dark:border-white/20 dark:hover:bg-white/10">
//              Get a Quote
//            </a>
//          </motion.div>
//        </div>
//      </section>
//
//      {/* FILTER BAR */}
//      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="sticky top-0 z-30 mx-auto mt-8 w-full max-w-6xl rounded-2xl border bg-white/80 px-3 py-3 backdrop-blur dark:border-white/10 dark:bg-gray-900/70">
//        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
//          <span className="hidden items-center gap-2 rounded-xl border px-3 py-1 text-xs sm:inline-flex dark:border-white/20">
//            <Filter className="h-4 w-4" /> Filter by
//          </span>
//          {CATEGORIES.map((cat) => {
//            const active = filter === cat;
//            return (
//              <button
//                key={cat}
//                onClick={() => setFilter(cat)}
//                className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
//                  active
//                    ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900"
//                    : "bg-white hover:bg-gray-50 border-gray-200 dark:bg-gray-950 dark:border-white/10 dark:hover:bg-white/10"
//                }`}
//              >
//                {cat}
//              </button>
//            );
//          })}
//        </div>
//      </motion.div>
//
//      {/* WORK GRID */}
//      <section id="work" className="mx-auto mt-8 max-w-6xl px-4">
//        <div className="mb-6 text-center">
//          <h2 className="text-2xl font-bold sm:text-3xl">Featured Projects</h2>
//          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 dark:text-gray-300">
//            From SaaS to e-commerce, apps to branding—crafted experiences that drive results.
//          </p>
//        </div>
//
//        <PhotoAlbum
//          layout="masonry"
//          spacing={12}
//          photos={photos}
//          columns={(w) => (w < 640 ? 1 : w < 1024 ? 2 : 3)}
//          onClick={({ index }) => setLightboxIndex(index)}
//          renderPhoto={({ imageProps, photo, index }) => {
//            const project = projects[index];
//            return (
//              <motion.figure key={photo.key} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="group relative overflow-hidden rounded-2xl border shadow-sm hover:shadow-md dark:border-white/10">
//                <img {...imageProps} className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
//                <figcaption className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/50 via-black/10 to-transparent p-4 opacity-0 group-hover:opacity-100 transition">
//                  <p className="text-xs font-medium text-white/80">{project.category}</p>
//                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
//                  <div className="mt-1 flex flex-wrap gap-1">
//                    {project.tags.map((t) => (
//                      <span key={t} className="rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-medium text-gray-900">
//                        {t}
//                      </span>
//                    ))}
//                  </div>
//                </figcaption>
//              </motion.figure>
//            );
//          }}
//        />
//
//        {/* Lightbox */}
//        <AnimatePresence>
//          {lightboxIndex >= 0 && (
//            <Lightbox
//              open
//              close={() => setLightboxIndex(-1)}
//              index={lightboxIndex}
//              slides={projects.map((p) => ({ src: p.img, description: p.title }))}
//            />
//          )}
//        </AnimatePresence>
//      </section>
//
//      {/* CLIENT LOGOS */}
//      <section className="mx-auto mt-16 max-w-6xl px-4">
//        <h2 className="text-2xl font-bold sm:text-3xl text-center">Trusted by ambitious teams</h2>
//        <div className="mt-6 rounded-2xl border p-4 dark:border-white/10">
//          <Marquee pauseOnHover gradient={false} speed={50}>
//            {[client1, client2, client3, client1, client2, client3].map((logo, i) => (
//              <div key={i} className="mx-10">
//                <img src={logo} alt={`client-${i}`} className="h-10 w-auto opacity-70" />
//              </div>
//            ))}
//          </Marquee>
//        </div>
//      </section>
//
//      {/* METRICS */}
//      <section className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-3">
//        {[
//          { icon: Images, label: "Projects shipped", value: "120+" },
//          { icon: Star, label: "Avg. Lighthouse Score", value: "95+" },
//          { icon: BadgeCheck, label: "Client NPS", value: "70+" },
//        ].map((kpi) => (
//          <div key={kpi.label} className="rounded-2xl border p-6 text-center shadow-sm dark:border-white/10">
//            <kpi.icon className="mx-auto h-6 w-6 opacity-80" />
//            <div className="mt-3 text-3xl font-extrabold">{kpi.value}</div>
//            <div className="text-sm text-gray-600 dark:text-gray-300">{kpi.label}</div>
//          </div>
//        ))}
//      </section>
//
//      {/* CTA */}
//      <section id="contact" className="mx-auto my-16 max-w-6xl px-4">
//        <div className="relative overflow-hidden rounded-3xl border dark:border-white/10">
//          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:to-gray-200" />
//          <div className="relative px-6 py-12 text-center text-white dark:text-gray-900 sm:px-10 sm:py-16">
//            <h3 className="text-2xl font-extrabold sm:text-3xl">Ready to build your next big thing?</h3>
//            <p className="mx-auto mt-2 max-w-2xl text-white/85 dark:text-gray-700">
//              We design, develop and launch high-performance websites and apps.
//            </p>
//            <div className="mt-6 flex flex-wrap justify-center gap-3">
//              <a href="/contact" className="inline-flex items-center rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
//                Get a Quote
//              </a>
//              <a href="#top" className="inline-flex items-center rounded-xl border border-white/30 px-5 py-3 font-semibold hover:bg-white/10 dark:border-gray-300 dark:hover:bg-gray-100/60">
//                Back to top
//              </a>
//            </div>
//          </div>
//        </div>
//      </section>
//    </div>
//  );
//}
//

 //second code 

//


//import React from "react";
//import { motion } from "framer-motion";
//
//// ✅ Import images from local assets
//import hero from "../assets/images/hero-image-4.jpg";
//import aboutUsBanner from "../assets/images/finance-industries.jpg";
//import education from "../assets/images/Education.jpg";
//import foodIndustries from "../assets/images/food-industries.jpg";
//import healthcare from "../assets/images/healthCare-industries.jpg";
//import retail from "../assets/images/retail-Industries.jpg";
//import startup from "../assets/images/tech-startUp-industries.jpg";
//import client1 from "../assets/images/hero-image-4.jpg";
//import client2 from "../assets/images/hero-image-4.jpg";
//import client3 from "../assets/images/hero-image-4.jpg";
//
//
//// ✅ Project Data
//const PROJECTS = [
//  {
//    id: 1,
//    title: "D2C E-Commerce Revamp",
//    category: "Web",
//    img: aboutUsBanner,
//    tags: ["Next.js", "Tailwind", "Stripe"],
//  },
//  {
//    id: 2,
//    title: "SaaS Landing Growth",
//    category: "Web",
//    img: education,
//    tags: ["SEO", "A/B Test", "Analytics"],
//  },
//  {
//    id: 3,
//    title: "Fintech Mobile UI",
//    category: "App",
//    img: foodIndustries,
//    tags: ["iOS", "React Native", "Design"],
//  },
//  {
//    id: 4,
//    title: "Brand Identity System",
//    category: "Branding",
//    img: healthcare,
//    tags: ["Logo", "Guidelines", "Typography"],
//  },
//  {
//    id: 5,
//    title: "EdTech Portal",
//    category: "Web",
//    img: retail,
//    tags: ["CMS", "Accessibility", "Lighthouse 95+"],
//  },
//  {
//    id: 6,
//    title: "Food Delivery App UI",
//    category: "App",
//    img: startup,
//    tags: ["Android", "Prototyping", "UX"],
//  },
//];
//
//// ✅ Clients Logo
//const CLIENTS = [client1, client2, client3, client1, client2, client3];
//
//export default function Portfolio() {
//  return (
//    <div className="bg-gray-50 text-gray-900">
//      {/* Hero Section */}
//      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
//        <img
//          src={hero}
//          alt="Portfolio Hero"
//          className="absolute inset-0 w-full h-full object-cover opacity-40"
//        />
//        <div className="relative z-10 text-center px-6">
//          <motion.h1
//            initial={{ opacity: 0, y: 30 }}
//            animate={{ opacity: 1, y: 0 }}
//            transition={{ duration: 0.8 }}
//            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900"
//          >
//            Our <span className="text-indigo-600">Portfolio</span>
//          </motion.h1>
//          <motion.p
//            initial={{ opacity: 0 }}
//            animate={{ opacity: 1 }}
//            transition={{ delay: 0.3, duration: 0.8 }}
//            className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto"
//          >
//            Explore our latest projects where creativity meets technology 🚀
//          </motion.p>
//        </div>
//      </section>
//
//      {/* Projects Grid */}
//      <section className="py-16 px-6 max-w-7xl mx-auto">
//        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
//          Featured Projects
//        </h2>
//        <p className="text-center text-gray-600 mt-3 mb-10 max-w-2xl mx-auto">
//          From SaaS to E-commerce, apps to branding — we craft digital
//          experiences that drive results.
//        </p>
//
//        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//          {PROJECTS.map((project, i) => (
//            <motion.div
//              key={project.id}
//              initial={{ opacity: 0, y: 40 }}
//              animate={{ opacity: 1, y: 0 }}
//              transition={{ delay: i * 0.2, duration: 0.6 }}
//              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group"
//            >
//              <div className="overflow-hidden">
//                <img
//                  src={project.img}
//                  alt={project.title}
//                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
//                />
//              </div>
//              <div className="p-6">
//                <h3 className="text-xl font-semibold text-gray-900">
//                  {project.title}
//                </h3>
//                <p className="text-sm text-indigo-600 font-medium">
//                  {project.category}
//                </p>
//                <div className="flex flex-wrap gap-2 mt-3">
//                  {project.tags.map((tag, j) => (
//                    <span
//                      key={j}
//                      className="text-xs px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full"
//                    >
//                      {tag}
//                    </span>
//                  ))}
//                </div>
//              </div>
//            </motion.div>
//          ))}
//        </div>
//      </section>
//
//      {/* Clients */}
//      <section className="py-16 bg-white px-6">
//        <h2 className="text-3xl font-bold text-center text-gray-900">
//          Trusted by Leading Brands
//        </h2>
//        <p className="text-center text-gray-600 mt-3 mb-10 max-w-2xl mx-auto">
//          We collaborate with startups, enterprises, and global companies.
//        </p>
//
//        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
//          {CLIENTS.map((logo, i) => (
//            <motion.div
//              key={i}
//              initial={{ opacity: 0, scale: 0.8 }}
//              animate={{ opacity: 1, scale: 1 }}
//              transition={{ delay: i * 0.1, duration: 0.5 }}
//              className="flex items-center justify-center p-4 rounded-xl border bg-gray-50 hover:shadow-md transition"
//            >
//              <img
//                src={logo}
//                alt={`Client ${i + 1}`}
//                className="h-10 sm:h-12 opacity-70"
//              />
//            </motion.div>
//          ))}
//        </div>
//      </section>
//    </div>
//  );
//}
//
// src/pages/Portfolio.jsx
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import images from local assets
import hero from "../assets/images/hero-image-4.jpg";
import aboutUsBanner from "../assets/images/finance-industries.jpg";
import education from "../assets/images/Education.jpg";
import foodIndustries from "../assets/images/food-industries.jpg";
import healthcare from "../assets/images/healthCare-industries.jpg";
import retail from "../assets/images/retail-Industries.jpg";
import startup from "../assets/images/tech-startUp-industries.jpg";
import client1 from "../assets/images/hero-image-4.jpg";
import client2 from "../assets/images/hero-image-4.jpg";
import client3 from "../assets/images/hero-image-4.jpg";

// ✅ Project Data
const PROJECTS = [
  {
    id: 1,
    title: "D2C E‑Commerce Revamp",
    category: "Web",
    img: aboutUsBanner,
    tags: ["Next.js", "Tailwind", "Stripe"],
  },
  {
    id: 2,
    title: "SaaS Landing Growth",
    category: "Web",
    img: education,
    tags: ["SEO", "A/B Test", "Analytics"],
  },
  {
    id: 3,
    title: "Fintech Mobile UI",
    category: "App",
    img: foodIndustries,
    tags: ["iOS", "React Native", "Design"],
  },
  {
    id: 4,
    title: "Brand Identity System",
    category: "Branding",
    img: healthcare,
    tags: ["Logo", "Guidelines", "Typography"],
  },
  {
    id: 5,
    title: "EdTech Portal",
    category: "Web",
    img: retail,
    tags: ["CMS", "Accessibility", "Lighthouse 95+"]
  },
  {
    id: 6,
    title: "Food Delivery App UI",
    category: "App",
    img: startup,
    tags: ["Android", "Prototyping", "UX"]
  },
];

const CATEGORIES = ["All", "Web", "App", "Branding"];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <main className="px-4 sm:px-6 lg:px-10 py-10 lg:py-14">
      {/* HERO */}
      <motion.section
        id="top"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-5xl mx-auto text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs sm:text-sm bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Results‑driven Web Agency Portfolio
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Work that ships. Results that stick.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Websites, apps, and brand systems crafted for growth—fast, accessible, and SEO‑ready.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#work" className="inline-flex items-center rounded-xl px-5 py-3 text-white font-semibold bg-gray-900 hover:bg-gray-800 transition shadow-lg shadow-gray-900/10">
            Explore Work
          </a>
          <a href="#contact" className="inline-flex items-center rounded-xl px-5 py-3 font-semibold border hover:bg-gray-50 transition">
            Get a Quote
          </a>
        </div>
      </motion.section>

      {/* FILTER BAR */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto sticky top-0 z-20 mt-10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/50 rounded-2xl border px-3 sm:px-4 py-3"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={
                  `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ` +
                  (active
                    ? "bg-gray-900 text-white border-gray-900 shadow"
                    : "bg-white hover:bg-gray-50 border-gray-200")
                }
                aria-pressed={active}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* GRID / MASONRY */}
      <section id="work" className="max-w-6xl mx-auto mt-8">
        <AnimatePresence mode="popLayout">
          {/* Masonry columns with break-inside-avoid for card integrity */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className="mb-6 break-inside-avoid rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-shadow group bg-white"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 text-left">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 border">
                      {p.category}
                    </span>
                    {p.tags?.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-1 rounded-full bg-gray-50 border text-gray-600">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                  <div className="mt-3 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="text-sm font-semibold underline underline-offset-4 hover:no-underline"
                    >
                      Start a Similar Project →
                    </a>
                    <button
                      className="text-xs px-3 py-1 rounded-lg border hover:bg-gray-50"
                      onClick={() => window.alert(`Open case study for: ${p.title}`)}
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
      </section>

      {/* CLIENT LOGOS / SOCIAL PROOF */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto mt-16"
      >
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Trusted by ambitious teams</h2>
          <p className="mt-2 text-gray-600">From startups to enterprises.</p>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {[client1, client2, client3, client1, client2, client3].map((logo, n) => (
            <div key={n} className="flex items-center justify-center p-4 rounded-xl border bg-white hover:shadow-sm transition">
              <img src={logo} alt="client logo" className="h-8 sm:h-10 opacity-70" />
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        id="contact"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto mt-16"
      >
        <div className="relative overflow-hidden rounded-3xl border">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
          <div className="relative px-6 py-12 sm:px-10 sm:py-16 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to build your next big thing?</h3>
            <p className="mt-2 text-white/80 max-w-2xl mx-auto">
              We design, develop, and launch high‑performance websites and apps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a href="/contact" className="inline-flex items-center px-5 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition">
                Get a Quote
              </a>
              <a href="#top" className="inline-flex items-center px-5 py-3 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition">
                Back to top
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
