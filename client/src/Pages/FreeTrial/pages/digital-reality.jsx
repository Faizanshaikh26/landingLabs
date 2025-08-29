import React from "react";


export default function DigitalReality() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#FF6A00]">
      <div className="w-full lg:w-3/5">
        <div className="mx-4 sm:mx-8 md:mx-12 lg:ml-15 w-auto lg:w-[100%] bg-white p-6 sm:p-10 md:p-16 relative flex flex-col justify-between">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
            your audience is online. are you?
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 sm:mb-6 leading-tight text-black">
            The <br /> Digital Reality
          </h1>
          <div className="text-base sm:text-lg text-gray-900 mb-6 sm:mb-8">
            <span className="font-bold">73%</span> of buying decisions start online <br />
            <span className="font-bold">Social media</span> now drives more brand trust than traditional ads <br />
            Without <span className="font-bold">digital presence</span>, businesses lose to competitors every day
          </div>
          <p className="text-sm sm:text-base text-gray-900">
            Visit us at www.landinglabs.in
          </p>
        </div>

        <div className="w-full lg:w-[120%] h-auto sm:h-60 md:h-80 bg-gray-300 flex flex-col sm:flex-row gap-4 sm:gap-2 p-4 sm:p-0 mt-0 lg:-mt-25">
          <div className="shadow-md rounded-md p-3 sm:p-6">
            <img
              src="https://landing-labs.vercel.app/assets/retail-Industries-BB3XYCoD.jpg"
              alt="Cinnamon"
              className="w-full h-40 sm:h-50 object-cover rounded mt-0 lg:mt-20 ml-0 lg:ml-18"
            />
          </div>

          <div className="shadow-md rounded-md p-3 sm:p-6">
            <img
              src="https://cdn.pixabay.com/photo/2025/03/31/21/30/italy-9505450_640.jpg"
              alt="How to Kampo"
              className="w-full h-40 sm:h-50 object-cover rounded mt-0 lg:mt-20 ml-0 lg:ml-5"
            />
          </div>

          <div className="shadow-md rounded-md p-3 sm:p-6">
            <img
              src="https://cdn.pixabay.com/photo/2025/07/22/14/16/bullfrog-9728505_640.jpg"
              alt="Ki Element"
              className="w-full h-40 sm:h-50 object-cover rounded mt-0 lg:mt-20 ml-0 lg:-ml-8"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5 relative flex flex-col items-center justify-center py-10 lg:py-0 lg:-mt-40">
        <div className="relative w-[80%] sm:w-[60%] md:w-[50%] lg:w-full max-w-xs mb-6 sm:mb-10">
          <img
            src="https://cdn.pixabay.com/photo/2022/05/26/22/14/lake-7223904_640.jpg"
            alt="Stylish Product"
            className="rounded-lg shadow-lg w-full"
          />
          <span
            className="absolute -bottom-6 right-0 sm:ml-0 md:ml-20 lg:ml-40 text-white text-3xl sm:text-4xl md:text-5xl font-[Pacifico] select-none pointer-events-none"
            style={{ textShadow: "2px 2px 12px rgba(0,0,0,0.18)" }}
          >
            Stylish
          </span>
        </div>

        <div className="text-content-container">
          <div className="text-white text-4xl sm:text-5xl text-center lg:text-left ml-0 lg:ml-65 font-semibold mt-16 lg:mt-28">100X</div>
          <div className="text-black text-2xl sm:text-3xl text-center lg:text-right ml-0 lg:ml-35">
            Launch Smarter,<br />Grow Faster.
          </div>
        </div>
      </div>
    </div>
  );
}
