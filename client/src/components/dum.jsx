import React from "react";

export default function DesignLadder() {
  const steps = [
    {
      title: "ENGAGEMENT",
      description: "Agile video production and brand-first creative that cuts past noise",
    },
    {
      title: "TRAFFIC",
      description: "Multichannel prospecting & retargeting of top-performing user segments",
    },
    {
      title: "CONVERSION",
      description: "Landing pages to on-site messaging and design optimization",
    },
    {
      title: "RETENTION",
      description: "Content strategy and creative testing of email sequences",
    },
  ];

  return (
    <div className="bg-white text-black">
      {/* Ladder Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="relative max-w-5xl w-full h-[600px]">
          {steps.map((step, index) => {
            const top = index * 120;
            const left = index * 120;
            return (
              <div key={index} className="absolute" style={{ top, left }}>
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <>
                    {/* Horizontal line */}
                    <div
                      className="absolute top-1/2 left-full h-[2px] bg-black"
                      style={{ width: "40px" }}
                    />
                    {/* Vertical line */}
                    <div
                      className="absolute left-full top-1/2 bg-black w-[2px]"
                      style={{ height: "80px", marginLeft: "40px" }}
                    />
                  </>
                )}

                {/* Card */}
                <div className="bg-white border border-black rounded-md shadow-md p-4 w-72">
                  <h3 className="font-bold text-sm text-black mb-2">{step.title}</h3>
                  <p className="text-gray-700 text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Partnership Section */}
      <section className=" px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold">
            Partnership isn’t just a promise —{" "}
            <span className="text-orange-500">it’s our process.</span>
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            We’re committed to building sustainable systems and marketing strategies that drive
            long-term success for your business.
          </p>

          {/* Image box */}
          <div className="mt-10 inline-block border border-gray-300 rounded-md p-2">
            <img
              src="https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg"
              alt="Our process"
              className="w-[300px] h-auto md:w-[400px] object-cover rounded-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
