export default function GrowthStory() {
  return (
    <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          {/* Logo */}
          <img
            src="/images/logo-1.png"
            alt="Landing Labs"
            className="h-12 sm:h-14 md:h-16 lg:h-20 mx-auto lg:mx-0 mb-6 sm:mb-8"
          />

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif text-gray-900 leading-snug">
            Let’s Start Your <span className="text-orange-500 block">Growth Story</span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 font-semibold text-base sm:text-lg text-gray-800 flex items-center justify-center lg:justify-start gap-3">
            <span className="w-10 sm:w-12 h-[1.5px] bg-gray-700"></span> For your attention
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-3 text-gray-800 text-base sm:text-lg">
            <p className="underline underline-offset-8 break-words">
              Contact: info@landinglabs.in
            </p>
            <p className="underline underline-offset-8 break-words">
              www.landinglabs.in
            </p>
            <p className="underline underline-offset-8">
              +91 738 739 2708
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-xl overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg shadow-lg">
            <img
              src="/images/img-8.png"
              alt="Marketing Tags"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
