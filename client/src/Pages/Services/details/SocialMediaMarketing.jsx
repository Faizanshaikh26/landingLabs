// import { useState } from "react";
// import {
//   Megaphone,
//   Users2,
//   LineChart,
//   HeartHandshake,
//   Share2,
//   MessageCircleMore,
// } from "lucide-react";
// import Navbar from "../../../components/Navbar";
// import Footer from "../../../Footer";
// import ServiceSidebar from "./Service-Sidebar";

// export default function SocialMediaMarketing() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [openQuestion, setOpenQuestion] = useState(1);

//   const toggleQuestion = (id) => {
//     setOpenQuestion(openQuestion === id ? -1 : id);
//   };

//   const steps = [
//     {
//       id: 1,
//       title: "Strategy & Planning",
//       description: "Crafting tailored social media strategies aligned with your business goals.",
//       defaultIcon: <Megaphone className="w-8 h-8 text-purple-400" />,
//       hoverIcon: <HeartHandshake className="w-8 h-8 text-purple-600" />,
//     },
//     {
//       id: 2,
//       title: "Content Creation",
//       description: "Designing engaging posts, stories, reels, and ads that connect with your audience.",
//       defaultIcon: <Users2 className="w-8 h-8 text-blue-400" />,
//       hoverIcon: <Share2 className="w-8 h-8 text-blue-600" />,
//     },
//     {
//       id: 3,
//       title: "Analytics & Optimization",
//       description: "Monitoring campaign performance and optimizing results with real-time insights.",
//       defaultIcon: <LineChart className="w-8 h-8 text-cyan-400" />,
//       hoverIcon: <MessageCircleMore className="w-8 h-8 text-cyan-600" />,
//     },
//   ];

//   const faqs = [
//     {
//       id: 0,
//       question: "What platforms do you manage for social media marketing?",
//       answer:
//         "We manage campaigns across Instagram, Facebook, LinkedIn, Twitter, YouTube, and more—customized to your brand and audience.",
//     },
//     {
//       id: 1,
//       question: "Do you create the content too?",
//       answer:
//         "Yes! Our creative team handles graphics, copywriting, and short videos to ensure your content is engaging and brand-consistent.",
//     },
//     {
//       id: 2,
//       question: "How do you measure success on social media?",
//       answer:
//         "We use analytics tools to track reach, engagement, conversion, and ROI. You get detailed reports on how your campaigns perform.",
//     },
//     {
//       id: 3,
//       question: "Can you run paid social media ads?",
//       answer:
//         "Absolutely. We manage ad campaigns including strategy, targeting, creative design, and ongoing performance optimization.",
//     },
//     {
//       id: 4,
//       question: "How often will you post on my account?",
//       answer:
//         "Posting frequency depends on your plan, but typically ranges from 3–7 times per week based on strategy and audience behavior.",
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
//                   alt="Social Media Marketing"
//                   className="w-full h-[400px] object-cover"
//                 />
//               </div>

//               {/* Introduction Content */}
//               <div className="space-y-6">
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Social Media Marketing (SMM) helps you connect, engage, and grow your audience across all social platforms. We build strategic campaigns that boost awareness, drive traffic, and increase leads.
//                 </p>
//                 <p className="text-gray-300 text-lg leading-relaxed">
//                   Whether you're aiming to grow your brand, drive conversions, or build loyal communities, our team creates content that resonates and campaigns that deliver real results.
//                 </p>
//               </div>

//               {/* Process Section */}
//               <section className="text-white pt-16 px-4">
//                 <div className="mb-16">
//                   <h2 className="text-2xl lg:text-[40px] font-bold text-white leading-tight mb-6">
//                     Our step-by-step SMM process tailored to{" "}
//                     <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                       your brand goals
//                     </span>
//                   </h2>
//                   <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
//                     We plan, create, publish, and analyze—helping your brand grow with every post and campaign.
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
//                     Creative experts growing your <br />
//                     <span className="text-transparent bg-gradient-to-r from-[#3A49F9] to-[#C44AFB] bg-clip-text">
//                       social media impact
//                     </span>
//                   </h2>

//                   <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
//                     Our team understands trends, algorithms, and audience behavior. We help your brand stay ahead with visually engaging and strategically crafted content.
//                   </p>

//                   <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
//                     <img
//                       src="https://html.awaikenthemes.com/firevall/images/case-study-image-6.jpg"
//                       alt="SMM Team"
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
//                       Social Media FAQs to <br />
//                       <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                         guide your success
//                       </span>
//                     </h1>
//                     <p className="text-gray-300 text-lg leading-relaxed">
//                       Still wondering how social media marketing can work for your business? Check out the answers to our most common queries.
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
  Megaphone,
  Users2,
  LineChart,
  HeartHandshake,
  Share2,
  MessageCircleMore,
} from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../Footer";
import ServiceSidebar from "./Service-Sidebar";

import smmImage from '../../../assets/images/services/smm-marketing-services.jpeg'

import smmIllustration from '../../../assets/images/illustration/Social media marketing.jpg'

export default function SocialMediaMarketing() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(-1);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };

  const steps = [
    {
      id: 1,
      title: "Strategy & Planning",
      description: "Crafting tailored social media strategies aligned with your business goals.",
      defaultIcon: <Megaphone className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <HeartHandshake className="w-8 h-8 text-accent" />,
    },
    {
      id: 2,
      title: "Content Creation",
      description: "Designing engaging posts, stories, reels, and ads that connect with your audience.",
      defaultIcon: <Users2 className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <Share2 className="w-8 h-8 text-accent" />,
    },
    {
      id: 3,
      title: "Analytics & Optimization",
      description: "Monitoring campaign performance and optimizing results with real-time insights.",
      defaultIcon: <LineChart className="w-8 h-8 text-secondaryText" />,
      hoverIcon: <MessageCircleMore className="w-8 h-8 text-accent" />,
    },
  ];

  const faqs = [
    {
      id: 0,
      question: "What platforms do you manage for social media marketing?",
      answer:
        "We manage campaigns across Instagram, Facebook, LinkedIn, Twitter, YouTube, and more—customized to your brand and audience.",
    },
    {
      id: 1,
      question: "Do you create the content too?",
      answer:
        "Yes! Our creative team handles graphics, copywriting, and short videos to ensure your content is engaging and brand-consistent.",
    },
    {
      id: 2,
      question: "How do you measure success on social media?",
      answer:
        "We use analytics tools to track reach, engagement, conversion, and ROI. You get detailed reports on how your campaigns perform.",
    },
    {
      id: 3,
      question: "Can you run paid social media ads?",
      answer:
        "Absolutely. We manage ad campaigns including strategy, targeting, creative design, and ongoing performance optimization.",
    },
    {
      id: 4,
      question: "How often will you post on my account?",
      answer:
        "Posting frequency depends on your plan, but typically ranges from 3–7 times per week based on strategy and audience behavior.",
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
              {/* Banner Image */}
              <div className="rounded-3xl overflow-hidden mb-8">
                <img
                  src={smmIllustration}
                  alt="Social Media Marketing"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Introduction Content */}
              <div className="space-y-6">
                <p className="text-secondaryText text-lg leading-relaxed">
                  Social Media Marketing (SMM) helps you connect, engage, and grow your audience across all social platforms. We build strategic campaigns that boost awareness, drive traffic, and increase leads.
                </p>
                <p className="text-secondaryText text-lg leading-relaxed">
                  Whether you're aiming to grow your brand, drive conversions, or build loyal communities, our team creates content that resonates and campaigns that deliver real results.
                </p>
              </div>

              {/* Process Section */}
              <section className="text-primaryText pt-16 px-4">
                <div className="mb-16">
                  <h2 className="text-2xl lg:text-[40px] font-bold text-primaryText leading-tight mb-6">
                    Our step-by-step SMM process tailored to{" "}
                    <span className=" text-accent">
                      your brand goals
                    </span>
                  </h2>
                  <p className="text-secondaryText text-lg leading-relaxed max-w-4xl mx-auto">
                    We plan, create, publish, and analyze—helping your brand grow with every post and campaign.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className=" border border-slate-700/50 rounded-2xl p-6 relative transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
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

              {/* Expert Section */}
              <section className="text-secondaryText py-16 px-4">
                <div className="space-y-10">
                  <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
                    Creative experts growing your <br />
                    <span className="text-accent">
                      social media impact
                    </span>
                  </h2>

                  <p className="text-secondaryText text-lg leading-relaxed max-w-3xl">
                    Our team understands trends, algorithms, and audience behavior. We help your brand stay ahead with visually engaging and strategically crafted content.
                  </p>

                  <div className="rounded-3xl overflow-hidden shadow-lg max-w-4xl">
                    <img
                      src={smmImage}
                      alt="SMM Team"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <div className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-primaryText leading-tight mb-6">
                      Social Media FAQs to <br />
                      <span className="text-accent">
                        guide your success
                      </span>
                    </h1>
                    <p className="text-secondaryText text-lg leading-relaxed">
                      Still wondering how social media marketing can work for your business? Check out the answers to our most common queries.
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