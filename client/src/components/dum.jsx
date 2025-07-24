import React, { useEffect, useRef } from "react";
import heroVideo from "../assets/videos/hero-video.mp4";
import { animate, stagger } from "motion";
import { splitText } from "motion-plus";

export default function Hero() {
  const containerRef = useRef(null);
  const h4Ref = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const targets = [h4Ref, h1Ref, pRef];

      targets.forEach((ref, idx) => {
        if (!ref.current) return;
        const { words } = splitText(ref.current, {
          by: "word",
          wordClass: "glass-word",
        });

        if (!words || words.length === 0) return;

        animate(
          words,
          { opacity: [0, 1], y: [10, 0] },
          {
            type: "spring",
            duration: 1.8,
            bounce: 0.3,
            delay: stagger(0.04, { start: idx * 0.3 }),
          }
        );
      });
    });
  }, []);

  return (
    <div
      className="relative w-full lg:h-screen overflow-hidden pt-20 h-[80vh] md:pt-60"
      ref={containerRef}
      style={{ visibility: "hidden" }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 text-white">
        <h4
          ref={h4Ref}
          className="text-white text-lg font-semibold mb-2"
        >
          This Isn’t Just a Platform. It’s a Possibility Engine
        </h4>

        <h1
          ref={h1Ref}
          className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6"
        >
          Launch Smarter <br /> Grow Faster.
        </h1>

        <p
          ref={pRef}
          className="text-lg text-gray-300 max-w-2xl mb-6"
        >
          Empower your brand, engage your audience, elevate your success — <br />
          Tailored growth solutions fueled by creativity and data.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full w-fit">
          GET STARTED
        </button>
      </div>

      {/* Glassmorphism styling for each word */}
      <style jsx>{`
        .glass-word {
          display: inline-block;
          margin-right: 0.25rem;
          padding: 0.25rem 0.5rem;
          border-radius: 0.5rem;
          backdrop-filter: blur(6px);
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
}
