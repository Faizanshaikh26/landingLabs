import React from 'react';
import { motion } from 'framer-motion';

import Aaradhya from '../assets/images/Aaradhya.Logo TP.png';
import Crunchy from '../assets/images/Crunchy.Logo TP.png';
import EzeDesign from '../assets/images/Eze Design.Logo TP.png';
import Ezepune from '../assets/images/Ezepune.Logo TP.png';
import Kiara from '../assets/images/Kiara.Logo TP.png';
import Kohinoor from '../assets/images/Kohinoor.Logo TP.png';
import MadakeJewellers from '../assets/images/Madake Jewellers.Logo TP.png';
import MrMS from '../assets/images/Mr& MS.Logo TP.png';
import NikolEV from '../assets/images/NikolEV.Logo TP.png';
import Sidenest from '../assets/images/Sidenest.Logo TP.png';
import SuncityVilla from '../assets/images/Suncity Villa.Logo TP.png';
import Techmark from '../assets/images/Techmark.Logo TP.png';
import Zelc from '../assets/images/Zelc.Logo TP.png';

const stats = [
  { label: 'Projects Delivered', value: '100+' },
  { label: 'Satisfied Clients', value: '50+' },
  { label: 'Industries Served', value: '20+' },
  { label: 'Years of Experience', value: '5+' },
];

const logos = [
  Aaradhya, Crunchy, EzeDesign, Ezepune, Kiara, Kohinoor, MadakeJewellers,
  MrMS, NikolEV, Sidenest, SuncityVilla, Techmark, Zelc
];

const LogoMarquee = ({ logos }) => (
  <motion.div
  className="relative mt-16 pb-4 overflow-hidden w-full"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true, amount: 0.3 }}
>
  {/* Left & Right Fades */}
  <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
  <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

  {/* Marquee Track */}
  <div className="flex animate-marquee-track gap-6 sm:gap-10 md:gap-12 w-max">
  {[...logos, ...logos].map((src, index) => (
    <img
            key={index}
  src={src}
  alt={`Logo ${index}`}
  className="h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto max-w-[160px] object-contain opacity-80 hover:scale-110 transition-transform duration-300  2"
/>

  ))}
</div>


  <style jsx>{`
    @keyframes marqueeTrack {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-marquee-track {
      animation: marqueeTrack 40s linear infinite;
    }
  `}</style>
</motion.div>


);

export default function StateSection() {
  return (
    <section className="relative lg:pb-10  px-4 sm:py-16 sm:px-8 overflow-hidden">
      <div className="container mx-auto px-8 text-center">
        {/* Header */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="flex-grow h-px bg-gray-600"></span>
          <h2 className="lg:text-xl font-semibold text-white">
            Trusted by Startups & Enterprises to{' '}
            <span className="text-orange-500 font-bold">Build Digital Products</span>
          </h2>
          <span className="flex-grow h-px bg-gray-600"></span>
        </motion.div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap  justify-center gap-8 lg:gap-16">
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
              <h3 className="text-2xl lg:text-4xl font-extrabold text-[#CFFFE2]">{stat.value}</h3>
              <p className="mt-2 text-base text-[#CFFFE2]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <LogoMarquee logos={logos} />
      </div>
    </section>
  );
}
