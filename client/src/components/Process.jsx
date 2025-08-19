// import React from "react";

// export default function Process() {
//   const steps = [
//     {
//       title: "ENGAGEMENT",
//       description: "Agile video production and brand-first creative that cuts past noise",
//     },
//     {
//       title: "TRAFFIC",
//       description: "Multichannel prospecting & retargeting of top-performing user segments",
//     },
//     {
//       title: "CONVERSION",
//       description: "Landing pages to on-site messaging and design optimization",
//     },
//     {
//       title: "RETENTION",
//       description: "Content strategy and creative testing of email sequences",
//     },
//   ];

//   return (
//     <div className="bg-black text-primaryText">
//       {/* Partnership Section */}
//       <section className="px-4 py-20">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-primaryText">
//             Partnership isn’t just a promise —{" "}
//             <span className="text-orange-500">it’s our process.</span>
//           </h2>
//           <p className="mt-4 text-secondaryText text-base md:text-lg">
//             We’re committed to building sustainable systems and marketing strategies that drive
//             long-term success for your business.
//           </p>
//         </div>
//       </section>

//       {/* Ladder over Image Section */}
//       <section className="relative flex items-center justify-center px-4 pb-20  ">
//         {/* Background Image */}
//         <img
//           src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg"
//           alt="Our process"
//           className="w-full max-w-6xl h-[700px] object-cover rounded-md"
//         />

//         {/* Ladder overlay */}
//         <div className="absolute w-full   lg:block max-w-5xl h-full pointer-events-none">
//           {steps.map((step, index) => {
//             const top = index * 120;
//             const left = index * 120;
//             return (
//               <div key={index} className="absolute" style={{ top, left }}>
//                 {/* Connecting lines */}
//                 {index < steps.length - 1 && (
//                   <>
//                     <div
//                       className="absolute top-1/2 left-full h-[2px] bg-orange-500"
//                       style={{ width: "40px" }}
//                     />
//                     <div
//                       className="absolute left-full top-1/2 bg-orange-500 w-[2px]"
//                       style={{ height: "80px", marginLeft: "40px" }}
//                     />
//                   </>
//                 )}

//                 {/* Step card */}
//                 <div className="bg-[#1a1a1a] border border-orange-500 rounded-md shadow-md p-3 w-72 pointer-events-auto">
//                   <h3 className="font-bold text-sm text-primaryText mb-2">{step.title}</h3>
//                   <p className="text-secondaryText text-sm">{step.description}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }


import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Process() {
  const steps = [
    {
      id: 1,
      title: "ENGAGEMENT",
      description: "Agile video production and brand-first creative that cuts past noise",
    },
    {
      id: 2,
      title: "TRAFFIC",
      description: "Multichannel prospecting & retargeting of top-performing user segments",
    },
    {
      id: 3,
      title: "CONVERSION",
      description: "Landing pages to on-site messaging and design optimization",
    },
    {
      id: 4,
      title: "RETENTION",
      description: "Content strategy and creative testing of email sequences",
    },
  ];

  return (
    <div className="text-primaryText px-4 sm:px-6 lg:px-8 ">
      {/* Partnership Section */}
      <motion.section
        className="px-4 py-8 "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primaryText">
            Partnership isn’t just a promise —{" "}
            <span className="text-orange-500">it’s our process.</span>
          </h2>
          <p className="mt-4 text-secondaryText text-base md:text-lg">
            We’re committed to building sustainable systems and marketing strategies that drive
            long-term success for your business.
          </p>
        </div>
      </motion.section>

      <div className="max-w-4xl mx-auto">
        {/* Process Image */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        viewport={{ once: false,amount:0.5 }}
        >
          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg"
              alt="Marketing Process Workflow"
              className="rounded-lg shadow-2xl w-full max-w-2xl h-64 object-cover border border-gray-800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-300"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative mb-8 last:mb-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: false,amount:0.5 }}
            >
              {/* Step Number */}
              <div className="absolute left-5 z-10 bg-primaryCardBg rounded-full w-8 h-8 flex items-center justify-center shadow-lg border-2 border-orange-500">
                <span className="text-sm font-bold text-primaryText">{step.id}</span>
              </div>

              {/* Step Content */}
              <div className="ml-16">
                <div className="bg-primaryCardBg border-gray-700 transition-all duration-300 hover:shadow-xl">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primaryText mb-3">{step.title}</h3>
                    <p className="text-primaryCardText leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-[29px] -bottom-4 z-10">
                  <ArrowDown className="w-4 h-4 text-orange-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
     viewport={{ once: false,amount:0.5 }}
        >
          <div className="bg-primaryCardBg rounded-lg shadow-xl p-8 border border-[#A4BCD1]">
            <h3 className="text-2xl font-semibold text-primaryText mb-3">Ready to Grow Your Business?</h3>
            <p className="text-secondaryText mb-6 text-lg">
              Let's implement this proven process to drive real results for your brand
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-lg font-bold transition-all duration-300 text-lg shadow-lg"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

