"use client";

import { useState } from "react";

export default function FAQSection() {
const [openQuestion, setOpenQuestion] = useState(-1);


 const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? -1 : id);
  };

  
  const faqs = [
  {
    id: 0,
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy. Typically, you can start seeing measurable improvements in search rankings and traffic within 3–6 months, depending on your industry and competition.",
  },
  {
    id: 1,
    question: "Do you build websites from scratch or use templates?",
    answer:
      "We do both, based on your budget and needs. For custom functionality and branding, we build from scratch. For faster delivery and lower costs, we can use premium templates customized to your brand.",
  },
  {
    id: 2,
    question: "What social media platforms do you manage?",
    answer:
      "We manage Facebook, Instagram, LinkedIn, Twitter, and TikTok. We create content, handle scheduling, run ads, and provide performance reports.",
  },
  {
    id: 3,
    question: "What’s included in your PPC management services?",
    answer:
      "We handle everything—from keyword research, ad creation, and budget management to split testing and conversion tracking for platforms like Google Ads, Facebook, and Instagram.",
  },
  {
    id: 4,
    question: "Can you develop both Android and iOS apps?",
    answer:
      "Yes, we build both native and cross-platform apps using React Native, Flutter, or Swift/Kotlin depending on your target audience and technical requirements.",
  },
  
  {
    id: 6,
    question: "What types of graphic design services do you offer?",
    answer:
      "We provide logos, brand identity, banners, brochures, social media creatives, and any other marketing visuals your business may need.",
  },

  {
    id: 8,
    question: "Do you create content or just promote it?",
    answer:
      "We do both. Our team creates high-quality blog posts, social media content, and visual assets—and we also distribute and promote them for maximum reach.",
  },
];


  return (
    <div className=" py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center mb-5">
              <div className="bg-slate-800 border border-purple-500/30 rounded-full px-6 py-2 flex items-center space-x-2">
                <svg className="w-4 h-4 text-accentHover" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-white text-sm font-medium">Frequently Asked Questions</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-primaryText leading-tight mb-10">
              Know more about our
              <br />
              <span className="bg-accentHover bg-clip-text text-transparent">
                digital services
              </span>
            </h2>

            <div className="flex flex-col md:flex-row md:items-center md:space-x-12 space-y-6 md:space-y-0 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accentHover" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-primaryText font-medium">24/7 Support</div>
                  <div className="text-secondaryText">(+1) 659-888-695</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accentHover" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-primaryText font-medium">Email Assistance</div>
                  <div className="text-secondaryText">support@youragency.com</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://html.awaikenthemes.com/firevall/images/faqs-image.jpg"
                alt="Support image"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-4 relative">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-primaryCardBg border border-slate-700 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-primaryText text-base md:text-lg font-medium">{faq.question}</h3>
                  {openQuestion === faq.id ? (
                    <svg className="w-5 h-5 text-primaryText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-primaryText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                    </svg>
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    openQuestion === faq.id ? "max-h-[500px] pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-secondaryText text-sm md:text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
