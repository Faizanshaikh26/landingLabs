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

// export default function PPCAds() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [openQuestion, setOpenQuestion] = useState(1);

//   const toggleQuestion = (id) => {
//     setOpenQuestion(openQuestion === id ? -1 : id);
//   };

//   const steps = [
//     {
//       id: 1,
//       title: "Campaign Planning",
//       description: "Define goals, target audience, and ad platforms.",
//       defaultIcon: <Search className="w-8 h-8 text-purple-400" />,
//       hoverIcon: <Globe2 className="w-8 h-8 text-purple-600" />,
//     },
//     {
//       id: 2,
//       title: "Ad Creation",
//       description: "Design compelling ad creatives and write high-converting copy.",
//       defaultIcon: <BarChart3 className="w-8 h-8 text-blue-400" />,
//       hoverIcon: <TrendingUp className="w-8 h-8 text-blue-600" />,
//     },
//     {
//       id: 3,
//       title: "Monitoring & Optimization",
//       description: "Track performance and optimize ads for better ROI.",
//       defaultIcon: <Settings2 className="w-8 h-8 text-cyan-400" />,
//       hoverIcon: <LineChart className="w-8 h-8 text-cyan-600" />,
//     },
//   ];

//   const faqs = [
//     {
//       id: 0,
//       question: "What is PPC advertising?",
//       answer:
//         "PPC (Pay-Per-Click) is a digital advertising model where you pay each time a user clicks on your ad. It’s a fast and measurable way to drive targeted traffic.",
//     },
//     {
//       id: 1,
//       question: "How soon can I see results from PPC campaigns?",
//       answer:
//         "PPC delivers immediate visibility. You can start seeing traffic and conversions within hours of launching your campaign.",
//     },
//     {
//       id: 2,
//       question: "Which platforms do you run PPC campaigns on?",
//       answer:
//         "We manage PPC ads across platforms like Google Ads, Facebook, Instagram, LinkedIn, and more based on your audience.",
//     },
//     {
//       id: 3,
//       question: "Do you manage budgets and bidding?",
//       answer:
//         "Yes, we continuously optimize your ad spend by adjusting bids and targeting to ensure maximum return on investment.",
//     },
//     {
//       id: 4,
//       question: "Can I track the performance of my campaigns?",
//       answer:
//         "Absolutely. We provide detailed reports covering clicks, impressions, conversions, and ROI metrics on a regular basis.",
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
//                   alt="PPC Strategy Discussion"
//                className="w-full h-56 md:h-96 object-cover"
//                 />
//               </div>

//               <div className="space-y-6">
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Pay-Per-Click (PPC) advertising is a powerful way to get instant visibility and drive targeted traffic to your website. By bidding on keywords and placing ads strategically, you can attract ready-to-convert customers.
//                 </p>

//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Whether it’s Google Ads, social media platforms, or display networks — our PPC strategies are designed to maximize ROI and reach the right audience at the right time.
//                 </p>
//               </div>

//               <section className="text-white pt-16 px-4">
//                 <div className="mb-16">
//                   <h2 className="text-2xl lg:text-[40px] font-bold text-white leading-tight mb-6">
//                     Step-by-step PPC strategies tailored to{" "}
//                     <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                       your goals
//                     </span>
//                   </h2>
//                   <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
//                     Our PPC strategies are customized to match your marketing goals. From research and targeting to continuous optimization, we deliver measurable growth through paid campaigns.
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
//                     Skilled PPC experts focused on<br />
//                     <span className="text-transparent bg-gradient-to-r from-[#3A49F9] to-[#C44AFB] bg-clip-text">
//                       maximizing your ROI
//                     </span>
//                   </h2>

//                   <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
//                     Our PPC team crafts data-driven campaigns that align with your business objectives. We constantly monitor performance and make adjustments to drive conversions and reduce cost-per-click.
//                   </p>

//                   <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
//                     <img
//                       src="https://html.awaikenthemes.com/firevall/images/case-study-image-6.jpg"
//                       alt="PPC Team at Work"
//                    className="w-full h-56 md:h-96 object-cover"
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
//                         PPC Advertising
//                       </span>
//                     </h1>
//                     <p className="text-gray-300 text-lg leading-relaxed">
//                       Curious about PPC campaigns? Here's everything you need to know about our process, performance tracking, budgeting, and ad strategy.
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
import ppcAdsImage from '../../../assets/images/services/ppc-adds-servies.jpeg'

import ppcAdsIllustration from '../../../assets/images/illustration/PPC ADS.jpg'


export default function PPCAds() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(-1);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };

  const steps = [
    {
      id: 1,
      title: "Campaign Planning",
      description: "Define goals, target audience, and ad platforms.",
      defaultIcon: <Search className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Globe2 className="w-8 h-8 text-accent" />,
    },
    {
      id: 2,
      title: "Ad Creation",
      description: "Design compelling ad creatives and write high-converting copy.",
      defaultIcon: <BarChart3 className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <TrendingUp className="w-8 h-8 text-accent" />,
    },
    {
      id: 3,
      title: "Monitoring & Optimization",
      description: "Track performance and optimize ads for better ROI.",
      defaultIcon: <Settings2 className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <LineChart className="w-8 h-8 text-accent" />,
    },
  ];

  const faqs = [
    {
      id: 0,
      question: "What is PPC advertising?",
      answer:
        "PPC (Pay-Per-Click) is a digital advertising model where you pay each time a user clicks on your ad. It’s a fast and measurable way to drive targeted traffic.",
    },
    {
      id: 1,
      question: "How soon can I see results from PPC campaigns?",
      answer:
        "PPC delivers immediate visibility. You can start seeing traffic and conversions within hours of launching your campaign.",
    },
    {
      id: 2,
      question: "Which platforms do you run PPC campaigns on?",
      answer:
        "We manage PPC ads across platforms like Google Ads, Facebook, Instagram, LinkedIn, and more based on your audience.",
    },
    {
      id: 3,
      question: "Do you manage budgets and bidding?",
      answer:
        "Yes, we continuously optimize your ad spend by adjusting bids and targeting to ensure maximum return on investment.",
    },
    {
      id: 4,
      question: "Can I track the performance of my campaigns?",
      answer:
        "Absolutely. We provide detailed reports covering clicks, impressions, conversions, and ROI metrics on a regular basis.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-40 md:pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <ServiceSidebar />
            <div className="lg:col-span-8">
              <div className="rounded-3xl overflow-hidden mb-8">
                <img
                  src={ppcAdsIllustration}
                  alt="PPC Strategy Discussion"
               className="w-full h-56 md:h-96 object-cover"
                />
              </div>

              <div className="space-y-6">
                <p className="text-secondaryText text-lg leading-relaxed">
                  Pay-Per-Click (PPC) advertising is a powerful way to get instant visibility and drive targeted traffic to your website. By bidding on keywords and placing ads strategically, you can attract ready-to-convert customers.
                </p>

                <p className="text-secondaryText text-lg leading-relaxed">
                  Whether it’s Google Ads, social media platforms, or display networks — our PPC strategies are designed to maximize ROI and reach the right audience at the right time.
                </p>
              </div>

              <section className="text-primaryText pt-16">
               
                  <h2 className="text-xl lg:text-4xl font-bold text-primaryText leading-tight mb-6">
                    Step-by-step PPC strategies tailored to{" "}
                    <span className="text-accent">
                      your goals
                    </span>
                  </h2>
                  <p className="text-secondaryText text-lg leading-relaxed max-w-4xl mx-auto">
                    Our PPC strategies are customized to match your marketing goals. From research and targeting to continuous optimization, we deliver measurable growth through paid campaigns.
                  </p>
               

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="border border-slate-700/50 rounded-2xl p-6 relative transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="absolute top-0 right-0 bg-accent text-secondaryText text-sm font-bold px-4 py-2 rounded-bl-2xl">
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

              <section className="text-primaryText py-16 ">
               
                  <h2 className="text-xl lg:text-4xl font-bold leading-tight mb-4">
                    Skilled PPC experts focused on<br />
                    <span className="text-accent">
                      maximizing your ROI
                    </span>
                  </h2>

                  <p className="text-secondaryText text-lg leading-relaxed max-w-3xl">
                    Our PPC team crafts data-driven campaigns that align with your business objectives. We constantly monitor performance and make adjustments to drive conversions and reduce cost-per-click.
                  </p>

                  <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
                    <img
                      src={ppcAdsImage}
                      alt="PPC Team at Work"
                   className="w-full h-56 md:h-96 object-cover"
                    />
                  </div>
               
              </section>

             
                <div className="max-w-4xl mx-auto">
                  <div className="mb-6">
                    <h1 className="text-xl lg:text-4xl font-bold text-primaryText leading-tight mb-6">
                      Frequently Asked Questions About <br />
                      <span className="text-accent">
                        PPC Advertising
                      </span>
                    </h1>
                    <p className="text-secondaryText text-lg leading-relaxed">
                      Curious about PPC campaigns? Here's everything you need to know about our process, performance tracking, budgeting, and ad strategy.
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
      <Footer />
    </>
  );
}