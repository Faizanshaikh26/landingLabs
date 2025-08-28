export default function PortfolioGrid() {
  return (
    <div className=" min-h-screen p-4 sm:p-6  bg-black lg:p-6">
      <div className="
        grid gap-3
        grid-cols-1 
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-6 lg:grid-rows-7
        auto-rows-[minmax(150px,auto)]
      ">
        {/* div1 */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-6  shadow-lg overflow-hidden">
          <img
            src="images/img-6.jpg"
            alt=""
            className="lg:w-full lg:h-161 object-cover aspect-[4/3] lg:aspect-auto"
          />
        </div>

        {/* div2 */}
        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-3  shadow-lg overflow-hidden">
          <img
            src="images/img-1.jpg"
            alt=""
            className="w-full lg:h-52 object-cover aspect-[4/3] lg:aspect-auto"
          />
        </div>

        {/* div7 */}
        <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3  shadow-lg overflow-hidden">
          <img
            src="images/img-1.jpg"
            alt=""
            className="w-full h-52 object-cover aspect-[4/3] lg:aspect-auto"
          />
        </div>

        {/* div6 */}
        <div className="col-span-1 bg-accent sm:col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-5 shadow-lg overflow-hidden">
          <img
            src="images/img-2.webp"
            alt=""
            className="w-full h-52 object-cover aspect-[4/3] lg:aspect-auto"
          />
        </div>

        {/* div9 */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-1  shadow-lg overflow-hidden">
          <img
            src="images/img-3.jpg"
            alt=""
            className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
          />
        </div>

        {/* div8 */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 lg:row-span-3 lg:col-start-5 lg:row-start-4  shadow-lg overflow-hidden">
          <img
            src="images/img-5.webp"
            alt=""
            className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
          />
        </div>
      </div>
    </div>
  );
}
