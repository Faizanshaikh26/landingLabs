import React from "react";
// import logoSrc from "../assets/images/Logo- landing labs-black.png";


export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen bg-white">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 py-8 md:pl-20 md:pt-8 bg-white">
        {/* <img src={logoSrc} alt="LANDING LABS.IN Logo" className="w-32 md:w-40 mb-6 md:mb-10" /> */}
        <div className="relative">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-900 tracking-wider z-10">
            GO VIRAL
          </h1>
          <span
            className="absolute top-8 sm:top-20 md:top-38 lg:top-20 left-0 text-xl sm:text-3xl md:text-6xl font-bold text-gray-400 opacity-85 font-cursive pointer-events-none z-0 ml-2 sm:ml-4 md:ml-8"
            style={{
              textShadow: "2px 4px 8px rgba(0,0,0,0.18)",
              fontFamily: "'Pacifico', cursive",
            }}
          >
            Go Further ....
          </span>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-700 mt-7 sm:mt-16 md:mt-20 mb-2 md:mb-4">
          Your business growth starts here, risk-free.
        </p>
        <p className="text-base sm:text-lg font-medium text-gray-800">
          Visit us at <a href="https://www.landinglabs.in" className="underline">www.landinglabs.in</a>
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center bg-accent px-4 py-8 md:px-8 md:py-8">
        <div className="relative w-full sm:w-[350px] md:w-[470px] h-[320px] sm:h-[420px] md:h-[600px] flex items-center justify-center rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/06/17/49/honey-1958464_640.jpg"
            alt="Main Banner"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
