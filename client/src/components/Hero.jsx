// import React from "react";
// import heroVideo from "../assets/videos/hero-video.mp4

// export default function Hero() {
//   return (
//     <div className="relative w-full h-screen overflow-hidden md:text-red-500 md:pt-60">

//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src={heroVideo} type="video/mp4" />

//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col  justify-center h-full max-w-7xl mx-auto px-4 text-primaryText">
//         <h4 className="text-primaryText text-lg font-semibold mb-2">
//           This Isn’t Just a Platform. It’s a Possibility Engine
//         </h4>
//         <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
//           Launch Smarter <br /> Grow Faster.
//         </h1>
//         <p className="text-lg text-gray-300 max-w-2xl mb-6">
//           Empower your brand, engage your audience, elevate your success —
//           <br />
//           Tailored growth solutions fueled by creativity and data.
//         </p>
//         <button className="bg-orange-500 hover:bg-orange-600 text-primaryText font-semibold px-6 py-3 rounded-full w-fit">
//           GET STARTED
//         </button>





//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useRef } from "react";
// import heroVideo from "../assets/videos/hero-video.mp4";
// import { animate, stagger } from "motion";
// import { splitText } from "motion-plus";

// export default function Hero() {
//    const containerRef = useRef(null);
//     const h4Ref = useRef(null);
//     const h1Ref = useRef(null);
//     const pRef = useRef(null);

//     useEffect(() => {
//       document.fonts.ready.then(() => {
//         if (!containerRef.current) return;

//         containerRef.current.style.visibility = "visible";

//         const targets = [h4Ref, h1Ref, pRef];

//         targets.forEach((ref, idx) => {
//           if (!ref.current) return;
//           const { words } = splitText(ref.current, {
//             by: "word",
//             wordClass: "glass-word",
//           });

//           if (!words || words.length === 0) return;

//           animate(
//             words,
//             { opacity: [0, 1], y: [10, 0] },
//             {
//               type: "spring",
//               duration: 1.8,
//               bounce: 0.3,
//               delay: stagger(0.04, { start: idx * 0.3 }),
//             }
//           );
//         });
//       });
//     }, []);
//   return (
//     <div className="relative w-full  lg:h-screen overflow-hidden pt-20 h-[80vh] md:pt-60"  ref={containerRef}
//       style={{ visibility: "hidden" }}>

//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src={heroVideo} type="video/mp4" />

//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Text Content */}
//       <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 text-primaryText">
//   <h4
//     ref={h4Ref}
//     className="glass-text text-[15px] font-semibold mb-2"
//   >
//     This Isn’t Just a Platform. It’s a Possibility Engine
//   </h4>

//   <h1
//     ref={h1Ref}
//     className="glass-text text-[40px] sm:text-6xl font-extrabold leading-tight mb-6"
//   >
//     Launch Smarter <br /> Grow Faster.
//   </h1>

//   <p
//     ref={pRef}
//     className="glass-text text-lg max-w-2xl mb-6"
//   >
//     Empower your brand, engage your audience, elevate your success — <br />
//     Tailored growth solutions fueled by creativity and data.
//   </p>

//   <button className="bg-orange-500 hover:bg-orange-600 text-primaryText font-semibold px-6 py-3 rounded-full w-fit">
//     GET STARTED
//   </button>
// </div>

//     </div>
//   );
// }




// import React from "react";
// import hero from "../assets/images/hero-image-4.jpg"

// export default function HeroSection() {
//   return (

//      <section className="bg-white text-black py-30">
//       {/* Headings */}
//       <div className="text-center mt-10">
//         <h4 className="text-md md:text-lg font-medium text-gray-800">
//           From AI-backed marketing funnels to custom-built CRMs
//         </h4>
//         <h1 className="text-4xl md:text-5xl font-bold mt-2">
//           —all under one roof.
//         </h1>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 py-16 relative ">


//         <div className="relative w-full h-[400px] bg-cover bg-center rounded-3xl overflow-hidden" style={{ backgroundImage: `url(${hero})` }}>

//           {/* ✅ Top SVG U Shape */}
//           <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10 ">
//             <svg viewBox="0 0 1440 320" className="w-full h-[10px] mr-[300px]">
//               <path
//                 fill="#fff"
//                 fillOpacity="1"
//                 // d="M0,64 C360,64 540,0 720,0 C900,0 1080,64 1440,64 L1440,320 L0,320 Z"
//                  d="M0,80 C0,100 540,0 720,0 C00,0 1080,64 1440,644 L1440,320 L0,320 Z"
//               />
//             </svg>
//           </div>

//           {/* Floating Text Box */}
//           <div className="absolute top-[-30px] right-[-100px] transform -translate-x-1/2 w-[90%] md:w-[45%] bg-white p-6 rounded-xl shadow-xl z-20 text-center">
//             <p className="text-sm leading-relaxed">
//               With over 3 years in digital marketing and IT, our expert team brings deep domain knowledge, proven frameworks, and technical brilliance —{" "}
//               <span className="font-semibold">we innovate with purpose</span> to solve real business problems.
//             </p>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <div className="mt-10 text-center">
//           <button className="border border-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-black hover:text-primaryText transition">
//             LEARN HOW WE DO IT
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import hero from "../assets/images/hero-image-4.jpg"

export default function HeroSection() {
  return (

    <section className="text-primaryText pt-20 lg:pt-32   ">
  {/* Headings */}
  <div className="text-center mt-10">
    <h4 className="text-md md:text-lg mx-[2px] font-medium  text-orange-500">
      From AI-backed marketing funnels to custom-built CRMs
    </h4>
    <h1 className="text-3xl mb-8 md:text-5xl font-bold mt-2 text-primaryText">
      —all under one roof.
    </h1>
  </div>

  <div className="lg:max-w-7xl w-full mx-auto px-4 py-4 lg:py-16 relative">
    {/* Background Image */}
    <div
      className="relative w-full h-[400px] bg-cover bg-center rounded-[5px] md:rounded-3xl "
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Floating Text Box */}
     <div
  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111] 
  p-3 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[70%] 
  rounded-xl text-center shadow-md border border-gray-700 z-20
  [@media(max-width:350px)]:p-1"
>
  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed text-gray-200
  [@media(max-width:450px)]:text-[8px]">
    With over 3 years in digital marketing and IT, our expert team brings deep domain knowledge, proven frameworks, and technical brilliance —{" "}
    <span className="font-semibold text-orange-500">we innovate with purpose</span> to solve real business problems.
  </p>
</div>

    </div>

    {/* CTA Button */}
    <div className="mt-10 text-center">
      <button className="border border-orange-500 px-6 py-2 rounded-full font-semibold text-sm text-orange-500 hover:bg-orange-500 hover:text-black transition">
        LEARN HOW WE DO IT
      </button>
    </div>
  </div>
</section>


  );
}
