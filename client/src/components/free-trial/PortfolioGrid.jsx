export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-6 grid-rows-7 gap-1.5 w-full h-screen p-4">
      {/* div1 */}
      <div className="col-span-2 row-span-6 rounded-lg shadow overflow-hidden">
        <img
          src="images/img-4.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* div2 */}
      <div className="col-span-2 row-span-2 col-start-3 rounded-lg shadow overflow-hidden">
        <img
          src="images/img-6.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* div7 */}
      <div className="col-span-2 row-span-2 col-start-3 row-start-3 rounded-lg shadow overflow-hidden">
        <img
          src="images/img-1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* div6 */}
      <div className="col-span-2 row-span-2 col-start-3 row-start-5 rounded-lg shadow overflow-hidden">
        <img
          src="images/img-2.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* div9 */}
      <div className="col-span-2 row-span-3 col-start-5 row-start-1 rounded-lg shadow overflow-hidden">
        <img
          src="images/img-3.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* div8 */}
      <div className="col-span-2 row-span-3 col-start-5 row-start-4 rounded-lg shadow overflow-hidden">
        <img
          src="images/img-5.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
