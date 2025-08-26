export default function NewTrailPage5(){
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-0 m-0 max-w-7xl mx-auto">
      <div className="bg-white max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 rounded-none overflow-hidden">
        {/* Left Side (Black background with images + orange footer) */}
        <div className="bg-black flex flex-col justify-between">
          <div className="flex flex-col gap-0">
            <div className="bg-[#C7E9B0] flex items-center justify-center p-0 h-60 w-[90%] relative left-[58px]">
  <img
    src="https://www.reiner-sct.com/wp-content/uploads/45-KI-Sicherheit-Erfolgreiche-Nutzung-von-KI_AdobeStock_946065111.jpeg"
    alt="Pure Sip Can"
    className="rounded-xl shadow-lg object-cover h-full w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
  />
</div>

<div className="bg-[#A2D2FF] flex items-center justify-center p-0 h-60 w-[90%] relative left-[58px]">
  <img
    src="https://omdia.tech.informa.com/-/media/tech/omdia/omdia-website-enhancement-oct-2023/ai-coverage-2.jpg?rev=56e6f88de6774db290c5069e65788bd1"
    alt="Pure Sip Packaging"
    className="roul shadow-lg object-cover h-full w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
  />
</div>

          </div>

          {/* Orange Footer fully inside black side */}
          <div className="bg-orange-600 text-white text-center w-[38%]   py-4 px-6 font-bold text-xl absolute mt-[478px] ml-[58px] ">
            <div>Social Media Studio</div>
            <div className="text-base font-normal">
              Reels, creatives, captions, calendars
            </div>
          </div>
        </div>

        {/* Right Side (White background with text) */}
        <div className="bg-white p-20 flex flex-col justify-center">
          <h3 className="tracking-widest text-sm font-semibold text-gray-500 mb-4">
            LANDING LABS: ROI-DRIVEN DIGITAL MARKETING
          </h3>
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">Our Solution</h1>
<ul className="space-y-4">
  <li className="flex items-center gap-3">
    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-base font-semibold font-mono">1</span>
    <span className="text-lg leading-relaxed">End-to-end brand growth strategy</span>
  </li>
  <li className="flex items-center gap-3">
    <span className="w-8 h-7 flex items-center justify-center rounded-full bg-black text-white text-base font-semibold font-mono">2</span>
    <span className="text-lg leading-relaxed">
      <span className="text-blue-600 font-semibold">Social media, ads, SEO, email marketing</span> under one roof
    </span>
  </li>
  <li className="flex items-center gap-3">
    <span className="w-8 h-7 flex items-center justify-center rounded-full bg-black text-white text-base font-semibold font-mono">3</span>
    <span className="text-lg leading-relaxed">Data-driven campaigns for measurable success</span>
  </li>
  <li className="flex items-center gap-3">
    <span className="w-8 h-7 flex items-center justify-center rounded-full bg-black text-white text-base font-semibold font-mono">4</span>
    <span className="text-lg leading-relaxed">Works for all industries — from startups to enterprises</span>
  </li>
</ul>


          <div className="mt-6 text-gray-500 text-base flex justify-between items-center">
            <span>
              Visit us at <span className="text-black font-semibold">www.landinglabs.in</span>
            </span>
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="w-3 h-3 bg-orange-500 rounded-sm"></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
