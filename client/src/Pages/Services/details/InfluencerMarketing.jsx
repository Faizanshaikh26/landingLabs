// import { useState } from "react";
// import {
//   Users,
//   Megaphone,
//   Handshake,
//   MessageSquare,
//   BarChart,
//   Sparkles,
// } from "lucide-react";
// import Navbar from "../../../components/Navbar";
// import Footer from "../../../Footer";
// import ServiceSidebar from "./Service-Sidebar";

// export default function InfluencerMarketing() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [openQuestion, setOpenQuestion] = useState(1);

//   const toggleQuestion = (id) => {
//     setOpenQuestion(openQuestion === id ? -1 : id);
//   };

//   const steps = [
//     {
//       id: 1,
//       title: "Strategy & Targeting",
//       description: "We define your goals and audience to shape the ideal influencer partnership strategy.",
//       defaultIcon: <Megaphone className="w-8 h-8 text-blue-400" />,
//       hoverIcon: <Sparkles className="w-8 h-8 text-blue-600" />,
//     },
//     {
//       id: 2,
//       title: "Influencer Discovery",
//       description: "We match your brand with authentic influencers who align with your mission and audience.",
//       defaultIcon: <Users className="w-8 h-8 text-purple-400" />,
//       hoverIcon: <Handshake className="w-8 h-8 text-purple-600" />,
//     },
//     {
//       id: 3,
//       title: "Campaign Execution & Reporting",
//       description: "From outreach to tracking, we manage the campaign and deliver measurable results.",
//       defaultIcon: <MessageSquare className="w-8 h-8 text-green-400" />,
//       hoverIcon: <BarChart className="w-8 h-8 text-green-600" />,
//     },
//   ];

//   const faqs = [
//     {
//       id: 0,
//       question: "What is influencer marketing?",
//       answer:
//         "Influencer marketing is a strategy where brands collaborate with creators to promote their products or services authentically to niche audiences.",
//     },
//     {
//       id: 1,
//       question: "How do you find the right influencers?",
//       answer:
//         "We use advanced tools and manual vetting to find influencers whose followers, content, and values match your brand’s objectives.",
//     },
//     {
//       id: 2,
//       question: "What platforms do you support?",
//       answer:
//         "We run influencer campaigns on Instagram, YouTube, TikTok, Twitter, LinkedIn, and emerging platforms where your audience lives.",
//     },
//     {
//       id: 3,
//       question: "Do you manage the whole campaign?",
//       answer:
//         "Yes. We handle influencer outreach, content review, approvals, launch, engagement tracking, and performance reporting.",
//     },
//     {
//       id: 4,
//       question: "How do you measure success?",
//       answer:
//         "We track metrics like reach, engagement, conversions, and ROI, depending on your campaign objectives.",
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
//                   alt="Influencer Marketing Collaboration"
//                   className="w-full h-[400px] object-cover"
//                 />
//               </div>

//               <div className="space-y-6">
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Influencer Marketing connects your brand with the voices your audience already trusts. By partnering with the right creators, we help you build awareness, credibility, and sales.
//                 </p>

//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   We craft campaigns that feel organic—not forced—ensuring your message resonates with authenticity and drives real impact.
//                 </p>
//               </div>

//               <section className="text-white pt-16 px-4">
//                 <div className="mb-16">
//                   <h2 className="text-2xl lg:text-[40px] font-bold text-white leading-tight mb-6">
//                     End-to-end influencer campaigns that{" "}
//                     <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                       move your brand forward
//                     </span>
//                   </h2>
//                   <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
//                     From strategy to reporting, our influencer marketing services are designed to scale visibility and inspire engagement across every platform.
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
//                     Build authentic partnerships for <br />
//                     <span className="text-transparent bg-gradient-to-r from-[#3A49F9] to-[#C44AFB] bg-clip-text">
//                       maximum influence
//                     </span>
//                   </h2>

//                   <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
//                     Our influencer marketing team works closely with creators to craft messages that feel personal, impactful, and on-brand.
//                   </p>

//                   <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
//                     <img
//                       src="https://html.awaikenthemes.com/firevall/images/case-study-image-6.jpg"
//                       alt="Influencer Collaboration Session"
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
//                         Influencer Marketing
//                       </span>
//                     </h1>
//                     <p className="text-gray-300 text-lg leading-relaxed">
//                       Curious about how influencer campaigns work? Here’s what you need to know to get started.
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
  Users,
  Megaphone,
  Handshake,
  MessageSquare,
  BarChart,
  Sparkles,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../Footer";
import ServiceSidebar from "./Service-Sidebar";

export default function InfluencerMarketing() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(-1);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };

  const steps = [
    {
      id: 1,
      title: "Strategy & Targeting",
      description: "We define your goals and audience to shape the ideal influencer partnership strategy.",
      defaultIcon: <Megaphone className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Sparkles className="w-8 h-8 text-accent" />,
    },
    {
      id: 2,
      title: "Influencer Discovery",
      description: "We match your brand with authentic influencers who align with your mission and audience.",
      defaultIcon: <Users className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Handshake className="w-8 h-8 text-accent" />,
    },
    {
      id: 3,
      title: "Campaign Execution & Reporting",
      description: "From outreach to tracking, we manage the campaign and deliver measurable results.",
      defaultIcon: <MessageSquare className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <BarChart className="w-8 h-8 text-accent" />,
    },
  ];

  const faqs = [
    {
      id: 0,
      question: "What is influencer marketing?",
      answer:
        "Influencer marketing is a strategy where brands collaborate with creators to promote their products or services authentically to niche audiences.",
    },
    {
      id: 1,
      question: "How do you find the right influencers?",
      answer:
        "We use advanced tools and manual vetting to find influencers whose followers, content, and values match your brand’s objectives.",
    },
    {
      id: 2,
      question: "What platforms do you support?",
      answer:
        "We run influencer campaigns on Instagram, YouTube, TikTok, Twitter, LinkedIn, and emerging platforms where your audience lives.",
    },
    {
      id: 3,
      question: "Do you manage the whole campaign?",
      answer:
        "Yes. We handle influencer outreach, content review, approvals, launch, engagement tracking, and performance reporting.",
    },
    {
      id: 4,
      question: "How do you measure success?",
      answer:
        "We track metrics like reach, engagement, conversions, and ROI, depending on your campaign objectives.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="py-40 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <ServiceSidebar />
            <div className="lg:col-span-8">
              <div className="rounded-3xl overflow-hidden mb-8">
                <img
                  src="https://html.awaikenthemes.com/firevall/images/service-single-img.jpg"
                  alt="Influencer Marketing Collaboration"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="space-y-6">
                <p className="text-secondaryText text-lg leading-relaxed">
                  Influencer Marketing connects your brand with the voices your audience already trusts. By partnering with the right creators, we help you build awareness, credibility, and sales.
                </p>

                <p className="text-secondaryText text-lg leading-relaxed">
                  We craft campaigns that feel organic—not forced—ensuring your message resonates with authenticity and drives real impact.
                </p>
              </div>

              <section className="text-primaryText pt-16 px-4">
                <div className="mb-16">
                  <h2 className="text-2xl lg:text-[40px] font-bold text-primaryText leading-tight mb-6">
                    End-to-end influencer campaigns that{" "}
                    <span className="text-accent">
                      move your brand forward
                    </span>
                  </h2>
                  <p className="text-secondaryText text-lg leading-relaxed max-w-4xl mx-auto">
                    From strategy to reporting, our influencer marketing services are designed to scale visibility and inspire engagement across every platform.
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
                      <h3 className="text-xl  text-primaryText font-semibold mb-2">{step.title}</h3>
                      <p className="text-secondaryText">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="text-primaryText py-16 px-4">
                <div className="space-y-10">
                  <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
                    Build authentic partnerships for <br />
                    <span className="text-accent">
                      maximum influence
                    </span>
                  </h2>

                  <p className="text-secondaryText text-lg leading-relaxed max-w-3xl">
                    Our influencer marketing team works closely with creators to craft messages that feel personal, impactful, and on-brand.
                  </p>

                  <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
                    <img
                      src="https://html.awaikenthemes.com/firevall/images/case-study-image-6.jpg"
                      alt="Influencer Collaboration Session"
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
                        Influencer Marketing
                      </span>
                    </h1>
                    <p className="text-secondaryText text-lg leading-relaxed">
                      Curious about how influencer campaigns work? Here’s what you need to know to get started.
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
