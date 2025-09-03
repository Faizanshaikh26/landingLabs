"use client"

import { useState } from "react"
import { Transition } from "@headlessui/react"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

 
const testimonials = [
  {
    id: 1,
    name: "Dr. Benne",
    position: "Founder",
    company: "Clinic",
    content:
      "Landing Labs helped us scale our digital presence with clear strategies and measurable results. Within 3 months, we saw a 40% increase in qualified leads. They truly understand what Indian startups need.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Owner",
    company: "Raunak Sarees",
    content:
      "As a small business, marketing felt overwhelming. Landing Labs gave us the right tools and support to grow online. Our sales doubled during the festive season thanks to their campaigns.",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 3,
    name: "Ankit Agarwal",
    position: "Operations Head",
    company: "Zelc Consultancy",
    content:
      "The Landing Labs team brings fresh ideas, quick execution, and strong technical expertise. Their CRM integration and automation saved us hours of manual work every week.",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
  <div className="py-8 sm:py-12 lg:py-16 px-4  sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center mb-6">
              <div className="bg-slate-800  border border-purple-500/30 rounded-full px-6 py-2 flex items-center space-x-2">
                <svg className="w-4 h-4 text-accentHover" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-white text-sm font-medium">What Clients Say</span>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primaryTextleading-tight">
              Digital success stories
              <br />
              <span className="bg-accent bg-clip-text text-transparent">
                told by our clients
              </span>
            </h2>
          </div>

          <div className="flex items-center">
            <div className="flex -space-x-2 mr-4">
              <img className="w-12 h-12 rounded-full border-2 border-slate-900" src={testimonials[0].avatar} />
              <img className="w-12 h-12 rounded-full border-2 border-slate-900" src={testimonials[1].avatar} />
              <img className="w-12 h-12 rounded-full border-2 border-slate-900" src={testimonials[2].avatar} />
            </div>
            <div className="text-primaryText">
              <p className="font-medium">More than 1k+</p>
              <p className="text-secondaryText">happy partners</p>
            </div>
          </div>
        </div>

        {/* Testimonials Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Rating Card */}
          <div className="lg:col-span-4">
            <div className="bg-primaryCardBg border border-slate-700/50 rounded-3xl p-2   sm:p-8 flex flex-col items-center text-center">
              <div className="text-7xl font-bold text-primaryText mb-4">4.9</div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-accentHover" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-secondaryText mb-8">(40+ Reviews)</div>
              <div className="flex -space-x-2 mb-6">
                <img className="w-10 h-10 rounded-full border-2 border-slate-800" src="https://html.awaikenthemes.com/firevall/images/author-4.jpg" />
                <img className="w-10 h-10 rounded-full border-2 border-slate-800" src="https://html.awaikenthemes.com/firevall/images/author-5.jpg" />
                <img className="w-10 h-10 rounded-full border-2 border-slate-800" src="https://html.awaikenthemes.com/firevall/images/author-6.jpg" />
                <div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-700 text-white text-xs flex items-center justify-center">+2</div>
              </div>
              <p className="text-primaryTexttext-lg font-medium">Client satisfaction that speaks volumes</p>
            </div>
          </div>

          {/* Testimonial Slider */}
          <div className="lg:col-span-8 relative  ">
            <div className="absolute right-0 top-0 w-2 h-2 bg-accent rounded-full"></div>

            {/* Company */}
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 rounded-full bg-accent  flex items-center justify-center mr-3">
                <span className="text-primaryText font-bold">{testimonials[currentTestimonial].company[0]}</span>
              </div>
              <span className="text-primaryText text-xl font-semibold">{testimonials[currentTestimonial].company}</span>
            </div>

            {/* Animated Testimonial Text */}
            <Transition
              key={currentTestimonial}
              show={true}
              appear={true}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="mb-12">
                <p className="text-secondaryText text-xl leading-relaxed">{testimonials[currentTestimonial].content}</p>
              </div>
            </Transition>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-primaryTextfont-semibold text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-secondaryText">{testimonials[currentTestimonial].position}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-600 text-primaryTexthover:bg-slate-800 transition"
                >
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-gray-600 text-primaryTexthover:bg-slate-800 transition"
                >
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
