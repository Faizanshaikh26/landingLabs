export default function WhyChoose() {
  return (
    <div className="bg-[#E7D3A8] px-10 py-50 flex flex-wrap gap-10">
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-6">Why Choose  <br /> Landing Labs..</h2>
        <ul className="space-y-4 text-lg font-semibold">
          <li>EXPERIENCED CROSS-INDUSTRY TEAM</li>
          <li>CREATIVE + DATA-DRIVEN APPROACH</li>
          <li>TRANSPARENT REPORTING</li>
          <li>SCALABLE STRATEGIES FOR SMALL TO LARGE BUSINESSES</li>
          <li>COMMITMENT TO CLIENT GROWTH</li>
        </ul>
        <p className="mt-20">
          Visit us at <a href="https://www.landinglabs.in" className="underline">www.landinglabs.in</a>
        </p>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-6">
        <div className="bg-black w-full h-24"></div>
        <div className="bg-black w-full h-24"></div>
        <div className="bg-black w-full h-24"></div>
        <div className="bg-black w-full h-24"></div>
        <div className="bg-black w-full h-24"></div>
        <div className="bg-black w-full h-24"></div>
      </div>
    </div>
  );
}
