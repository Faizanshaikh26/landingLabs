export default function Trial() {
  return (
    <div className="font-sans">
      {/* ---------------- POST-TRIAL PACKAGES ---------------- */}
      <div className="bg-white text-black">
        <div className="relative">
          <img
            src="/images/post-trial-bg.jpg"
            alt="Background"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-[300px] object-cover"
          />
          <h1 className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            POST-TRIAL <span className="text-orange-600">PACKAGES</span>
          </h1>
        </div>

        <div className="overflow-x-auto p-4 sm:p-6">
          <table className="w-full border-collapse text-left shadow-md text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3 sm:p-4">Package</th>
                <th className="p-3 sm:p-4">Monthly Price (INR)</th>
                <th className="p-3 sm:p-4">Platforms</th>
                <th className="p-3 sm:p-4">Posts/Reels</th>
                <th className="p-3 sm:p-4">Extra Services</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-500 text-white font-bold">
                <td className="p-3 sm:p-4">STARTER</td>
                <td className="p-3 sm:p-4">₹8,999</td>
                <td className="p-3 sm:p-4">2</td>
                <td className="p-3 sm:p-4">12 & 4</td>
                <td className="p-3 sm:p-4">
                  Social media management; posting & scheduling, graphics, many more
                </td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-bold">GROWTH</td>
                <td className="p-3 sm:p-4">₹14,500</td>
                <td className="p-3 sm:p-4">3</td>
                <td className="p-3 sm:p-4">16/6</td>
                <td className="p-3 sm:p-4">
                  SEO blogs, meta ads, community management, UGC Content
                </td>
              </tr>
              <tr>
                <td className="p-3 sm:p-4 font-bold">PRO</td>
                <td className="p-3 sm:p-4">₹28,799</td>
                <td className="p-3 sm:p-4">4+</td>
                <td className="p-3 sm:p-4">20+/8+</td>
                <td className="p-3 sm:p-4">
                  Basic landing page, analytics & reporting, 1/Y maintenance
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-6 text-center text-sm sm:text-base">
            Visit us at{" "}
            <a href="https://www.landinglabs.in" className="underline">
              www.landinglabs.in
            </a>
          </p>
        </div>
      </div>

      {/* ---------------- WHY CHOOSE ---------------- */}
      <div className="bg-[#f8f7f4] px-6 sm:px-10 py-14 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Why Choose Landing Labs..
          </h2>
          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg font-semibold">
            <li>EXPERIENCED CROSS-INDUSTRY TEAM</li>
            <li>CREATIVE + DATA-DRIVEN APPROACH</li>
            <li>TRANSPARENT REPORTING</li>
            <li>SCALABLE STRATEGIES FOR SMALL TO LARGE BUSINESSES</li>
            <li>COMMITMENT TO CLIENT GROWTH</li>
          </ul>
          <p className="mt-6">
            Visit us at{" "}
            <a href="https://www.landinglabs.in" className="underline">
              www.landinglabs.in
            </a>
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-black w-full h-20 sm:h-24"></div>
          <div className="bg-black w-full h-20 sm:h-24"></div>
          <div className="bg-black w-full h-20 sm:h-24"></div>
          <div className="bg-black w-full h-20 sm:h-24"></div>
          <div className="bg-black w-full h-20 sm:h-24"></div>
          <div className="bg-black w-full h-20 sm:h-24"></div>
        </div>
      </div>

      {/* ---------------- PORTFOLIO HIGHLIGHTS ---------------- */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <img src="/images/portfolio1.png" alt="Portfolio 1" className="w-full h-48 sm:h-64 md:h-[400px] object-cover" />
          <img src="/images/portfolio2.png" alt="Portfolio 2" className="w-full h-48 sm:h-64 md:h-[400px] object-cover" />
          <img src="/images/portfolio3.png" alt="Portfolio 3" className="w-full h-48 sm:h-64 md:h-[400px] object-cover" />
        </div>
        <h1 className="absolute bottom-4 sm:bottom-6 left-4 sm:left-10 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          PORTFOLIO <span className="text-orange-600">HIGHLIGHTS</span>
        </h1>
      </div>

      {/* ---------------- PORTFOLIO GRID ---------------- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <img src="/images/grid1.png" alt="" className="w-full h-40 sm:h-60 md:h-[300px] object-cover" />
        <img src="/images/grid2.png" alt="" className="w-full h-40 sm:h-60 md:h-[300px] object-cover" />
        <img src="/images/grid3.png" alt="" className="w-full h-40 sm:h-60 md:h-[300px] object-cover" />
        <img src="/images/grid4.png" alt="" className="w-full h-40 sm:h-60 md:h-[300px] object-cover" />
        <img src="/images/grid5.png" alt="" className="w-full h-40 sm:h-60 md:h-[300px] object-cover" />
        <img src="/images/grid6.png" alt="" className="w-full h-40 sm:h-60 md:h-[300px] object-cover" />
      </div>

      {/* ---------------- GROWTH STORY ---------------- */}
      <div className="bg-white flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 py-16 gap-8">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let’s Start Your <span className="text-orange-600">Growth</span> Story
          </h1>
          <h3 className="text-lg sm:text-xl mb-6">For your attention</h3>
          <p>
            Contact:{" "}
            <a href="mailto:info@landinglabs.in" className="underline">
              info@landinglabs.in
            </a>
          </p>
          <p>www.landinglabs.in</p>
          <p>+91 738 739 2708</p>
        </div>
        <img src="/images/growth.png" alt="Growth" className="w-2/3 sm:w-1/2 lg:w-1/3" />
      </div>
    </div>
  );
}
