export default function PortfolioHighlights() {
  return (
    <section className="w-full min-h-screen  flex items-center justify-center px-4 sm:px-6 lg:px-12 py-10">
      <div className="w-full max-w-7xl">
        {/* Grid Section */}
        <div
          className="
            grid gap-0
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            auto-rows-[minmax(200px,auto)]
          "
        >
          {/* Image 1 */}
          <div className="relative overflow-hidden shadow-lg">
            <img
              src="/images/Portfolio-1.jpg"
              alt="Portfolio 1"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
            />
            {/* Top-left label */}
            <span className="absolute top-2 left-4 text-sm sm:text-base text-black">
              2025
            </span>
          </div>

          {/* Image 2 */}
          <div className="relative  overflow-hidden shadow-lg">
            <img
              src="/images/Portfolio-2.jpg"
              alt="Portfolio 2"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
            />
            <span className="absolute top-2 left-4 text-sm sm:text-base text-black">
              creative
            </span>
          </div>

         {/* Image 3 (responsive) */}
<div className="
  relative  overflow-hidden shadow-lg
  sm:col-span-2   /* take 2 columns between sm and lg */
  lg:col-span-1 lg:row-span-2  /* normal tall layout on large screens */
">
  <img
    src="/images/Portfolio-3.jpg"
    alt="Portfolio 3"
    className="
      w-full h-full object-cover
      aspect-[4/3]   /* good aspect on small to medium */
      sm:aspect-[16/9]
      lg:aspect-auto
    "
  />
  <span className="absolute top-2 left-4 text-sm sm:text-base text-black">
    portfolio
  </span>
  <span className="absolute top-2 right-4 text-sm sm:text-base text-black">
    industries
  </span>
</div>

{/* Orange Banner with Text overlay (exact style like screenshot) */}
          <div className=" col-span-1 sm:col-span-2 bg-orange-500 flex flex-col justify-center items-center sm:py-12 ">
          
          </div>
          <p className="absolute mt-97 ml-62  sm:top-10 ">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight ">
              PORTFOLIO
            </h1>
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-extrabold text-white leading-none ">
              HIGHLIGHTS
            </h2>
          </p>
        
        </div>
          
      </div>
    </section>
  );
}
