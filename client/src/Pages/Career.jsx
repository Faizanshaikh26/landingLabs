import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../Footer";
import { CustomAccordion } from "../components/custome-acordion";

export default function Career() {
  const jobListings = [
    { role: "Web Developer (React / WordPress)", team: "Software Development", workTime: "Full-time", location: "Pune, IN" },
    { role: "UI/UX Designer", team: "Software Development", workTime: "Full-time", location: "Pune, IN" },
    { role: "Digital Marketing Executive", team: "Marketing", workTime: "Full-time", location: "Pune, IN" },
    { role: "Content Writer & Strategist", team: "Marketing", workTime: "Full-time", location: "Pune, IN" },
    { role: "Sales & Marketing Executive", team: "Marketing", workTime: "Full-time", location: "Pune, IN" },
    { role: "Social Media Manager", team: "Marketing", workTime: "Full-time", location: "Pune, IN" },
  ];

  const faqItems = [
    {
      question: "Do you offer any remote work opportunities?",
      answer: "Yes, we offer flexible remote work options for many of our positions...",
    },
    {
      question: "What are some of the challenges and rewards of working at your company?",
      answer: "Working with us means tackling cutting-edge AI challenges...",
    },
    {
      question: "What are some of your milestones and achievements so far?",
      answer: "We've successfully launched multiple AI products...",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-black">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Text */}
          <motion.div
            className="flex-1 flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="max-w-lg space-y-6">
              <motion.h1
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                Come join us!
              </motion.h1>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                We're already heads down working hard, but would love to have your added expertise on the team.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full font-medium text-base"
              >
                See open roles
              </motion.button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex-1 relative order-1 lg:order-2"
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="https://cdn.prod.website-files.com/65d5ac710278672f815e9202/65ec798689fd0e67cef30538_RolandAndLuisCropped.webp"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Job Listings */}
        <motion.div
          className="px-8 lg:px-16 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-black">Available positions</h2>
              <p className="text-gray-600 text-lg">waiting to be filled</p>
            </motion.div>

            {/* Cards Desktop */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-12 gap-4 pb-4 mb-8 border-b border-gray-300">
                <div className="col-span-4 text-sm font-medium text-gray-600 uppercase">ROLE</div>
                <div className="col-span-2 text-sm font-medium text-gray-600 uppercase">TEAM</div>
                <div className="col-span-2 text-sm font-medium text-gray-600 uppercase">WORK TIME</div>
                <div className="col-span-2 text-sm font-medium text-gray-600 uppercase">LOCATION</div>
              </div>
              <div className="space-y-0">
                {jobListings.map((job, i) => (
                  <motion.div
                    key={i}
                    className="grid grid-cols-12 gap-4 py-6 border-b border-gray-200 hover:bg-gray-200 transition-colors"
                    initial={{ opacity: 0, rotateY: 15 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <div className="col-span-4"><h3 className="text-lg font-medium text-black">{job.role}</h3></div>
                    <div className="col-span-2 text-gray-700">{job.team}</div>
                    <div className="col-span-2 text-gray-700">{job.workTime}</div>
                    <div className="col-span-2 text-gray-700">{job.location}</div>
                    <div className="col-span-2 flex justify-end">
                      <button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full font-medium">
                        Apply
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cards Mobile */}
            <div className="lg:hidden space-y-6">
              {jobListings.map((job, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-100 border border-gray-300 rounded-lg p-6 hover:bg-gray-200 transition-colors"
                  initial={{ opacity: 0, rotateY: 15 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-medium text-black mb-4">{job.role}</h3>
                  <div className="space-y-2 mb-6 text-gray-700">
                    <p>{job.team}</p>
                    <p>{job.workTime}</p>
                    <p>{job.location}</p>
                  </div>
                  <button className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full font-medium w-full">
                    Apply
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          className="px-8 lg:px-16 py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-black">Questions?</h2>
              <p className="text-xl text-gray-600">We're glad you asked...</p>
            </div>
            <CustomAccordion items={faqItems} />
          </div>
        </motion.div>

        {/* Hiring Process */}
        <motion.div
          className="px-8 lg:px-16 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-black">Our Hiring Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Apply", "Screening", "Skill Test / Task Round", "Final Interview", "Offer Rollout", "Apply Now"].map((step, i) => (
                <motion.div
                  key={step}
                  className="border border-gray-300 rounded-lg p-8 bg-white shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ rotateX: 4, rotateY: -4, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 150, damping: 10, duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm text-gray-500 mb-4">0{i + 1}</div>
                  <h3 className="text-2xl font-bold text-black mb-4">{step}</h3>
                  <p className="text-gray-700">
                    {step === "Apply"
                      ? "Submit resume + portfolio (if needed)"
                      : step === "Screening"
                      ? "HR review + role fit discussion"
                      : step === "Skill Test / Task Round"
                      ? "Only for specific roles"
                      : step === "Final Interview"
                      ? "With team lead/founder"
                      : step === "Offer Rollout"
                      ? "With growth roadmap"
                      : "Mail your CV to job@landinglabs.in"}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
