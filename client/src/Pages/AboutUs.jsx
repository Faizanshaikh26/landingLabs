
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../Footer';
import AboutBanner from '../assets/images/about-us-banner.webp';
import {
  LucideUserRoundPlus,
  MoveRight,
  PanelsTopLeftIcon
  , Lightbulb, Rocket, Target, FlaskRound, Code2, PenTool
} from 'lucide-react';
import StateSection from '../components/State-section';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import Banner from "../assets/images/about/banner.jpg"


import image5 from '../assets/images/about/WhatsApp Image 2025-09-01 at 14.51.19_9c85ce15.jpg'

export default function AboutUs() {

  const ScrollFadeIn = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );

  const ScrollSlideInFromLeft = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );

  const ScrollSlideInFromRight = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );



  // Fade up variant for reuse
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    },
  };

  const data = [
    {
      title: 'End-to-End Services',
      description: 'Everything you need, in one place.',
      titleIcon: MoveRight
    },
    {
      title: 'Innovation-First',
      description: 'We think big, move fast, and experiment often.',
      titleIcon: PanelsTopLeftIcon
    },
    {
      title: 'Transparent Communication',
      description: 'Real-time updates & dedicated support.',
      titleIcon: LucideUserRoundPlus
    }
  ];

  const teamMembers = [

    {
      role: "Founder",
      name: "Janak Sonare",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGaEkCUSaLV0g/profile-displayphoto-shrink_200_200/B4DZccJ_h7GUAY-/0/1748524073302?e=1759968000&v=beta&t=YJ9bHla0rRTcaAhb5mpqA44GJdZHKOLQyWU12EESd-Q"
    },
    {
      name: "Abhishek Satpute",
      role: "Hr Manager",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEgaTjS4TX_FA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725477947354?e=1759968000&v=beta&t=PNvzGOEIlOKSwPHRzAiOrT_xvjkE4SRGgCFBTKR103I"
    },
    {
      name: "Gayatri Madake",
      role: "Project Manager ",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHTh_Oa5jrHrQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1678967188646?e=1759968000&v=beta&t=RJc2sLrW5IYNFBzH4ppCwe_j_oQbdpqVK5x5JG35Tu8"
    },
     {
      name: "Faizan Shaikh",
      role: "Full Stack Developer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQH0qwGSeu5UYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726295165578?e=1759968000&v=beta&t=_3QMM1UrC-Fa0UB6_bawLQk94bvyHaNntYPU_ZdxlIw"
    },
    {
      name: "Sumedha Surwade",
      role: "Digital Marketing Intern",
      image: image5
    },
    {
      name: "Shweta Gawhane",
      role: "Graphic Designer",
      image: image5
    },

  
    {
      name: "Saurabh Satpute",
      role: "Frontend Developer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQFIcluvpjXmIA/profile-displayphoto-scale_400_400/B4DZhLPWs2HsAg-/0/1753608974829?e=1759968000&v=beta&t=oNDvNd7ePwA7TtA5zW_h1SjgaSJJ55CAF3qDl9Ocjdo"
    },
 
    {
      name: "Sushant Jagtap",
      role: "Video Editor & Content Writer",
      image: "https://media.licdn.com/dms/image/v2/D4D35AQEvgI2cYW5AzQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1734694063553?e=1757422800&v=beta&t=r1Hp9sF73r7WDiEx7uX9Ep8YbelYX5jvRZFpiwY7oTU"
    },
       {
      name: "Ram Khatal",
      role: "Frontend Developer",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQE61BPTPIe0dQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718168484946?e=1759968000&v=beta&t=qFCWhuTHbiakq8aIs53ks5FTrlDnDOcmtrRw9HZAw-g"
    },
       {
      name: "Ganesh Tambale",
      role: "Java Developer",
      image: "https://media.licdn.com/dms/image/v2/D5635AQHRCZ_Jyv_cFA/profile-framedphoto-shrink_400_400/B56Zf2b1TbG0Ac-/0/1752186181236?e=1757422800&v=beta&t=s8nTiznG2oWmZVlRZdwHmaTa8u7q7wtsqgTnCUPBHqs"
    },
  ];

  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];
  return (
    <>
      <Navbar />


      <div className="py-14 md:pt-32 md:py-20 text-[#EAEAEA]">








        <div className="text-primaryText pt-16 px-6 md:px-12">

          {/* --- OUR STORY --- */}
          <section className="max-w-7xl mx-auto sm:py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* TEXT */}
              <div>
                <p className="text-accent font-semibold mb-2">Our Story</p>
                <h1 className="text-2xl sm:text-5xl font-light leading-tight">
                  Smarter Growth — <br /> Engineered for You
                </h1>
                <p className="mt-6 text-gray-600 max-w-md">
                  At Landing Labs, we transform ideas into growth engines — designing,
                  developing, and launching digital ecosystems for creators, startups,
                  and businesses.
                </p>
              </div>

              {/* IMAGE */}
              <div>
                <img
                  src={Banner}
                  alt="Landing Labs"
                  className="rounded-xl shadow-md"
                />
              </div>
            </div>
          </section>

          {/* --- WHAT WE DO --- */}
          <section className=" py-10 sm:py-20">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What <span className="text-accent">We Do</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
                At Landing Labs, we connect creativity, technology, and growth to build digital solutions that actually work.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Custom Landing Pages & Websites", desc: "Sleek, lightning-fast, built to convert.", icon: Rocket },
                  { title: "App & Software Development", desc: "Scalable products for tomorrow’s world.", icon: Code2 },
                  { title: "Digital Marketing & Branding", desc: "From SEO to social, we put you on the map.", icon: Target },
                  { title: "Business Growth Strategies", desc: "Data + insight = your growth blueprint.", icon: Lightbulb },
                  { title: "Creative Design & Content", desc: "Stories and visuals that click (literally).", icon: PenTool },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: false, amount: 0.3 }}
                      className="bg-primaryCardBg shadow-md rounded-xl p-6 hover:shadow-xl transition"
                    >
                      <Icon className="w-10 h-10 text-accent mb-4" />
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* --- WHY LABS --- */}
          <section className="max-w-6xl mx-auto sm:py-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why <span className="text-accent">“Labs”?</span>
              </h2>
              <p className="text-sm sm:text-lg text-gray-700 max-w-3xl mx-auto">
                Because we experiment, innovate, and iterate until we crack the code for your growth.
                Think of us as your digital R&D department, where concepts become prototypes, and prototypes become success stories.
              </p>
            </motion.div>
          </section>

          {/* --- MISSION & VISION --- */}
          {/* --- MISSION & VISION --- */}
          <section className="py-10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-primaryCardBg rounded-xl shadow-md p-8 border-l-4 border-orange-500"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-700 text-sm">
                  To empower businesses of all sizes with development, design, and marketing solutions that create visibility, build trust, and spark measurable growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-primaryCardBg rounded-xl shadow-md p-8 border-l-4 border-orange-500"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700 text-sm">
                  A future where every brand, startup, or creator can leverage technology and creativity to scale, without limits.
                </p>
              </motion.div>
            </div>
          </section>

          {/* --- FROM US TO YOU --- */}
          <section className="max-w-7xl mx-auto py-20">
            <div className="grid md:grid-cols-2 gap-20 items-center">

              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="From Us To You"
                  className="rounded shadow-lg"
                />
              </motion.div>

              {/* Right Side - Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  From <span className="text-accent">Us</span>, To{" "}
                  <span className="text-accent">You</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We don’t just deliver services. We deliver platforms, experiences,
                  and growth journeys. Your vision is our blueprint. Your growth is our
                  goal.
                </p>

                {/* Timeline (unchanged) */}
                <div className="relative max-w-3xl mx-auto px-4">
                  <div className="absolute left-[35px] top-0 bottom-0 w-0.5 bg-orange-300"></div>
                  {/* Point 1 */}
                  <div className="flex items-start gap-4 mb-10 relative">
                    <div className="relative z-10 flex items-center justify-center h-10 w-10 rounded-full bg-orange-500 text-white font-bold">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg sm:text-xl">Strategy First</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Every solution begins with a roadmap designed around your business goals.
                      </p>
                    </div>
                  </div>
                  {/* Point 2 */}
                  <div className="flex items-start gap-4 mb-10 relative">
                    <div className="relative z-10 flex items-center justify-center h-10 w-10 rounded-full bg-orange-500 text-white font-bold">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg sm:text-xl">Seamless Execution</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        From design to launch, we ensure smooth collaboration and delivery.
                      </p>
                    </div>
                  </div>
                  {/* Point 3 */}
                  <div className="flex items-start gap-4 relative">
                    <div className="relative z-10 flex items-center justify-center h-10 w-10 rounded-full bg-orange-500 text-white font-bold">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg sm:text-xl">Growth that Lasts</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Beyond launch, we scale and optimize for long-term impact.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>



        </div>


        <div className=" text-primaryText sm:pt-16 px-6 md:px-12">


          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:pb-30">
            <div>
              <p className="text-accent font-semibold mb-2">About Company</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Turning Ideas Into Impact
              </h2>
              <div className="mb-6">
                <p className="text-secondaryText leading-relaxed max-w-3xl text-lg mx-auto">
                  At <span className="font-semibold text-primaryText">Landing Labs</span>, we don’t just build brands — we engineer digital success.
                  As a full-stack digital transformation agency, we specialize in
                  <span className="font-semibold text-primaryText"> Digital Marketing, AI Solutions, Web & App Development,</span> and
                  <span className="font-semibold text-primaryText"> Creative Design</span> — all under one roof.
                </p>
              </div>
              <p className="text-primaryText mb-4">
                We blend creative thinking, deep technical expertise, and marketing intelligence to offer:
              </p>
              <ul className="text-secondaryText list-disc list-inside space-y-2 mb-6">
                <li>Digital Marketing (SEO, Ads, Social Media, Email)</li>
                <li>Artificial Intelligence & Automation (Chatbots, NLP, ML Models)</li>
                <li>Web & Mobile App Development (SaaS, Ecommerce, Portals)</li>
                <li>Branding & Design (Logos, UI/UX, Motion Graphics)</li>
                <li>
                  Every project is treated like a <span className="font-semibold text-primaryText">startup within our lab</span>,
                  giving it attention, experimentation, and the commitment it deserves.
                </li>
              </ul>
              <button className="bg-orange-500 hover:bg-orange-600 text-primaryText px-6 py-3 rounded-md font-medium transition">
                EXPLORE US
              </button>
            </div>
            <div className="space-y-6">
              <p className="text-primaryText">
                We empower startups, small businesses, and enterprises to not only compete but lead in their space by delivering smart,
                scalable, and data-driven digital solutions. Whether you’re launching a new idea or scaling an existing one,
                we’re your lab of innovation, strategy, and execution.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQGaEkCUSaLV0g/profile-displayphoto-shrink_200_200/B4DZccJ_h7GUAY-/0/1748524073302?e=1759968000&v=beta&t=YJ9bHla0rRTcaAhb5mpqA44GJdZHKOLQyWU12EESd-Q"
                  alt="Janak Sonare"
                  className="w-28 h-28 rounded-md object-cover bg-white"
                />
                <div>
                  <p className="text-primaryText font-bold">Janak Sonare</p>
                  <p className="text-primaryText text-sm">FOUNDER & CEO</p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-primaryText mb-1">Need help? Contact me</p>
                <p className="text-primaryText text-sm">‪+91 738 739 2708‬ or janaksonare@landinglabs.in</p>
              </div>
            </div>
          </div>

        </div>

        <div className=" text-primaryText  px-6 md:px-12  ">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="lg:flex  justify-between  mb-16 " >
              <div className="lg:w-[30%] mb-8 lg:mb-0 flex-[70%">
                <h1 className="text-xl lg:text-3xl font-bold">
                  MEET THE BRAINS <br /> BEHIND
                  <br />BRANDS & BACKENDS
                </h1>
              </div>

              <div className="lg:w-[65%] lg:pl-16 ">
                <p className="text-lg lg:text-3xl leading-relaxed">
                  Explore our team—where digital
                  <br />
                  marketing strategists and IT architects
                  <br />
                  work in sync to deliver measurable impact.
                </p>
              </div>
            </div>


            {/* Team Members Marquee */}
            <div className="overflow-hidden">
              <div className="flex animate-marquee hover:pause-marquee">
                {duplicatedMembers.map((member, index) => (
                  <div key={index} className="flex-shrink-0 w-64 mx-3">
                    <div className="relative overflow-hidden rounded-2xl  aspect-[3/4]">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />

                      {/* Text overlay at bottom of card */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                        {member.role && <p className="text-white text-sm mt-1">{member.role}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
    animation: marquee 30s linear infinite;
    display: flex;
    width: fit-content;
  }

        // .hover\\:pause-marquee:hover {
        //   animation-play-state: paused;
        // }
      `}</style>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 text-[#EAEAEA]">

          <ScrollFadeIn delay={0.2}>
            <div className="mt-20 text-center border-t border-gray-700 pt-16">
              <div className="mb-10 space-y-4">
                <span className="inline-block px-4 py-1 text-sm font-semibold text-primaryText bg-[#bdc9e3] rounded-full">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-primaryText">
                  Why Landing <span className="text-accent">Labs?</span>
                </h2>
                <p className="text-secondaryText text-md md:text-2xl">
                  <span className="text-accent">Here’s what</span> makes us different.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {data.map((item, index) => {
                  const Icon = item.titleIcon;
                  return (
                    <div
                      key={index}
                      className="relative group rounded-xl overflow-hidden bg-primaryCardBg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                    >
                      <div className="absolute -inset-1 bg-primaryCardBg opacity-25 blur group-hover:opacity-100 transition duration-300"></div>
                      <div className="relative p-6 z-10 flex flex-col items-start gap-4">
                        <Icon className="w-10 h-10 text-orange-400" />
                        <h3 className="text-lg font-semibold text-primaryText">{item.title}</h3>
                        <p className="text-sm text-secondaryText">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollSlideInFromLeft>
            <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 mt-20 text-center border-t border-gray-700 pt-10 ">
              <div className="mb-12 space-y-5 py-4 md:mb-16 md:text-center">
                <h1 className="mb-5 text-3xl font-semibold text-primaryText md:text-center md:text-5xl">
                  Trusted by the <span className="text-accent">Best in the Industry</span>
                </h1>
                <p className="mt-4 md:text-2xl text-secondaryText">
                  <span className="text-accent">Our partners</span> are leaders, innovators, and game-changers who trust us to deliver excellence — every single time.
                </p>

                <div className="py-4">
                  <StateSection />
                </div>
              </div>
            </div>
          </ScrollSlideInFromLeft>


          <ScrollSlideInFromRight>
            <div className="relative max-w-7xl mx-auto px-6 py-8 sm:py-16 rounded-md border border-gray-200 shadow-sm overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm scale-105"
                style={{ backgroundImage: `url(${AboutBanner})`, zIndex: 0 }}

              ></div>
              <div className="absolute inset-0 bg-black/70 z-[1]"></div>
              <div className="relative z-[2] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="md:max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Let’s Build Something<br />Great Together
                  </h2>
                  <p className="mt-6 text-base md:text-lg">
                    We don’t chase trends. We build solutions that last. If you’re looking for a partner who understands your vision,
                    delivers on-time, and cares about real growth — you’re in the right lab.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 border border-black text-primaryText bg-orange-400 font-medium rounded-md hover:bg-gray-100 transition">
                    LEARN MORE
                  </button>
                  <button className="px-6 py-3 bg-orange-500 text-primaryText font-medium rounded-md hover:bg-orange-600 transition">
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>
          </ScrollSlideInFromRight>



          <div className="md:py-16">
            <motion.section
              className="text-center max-w-lg mx-auto py-8 px-4"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-2xl md:text-4xl font-semibold text-primaryText">
                Landing <span className="text-accent">Labs</span>
              </h1>
              <p className="mt-4 md:text-4xl text-3xl text-accent">
                Who <span className="text-secondaryText"> We Work With:</span>
              </p>
            </motion.section>

            <motion.div
              className="bg-[#100604] text-primaryText max-w-7xl mx-auto px-6 py-16 rounded-md"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                {/* Images */}
                <motion.img
                  src="https://landinglabs.in/wp-content/uploads/2025/06/We-Build.-You-Grow.png.webp"
                  alt="Creative Agency"
                  className="w-full max-w-[260px] object-contain"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.2 }}
                />
                <motion.img
                  src="https://landinglabs.in/wp-content/uploads/2025/06/We-Build.-You-Grow.-1.png.webp"
                  alt="Landing Labs"
                  className="w-full max-w-[260px] object-contain"
                  initial={{ x: 60, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false, amount: 0.2 }}
                />

                {/* Text */}
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <p className="text-accent font-semibold text-lg mb-2">2023 – 2025</p>
                  <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
                    We collaborate with:
                  </h2>
                  <ul className="space-y-3 text-[#DDD] text-base leading-relaxed">
                    <li>Ambitious startups ready to launch.</li>
                    <li>SMEs looking to scale operations.</li>
                    <li>Corporates seeking transformation.</li>
                    <li>
                      Politicians, public figures, and influencers building digital authority.
                    </li>
                  </ul>

                  <Link to="/contact-us">
                    <motion.button
                      className="mt-8 bg-orange-500 hover:bg-orange-600 text-primaryText px-6 py-3 rounded-md font-semibold transition"

                    >
                      CONTACT US
                    </motion.button>
                  </Link>

                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>




      </div>

      <Footer />
    </>
  );
}
