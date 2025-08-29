import React from "react";
// import freeTrialImg from "../assets/images/page-logo/free-Trial.png";

export default function FreeTrailPage() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <div className="flex justify-center pt-8 sm:pt-10 md:pt-14 mb-6 sm:mb-8 md:mb-10 w-full">
        <img
          src="https://cdn.pixabay.com/objects3d/2025/08/11/09-16-31-55_720x720.png"
          alt="Free Trial Badge"
          className="h-24 sm:h-28 md:h-35 w-auto"
        />
      </div>
      <div className="w-full flex flex-col items-center px-4">
        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] font-bold tracking-tight leading-tight text-black text-center mb-2">
          From Zero to Trending
        </h1>
        <div className="text-[1.5rem] sm:text-[2rem] md:text-[2.6rem] lg:text-[4rem] font-normal text-black text-center leading-snug max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mr-0 sm:mr-0 md:mr-0 lg:mr-70">
          Your first 30 days on us<br />
          — results included.
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-2 h-16 sm:h-20 bg-black"/>
    </div>
  );
}
