import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../Footer'
import { ArrowRight } from 'lucide-react'
import StateSection from '../components/State-section'

export default function Service() {
  return (
    <>


<Navbar/>



<div className="relative h-[200px] md:h-[400px] overflow-hidden  md:py-20">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    src="https://landinglabs.in/wp-content/uploads/2024/10/sercive-1-1.mp4"
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Overlay (optional for readability) */}
    <div className="absolute inset-0 bg-black/60"></div>


  {/* Foreground Content */}
  <div id="banner" className="relative z-20 text-center text-white mt-20">
    <h2 className="text-4xl font-bold">Services</h2>
  </div>
</div>



<section className="py-10 md:py-20 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Text Content */}
    <div>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-300 leading-tight">
        Transforming Ideas into Results with <span className="text-orange-500">Tailored Digital Marketing Solutions</span>
      </h2>

      <p className="mt-6 text-lg text-white">
        At <strong>Landing Labs</strong>, we offer a full range of digital marketing services designed to elevate your brand, reach new audiences, and drive measurable growth. Whether you need help with social media, SEO, or paid advertising, we’ve got the expertise to bring your vision to life.
      </p>
    </div>

    {/* Right: Image Card */}
    <div className="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://landinglabs.in/wp-content/uploads/2024/10/BANNER-DIGITAL-MARKETING-1.png.webp"
        alt="Marketing Banner"
        className="w-full h-auto object-cover"
      />
    </div>

  </div>
</section>

<section className="bg-black py-5 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
      Our Core Services
    </h2>

    {/* Grid: Image Left + Text Right */}
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      
      {/* Left: Image */}
      <div className="rounded-xl overflow-hidden">
        <img 
          src="https://landinglabs.in/wp-content/uploads/2024/10/Engage-Your-Audience-Where-They-Are.png.webp" 
          alt="Social Media Marketing" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right: Content */}
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-2">Social Media Marketing</h3>
        <p className="italic mb-4 font-medium">“Engage Your Audience Where They Are”</p>
        
        <p className="text-gray-300 mb-6">
          We design and execute tailored social media strategies that increase brand awareness, foster engagement, and build a loyal community. From Instagram and Facebook to LinkedIn and TikTok, we know how to create content that resonates.
        </p>

        <div>
          <h4 className="font-semibold mb-2 text-white">What We Offer:</h4>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Social Media Strategy & Planning</li>
            <li>Content Creation (Posts, Stories, Reels)</li>
            <li>Community Management</li>
            <li>Influencer Partnerships & UGC Campaigns</li>
          </ul>
        </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full w-fit mt-6 cursor-pointer">See Our Social Media Approach
</button>

     
      </div>
    </div>
  </div>
</section>



<section className="bg-black py-5 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Text Content */}
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-2">SEO</h2>
      <h3 className="text-2xl font-bold mb-4">(Search Engine Optimization)</h3>

      <p className="italic font-semibold mb-4 text-gray-300">“Get Found and Stay Relevant”</p>
      
      <p className="text-gray-400 mb-6">
        Our SEO experts ensure that your website ranks higher in search engines,
        driving organic traffic and increasing visibility. We optimize your site’s
        content and structure so that it reaches the right audience and brings you
        more qualified leads.
      </p>

      <h4 className="font-semibold text-white mb-2">What We Offer:</h4>
      <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
        <li>On-Page & Off-Page Optimization</li>
        <li>Technical SEO & Site Audits</li>
        <li>Keyword Research & Strategy</li>
        <li>Local SEO for Small Businesses</li>
      </ul>

      {/* CTA */}
      <a href="#" className="text-orange-400 font-semibold hover:underline inline-flex items-center">
        BOOST MY RANKINGS
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>

    {/* Right: Image */}
    <div className="rounded-xl overflow-hidden">
      <img 
        src="https://landinglabs.in/wp-content/uploads/2024/10/SEO-Search-Engine-Optimization.png.webp" 
        alt="SEO Service Graphic" 
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</section>



<section className="bg-black py-5 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Left: Image */}
    <div className="rounded-xl overflow-hidden shadow-xl">
      <img
        src="https://landinglabs.in/wp-content/uploads/2024/10/web-design-and-development.png.webp"
        alt="Website Design Graphic"
        className="w-full h-auto object-cover"
      />
    </div>

    {/* Right: Text */}
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-2">Website</h2>
      <h3 className="text-2xl font-bold mb-4">Design & Development</h3>

      <p className="italic font-semibold mb-4 text-gray-300">
        “Your Digital Home, Built to Convert”
      </p>

      <p className="text-gray-400 mb-6">
        A well-designed website is key to your online success. We build beautiful, user-friendly websites
        that are optimized for conversions and search engines, ensuring a seamless experience for your visitors.
      </p>

      <h4 className="font-semibold text-white mb-2">What We Offer:</h4>
      <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6">
        <li>Custom Website Design</li>
        <li>Landing Page Development</li>
        <li>E-commerce Websites</li>
        <li>Website Maintenance & Updates</li>
      </ul>

      {/* CTA */}
      <a
        href="#"
        className="text-orange-400 font-semibold hover:underline inline-flex items-center"
      >
        EXPLORE OUR WEB SOLUTIONS
        <svg
          className="ml-1 w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>

<section className="bg-black py-5 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Left Text Content */}
    <div className='text-white'>
      <h2 className="text-3xl font-bold mb-2">Content Marketing</h2>

      <p className="font-semibold italic  mb-4">“Create Stories That Resonate”</p>

      <p className=" mb-6  text-gray-400 ">
        We help you tell your story in a way that attracts, engages, and converts.
        Our content marketing services include blog writing, video production,
        and content strategy, all designed to build trust and authority in your industry.
      </p>

      <h4 className="font-semibold  mb-2">What We Offer:</h4>
      <ul className="list-disc list-inside  text-gray-400  space-y-1 mb-6">
        <li>Blog & Article Writing</li>
        <li>Video Production & Editing</li>
        <li>Infographics & Visual Content</li>
        <li>Content Strategy & Planning</li>
      </ul>

      {/* CTA */}
      <a
        href="#"
        className="text-orange-500 font-semibold hover:underline inline-flex items-center"
      >
        LET’S BUILD COMPELLING CONTENT
        <svg
          className="ml-1 w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>

    {/* Right Image */}
    <div className="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://landinglabs.in/wp-content/uploads/2024/10/content-marketing-1536x1152.png.webp"
        alt="Content Marketing Visual"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</section>


<section className="py-5 px-6" >
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Left Image */}
    <div className="rounded-xl overflow-hidden shadow-lg">
      <img
        src="https://landinglabs.in/wp-content/uploads/2024/10/content-marketing-1.png.webp"
        alt="Email Marketing Timeline"
        className="w-full h-auto object-cover"
      />
    </div>

    {/* Right Text Content */}
    <div className='text-white'>
      <h2 className="text-3xl font-bold mb-2">Email Marketing</h2>

      <p className="font-semibold italic  mb-4">
        “Convert Leads into Loyal Customers”
      </p>

      <p className="text-gray-400 mb-6">
        Our email marketing campaigns are designed to nurture relationships,
        keep your audience engaged, and drive conversions. From beautifully
        crafted newsletters to automated drip campaigns, we make sure your
        message hits the mark.
      </p>

      <h4 className="font-semibold  mb-2">What We Offer:</h4>
      <ul className="list-disc list-inside text-gray-400 space-y-1 mb-6">
        <li>Email Campaign Strategy & Design</li>
        <li>Automation & Drip Campaigns</li>
        <li>Segmentation & Personalization</li>
        <li>A/B Testing & Performance Analytics</li>
      </ul>

      {/* CTA */}
      <a
        href="#"
        className="text-orange-500 font-semibold hover:underline inline-flex items-center"
      >
        START CONVERTING WITH EMAIL
        <svg
          className="ml-1 w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>



<div className='py-10'>
    <StateSection/>
</div>





<Footer/>
    </>
  )
}
