import React from 'react'

export default function StateSection() {
  return (
    <>
    
   <section className="md:py-10 border   px-4 sm:py-16 sm:px-8 bg-[#000000]">

  <div className="container mx-auto px-8 text-center">
    {/* Heading with Divider */}
    <div className="flex items-center justify-center gap-4">
      <span className="flex-grow h-px bg-gray-600"></span>
      <h2 className="text-xl font-semibold text-white">
        Trusted by Startups & Enterprises to{" "}
        <span className="text-orange-500 font-bold">Build Digital Products</span>
      </h2>
      <span className="flex-grow h-px bg-gray-600"></span>
    </div>

    {/* Stats Section */}
    <div className="mt-12 flex flex-wrap justify-center gap-16">
      <div className="text-center">
        <h3 className="text-4xl font-extrabold text-[#CFFFE2]">100+</h3>
        <p className="mt-2 text-base text-[#CFFFE2]">Projects Delivered</p>
      </div>
      <div className="text-center">
        <h3 className="text-4xl font-extrabold text-[#CFFFE2]">50+</h3>
        <p className="mt-2 text-base text-[#CFFFE2]">Satisfied Clients</p>
      </div>
      <div className="text-center">
        <h3 className="text-4xl font-extrabold text-[#CFFFE2]">20+</h3>
        <p className="mt-2 text-base text-[#CFFFE2]">Industries Served</p>
      </div>
      <div className="text-center">
        <h3 className="text-4xl font-extrabold text-[#CFFFE2]">5+</h3>
        <p className="mt-2 text-base text-[#CFFFE2]">Years of Experience</p>
      </div>
    </div>

    {/* Moving Brand Logos */}
    <div className="mt-16 overflow-hidden relative">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        <img
          src="https://a.storyblok.com/f/298810/79x20/4f5ce2a824/ahrefs-logo.svg"
          alt="Ahrefs"
          className="h-6 opacity-80"
        />
        <img
          src="https://a.storyblok.com/f/298810/128x20/9e2e70ccb8/instacart-logo.svg"
          alt="Instacart"
          className="h-6 opacity-80"
        />
        <img
          src="https://a.storyblok.com/f/298810/99x16/364e2223b5/groupon-logo.svg"
          alt="Groupon"
          className="h-6 opacity-80"
        />
        <img
          src="https://a.storyblok.com/f/298810/143x16/1474e3dbaa/century21-logo.svg"
          alt="Century 21"
          className="h-6 opacity-80"
        />
        <img
          src="https://a.storyblok.com/f/298810/166x20/495b032848/cleardesk-logo.svg"
          alt="ClearDesk"
          className="h-6 opacity-80"
        />
        <img
          src="https://a.storyblok.com/f/298810/107x20/9859e82bee/oneims-logo.svg"
          alt="OneIMS"
          className="h-6 opacity-80"
        />
        <img
          src="https://a.storyblok.com/f/298810/33x20/742b4a9222/ring-logo.svg"
          alt="Ring"
          className="h-6 opacity-80"
        />
      </div>
    </div>
  </div>
</section>


    </>
  )
}
