export default function Trial() {
  return (
    <div className="font-sans">
      {/* ---------------- POST-TRIAL PACKAGES ---------------- */}
      <div className="bg-white text-black">
        <div className="relative">
          <img
            src="/images/post-trial-bg.jpg"
            alt="Background"
            className="w-150 h-[300px] object-cover items-center"
          />
          <h1 className="absolute bottom-8 left-10 text-6xl font-bold">
            POST-TRIAL <span className="text-orange-600">PACKAGES</span>
          </h1>
        </div>

        <div className="overflow-x-auto p-6">
          <table className="w-full border-collapse text-left shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-4">Package</th>
                <th className="p-4">Monthly Price (INR)</th>
                <th className="p-4">Platforms</th>
                <th className="p-4">Posts/Reels</th>
                <th className="p-4">Extra Services</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-500 text-white font-bold">
                <td className="p-4">STARTER</td>
                <td className="p-4">₹8,999</td>
                <td className="p-4">2</td>
                <td className="p-4">12 & 4</td>
                <td className="p-4">
                  Social media management; posting & scheduling, graphics, many more
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold">GROWTH</td>
                <td className="p-4">₹14,500</td>
                <td className="p-4">3</td>
                <td className="p-4">16/6</td>
                <td className="p-4">
                  SEO blogs, meta ads, community management, UGC Content
                </td>
              </tr>
              <tr>
                <td className="p-4 font-bold">PRO</td>
                <td className="p-4">₹28,799</td>
                <td className="p-4">4+</td>
                <td className="p-4">20+/8+</td>
                <td className="p-4">
                  Basic landing page, analytics & reporting, 1/Y maintenance
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-6 text-center">
            Visit us at{" "}
            <a href="https://www.landinglabs.in" className="underline">
              www.landinglabs.in
            </a>
          </p>
        </div>
      </div>

      {/* ---------------- WHY CHOOSE ---------------- */}
      <div className="bg-[#f8f7f4] px-10 py-14 flex flex-wrap gap-10">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Why Choose Landing Labs..</h2>
          <ul className="space-y-4 text-lg font-semibold">
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
        <div className="flex-1 grid grid-cols-3 gap-6">
          <div className="bg-black w-full h-24"></div>
          <div className="bg-black w-full h-24"></div>
          <div className="bg-black w-full h-24"></div>
          <div className="bg-black w-full h-24"></div>
          <div className="bg-black w-full h-24"></div>
          <div className="bg-black w-full h-24"></div>
        </div>
      </div>

      {/* ---------------- PORTFOLIO HIGHLIGHTS ---------------- */}
      <div className="relative">
        <div className="grid grid-cols-3">
          <img
            src="/images/portfolio1.png"
            alt="Portfolio 1"
            className="w-full h-[400px] object-cover"
          />
          <img
            src="/images/portfolio2.png"
            alt="Portfolio 2"
            className="w-full h-[400px] object-cover"
          />
          <img
            src="/images/portfolio3.png"
            alt="Portfolio 3"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <h1 className="absolute bottom-6 left-10 text-6xl font-bold">
          PORTFOLIO <span className="text-orange-600">HIGHLIGHTS</span>
        </h1>
      </div>

      {/* ---------------- PORTFOLIO GRID ---------------- */}
      <div className="grid grid-cols-3 gap-2">
        <img src="/images/grid1.png" alt="" className="w-full h-[300px] object-cover" />
        <img src="/images/grid2.png" alt="" className="w-full h-[300px] object-cover" />
        <img src="/images/grid3.png" alt="" className="w-full h-[300px] object-cover" />
        <img src="/images/grid4.png" alt="" className="w-full h-[300px] object-cover" />
        <img src="/images/grid5.png" alt="" className="w-full h-[300px] object-cover" />
        <img src="/images/grid6.png" alt="" className="w-full h-[300px] object-cover" />
      </div>

      {/* ---------------- GROWTH STORY ---------------- */}
      <div className="bg-white flex items-center justify-between px-12 py-20">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Let’s Start Your <span className="text-orange-600">Growth</span> Story
          </h1>
          <h3 className="text-xl mb-6">For your attention</h3>
          <p>
            Contact:{" "}
            <a href="mailto:info@landinglabs.in" className="underline">
              info@landinglabs.in
            </a>
          </p>
          <p>www.landinglabs.in</p>
          <p>+91 738 739 2708</p>
        </div>
        <img src="/images/growth.png" alt="Growth" className="w-1/3" />
      </div>
    </div>
  );
}
