


import readMore from '../../../assets/images/READ MORE.png'
import serviceRight from '../../../assets/images/services/service-right.png'
import serviceLeft from '../../../assets/images/services/service-left.jpg'

export default function ServiceInsights() {
  return (
     <div className="py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
      {/* LEFT SIDE: Images */}
      <div className="relative flex flex-row items-center justify-center gap-6 w-full">
        {/* Center readMore image */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 animate-spin-slow">
            <img src={readMore} alt="Read More" className="w-full h-full" />
          </div>
        </div>

        {/* Left Image */}
        <div className="relative w-full max-w-sm">
          <div className="flex items-center mb-4 space-x-3">
            <div className="flex -space-x-2">
              <img
                src="https://html.awaikenthemes.com/firevall/images/author-1.jpg"
                className="h-8 w-8 md:w-10 md:h-10 rounded-full border-2 border-secondaryText"
              />
              <img
                src="https://html.awaikenthemes.com/firevall/images/author-2.jpg"
                className="h-8 w-8 md:w-10 md:h-10 rounded-full border-2 border-secondaryText"
              />
              <img
                src="https://html.awaikenthemes.com/firevall/images/author-3.jpg"
                className="h-8 w-8 md:w-10 md:h-10 rounded-full border-2 border-secondaryText"
              />
            </div>
            <p className="text-primaryText text-[10px] ml-5 md:ml-0 lg:ml-9 md:text-sm">
              80% faster project delivery
            </p>
          </div>

          <img
            src={serviceLeft}
            alt="Team collaboration"
            className="w-full h-auto rounded-[24px] object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-sm">
          <img
            src={serviceRight}
            alt="Our workspace"
            className="w-full h-auto rounded-[24px] object-cover"
          />
        </div>
      </div>

      {/* RIGHT SIDE: Content */}
      <div className="space-y-8 relative">
        {/* Who We Are badge */}
        <div className="inline-flex items-center">
          <div className="bg-slate-800 border border-purple-500/30 rounded-full px-6 py-2 flex items-center space-x-2">
            <div className="w-2 h-2 bg-accentHover rounded-full"></div>
            <span className="text-white text-sm font-medium">Who We Are</span>
          </div>
        </div>

        {/* Main heading */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primaryText leading-snug">
            Empowering brands through{" "}
            <span className="bg-accent bg-clip-text text-transparent">
              digital innovation
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-secondaryText text-base leading-relaxed">
          We are a creative digital agency helping brands grow online. From SEO
          and web development to mobile apps, content strategy, and design — our
          services are built to scale your business with precision and style.
        </p>

        {/* Statistics */}
        <div className="space-y-8">
          {/* 99.9% stat */}
          <div className="flex items-start space-x-6">
            <div className="text-4xl lg:text-5xl font-bold text-primaryText">
              99.9%
            </div>
            <div className="flex-1 pt-2">
              <p className="text-secondaryText text-base">
                Client satisfaction across our projects including SEO, UI/UX,
                and full-stack development.
              </p>
            </div>
          </div>

          {/* 500+ stat */}
          <div className="flex items-start space-x-6">
            <div className="text-4xl lg:text-5xl font-bold text-primaryText">
              500+
            </div>
            <div className="flex-1 pt-2">
              <p className="text-secondaryText text-base">
                Successful digital campaigns launched for global startups and
                enterprises using tailored strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2 hidden xl:block">
          <div className="flex flex-col space-y-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
