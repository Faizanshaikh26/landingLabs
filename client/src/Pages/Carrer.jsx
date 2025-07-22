import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../Footer'
import { CustomAccordion } from '../components/custome-acordion'






export default function Carrer() {

 

    const jobListings = [
        {
            role: "Web Developer (React / WordPress)",
            team: "Software Development",
            workTime: "Full-time",
            location: "Pune, IN",
        },
        { role: "UI/UX Designer", team: "Software Development", workTime: "Full-time", location: "Pune, IN", },
        { role: "Digital Marketing Executive", team: "Marketing", workTime: "Full-time", location: "Pune, IN" },
        { role: "Content Writer & Strategist", team: "Marketing", workTime: "Full-time", location: "Pune, IN" },
        { role: "Sales & Marketing Executive", team: " Marketing", workTime: "Full-time", location: "Pune, IN" },

        { role: "Social Media Manager", team: "Software Development", workTime: "Full-time", location: "Pune, IN" },
    ]

    const faqItems = [
  {
    question: "Do you offer any remote work opportunities?",
    answer:
      "Yes, we offer flexible remote work options for many of our positions. We believe in work-life balance and understand that great talent can work effectively from anywhere. Specific remote arrangements can be discussed during the interview process based on the role requirements.",
  },
  {
    question: "What are some of the challenges and rewards of working at your company?",
    answer:
      "Working with us means tackling cutting-edge AI challenges that push the boundaries of technology. You'll collaborate with brilliant minds, work on projects that have real-world impact, and grow your skills in a fast-paced environment. The rewards include competitive compensation, equity opportunities, and the satisfaction of building the future of AI.",
  },
  {
    question: "What are some of your milestones and achievements so far?",
    answer:
      "We've successfully launched multiple AI products that serve thousands of users, raised significant funding from top-tier investors, and built a world-class team of engineers and researchers. Our technology has been recognized in industry publications, and we continue to push the boundaries of what's possible in artificial intelligence.",
  },
]
    return (

        <>

            <Navbar />
            <div className="min-h-screen bg-black text-white">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row min-h-screen">
  {/* Right side - Image (Shown first on mobile) */}
  <div className="flex-1 relative order-1 lg:order-2">
    <img
      src="https://cdn.prod.website-files.com/65d5ac710278672f815e9202/65ec798689fd0e67cef30538_RolandAndLuisCropped.webp"
      alt="Team members working in office environment"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Left side - Content (Shown second on mobile) */}
  <div className="flex-1 flex items-center justify-center p-8 lg:p-16 order-2 lg:order-1">
    <div className="max-w-lg space-y-6">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
        Come join us!
      </h1>
      <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
        We're already heads down working hard, but would love to have your added expertise on the team.
      </p>
      <button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-medium text-base">
        See open roles
      </button>
    </div>
  </div>
</div>


                {/* Job Listings Section */}
               <div className="px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-2">Available positions</h2>
            <p className="text-gray-400 text-lg">waiting to be filled</p>
          </div>

          {/* Desktop Table View - Hidden on mobile */}
          <div className="hidden lg:block">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 pb-4 mb-8 border-b border-gray-700">
              <div className="col-span-4 text-sm font-medium text-gray-400 uppercase tracking-wider">ROLE</div>
              <div className="col-span-2 text-sm font-medium text-gray-400 uppercase tracking-wider">TEAM</div>
              <div className="col-span-2 text-sm font-medium text-gray-400 uppercase tracking-wider">WORK TIME</div>
              <div className="col-span-2 text-sm font-medium text-gray-400 uppercase tracking-wider">LOCATION</div>
              <div className="col-span-2"></div>
            </div>

            {/* Job Listings Table */}
            <div className="space-y-0">
              {jobListings.map((job, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 py-6 border-b border-gray-800 hover:bg-gray-900/30 transition-colors"
                >
                  <div className="col-span-4">
                    <h3 className="text-lg font-medium text-white">{job.role}</h3>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-300">{job.team}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-300">{job.workTime}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-300">{job.location}</p>
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full font-medium">
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Card View - Hidden on desktop */}
          <div className="lg:hidden space-y-6">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:bg-gray-900/70 transition-colors"
              >
                <h3 className="text-xl font-medium text-white mb-4">{job.role}</h3>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-300">{job.team}</p>
                  <p className="text-gray-300">{job.workTime}</p>
                  <p className="text-gray-300">{job.location}</p>
                </div>
                <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full font-medium w-full sm:w-auto">
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

                 <div className="px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Questions?</h2>
              <p className="text-xl text-gray-500">We're glad you asked...</p>
            </div>

            {/* Right side - FAQ Accordion */}
            <div>
              <CustomAccordion items={faqItems} />
            </div>
          </div>
        </div>
        

         <div className="px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-white">Our Hiring Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-600 transition-colors">
              <div className="text-sm text-gray-400 mb-4">01</div>
              <h3 className="text-2xl font-bold text-white mb-4">Apply</h3>
              <p className="text-gray-300">Submit resume + portfolio (if needed)</p>
            </div>

            {/* Step 2 */}
            <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-600 transition-colors">
              <div className="text-sm text-gray-400 mb-4">02</div>
              <h3 className="text-2xl font-bold text-white mb-4">Screening</h3>
              <p className="text-gray-300">HR review + role fit discussion</p>
            </div>

            {/* Step 3 */}
            <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-600 transition-colors">
              <div className="text-sm text-gray-400 mb-4">03</div>
              <h3 className="text-2xl font-bold text-white mb-4">Skill Test / Task Round</h3>
              <p className="text-gray-300">Only for specific roles</p>
            </div>

            {/* Step 4 */}
            <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-600 transition-colors">
              <div className="text-sm text-gray-400 mb-4">04</div>
              <h3 className="text-2xl font-bold text-white mb-4">Final Interview</h3>
              <p className="text-gray-300">With team lead/founder</p>
            </div>

            {/* Step 5 */}
            <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-600 transition-colors">
              <div className="text-sm text-gray-400 mb-4">05</div>
              <h3 className="text-2xl font-bold text-white mb-4">Offer Rollout</h3>
              <p className="text-gray-300">With growth roadmap</p>
            </div>

            {/* Step 6 */}
            <div className="border border-gray-700 rounded-lg p-8 hover:border-gray-600 transition-colors">
              <div className="text-sm text-gray-400 mb-4">06</div>
              <h3 className="text-2xl font-bold text-white mb-4">Apply Now</h3>
              <p className="text-gray-300 mb-2">
                Mail your CV to <span className="text-blue-400">job@landinglabs.in</span>
              </p>
              <p className="text-sm text-gray-400 italic">
                (Attach your CV, portfolio, and a short note on why you want to join us.)
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>
            </div>

            <Footer />

        </>
    )
}
