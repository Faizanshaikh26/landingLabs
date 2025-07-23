"use client";

import { useState } from "react";

export default function ReusableAccordion({
  title,
  subtitle,
  faqs,
  imageUrl,
  contact,
}) {
  const [openQuestion, setOpenQuestion] = useState(faqs[0]?.id || null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="bg-slate-900 py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Text */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center mb-5">
            <div className="bg-slate-800/80 border border-orange-500/30 rounded-full px-6 py-2 flex items-center space-x-2">
              <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8V6a4 4 0 00-8 0v2M5 10h14M12 14v6m-6 0h12"
                />
              </svg>
              <span className="text-sm font-medium text-orange-500">FAQ</span>
            </div>
          </div>

          {/* Headings */}
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-gray-400 mb-10">{subtitle}</p>}

          {/* Accordion */}
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-700 pb-4">
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <span>{openQuestion === faq.id ? "-" : "+"}</span>
                </button>
                {openQuestion === faq.id && (
                  <p className="text-gray-400 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          {contact && (contact.supportPhone || contact.supportEmail) && (
            <div className="mt-10 text-sm text-gray-300">
              <p className="mb-1">Still have questions?</p>
              {contact.supportPhone && <p>📞 {contact.supportPhone}</p>}
              {contact.supportEmail && <p>📧 {contact.supportEmail}</p>}
            </div>
          )}
        </div>

        {/* Right Column - Image */}
        {imageUrl && (
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl border border-orange-600">
            <img
              src={imageUrl}
              alt="FAQ Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
