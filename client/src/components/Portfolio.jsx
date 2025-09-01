

// import { useState } from "react";
// import {
//   Paintbrush,
//   Code,
//   Smartphone,
//   Megaphone,
//   Mail,
//   Phone,
//   MessageSquare,
// } from "lucide-react";
// import Navbar from "./Navbar";
// import Footer from "../Footer";

// export default function Portfolio() {
//   const [activeTab, setActiveTab] = useState("Website");

//   const tabs = ["Website", "Landing Page", "Email", "Creatives"];

//   const cards = [
//     {
//       title: "Beetel",
//       image:
//         "https://tse3.mm.bing.net/th/id/OIP.4spHsN1O1hRm-INK_6zBQwHaHO?w=1349&h=1315&rs=1&pid=ImgDetMain&o=7&rm=3",
//       tags: [
//         { icon: Paintbrush, label: "Art Direction" },
//         { icon: Code, label: "Development" },
//         { icon: Smartphone, label: "UI/UX" },
//       ],
//     },
//     {
//       title: "Elan",
//       image:
//         "https://static.vecteezy.com/system/resources/previews/000/457/092/original/landing-page-template-of-online-copyright-and-trademark-illustration-concept-isometric-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg",
//       tags: [
//         { icon: Paintbrush, label: "Art Direction" },
//         { icon: Megaphone, label: "Digital Marketing" },
//         { icon: Code, label: "Development" },
//         { icon: Smartphone, label: "UI/UX" },
//       ],
//       showContacts: true,
//     },
//     {
//       title: "AutumnLane",
//       image: "https://i.ibb.co/WfxmYdH/autumnlane.png",
//       tags: [
//         { icon: Megaphone, label: "Digital Marketing" },
//         { icon: Paintbrush, label: "Art Direction" },
//         { icon: Code, label: "Development" },
//         { icon: Smartphone, label: "UI/UX" },
//       ],
//     },
//     {
//       title: "Style Union",
//       image: "https://i.ibb.co/Xbgdjkt/styleunion.png",
//       tags: [
//         { icon: Megaphone, label: "Digital Marketing" },
//         { icon: Paintbrush, label: "Art Direction" },
//         { icon: Smartphone, label: "UI/UX" },
//         { icon: Code, label: "Development" },
//       ],
//     },
//   ];

//   return (
// <>

// <Navbar/>

//     <div className="min-h-screen bg-white text-primaryText p-6 sm:p-8 lg:p-12 py-20 mt-32">
//       {/* Tabs */}
//       <div className="flex justify-center gap-3 sm:gap-4 my-6 ">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 sm:px-6 py-2 border border-yellow-400 text-base sm:text-lg font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition ${
//               activeTab === tab ? "bg-yellow-400 text-black" : "bg-transparent"
//             }`}
//             aria-pressed={activeTab === tab}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Grid with equal height cards */}
//       <div className="grid md:grid-cols-2 gap-5">
//         {cards.map((card, index) => (
//           <article
//             key={index}
//             className="bg-primaryCardBg border border-yellow-500 p-4 flex flex-col justify-between h-[420px] relative rounded-md overflow-hidden"
//             aria-labelledby={`card-title-${index}`}
//           >
//             <img
//               src={card.image}
//               alt={`${card.title} preview`}
//               className="w-full h-64 sm:h-56 md:h-60 object-cover mb-3 rounded"
//               loading="lazy"
//             />

//             <div>
//               <h2 id={`card-title-${index}`} className="text-2xl font-semibold mb-2">
//                 {card.title}
//               </h2>

//               <div className="flex flex-wrap gap-3 items-center text-sm text-secondaryText">
//                 {card.tags.map((tag, i) => {
//                   const Icon = tag.icon;
//                   return (
//                     <span
//                       key={i}
//                       className="flex items-center gap-2 bg-white/3 px-2 py-1 rounded"
//                     >
//                       <Icon className="w-4 h-4 text-yellow-400" aria-hidden="true" />
//                       <span className="text-xs sm:text-sm">{tag.label}</span>
//                     </span>
//                   );
//                 })}
//               </div>
//             </div>
//         </div>
//     );
// }


import { useState } from "react";
import {
  Paintbrush,
  Code,
  Smartphone,
  Megaphone,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "../Footer";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Website");

  const tabs = ["Website", "Landing Page", "Email", "Creatives"];

  const cards = [
    {
      title: "Beetel",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.4spHsN1O1hRm-INK_6zBQwHaHO?w=1349&h=1315&rs=1&pid=ImgDetMain&o=7&rm=3",
      tags: [
        { icon: Paintbrush, label: "Art Direction" },
        { icon: Code, label: "Development" },
        { icon: Smartphone, label: "UI/UX" },
      ],
    },
    {
      title: "Elan",
      image:
        "https://static.vecteezy.com/system/resources/previews/000/457/092/original/landing-page-template-of-online-copyright-and-trademark-illustration-concept-isometric-flat-design-concept-of-web-page-design-for-website-and-mobile-website-vector-illustration.jpg",
      tags: [
        { icon: Paintbrush, label: "Art Direction" },
        { icon: Megaphone, label: "Digital Marketing" },
        { icon: Code, label: "Development" },
        { icon: Smartphone, label: "UI/UX" },
      ],
      showContacts: true,
    },
    {
      title: "AutumnLane",
      image: "https://i.ibb.co/WfxmYdH/autumnlane.png",
      tags: [
        { icon: Megaphone, label: "Digital Marketing" },
        { icon: Paintbrush, label: "Art Direction" },
        { icon: Code, label: "Development" },
        { icon: Smartphone, label: "UI/UX" },
      ],
    },
    {
      title: "Style Union",
      image: "https://i.ibb.co/Xbgdjkt/styleunion.png",
      tags: [
        { icon: Megaphone, label: "Digital Marketing" },
        { icon: Paintbrush, label: "Art Direction" },
        { icon: Smartphone, label: "UI/UX" },
        { icon: Code, label: "Development" },
      ],
    },
  ];

  return (
<>

<Navbar/>

    <div className="min-h-screen bg-white text-primaryText p-6 sm:p-8 lg:p-12 py-20 mt-32">
      {/* Tabs */}
      <div className="flex justify-center gap-3 sm:gap-4 my-6 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 py-2 border border-yellow-400 text-base sm:text-lg font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition ${
              activeTab === tab ? "bg-yellow-400 text-black" : "bg-transparent"
            }`}
            aria-pressed={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid with equal height cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {cards.map((card, index) => (
          <article
            key={index}
            className="bg-primaryCardBg border border-yellow-500 p-4 flex flex-col justify-between h-[420px] relative rounded-md overflow-hidden"
            aria-labelledby={`card-title-${index}`}
          >
            <img
              src={card.image}
              alt={`${card.title} preview`}
              className="w-full h-64 sm:h-56 md:h-60 object-cover mb-3 rounded"
              loading="lazy"
            />

            <div>
              <h2 id={`card-title-${index}`} className="text-2xl font-semibold mb-2">
                {card.title}
              </h2>

              <div className="flex flex-wrap gap-3 items-center text-sm text-secondaryText">
                {card.tags.map((tag, i) => {
                  const Icon = tag.icon;
                  return (
                    <span
                      key={i}
                      className="flex items-center gap-2 bg-white/3 px-2 py-1 rounded"
                    >
                      <Icon className="w-4 h-4 text-yellow-400" aria-hidden="true" />
                      <span className="text-xs sm:text-sm">{tag.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Contact icons only for Elan */}
            {card.showContacts && (
              <div className="absolute bottom-4 right-4 flex flex-col gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="bg-yellow-400 text-black p-2 rounded-full shadow-md inline-flex items-center justify-center"
                  aria-label="Email Elan"
                  rel="noopener noreferrer"
                >
                  <Mail size={18} />
                </a>

                <a
                  href="tel:+917387392708"
                  className="bg-gray-800 border border-gray-700 text-white p-2 rounded-full inline-flex items-center justify-center"
                  aria-label="Call Elan"
                  rel="noopener noreferrer"
                >
                  <Phone size={18} />
                </a>

                {/* Using MessageSquare as WhatsApp alternative */}
                <a
                  href="https://wa.me/917387392708"
                  target="_blank"
                  className="bg-green-500 text-white p-2 rounded-full inline-flex items-center justify-center"
                  aria-label="WhatsApp Elan"
                  rel="noopener noreferrer"
                >
                  <MessageSquare size={18} />
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>

<Footer/>
    </>
  );
}

