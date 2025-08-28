// import React from "react";
// import img1 from "./imag1.jpg";
// import img2 from "./imag2.jpg";

// export default function NewTrailPage3() {
//   return (
//     <div
//   className="text-white min-h-screen flex flex-col items-center justify-center px-8 py-12 max-w-7xl mx-auto"
//   style={{
//     background: " radial-gradient(circle at center, #1e1e2f, #000000)"
//   }}
// >

//       {/* Top Bar */}
//       <div className="w-full flex justify-between items-center mb-12">
//         <div className="text-sm tracking-widest">LANDINGLABS</div>
//         <div className="flex items-center space-x-4">
//           <span className="text-lg cursor-pointer">🔍</span>
//           <span className="text-lg cursor-pointer">☰</span>
//         </div>
//       </div>

//       {/* Heading */}
//       <h1 className="text-6xl font-bold text-center mb-12">
//         Why a Free Trial?
//       </h1>

//       {/* Content Section */}
//       <div className="flex w-full max-w-6xl justify-between items-center">
//         {/* Left Images */}
//         <div className="flex space-x-6">
//           <img
//             src={img1}
//             alt="Ad 1"
//             className="w-64 h-64 object-cover"
//           />
//           <img
//             src={img2}
//             alt="Ad 2"
//             className="w-64 h-64 object-cover"
//           />
//         </div>

//         {/* Right Text */}
//         <div className="flex flex-col items-start ml-12">
//           <button className="border border-white px-6 py-2 rounded-full mb-6 text-sm tracking-wider">
//             TRY BEFORE YOU INVEST
//           </button>
//           <ul className="space-y-3 text-lg">
//             <li>• We believe results speak louder than promises</li>
//             <li>• No upfront cost for the first 30 days</li>
//             <li>• We build trust through action, not just words</li>
//             <li>• You see the real impact before committing</li>
//           </ul>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="w-full flex justify-between items-center mt-16 text-sm">
//         <p>VISIT US AT WWW.LANDINGLABS.IN</p>
//         <p>@LANDINGLABS_</p>
//       </div>
//     </div>
//   );
// }
import React from "react";
import img1 from "./imag1.jpg";
import img2 from "./imag2.jpg";

export default function NewTrailPage3() {
  return (
    <div
      className="text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 max-w-7xl mx-auto"
      style={{
        background: "radial-gradient(circle at center, #1e1e2f, #000000)",
      }}
    >
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center mb-8 sm:mb-12">
        <div className="text-xs sm:text-sm tracking-widest">LANDINGLABS</div>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <span className="text-base sm:text-lg cursor-pointer">🔍</span>
          <span className="text-base sm:text-lg cursor-pointer">☰</span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 px-2">
        Why a Free Trial?
      </h1>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl items-center lg:justify-between gap-8 lg:gap-12">
        {/* Left Images */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">
          <img
            src={img1}
            alt="Ad 1"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-lg"
          />
          <img
            src={img2}
            alt="Ad 2"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-lg"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col items-start text-center lg:text-left lg:ml-12">
          <button className="border border-white px-4 sm:px-6 py-2 rounded-full mb-6 text-xs sm:text-sm tracking-wider">
            TRY BEFORE YOU INVEST
          </button>
          <ul className="space-y-3 text-base sm:text-lg">
            <li>• We believe results speak louder than promises</li>
            <li>• No upfront cost for the first 30 days</li>
            <li>• We build trust through action, not just words</li>
            <li>• You see the real impact before committing</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-12 sm:mt-16 text-xs sm:text-sm space-y-2 sm:space-y-0">
        <p>VISIT US AT WWW.LANDINGLABS.IN</p>
        <p>@LANDINGLABS_</p>
      </div>
    </div>
  );
}

