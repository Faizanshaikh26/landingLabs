// import { useState } from "react";
// import {
//   MonitorSmartphone,
//   Code,
//   Code2,
//   Wrench,
//   Hammer,
//   LayoutDashboard,
//   Settings,
//   Sparkles,
// } from "lucide-react";
// import ReusableAccordion from "../../reusable-accordion";
// import Navbar from "../../../components/Navbar";
// import Footer from "../../../Footer";
// import ServiceSidebar from "./Service-Sidebar";

// export default function WebDevelopment() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [openQuestion, setOpenQuestion] = useState(1);

//   const toggleQuestion = (id) => {
//     setOpenQuestion(openQuestion === id ? -1 : id);
//   };

//   const steps = [
//     {
//       id: 1,
//       title: "Planning & Analysis",
//       description: "Understanding your business goals and defining project scope.",
//       defaultIcon: <LayoutDashboard className="w-8 h-8 text-purple-400" />,
//       hoverIcon: <MonitorSmartphone className="w-8 h-8 text-purple-600" />,
//     },
//     {
//       id: 2,
//       title: "Design & UI/UX",
//       description: "Creating wireframes and user-friendly interfaces.",
//       defaultIcon: <Code className="w-8 h-8 text-blue-400" />,
//       hoverIcon: <Code2 className="w-8 h-8 text-blue-600" />,
//     },
//     {
//       id: 3,
//       title: "Development & Launch",
//       description: "Building, testing, and deploying your website or web app.",
//       defaultIcon: <Wrench className="w-8 h-8 text-cyan-400" />,
//       hoverIcon: <Hammer className="w-8 h-8 text-cyan-600" />,
//     },
//   ];

//   const faqs = [
//     {
//       id: 0,
//       question: "What technologies do you use for web development?",
//       answer:
//         "We use a range of modern technologies like React.js, Next.js, Node.js, Tailwind CSS, MongoDB, and more to build scalable and high-performance web applications.",
//     },
//     {
//       id: 1,
//       question: "How long does it take to develop a website?",
//       answer:
//         "The development timeline depends on the project scope. Simple websites take 2–4 weeks, while complex platforms may take 2–3 months.",
//     },
//     {
//       id: 2,
//       question: "Do you offer responsive and mobile-friendly designs?",
//       answer:
//         "Absolutely. All our websites are built with responsive design principles to ensure great performance on all devices including mobile and tablet.",
//     },
//     {
//       id: 3,
//       question: "Will I be able to manage content on my website?",
//       answer:
//         "Yes, we integrate CMS platforms or build custom admin dashboards so you can manage your website content without technical knowledge.",
//     },
//     {
//       id: 4,
//       question: "Do you offer post-launch support?",
//       answer:
//         "Yes, we offer ongoing maintenance, updates, performance optimization, and support even after your website goes live.",
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
//               {/* Banner Image */}
//               <div className="rounded-3xl overflow-hidden mb-8">
//                 <img
//                   src="https://html.awaikenthemes.com/firevall/images/service-single-img.jpg"
//                   alt="Web Development Workspace"
//                   className="w-full h-[400px] object-cover"
//                 />
//               </div>

//               {/* Introduction Content */}
//               <div className="space-y-6">
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Web development is the backbone of your online presence. From landing pages to enterprise-level platforms, 
//                   our team delivers customized solutions that are responsive, fast, and user-friendly.
//                 </p>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Whether you need a personal portfolio, a business website, or a full-stack web application, we specialize 
//                   in turning your ideas into interactive digital experiences tailored for your audience.
//                 </p>
//               </div>

//               {/* Process Section */}
//               <section className="text-white pt-16 px-4">
//                 <div className="mb-16">
//                   <h2 className="text-2xl lg:text-[40px] font-bold text-white leading-tight mb-6">
//                     Our step-by-step web development process tailored to{" "}
//                     <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                       your vision
//                     </span>
//                   </h2>
//                   <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
//                     We follow a clear and collaborative process—from planning and design to development and deployment—to bring your digital ideas to life.
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

//               {/* Expert Section */}
//               <section className="text-white py-16 px-4">
//                 <div className="space-y-10">
//                   <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
//                     Skilled developers building modern <br />
//                     <span className="text-transparent bg-gradient-to-r from-[#3A49F9] to-[#C44AFB] bg-clip-text">
//                       web experiences
//                     </span>
//                   </h2>

//                   <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
//                     Our developers combine creativity with code to deliver performance-driven websites that captivate and convert. We build future-ready, scalable, and accessible platforms.
//                   </p>

//                   <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
//                     <img
//                       src="https://html.awaikenthemes.com/firevall/images/case-study-image-6.jpg"
//                       alt="Web Development Team"
//                       className="w-full h-[400px] object-cover"
//                     />
//                   </div>
//                 </div>
//               </section>

//               {/* FAQ Section */}
//               <div className="py-16 px-4">
//                 <div className="max-w-4xl mx-auto">
//                   <div className="mb-12">
//                     <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
//                       Web development FAQs to <br />
//                       <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                         guide your project
//                       </span>
//                     </h1>
//                     <p className="text-gray-300 text-lg leading-relaxed">
//                       Have questions about our web development services? Here’s everything you need to know before starting your project with us.
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
  MonitorSmartphone,
  Code,
  Code2,
  Wrench,
  Hammer,
  LayoutDashboard,
  Settings,
  Sparkles,
} from "lucide-react";
import ReusableAccordion from "../../reusable-accordion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../Footer";
import ServiceSidebar from "./Service-Sidebar";
import webDevImage from '../../../assets/images/services/webdev-services.jpeg'


import webDevIllustration from '../../../assets/images/illustration/WEB DEVELOPMENT.png'


export default function WebDevelopment() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(-1);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };

  const steps = [
    {
      id: 1,
      title: "Planning & Analysis",
      description: "Understanding your business goals and defining project scope.",
      defaultIcon: <LayoutDashboard className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <MonitorSmartphone className="w-8 h-8 text-accent" />,
    },
    {
      id: 2,
      title: "Design & UI/UX",
      description: "Creating wireframes and user-friendly interfaces.",
      defaultIcon: <Code className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Code2 className="w-8 h-8 text-accent" />,
    },
    {
      id: 3,
      title: "Development & Launch",
      description: "Building, testing, and deploying your website or web app.",
      defaultIcon: <Wrench className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Hammer className="w-8 h-8 text-accent" />,
    },
  ];

  const faqs = [
    {
      id: 0,
      question: "What technologies do you use for web development?",
      answer:
        "We use a range of modern technologies like React.js, Next.js, Node.js, Tailwind CSS, MongoDB, and more to build scalable and high-performance web applications.",
    },
    {
      id: 1,
      question: "How long does it take to develop a website?",
      answer:
        "The development timeline depends on the project scope. Simple websites take 2–4 weeks, while complex platforms may take 2–3 months.",
    },
    {
      id: 2,
      question: "Do you offer responsive and mobile-friendly designs?",
      answer:
        "Absolutely. All our websites are built with responsive design principles to ensure great performance on all devices including mobile and tablet.",
    },
    {
      id: 3,
      question: "Will I be able to manage content on my website?",
      answer:
        "Yes, we integrate CMS platforms or build custom admin dashboards so you can manage your website content without technical knowledge.",
    },
    {
      id: 4,
      question: "Do you offer post-launch support?",
      answer:
        "Yes, we offer ongoing maintenance, updates, performance optimization, and support even after your website goes live.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className=" pt-40 md:pb-20  px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            

            <ServiceSidebar />
            
            <div className="lg:col-span-8">
              {/* Banner Image */}
              <div className="rounded-3xl overflow-hidden mb-8">
                <img
                  src={webDevIllustration}
                  alt="Web Development Workspace"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Introduction Content */}
              <div className="space-y-6">
                <p className="text-secondaryText text-lg leading-relaxed">
                  Web development is the backbone of your online presence. From landing pages to enterprise-level platforms, 
                  our team delivers customized solutions that are responsive, fast, and user-friendly.
                </p>
                <p className="text-secondaryText text-lg leading-relaxed">
                  Whether you need a personal portfolio, a business website, or a full-stack web application, we specialize 
                  in turning your ideas into interactive digital experiences tailored for your audience.
                </p>
              </div>

              {/* Process Section */}
              <section className="text-secondaryText pt-16 px-4">
                <div className="mb-16">
                  <h2 className="text-2xl lg:text-[40px] font-bold text-primaryText leading-tight mb-6">
                    Our step-by-step web development process tailored to{" "}
                    <span className="text-accent bg-clip-text ">
                      your vision
                    </span>
                  </h2>
                  <p className="text-secondaryText text-lg leading-relaxed max-w-4xl mx-auto">
                    We follow a clear and collaborative process—from planning and design to development and deployment—to bring your digital ideas to life.
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
                      <div className="absolute top-0 right-0 bg-accent text-secondaryText  text-sm font-bold px-4 py-2 rounded-bl-2xl">
                        {`0${step.id}`}
                      </div>

                      <div className="mb-4">
                        {hoveredIndex === index ? step.hoverIcon : step.defaultIcon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-secondaryText-400">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Expert Section */}
              <section className="text-secondaryText py-16 px-4">
                <div className="space-y-10">
                  <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
                    Skilled developers building modern <br />
                    <span className="text-accent bg-clip-text">
                      web experiences
                    </span>
                  </h2>

                  <p className="text-secondaryText text-lg leading-relaxed max-w-3xl">
                    Our developers combine creativity with code to deliver performance-driven websites that captivate and convert. We build future-ready, scalable, and accessible platforms.
                  </p>

                  <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
                    <img
                      src={webDevImage}
                      alt="Web Development Team"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <div className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-secondaryText leading-tight mb-6">
                      Web development FAQs to <br />
                      <span className="text-accent">
                        guide your project
                      </span>
                    </h1>
                    <p className="text-secondaryText text-lg leading-relaxed">
                      Have questions about our web development services? Here’s everything you need to know before starting your project with us.
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
                                className="w-6 h-6 text-white group-hover:text-accentHover transition-colors duration-300"
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