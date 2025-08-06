
import { motion } from 'framer-motion';

import Aaradhya from '../assets/images/Aaradhya.Logo TP-white.png';
import Crunchy from '../assets/images/Crunchy.Logo TP.png';
import EzeDesign from '../assets/images/Eze Design.Logo TP.png';
import Ezepune from '../assets/images/Ezepune.Logo TP.png';
import Kiara from '../assets/images/Kiara.Logo TP.png';
import Kohinoor from '../assets/images/Kohinoor.Logo TP-white.png';
import MadakeJewellers from '../assets/images/Madake Jewellers.Logo TP-white.png';
import MrMS from '../assets/images/Mr& MS.Logo TP-white.png';
import NikolEV from '../assets/images/NikolEV.Logo TP.png';
import Sidenest from '../assets/images/Sidenest.Logo TP-white.png';
import SuncityVilla from '../assets/images/Suncity Villa.Logo TP-white.png';
import Techmark from '../assets/images/Techmark.Logo TP-white.png';
import Zelc from '../assets/images/Zelc.Logo TP-white.png';

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


const LogoMarquee = ({ logos, direction = "left" }) => (
  <motion.div
    className="relative overflow-hidden w-full"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Marquee Track */}
    <div
      className={`flex gap-4 sm:gap-6 md:gap-8 w-max ${
        direction === "right" ? "animate-marquee-right" : "animate-marquee-left"
      }`}
    >
      {[...logos, ...logos].map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Logo ${index}`}
          className="h-14 sm:h-16 md:h-20 lg:h-28 xl:h-32 w-auto max-w-[200px] object-contain opacity-80 hover:scale-110 transition-transform duration-300"
        />
      ))}
    </div>

    {/* Styles */}
    <style jsx>{`
      @keyframes marqueeLeft {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      @keyframes marqueeRight {
        0% {
          transform: translateX(-50%);
        }
        100% {
          transform: translateX(0%);
        }
      }

      .animate-marquee-left {
        animation: marqueeLeft 50s linear infinite;
      }

      .animate-marquee-right {
        animation: marqueeRight 50s linear infinite;
      }
    `}</style>
  </motion.div>
);




export default function StateSection() {
  return (
    <section className="relative lg:pb-10 px-4 sm:py-16 sm:px-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8 text-center">

        {/* Header */}
        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="flex-grow h-px bg-gray-600"></span>
          <h2 className="lg:text-xl text-base font-semibold text-primaryText">
            Trusted by Startups & Enterprises to{" "}
            <span className="text-accent font-bold">Build Digital Products</span>
          </h2>
          <span className="flex-grow h-px bg-gray-600"></span>
        </motion.div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 lg:gap-16">
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
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-secondaryText">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-secondaryText">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Marquee Logos */}
       <div className='mt-5'>
         <LogoMarquee logos={logos} direction="left" />
      <LogoMarquee logos={logos} direction="right" />
       </div>
      </div>
    </section>
  );
}
