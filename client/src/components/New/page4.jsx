// import React from "react";

// export default function NewTrailPage2(){
//   return (
//     <div className="bg-white text-black font-sans py-8 max-w-7xl mx-auto">
//       {/* Heading with one big vertical black bar */}
//       <div className="flex items-start mb-12">
//         <span className="w-2 h-[120px] bg-black mr-4"></span>
//         <h1 className="text-5xl font-bold leading-tight">
//           Free 1-Month Trial <br /> Package Structure
//         </h1>
//       </div>

//       {/* Two column layout */}
//       <div className="grid grid-cols-2 gap-8">
//         {/* Left Column */}
//         <div>
//           <h5 className="text-xl font-bold mb-4">Week 1: Kick-off & Strategy</h5>

//           {/* Group 1 with single vertical bar */}
//           <div className="flex">
//             <span className="w-2 bg-black mr-3"></span>
//             <ul className="space-y-1">
//               <li>Onboarding Call — understand goals, audience, and current marketing status</li>
//               <li>Competitor Analysis — 3 direct competitors researched</li>
//               <li>Customer Persona Development — 1–2 detailed buyer personas created</li>
//               <li>Social Media Audit — current performance check (FB, Instagram, LinkedIn, YouTube)</li>
//               <li>Brand Voice & Content Direction — tone, style, and messaging framework</li>
//             </ul>
//           </div>

//           <h2 className="text-xl font-bold mt-10 mb-4">
//             Week 2–4: Content & Campaign Execution
//           </h2>

//           {/* Group 2 with single vertical bar */}
//           <div className="flex">
//             <span className="w-2 bg-black mr-3"></span>
//             <ul className="space-y-1">
//               <li><b>Social Media Management (Any 2 platforms)</b></li>
//               <li>8–10 feed posts (images/videos)</li>
//               <li>8–10 engaging stories</li>
//               <li>2–3 short reels/videos</li>
//               <li>Captions & relevant hashtags</li>
//               <li>Scheduling & posting</li>
//             </ul>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div>
//           <h2 className="text-xl font-bold mb-4">SEO & Website Optimization</h2>

//           {/* Group 3 with single vertical bar */}
//           <div className="flex">
//             <span className="w-2 bg-black mr-3"></span>
//             <ul className="space-y-1">
//               <li>1 ad campaign setup (Meta or Google)</li>
//               <li>Target audience selection (geo + interest targeting)</li>
//               <li>₹500–₹1000 ad spend suggested (paid by client, separate from trial)</li>
//             </ul>
//           </div>

//           <h2 className="text-xl font-bold mt-10 mb-4">Email Marketing (Optional)</h2>

//           {/* Group 4 with single vertical bar */}
//           <div className="flex">
//             <span className="w-2 bg-black mr-3"></span>
//             <ul className="space-y-1">
//               <li>1 email campaign to client’s existing list</li>
//               <li>Creative & copywriting included</li>
//             </ul>
//           </div>

//           <h2 className="text-xl font-bold mt-10 mb-4">Paid Ads (Optional Small Test)</h2>

//           {/* Group 5 with single vertical bar */}
//           <div className="flex">
//             <span className="w-2 bg-black mr-3"></span>
//             <ul className="space-y-1">
//               <li>1 ad campaign setup (Meta or Google)</li>
//               <li>Target audience selection (geo + interest targeting)</li>
//               <li>₹500–₹1000 ad spend suggested (paid by client, separate from trial)</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <p className="text-center mt-12 text-sm">
//         (SERVICES WILL BE ADJUSTED BASED ON THE INDUSTRY NEEDS – SCOPE KEPT LIMITED FOR MANAGEABILITY)
//       </p>
//     </div>
//   );
// }
import React from "react";

export default function NewTrailPage2() {
  return (
    <div className="bg-white text-black font-sans py-8 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Heading with one big vertical black bar */}
      <div className="flex items-start mb-8 sm:mb-12">
        <span className="w-2 h-[80px] sm:h-[100px] md:h-[120px] bg-black mr-4"></span>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Free 1-Month Trial <br /> Package Structure
        </h1>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column */}
        <div>
          <h5 className="text-lg sm:text-xl font-bold mb-4">
            Week 1: Kick-off & Strategy
          </h5>

          {/* Group 1 with single vertical bar */}
          <div className="flex">
            <span className="w-2 bg-black mr-3"></span>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>Onboarding Call — understand goals, audience, and current marketing status</li>
              <li>Competitor Analysis — 3 direct competitors researched</li>
              <li>Customer Persona Development — 1–2 detailed buyer personas created</li>
              <li>Social Media Audit — current performance check (FB, Instagram, LinkedIn, YouTube)</li>
              <li>Brand Voice & Content Direction — tone, style, and messaging framework</li>
            </ul>
          </div>

          <h2 className="text-lg sm:text-xl font-bold mt-8 sm:mt-10 mb-4">
            Week 2–4: Content & Campaign Execution
          </h2>

          {/* Group 2 with single vertical bar */}
          <div className="flex">
            <span className="w-2 bg-black mr-3"></span>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><b>Social Media Management (Any 2 platforms)</b></li>
              <li>8–10 feed posts (images/videos)</li>
              <li>8–10 engaging stories</li>
              <li>2–3 short reels/videos</li>
              <li>Captions & relevant hashtags</li>
              <li>Scheduling & posting</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold mb-4">SEO & Website Optimization</h2>

          {/* Group 3 with single vertical bar */}
          <div className="flex">
            <span className="w-2 bg-black mr-3"></span>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>1 ad campaign setup (Meta or Google)</li>
              <li>Target audience selection (geo + interest targeting)</li>
              <li>₹500–₹1000 ad spend suggested (paid by client, separate from trial)</li>
            </ul>
          </div>

          <h2 className="text-lg sm:text-xl font-bold mt-8 sm:mt-10 mb-4">Email Marketing (Optional)</h2>

          {/* Group 4 with single vertical bar */}
          <div className="flex">
            <span className="w-2 bg-black mr-3"></span>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>1 email campaign to client’s existing list</li>
              <li>Creative & copywriting included</li>
            </ul>
          </div>

          <h2 className="text-lg sm:text-xl font-bold mt-8 sm:mt-10 mb-4">Paid Ads (Optional Small Test)</h2>

          {/* Group 5 with single vertical bar */}
          <div className="flex">
            <span className="w-2 bg-black mr-3"></span>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>1 ad campaign setup (Meta or Google)</li>
              <li>Target audience selection (geo + interest targeting)</li>
              <li>₹500–₹1000 ad spend suggested (paid by client, separate from trial)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center mt-8 sm:mt-12 text-xs sm:text-sm">
        (SERVICES WILL BE ADJUSTED BASED ON THE INDUSTRY NEEDS – SCOPE KEPT LIMITED FOR MANAGEABILITY)
      </p>
    </div>
  );
}

