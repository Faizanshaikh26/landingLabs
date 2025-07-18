// Testonomials.jsx
import React from "react";
const testimonials = [
  {
    name: "Rohit Sharma",
    role: "CTO at Landing Labs",
    message: "Working with Landing Labs helped us scale our digital presence in no time.",
    imageUrl: "https://i.pravatar.cc/150?img=32",
    profileUrl: "https://linkedin.com/in/rohitsharma"
  },
  {
    name: "Ayesha Khan",
    role: "UI/UX Designer at Landing Labs",
    message:
      "The creative freedom and team support at Landing Labs make it the perfect place to grow as a designer.",
    imageUrl: "https://i.pravatar.cc/150?img=47",
    profileUrl: "https://linkedin.com/in/ayeshakhan"
  },
  {
    name: "Ankit Mehra",
    role: "Full Stack Developer at Landing Labs",
    message:
      "I’ve grown both technically and professionally through exciting projects and a talented team.",
    imageUrl: "https://i.pravatar.cc/150?img=33",
    profileUrl: "https://linkedin.com/in/ankitmehra"
  },
  {
    name: "Sneha Joshi",
    role: "Marketing Head at Landing Labs",
    message:
      "Landing Labs is redefining tech innovation. It’s thrilling to be part of this journey.",
    imageUrl: "https://i.pravatar.cc/150?img=21",
    profileUrl: "https://linkedin.com/in/snehajoshi"
  },
  {
    name: "Nikhil Arora",
    role: "Product Manager at Landing Labs",
    message:
      "The culture, the team, and the vision — Landing Labs has all the right ingredients for success.",
    imageUrl: "https://i.pravatar.cc/150?img=56",
    profileUrl: "https://linkedin.com/in/nikhilarora"
  },
  {
    name: "Divya Suresh",
    role: "QA Engineer at Landing Labs",
    message:
      "Every day brings a new challenge and opportunity. Proud to be a part of Landing Labs.",
    imageUrl: "https://i.pravatar.cc/150?img=28",
    profileUrl: "https://linkedin.com/in/divyasuresh"
  }
];

export default function Testimonials() {
  return (
 <div>
      <section id="testimonies" className="md:py-10 ">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                Words from Others
              </div>
              <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
                It's not just  <span className="text-[#E82561]">us.</span> 
              </h1>
                <p className="mt-4  md:text-2xl text-[#CFFFE2]">
                 <span className="text-[#E82561]"> Here's what </span> others have to say about us.
              </p>
            </div>
          </div>

          {/* Testimonials Grid with all data */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href={item.profileUrl}
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.imageUrl}
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt={item.name}
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {item.name}
                          </h3>
                          <p className="text-gray-500 text-md">{item.role}</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        {item.message}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
