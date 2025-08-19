// import { useState } from "react";
// import { BarChart3, Globe2, Settings2, LineChart, Search, TrendingUp } from "lucide-react";
// import ReusableAccordion from "../../reusable-accordion";
// import Navbar from "../../../components/Navbar";
// import Footer from "../../../Footer";
// import ServiceSidebar from "./Service-Sidebar";

// export default function SEO() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [openQuestion, setOpenQuestion] = useState(1);

//   const toggleQuestion = (id) => {
//     setOpenQuestion(openQuestion === id ? -1 : id);
//   };

//   const steps = [
//     {
//       id: 1,
//       title: "SEO Audit",
//       description: "Analyze website structure, content, and technical aspects.",
//       defaultIcon: <Search className="w-8 h-8 text-purple-400" />,
//       hoverIcon: <Globe2 className="w-8 h-8 text-purple-600" />,
//     },
//     {
//       id: 2,
//       title: "Keyword Research",
//       description: "Identify high-impact keywords relevant to your business.",
//       defaultIcon: <BarChart3 className="w-8 h-8 text-blue-400" />,
//       hoverIcon: <TrendingUp className="w-8 h-8 text-blue-600" />,
//     },
//     {
//       id: 3,
//       title: "Optimization & Monitoring",
//       description: "Implement strategies and track SEO performance.",
//       defaultIcon: <Settings2 className="w-8 h-8 text-cyan-400" />,
//       hoverIcon: <LineChart className="w-8 h-8 text-cyan-600" />,
//     },
//   ];

//   const faqs = [
//     {
//       id: 0,
//       question: "What is SEO and why is it important?",
//       answer:
//         "SEO (Search Engine Optimization) improves your website's visibility on search engines, helping potential customers discover your business organically without paid ads.",
//     },
//     {
//       id: 1,
//       question: "How long does it take to see results from SEO?",
//       answer:
//         "SEO is a long-term strategy. You can expect noticeable improvements within 3–6 months, depending on competition, content quality, and technical optimization.",
//     },
//     {
//       id: 2,
//       question: "Do you offer local SEO services?",
//       answer:
//         "Yes! We specialize in local SEO strategies including Google My Business optimization, location-specific content, and local keyword targeting.",
//     },
//     {
//       id: 3,
//       question: "Will you provide regular reports?",
//       answer:
//         "Absolutely. We provide monthly performance reports with insights into keyword rankings, traffic, and technical health of your website.",
//     },
//     {
//       id: 4,
//       question: "What kind of businesses do you work with?",
//       answer:
//         "We work with startups, small businesses, enterprises, and e-commerce platforms across multiple industries to boost online visibility.",
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
//                   alt="SEO Strategy Discussion"
//                   className="w-full h-[400px] object-cover"
//                 />
//               </div>

//               <div className="space-y-6">
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Search Engine Optimization (SEO) is a crucial digital marketing strategy aimed at improving your
//                   website’s visibility on search engines like Google. It involves optimizing both content and technical
//                   aspects of your site to rank higher in organic search results.
//                 </p>

//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   In today’s digital landscape, having a well-optimized website is essential for attracting and retaining
//                   customers. SEO not only increases website traffic but also builds trust, credibility, and long-term
//                   growth for your business.
//                 </p>
//               </div>

//               <section className="text-white pt-16 px-4">
//                 <div className="mb-16">
//                   <h2 className="text-2xl lg:text-[40px] font-bold text-white leading-tight mb-6">
//                     Step-by-step SEO solutions tailored to{" "}
//                     <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                       your business
//                     </span>
//                   </h2>
//                   <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
//                     Our SEO solutions are custom-built to drive traffic and generate leads. From keyword research to
//                     content optimization, our step-by-step process ensures measurable success.
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
//                     Experienced SEO professionals dedicated to<br />
//                     <span className="text-transparent bg-gradient-to-r from-[#3A49F9] to-[#C44AFB] bg-clip-text">
//                       ranking your website
//                     </span>
//                   </h2>

//                   <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
//                     Our SEO experts stay ahead of the latest algorithm updates to ensure your website ranks consistently.
//                     We blend on-page, off-page, and technical SEO to deliver lasting results.
//                   </p>

//                   <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
//                     <img
//                       src="https://html.awaikenthemes.com/firevall/images/case-study-image-6.jpg"
//                       alt="SEO Team at Work"
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
//                         SEO Services
//                       </span>
//                     </h1>
//                     <p className="text-gray-300 text-lg leading-relaxed">
//                       Have questions about SEO? We’ve got answers. Learn more about our strategies, timelines,
//                       deliverables, and how we help you grow online.
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
import { BarChart3, Globe2, Settings2, LineChart, Search, TrendingUp } from "lucide-react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../Footer";
import ServiceSidebar from "./Service-Sidebar";

export default function SEO() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(-1);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };

  const steps = [
    {
      id: 1,
      title: "SEO Audit",
      description: "Analyze website structure, content, and technical aspects.",
      defaultIcon: <Search className="w-8 h-8 text-accent" />,
      hoverIcon: <Globe2 className="w-8 h-8 text-secondaryText" />,
    },
    {
      id: 2,
      title: "Keyword Research",
      description: "Identify high-impact keywords relevant to your business.",
      defaultIcon: <BarChart3 className="w-8 h-8 text-accent" />,
      hoverIcon: <TrendingUp className="w-8 h-8 text-secondaryText" />,
    },
    {
      id: 3,
      title: "Optimization & Monitoring",
      description: "Implement strategies and track SEO performance.",
      defaultIcon: <Settings2 className="w-8 h-8 text-accent" />,
      hoverIcon: <LineChart className="w-8 h-8 text-secondaryText" />,
    },
  ];

  const faqs = [
    {
      id: 0,
      question: "What is SEO and why is it important?",
      answer:
        "SEO (Search Engine Optimization) improves your website's visibility on search engines, helping potential customers discover your business organically without paid ads.",
    },
    {
      id: 1,
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy. You can expect noticeable improvements within 3–6 months, depending on competition, content quality, and technical optimization.",
    },
    {
      id: 2,
      question: "Do you offer local SEO services?",
      answer:
        "Yes! We specialize in local SEO strategies including Google My Business optimization, location-specific content, and local keyword targeting.",
    },
    {
      id: 3,
      question: "Will you provide regular reports?",
      answer:
        "Absolutely. We provide monthly performance reports with insights into keyword rankings, traffic, and technical health of your website.",
    },
    {
      id: 4,
      question: "What kind of businesses do you work with?",
      answer:
        "We work with startups, small businesses, enterprises, and e-commerce platforms across multiple industries to boost online visibility.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className=" py-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <ServiceSidebar />
            <div className="lg:col-span-8">
              <div className="rounded-3xl overflow-hidden mb-8">
                <img
                  src="https://cdn.pixabay.com/photo/2022/03/26/02/07/seo-7092123_1280.png"
                  alt="SEO Strategy Discussion"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="space-y-6">
                <p className="text-secondaryText text-lg leading-relaxed">
                  Search Engine Optimization (SEO) is a crucial digital marketing strategy aimed at improving your
                  website’s visibility on search engines like Google. It involves optimizing both content and technical
                  aspects of your site to rank higher in organic search results.
                </p>

                <p className="text-secondaryText text-lg leading-relaxed">
                  In today’s digital landscape, having a well-optimized website is essential for attracting and retaining
                  customers. SEO not only increases website traffic but also builds trust, credibility, and long-term
                  growth for your business.
                </p>
              </div>

              <section className="text-primaryText pt-16 px-4">
                <div className="mb-16">
                  <h2 className="text-2xl lg:text-[40px] font-bold text-primaryText leading-tight mb-6">
                    Step-by-step SEO solutions tailored to{" "}
                    <span className="text-accent">
                      your business
                    </span>
                  </h2>
                  <p className="text-secondaryText text-lg leading-relaxed max-w-4xl mx-auto">
                    Our SEO solutions are custom-built to drive traffic and generate leads. From keyword research to
                    content optimization, our step-by-step process ensures measurable success.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="  border border-slate-700/50 rounded-2xl p-6 relative transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
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
                    Experienced SEO professionals dedicated to<br />
                    <span className="text-accent">
                      ranking your website
                    </span>
                  </h2>

                  <p className="text-secondaryText text-lg leading-relaxed max-w-3xl">
                    Our SEO experts stay ahead of the latest algorithm updates to ensure your website ranks consistently.
                    We blend on-page, off-page, and technical SEO to deliver lasting results.
                  </p>

                  <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
                    <img
                      src="https://wallpaperaccess.com/full/8597354.jpg"
                      alt="SEO Team at Work"
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
                        SEO Services
                      </span>
                    </h1>
                    <p className="text-secondaryText text-lg leading-relaxed">
                      Have questions about SEO? We’ve got answers. Learn more about our strategies, timelines,
                      deliverables, and how we help you grow online.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.id}
                        className=" border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-amber-100"
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
                            <div className="h-px  mb-4"></div>
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