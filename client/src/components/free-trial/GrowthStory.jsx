export default function GrowthStory() {
  return (
    <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-8 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          {/* Logo */}
          <img src="/images/logo-1.png" alt="Landing Labs" className="h-17   mb-10" />

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 leading-snug">
            Let’s Start Your <span className="text-orange-500"> <br />Growth</span> Story
          </h1>

          {/* Subheading */}
          <p className="mt-6 font-semibold text-lg text-gray-800 flex items-center gap-3">
            <span className="w-12 h-[1.5px] bg-gray-700"></span> For your attention
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-4 text-gray-800 text-lg">
            <p className="underline underline-offset-8">
              Contact: info@landinglabs.in
            </p>
            <p className="underline underline-offset-8">www.landinglabs.in</p>
            <p className="underline underline-offset-8">+91 738 739 2708</p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="rounded-md overflow-hidden max-w-sm">
            <img
              src="/images/img-8.png"
              alt="Marketing Tags"
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
}