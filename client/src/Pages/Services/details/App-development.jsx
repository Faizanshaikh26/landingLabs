// import { useState } from "react";
// import {
//   BarChart3,
//   Globe2,
//   Settings2,
//   LineChart,
//   Search,
//   TrendingUp,
// } from "lucide-react";
// import ReusableAccordion from "../../reusable-accordion";
// import Navbar from "../../../components/Navbar";
// import Footer from "../../../Footer";
// import ServiceSidebar from "./Service-Sidebar";

// export default function AppDevelopment() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [openQuestion, setOpenQuestion] = useState(1);

//   const toggleQuestion = (id) => {
//     setOpenQuestion(openQuestion === id ? -1 : id);
//   };

//   const steps = [
//     {
//       id: 1,
//       title: "Strategy & Planning",
//       description: "Define your app's purpose, target users, and core features.",
//       defaultIcon: <Search className="w-8 h-8 text-purple-400" />,
//       hoverIcon: <Globe2 className="w-8 h-8 text-purple-600" />,
//     },
//     {
//       id: 2,
//       title: "Design & Development",
//       description: "Create intuitive UI/UX and build scalable mobile apps.",
//       defaultIcon: <BarChart3 className="w-8 h-8 text-blue-400" />,
//       hoverIcon: <TrendingUp className="w-8 h-8 text-blue-600" />,
//     },
//     {
//       id: 3,
//       title: "Testing & Launch",
//       description: "Test thoroughly and deploy across iOS, Android, or web.",
//       defaultIcon: <Settings2 className="w-8 h-8 text-cyan-400" />,
//       hoverIcon: <LineChart className="w-8 h-8 text-cyan-600" />,
//     },
//   ];

//   const faqs = [
//     {
//       id: 0,
//       question: "What types of apps do you develop?",
//       answer:
//         "We develop native, hybrid, and cross-platform apps for iOS, Android, and web using technologies like React Native, Flutter, and more.",
//     },
//     {
//       id: 1,
//       question: "How long does it take to build an app?",
//       answer:
//         "Development time varies based on complexity. On average, a standard app takes 6–12 weeks from planning to launch.",
//     },
//     {
//       id: 2,
//       question: "Do you handle app store deployment?",
//       answer:
//         "Yes! We assist with submitting your app to the Apple App Store, Google Play Store, or any other required platforms.",
//     },
//     {
//       id: 3,
//       question: "Will my app be responsive across devices?",
//       answer:
//         "Absolutely. We ensure your app looks and performs great across different screen sizes and platforms.",
//     },
//     {
//       id: 4,
//       question: "Can I request updates or add features later?",
//       answer:
//         "Of course. We offer ongoing support and scalable solutions so your app can grow with your business needs.",
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
//                   alt="App Development Discussion"
//                   className="w-full h-[400px] object-cover"
//                 />
//               </div>

//               <div className="space-y-6">
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Mobile and web applications are essential tools for connecting with users and offering personalized digital experiences. Our app development service helps turn your ideas into powerful, user-friendly applications.
//                 </p>

//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   From startups to enterprises, we build scalable and secure apps tailored to your business goals. Our end-to-end development process ensures innovation, efficiency, and a smooth user journey.
//                 </p>
//               </div>

//               <section className="text-white pt-16 px-4">
//                 <div className="mb-16">
//                   <h2 className="text-2xl lg:text-[40px] font-bold text-white leading-tight mb-6">
//                     Step-by-step app development tailored to{" "}
//                     <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                       your business goals
//                     </span>
//                   </h2>
//                   <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
//                     Our development process is designed to deliver apps that not only look great but also perform seamlessly. From idea to deployment, we provide complete support at every stage.
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
//                     Experienced developers dedicated to<br />
//                     <span className="text-transparent bg-gradient-to-r from-[#3A49F9] to-[#C44AFB] bg-clip-text">
//                       building innovative apps
//                     </span>
//                   </h2>

//                   <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
//                     Our team of developers brings your ideas to life with high-quality, secure, and scalable mobile and web applications. We focus on user experience, performance, and future-ready technologies.
//                   </p>

//                   <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
//                     <img
//                       src="https://html.awaikenthemes.com/firevall/images/case-study-image-6.jpg"
//                       alt="App Development Team at Work"
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
//                         App Development
//                       </span>
//                     </h1>
//                     <p className="text-gray-300 text-lg leading-relaxed">
//                       Get answers to common questions about timelines, platforms, technologies, and post-launch support related to app development.
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
  BarChart3,
  Globe2,
  Settings2,
  LineChart,
  Search,
  TrendingUp,
} from "lucide-react";
import ReusableAccordion from "../../reusable-accordion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../Footer";
import ServiceSidebar from "./Service-Sidebar";

export default function AppDevelopment() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(-1);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };

  const steps = [
    {
      id: 1,
      title: "Strategy & Planning",
      description: "Define your app's purpose, target users, and core features.",
      defaultIcon: <Search className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Globe2 className="w-8 h-8 text-accent" />,
    },
    {
      id: 2,
      title: "Design & Development",
      description: "Create intuitive UI/UX and build scalable mobile apps.",
      defaultIcon: <BarChart3 className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <TrendingUp className="w-8 h-8 text-accent" />,
    },
    {
      id: 3,
      title: "Testing & Launch",
      description: "Test thoroughly and deploy across iOS, Android, or web.",
      defaultIcon: <Settings2 className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <LineChart className="w-8 h-8 text-accent" />,
    },
  ];

  const faqs = [
    {
      id: 0,
      question: "What types of apps do you develop?",
      answer:
        "We develop native, hybrid, and cross-platform apps for iOS, Android, and web using technologies like React Native, Flutter, and more.",
    },
    {
      id: 1,
      question: "How long does it take to build an app?",
      answer:
        "Development time varies based on complexity. On average, a standard app takes 6–12 weeks from planning to launch.",
    },
    {
      id: 2,
      question: "Do you handle app store deployment?",
      answer:
        "Yes! We assist with submitting your app to the Apple App Store, Google Play Store, or any other required platforms.",
    },
    {
      id: 3,
      question: "Will my app be responsive across devices?",
      answer:
        "Absolutely. We ensure your app looks and performs great across different screen sizes and platforms.",
    },
    {
      id: 4,
      question: "Can I request updates or add features later?",
      answer:
        "Of course. We offer ongoing support and scalable solutions so your app can grow with your business needs.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className=" pt-40 md:pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <ServiceSidebar />
            <div className="lg:col-span-8">
              <div className="rounded-3xl overflow-hidden mb-8">
                <img
                  src="https://html.awaikenthemes.com/firevall/images/service-single-img.jpg"
                  alt="App Development Discussion"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="space-y-6">
                <p className="text-secondaryText text-lg leading-relaxed">
                  Mobile and web applications are essential tools for connecting with users and offering personalized digital experiences. Our app development service helps turn your ideas into powerful, user-friendly applications.
                </p>

                <p className="text-secondaryText text-lg leading-relaxed">
                  From startups to enterprises, we build scalable and secure apps tailored to your business goals. Our end-to-end development process ensures innovation, efficiency, and a smooth user journey.
                </p>
              </div>

              <section className="text-secondaryText pt-16 px-4">
                <div className="mb-16">
                  <h2 className="text-2xl lg:text-[40px] font-bold text-secondaryText leading-tight mb-6">
                    Step-by-step app development tailored to{" "}
                    <span className="text-accent ">
                      your business goals
                    </span>
                  </h2>
                  <p className="text-secondaryText text-lg leading-relaxed max-w-4xl mx-auto">
                    Our development process is designed to deliver apps that not only look great but also perform seamlessly. From idea to deployment, we provide complete support at every stage.
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
                      <div className="absolute top-0 right-0 bg-accent  text-secondaryText text-sm font-bold px-4 py-2 rounded-bl-2xl">
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

              <section className="text-secondaryText py-16 px-4">
                <div className="space-y-10">
                  <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
                    Experienced developers dedicated to<br />
                    <span className="text-accent">
                      building innovative apps
                    </span>
                  </h2>

                  <p className="text-secondaryText text-lg leading-relaxed max-w-3xl">
                    Our team of developers brings your ideas to life with high-quality, secure, and scalable mobile and web applications. We focus on user experience, performance, and future-ready technologies.
                  </p>

                  <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
                    <img
                      src="https://html.awaikenthemes.com/firevall/images/case-study-image-6.jpg"
                      alt="App Development Team at Work"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </section>

              <div className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-secondaryText leading-tight mb-6">
                      Frequently Asked Questions About <br />
                      <span className="text-accent">
                        App Development
                      </span>
                    </h1>
                    <p className="text-secondaryText text-lg leading-relaxed">
                      Get answers to common questions about timelines, platforms, technologies, and post-launch support related to app development.
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
                          <h3 className="text-secondaryText text-lg font-medium pr-4 group-hover:text-accent transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            {openQuestion === faq.id ? (
                              <svg
                                className="w-6 h-6 text-secondaryText group-hover:text-accentHover transition-colors duration-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            ) : (
                              <svg
                                className="w-6 h-6 text-secondaryText group-hover:text-accentHover transition-colors duration-300"
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