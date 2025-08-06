// import { useState } from "react"
// import { motion } from "framer-motion"
// import Navbar from "../components/Navbar"
// import Footer from "../Footer"
// import {
//   Monitor,
//   TrendingUp,
//   FileText,
//   BarChart3,
//   User,
//   DollarSign,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function Pricing() {
//   const [openIndex, setOpenIndex] = useState(0)

//   const plans = [
//     {
//       name: "Starter",
//       price: "$0",
//       period: "/month",
//       description: "Perfect for small businesses getting started with online presence.",
//       popular: false,
//       buttonText: "Start for Free",
//       buttonStyle: "bg-gray-700 hover:bg-gray-600 text-white",
//       features: [
//         "Basic Website Audit",
//         "Social Media Setup",
//         "1 Free Design Mockup",
//         "Basic SEO Suggestions",
//         "Email Support",
//       ],
//     },
//     {
//       name: "Growth",
//       price: "$199",
//       period: "/month",
//       description: "Ideal for growing brands looking for consistent marketing efforts.",
//       popular: true,
//       buttonText: "Get Started with Growth",
//       buttonStyle: "bg-orange-500 hover:bg-orange-600 text-white",
//       features: [
//         "SEO Optimization",
//         "Content Marketing",
//         "Social Media Management",
//         "PPC Campaigns Setup",
//         "Dedicated Account Manager",
//       ],
//     },
//     {
//       name: "Enterprise",
//       price: "Custom",
//       period: "",
//       description: "Tailored services for enterprises and high-growth teams.",
//       popular: false,
//       buttonText: "Contact Sales",
//       buttonStyle: "bg-gray-700 hover:bg-gray-600 text-white",
//       features: [
//         "Custom Web/App Development",
//         "Influencer Campaigns",
//         "Full Funnel Strategy",
//         "Advanced Analytics & Reports",
//         "24/7 Priority Support",
//       ],
//     },
//   ]

//   const faqs = [
//     {
//       question: "What services are included in the Starter plan?",
//       answer:
//         "The Starter plan includes a website audit, basic SEO tips, social media setup guidance, and one design mockup to help you establish your brand online.",
//     },
//     {
//       question: "Do you provide custom website or app development?",
//       answer:
//         "Yes! Our Enterprise plan includes fully customized web and app development tailored to your business goals and technical needs.",
//     },
//     {
//       question: "How do your SEO services work?",
//       answer:
//         "We perform a comprehensive audit, optimize on-page content, improve technical SEO, and build high-quality backlinks to increase your search visibility.",
//     },
//     {
//       question: "Can you manage our social media accounts?",
//       answer:
//         "Absolutely. Our Growth and Enterprise plans offer complete social media management including content creation, posting, and community engagement.",
//     },
//     {
//       question: "What’s the process for running ad campaigns?",
//       answer:
//         "Our experts design, launch, and optimize paid ad campaigns (PPC, Meta, etc.) to generate leads and drive traffic that converts.",
//     },
//     {
//       question: "How do I choose the right plan?",
//       answer:
//         "If you're just starting out, go with Starter. Growth is for active brands aiming to scale. Enterprise is best for custom, high-volume needs.",
//     },
//   ]

//   const features = [
//     {
//       icon: Monitor,
//       title: "Real-Time Campaign Monitoring",
//       description: "Track SEO, ads, and engagement metrics from a unified dashboard.",
//     },
//     {
//       icon: BarChart3,
//       title: "Conversion-Focused Strategies",
//       description: "Our tactics are tailored to turn traffic into loyal customers.",
//     },
//     {
//       icon: FileText,
//       title: "Content Creation & Management",
//       description: "We deliver blogs, graphics, and creatives optimized for performance.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Growth-Driven SEO",
//       description: "From technical fixes to link building, we boost your organic reach.",
//     },
//     {
//       icon: User,
//       title: "Influencer Collaborations",
//       description: "Work with relevant creators to amplify your brand’s voice.",
//     },
//     {
//       icon: DollarSign,
//       title: "PPC & Ad Campaigns",
//       description: "Targeted campaigns on Google, Facebook, and more with strong ROI.",
//     },
//   ]

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index)
//   }

//   return (
//     <>
//       <Navbar />

//       {/* Pricing Section */}
//       <section className="pt-40 pb-10 px-4 text-white bg-black">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h1 className="text-3xl md:text-5xl font-bold mb-4">
//               Simple and Affordable
//               <br />
//               Pricing Plans
//             </h1>
//             <p className="text-gray-400 text-lg">
//               Start tracking and improving your finance management
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {plans.map((plan, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.2 }}
//                 className="bg-gray-800 border border-gray-700 rounded-lg p-6 relative"
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-medium">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}
//                 <div className="mb-6">
//                   <h3 className="text-xl font-semibold text-white mb-4">{plan.name}</h3>
//                   <div className="mb-4">
//                     <span className="text-4xl font-bold text-white">{plan.price}</span>
//                     <span className="text-gray-400 text-lg">{plan.period}</span>
//                   </div>
//                   <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
//                 </div>
//                 <button
//                   className={`w-full py-3 px-4 rounded-lg font-medium text-sm mb-8 transition-colors ${plan.buttonStyle}`}
//                 >
//                   {plan.buttonText}
//                 </button>
//                 <div>
//                   <h4 className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-4">
//                     FEATURES
//                   </h4>
//                   <ul className="space-y-3">
//                     {plan.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-start">
//                         <svg
//                           className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                         <span className="text-gray-300 text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className=" py-10 md:py-20 px-4 bg-black text-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex justify-center mb-8">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
//               <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//               <span className="text-sm font-medium text-gray-300">FAQs</span>
//             </div>
//           </div>
//           <div className="text-center mb-12">
//             <h1 className="text-2xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
//             <p className="text-gray-400 text-lg">
//               Don't see the answer you're looking for?{" "}
//               <Link to="/contact-us"><span className="text-blue-400 hover:text-blue-300 cursor-pointer">Get in touch.</span></Link>
//             </p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full px-2 md:px-6 py-3 md:py-5 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
//                 >
//                   <span className="md:text-lg font-medium text-white pr-4">{faq.question}</span>
//                   {openIndex === index ? (
//                     <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
//                   )}
//                 </button>
//                 {openIndex === index && (
//                   <div className="px-6 pb-5">
//                     <div className="pt-2 border-t border-gray-700">
//                       <p className="text-gray-300 leading-relaxed mt-3">{faq.answer}</p>
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-10 md:py-20 px-4 bg-black text-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex justify-center mb-8">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
//               <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//               <span className="text-sm font-medium text-gray-300">Best Tools</span>
//             </div>
//           </div>
//           <div className="text-center mb-8 md:mb-16">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">What's included</h1>
//             <p className="text-gray-400 text-sm max-w-2xl mx-auto">
//               Get 100+ features out of the box with the world's leading customer insights hub
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
//             {features.map((feature, index) => {
//               const Icon = feature.icon
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="group"
//                 >
//                   <div className="mb-6  md:p-2 ">
//                     <div className="w-9 md:w-12 h-9 md:h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors">
//                       <Icon className="w-4 h-4 md:w-6 md:h-6 text-gray-300" />
//                     </div>
//                     <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">{feature.title}</h3>
//                     <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   )
// }


import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../Footer"
import {
  Monitor,
  TrendingUp,
  FileText,
  BarChart3,
  User,
  DollarSign,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState(0)

  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      description: "Perfect for small businesses getting started with online presence.",
      popular: false,
      buttonText: "Start for Free",
      buttonStyle: "bg-gray-700 hover:bg-gray-600 text-white",
      features: [
        "Basic Website Audit",
        "Social Media Setup",
        "1 Free Design Mockup",
        "Basic SEO Suggestions",
        "Email Support",
      ],
    },
    {
      name: "Growth",
      price: "$199",
      period: "/month",
      description: "Ideal for growing brands looking for consistent marketing efforts.",
      popular: true,
      buttonText: "Get Started with Growth",
      buttonStyle: "bg-orange-500 hover:bg-orange-600 text-white",
      features: [
        "SEO Optimization",
        "Content Marketing",
        "Social Media Management",
        "PPC Campaigns Setup",
        "Dedicated Account Manager",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored services for enterprises and high-growth teams.",
      popular: false,
      buttonText: "Contact Sales",
      buttonStyle: "bg-gray-700 hover:bg-gray-600 text-white",
      features: [
        "Custom Web/App Development",
        "Influencer Campaigns",
        "Full Funnel Strategy",
        "Advanced Analytics & Reports",
        "24/7 Priority Support",
      ],
    },
  ]

  const faqs = [
    {
      question: "What services are included in the Starter plan?",
      answer:
        "The Starter plan includes a website audit, basic SEO tips, social media setup guidance, and one design mockup to help you establish your brand online.",
    },
    {
      question: "Do you provide custom website or app development?",
      answer:
        "Yes! Our Enterprise plan includes fully customized web and app development tailored to your business goals and technical needs.",
    },
    {
      question: "How do your SEO services work?",
      answer:
        "We perform a comprehensive audit, optimize on-page content, improve technical SEO, and build high-quality backlinks to increase your search visibility.",
    },
    {
      question: "Can you manage our social media accounts?",
      answer:
        "Absolutely. Our Growth and Enterprise plans offer complete social media management including content creation, posting, and community engagement.",
    },
    {
      question: "What’s the process for running ad campaigns?",
      answer:
        "Our experts design, launch, and optimize paid ad campaigns (PPC, Meta, etc.) to generate leads and drive traffic that converts.",
    },
    {
      question: "How do I choose the right plan?",
      answer:
        "If you're just starting out, go with Starter. Growth is for active brands aiming to scale. Enterprise is best for custom, high-volume needs.",
    },
  ]

  const features = [
    {
      icon: Monitor,
      title: "Real-Time Campaign Monitoring",
      description: "Track SEO, ads, and engagement metrics from a unified dashboard.",
    },
    {
      icon: BarChart3,
      title: "Conversion-Focused Strategies",
      description: "Our tactics are tailored to turn traffic into loyal customers.",
    },
    {
      icon: FileText,
      title: "Content Creation & Management",
      description: "We deliver blogs, graphics, and creatives optimized for performance.",
    },
    {
      icon: TrendingUp,
      title: "Growth-Driven SEO",
      description: "From technical fixes to link building, we boost your organic reach.",
    },
    {
      icon: User,
      title: "Influencer Collaborations",
      description: "Work with relevant creators to amplify your brand’s voice.",
    },
    {
      icon: DollarSign,
      title: "PPC & Ad Campaigns",
      description: "Targeted campaigns on Google, Facebook, and more with strong ROI.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <>
      <Navbar />

      {/* Pricing Section */}
      <section className="pt-40 pb-10 px-4 text-black bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Simple and Affordable
              <br />
              Pricing Plans
            </h1>
            <p className="text-gray-700 text-lg">
              Start tracking and improving your finance management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 relative"
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gray-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 text-lg">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{plan.description}</p>
                </div>
               <button
  className={`w-full py-3 px-4 rounded-lg font-medium text-sm mb-8 transition-colors ${plan.buttonStyle}`}
>

                  {plan.buttonText}
                </button>
                <div>
                  <h4 className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-4">
                    FEATURES
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=" py-10 md:py-20 px-4 bg-white text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-300">FAQs</span>
            </div>
          </div>
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 text-black">Frequently Asked Questions</h1>
            <p className="text-gray-700 text-lg">
              Don't see the answer you're looking for?{" "}
              <Link to="/contact-us"><span className="text-blue-500 hover:text-blue-300 cursor-pointer">Get in touch.</span></Link>
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-2 md:px-6 py-3 md:py-5 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
                >
                  <span className="md:text-lg font-medium text-white pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed mt-3">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Features Section with updated styles */}
      <section className="py-10 md:py-20 px-4 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full border border-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-300">Best Tools</span>
            </div>
          </div>
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">What's included</h1>
            <p className="text-gray-700 text-sm max-w-2xl mx-auto">
              Get 100+ features out of the box with the world's leading customer insights hub
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="mb-6 md:p-2">
                    <div className="w-9 md:w-12 h-9 md:h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-700 transition-colors">
                      <Icon className="w-4 h-4 md:w-6 md:h-6 text-gray-300" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-black mb-2 md:mb-3 primary">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed secondary">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}