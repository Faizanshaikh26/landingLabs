import React from 'react';

export default function NewTrailPage4() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-gradient-to-br from-purple-100 via-white to-purple-100 font-serif max-w-7xl mx-auto">
      
      {/* Left Section */}
      
      <div className="w-full md:w-1/2 flex flex-col justify-between py-30 px-10">
        <div>
          <h1 className="text-sm font-semibold uppercase tracking-wide mb-10">LANDINGLABS</h1>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight whitespace-pre-line">
            What You’ll{'\n'}Get in{'\n'}30 Days...
          </h2>
        </div>
        <div className="mt-10 text-sm">
          <p className="uppercase">Visit us at <span className="underline">www.landinglabs.in</span></p>
        </div>
      </div>

      {/* Right Section - Table */}
      <div className="w-full md:w-1/2  py-400 px-10 md:p-12">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm border border-gray-300">
            <thead className="bg-gray-200 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Service</th>
                <th className="px-4 py-2 border border-gray-300">Quantity</th>
                <th className="px-4 py-2 border border-gray-300">Platforms</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="border-t border-gray-300">
                <td className="px-4 py-3 border border-gray-300">Social Media Posts</td>
                <td className="px-4 py-3 border border-gray-300">8–10</td>
                <td className="px-4 py-3 border border-gray-300">Instagram, Facebook, LinkedIn (any 2)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300">Stories</td>
                <td className="px-4 py-3 border border-gray-300">8–10</td>
                <td className="px-4 py-3 border border-gray-300">Same as above</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300">Reels/Short Videos</td>
                <td className="px-4 py-3 border border-gray-300">2–3</td>
                <td className="px-4 py-3 border border-gray-300">Same as above</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300">Blog/SEO Copy</td>
                <td className="px-4 py-3 border border-gray-300">3–5</td>
                <td className="px-4 py-3 border border-gray-300">Website</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300">Paid Ad Campaign Setup</td>
                <td className="px-4 py-3 border border-gray-300">1</td>
                <td className="px-4 py-3 border border-gray-300">Meta/Google</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300">Reports</td>
                <td className="px-4 py-3 border border-gray-300">1 Final Report</td>
                <td className="px-4 py-3 border border-gray-300">PDF + insights call</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Trial Limitations */}
        <div className="mt-6 text-xs text-gray-700">
          <p className="font-bold mb-1">Trial Limitations</p>
          <ul className="list-disc ml-4 space-y-1">
            <li>Only 1–2 platforms managed for free.</li>
            <li>Ad spend not included.</li>
            <li>Client provides raw product images/videos if needed.</li>
            <li>Max 15 working days execution within the month.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
