// import { useState } from "react";
// import {
//   Brush,
//   Image,
//   PenTool,
//   PaintBucket,
//   Layers,
//   Sparkles,
// } from "lucide-react";
// import ReusableAccordion from "../../reusable-accordion";
// import Navbar from "../../../components/Navbar";
// import Footer from "../../../Footer";
// import ServiceSidebar from "./Service-Sidebar";

// export default function GraphicDesign() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [openQuestion, setOpenQuestion] = useState(1);

//   const toggleQuestion = (id) => {
//     setOpenQuestion(openQuestion === id ? -1 : id);
//   };

//   const steps = [
//     {
//       id: 1,
//       title: "Creative Discovery",
//       description: "We explore your brand, audience, and visual goals to shape a strong foundation.",
//       defaultIcon: <Brush className="w-8 h-8 text-pink-400" />,
//       hoverIcon: <Sparkles className="w-8 h-8 text-pink-600" />,
//     },
//     {
//       id: 2,
//       title: "Concept Development",
//       description: "We brainstorm and sketch multiple directions before refining the strongest ideas.",
//       defaultIcon: <PenTool className="w-8 h-8 text-yellow-400" />,
//       hoverIcon: <PaintBucket className="w-8 h-8 text-yellow-600" />,
//     },
//     {
//       id: 3,
//       title: "Final Design & Delivery",
//       description: "We craft polished visuals and deliver assets optimized for print or digital use.",
//       defaultIcon: <Image className="w-8 h-8 text-green-400" />,
//       hoverIcon: <Layers className="w-8 h-8 text-green-600" />,
//     },
//   ];

//   const faqs = [
//     {
//       id: 0,
//       question: "What does your graphic design service include?",
//       answer:
//         "We provide brand identity, marketing materials, social media graphics, packaging, and more. Our goal is to visually communicate your brand’s message.",
//     },
//     {
//       id: 1,
//       question: "How long does a typical design project take?",
//       answer:
//         "Project timelines vary depending on scope, but most designs are completed in 1–3 weeks with client feedback cycles included.",
//     },
//     {
//       id: 2,
//       question: "Can I request edits or revisions?",
//       answer:
//         "Yes. We include 2–3 rounds of revisions in every project to make sure the final design meets your expectations.",
//     },
//     {
//       id: 3,
//       question: "Do you work with print and digital formats?",
//       answer:
//         "Absolutely. We design for both print (CMYK, high-res) and digital platforms (RGB, web-optimized) based on your needs.",
//     },
//     {
//       id: 4,
//       question: "What tools do your designers use?",
//       answer:
//         "We use Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, and other tools to deliver high-quality visuals.",
//     },
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className="bg-slate-900 py-40 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             <ServiceSidebar />
//             <div className="lg:col-span-8">
//               <div className="rounded-3xl overflow-hidden mb-8">
//                 <img
//                   src="https://html.awaikenthemes.com/firevall/images/service-single-img.jpg"
//                   alt="Graphic Design Process"
//                   className="w-full h-[400px] object-cover"
//                 />
//               </div>

//               <div className="space-y-6">
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Graphic Design brings ideas to life through powerful visuals. From branding to promotional content, we help you connect with your audience visually and memorably.
//                 </p>

//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Whether you're building a new brand or updating marketing assets, good design sets you apart and builds recognition. We craft visual solutions that are both strategic and beautiful.
//                 </p>
//               </div>

//               <section className="text-white pt-16 px-4">
//                 <div className="mb-16">
//                   <h2 className="text-2xl lg:text-[40px] font-bold text-white leading-tight mb-6">
//                     Step-by-step graphic solutions that{" "}
//                     <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                       bring brands to life
//                     </span>
//                   </h2>
//                   <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
//                     From concepts to final visuals, we ensure each design reflects your identity and captures your audience’s attention effectively.
//                   </p>
//                 </div>

//                 <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                   {steps.map((step, index) => (
//                     <div
//                       key={step.id}
//                       className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 relative transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
//                       onMouseEnter={() => setHoveredIndex(index)}
//                       onMouseLeave={() => setHoveredIndex(null)}
//                     >
//                       <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 to-purple-500 text-white text-sm font-bold px-4 py-2 rounded-bl-2xl">
//                         {`0${step.id}`}
//                       </div>

//                       <div className="mb-4">
//                         {hoveredIndex === index ? step.hoverIcon : step.defaultIcon}
//                       </div>
//                       <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//                       <p className="text-gray-400">{step.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               <section className="text-white py-16 px-4">
//                 <div className="space-y-10">
//                   <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
//                     Passionate designers committed to <br />
//                     <span className="text-transparent bg-gradient-to-r from-[#3A49F9] to-[#C44AFB] bg-clip-text">
//                       impactful visuals
//                     </span>
//                   </h2>

//                   <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
//                     Our graphic design team merges creativity with strategy to deliver visuals that inspire, inform, and persuade—helping you stand out in a crowded market.
//                   </p>

//                   <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
//                     <img
//                       src="https://html.awaikenthemes.com/firevall/images/case-study-image-6.jpg"
//                       alt="Graphic Design Brainstorming Session"
//                       className="w-full h-auto object-cover"
//                     />
//                   </div>
//                 </div>
//               </section>

//               <div className="py-16 px-4">
//                 <div className="max-w-4xl mx-auto">
//                   <div className="mb-12">
//                     <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
//                       Frequently Asked Questions About <br />
//                       <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                         Graphic Design
//                       </span>
//                     </h1>
//                     <p className="text-gray-300 text-lg leading-relaxed">
//                       Got questions about our design process? Here are answers to help clarify how we work and what you can expect from our graphic design services.
//                     </p>
//                   </div>

//                   <div className="space-y-4">
//                     {faqs.map((faq) => (
//                       <div
//                         key={faq.id}
//                         className="bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-slate-800/70"
//                       >
//                         <button
//                           onClick={() => toggleQuestion(faq.id)}
//                           className="w-full flex items-center justify-between p-6 text-left group"
//                         >
//                           <h3 className="text-white text-lg font-medium pr-4 group-hover:text-accentHover transition-colors duration-300">
//                             {faq.question}
//                           </h3>
//                           <div className="flex-shrink-0">
//                             {openQuestion === faq.id ? (
//                               <svg
//                                 className="w-6 h-6 text-white group-hover:text-accentHover transition-colors duration-300"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                               >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                               </svg>
//                             ) : (
//                               <svg
//                                 className="w-6 h-6 text-white group-hover:text-accentHover transition-colors duration-300"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                               >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                               </svg>
//                             )}
//                           </div>
//                         </button>

//                         <div
//                           className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                             openQuestion === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                           }`}
//                         >
//                           <div className="px-6 pb-6">
//                             <div className="h-px bg-slate-700/50 mb-4"></div>
//                             <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }



import { useState } from "react";
import {
  Brush,
  Image,
  PenTool,
  PaintBucket,
  Layers,
  Sparkles,
} from "lucide-react";
import ReusableAccordion from "../../reusable-accordion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../Footer";
import ServiceSidebar from "./Service-Sidebar";

export default function GraphicDesign() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(-1);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };

  const steps = [
    {
      id: 1,
      title: "Creative Discovery",
      description: "We explore your brand, audience, and visual goals to shape a strong foundation.",
      defaultIcon: <Brush className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Sparkles className="w-8 h-8 text-accent" />,
    },
    {
      id: 2,
      title: "Concept Development",
      description: "We brainstorm and sketch multiple directions before refining the strongest ideas.",
      defaultIcon: <PenTool className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <PaintBucket className="w-8 h-8 text-accent" />,
    },
    {
      id: 3,
      title: "Final Design & Delivery",
      description: "We craft polished visuals and deliver assets optimized for print or digital use.",
      defaultIcon: <Image className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Layers className="w-8 h-8 text-accent" />,
    },
  ];

  const faqs = [
    {
      id: 0,
      question: "What does your graphic design service include?",
      answer:
        "We provide brand identity, marketing materials, social media graphics, packaging, and more. Our goal is to visually communicate your brand’s message.",
    },
    {
      id: 1,
      question: "How long does a typical design project take?",
      answer:
        "Project timelines vary depending on scope, but most designs are completed in 1–3 weeks with client feedback cycles included.",
    },
    {
      id: 2,
      question: "Can I request edits or revisions?",
      answer:
        "Yes. We include 2–3 rounds of revisions in every project to make sure the final design meets your expectations.",
    },
    {
      id: 3,
      question: "Do you work with print and digital formats?",
      answer:
        "Absolutely. We design for both print (CMYK, high-res) and digital platforms (RGB, web-optimized) based on your needs.",
    },
    {
      id: 4,
      question: "What tools do your designers use?",
      answer:
        "We use Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma, and other tools to deliver high-quality visuals.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-40 md:pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <ServiceSidebar  />
            <div className="lg:col-span-8">
              <div className="rounded-3xl overflow-hidden mb-8">
                <img
                  src="https://html.awaikenthemes.com/firevall/images/service-single-img.jpg"
                  alt="Graphic Design Process"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="space-y-6">
                <p className="text-secondaryText text-lg leading-relaxed">
                  Graphic Design brings ideas to life through powerful visuals. From branding to promotional content, we help you connect with your audience visually and memorably.
                </p>

                <p className="text-secondaryText text-lg leading-relaxed">
                  Whether you're building a new brand or updating marketing assets, good design sets you apart and builds recognition. We craft visual solutions that are both strategic and beautiful.
                </p>
              </div>

              <section className="text-primaryText pt-16 px-4">
                <div className="mb-16">
                  <h2 className="text-2xl lg:text-[40px] font-bold text-primaryText leading-tight mb-6">
                    Step-by-step graphic solutions that{" "}
                    <span className="text-accent">
                      bring brands to life
                    </span>
                  </h2>
                  <p className="text-secondaryText text-lg leading-relaxed max-w-4xl mx-auto">
                    From concepts to final visuals, we ensure each design reflects your identity and captures your audience’s attention effectively.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="border border-slate-700/50 rounded-2xl p-6 relative transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="absolute top-0 right-0 bg-accent text-primaryText text-sm font-bold px-4 py-2 rounded-bl-2xl">
                        {`0${step.id}`}
                      </div>

                      <div className="mb-4">
                        {hoveredIndex === index ? step.hoverIcon : step.defaultIcon}
                      </div>
                      <h3 className="text-xl text-primaryText font-semibold mb-2">{step.title}</h3>
                      <p className="text-secondaryText">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="text-primaryText py-16 px-4">
                <div className="space-y-10">
                  <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
                    Passionate designers committed to <br />
                    <span className="text-primaryText">
                      impactful visuals
                    </span>
                  </h2>

                  <p className="text-secondaryText text-lg leading-relaxed max-w-3xl">
                    Our graphic design team merges creativity with strategy to deliver visuals that inspire, inform, and persuade—helping you stand out in a crowded market.
                  </p>

                  <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
                    <img
                      src="https://html.awaikenthemes.com/firevall/images/case-study-image-6.jpg"
                      alt="Graphic Design Brainstorming Session"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </section>

              <div className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-primaryText leading-tight mb-6">
                      Frequently Asked Questions About <br />
                      <span className="text-accent">
                        Graphic Design
                      </span>
                    </h1>
                    <p className="text-secondaryText text-lg leading-relaxed">
                      Got questions about our design process? Here are answers to help clarify how we work and what you can expect from our graphic design services.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.id}
                        className="border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-amber-100"
                      >
                        <button
                          onClick={() => toggleQuestion(faq.id)}
                          className="w-full flex items-center justify-between p-6 text-left group"
                        >
                          <h3 className="text-primaryText text-lg font-medium pr-4 group-hover:text-accent transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            {openQuestion === faq.id ? (
                              <svg
                                className="w-6 h-6 text-primaryText group-hover:text-accent transition-colors duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            ) : (
                              <svg
                                className="w-6 h-6 text-primaryText group-hover:text-accent transition-colors duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            )}
                          </div>
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openQuestion === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6">
                            <div className="h-px bg-slate-700/50 mb-4"></div>
                            <p className="text-secondaryText leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
