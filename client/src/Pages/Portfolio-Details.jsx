
// import { motion } from "framer-motion";
// import Footer from "../Footer";
// import Navbar from "../components/Navbar";
// export default function PortfolioDetails() {
//   const heroImg =
//     "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-3.png.webp";
//   const bigImg1 =
//     "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-2.png.webp";
//   const bigImg2 =
//     "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1.png.webp";

//   const images = [
//     "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-3.png.webp",
//     "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1.png.webp",
//     "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-2.png.webp",

//     "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-3.png.webp",
//     "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-1.png.webp",
//     "https://landinglabs.in/wp-content/uploads/2025/07/@EMILEONA_ROTTE-2.png.webp",

//   ];

//   return (
//     <>

//     <Navbar/>
//       <div className="w-full flex flex-col">
//         {/* Hero Section */}
//         <div
//           className="relative w-full min-h-[60vh] md:min-h-[80vh] bg-center bg-cover flex items-center justify-center"
//           style={{ backgroundImage: `url(${heroImg})` }}
//         >
//           <div className="absolute inset-0 bg-black/40"></div>
//           <div className="relative z-10 text-center text-white px-4">
//             <h1 className="text-3xl md:text-6xl font-bold mb-3">
//               Project Title
//             </h1>
//             <p className="text-base md:text-xl max-w-2xl mx-auto">
//               Short description of the portfolio project.
//             </p>
//           </div>
//         </div>

//         {/* Banner Info Box */}
//         <section className="text-primaryText py-12 px-6">
//           <div className="max-w-5xl mx-auto">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">
//               About the Project:
//             </h2>

//             <p className="text-secondaryText text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
//               Won't seasons, appear days them stars replenish divided. All
//               second forth. Him place was seas man and gathering creepeth called
//               fly. Them sea place lights, midst bearing fourth above.
//             </p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//               <div>
//                 <h3 className="text-accent font-semibold text-lg mb-1">
//                   Category
//                 </h3>
//                 <p className="text-secondaryText text-sm tracking-wider uppercase">
//                   DIGITAL DESIGN
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-accent font-semibold text-lg mb-1">
//                   Customer
//                 </h3>
//                 <p className="text-secondaryText text-sm tracking-wider uppercase">
//                   THEMESCAMP
//                 </p>
//               </div>

//               <div>
//                 <h3 className="text-accent font-semibold text-lg mb-1">
//                   Date
//                 </h3>
//                 <p className="text-secondaryText text-sm tracking-wider uppercase">
//                   AUGUST 6, 2020
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Parallax Big Image 1 */}
//         <div
//           className="h-[50vh] md:h-[70vh] w-full bg-fixed bg-center bg-cover"
//           style={{ backgroundImage: `url(${bigImg1})` }}
//         ></div>

//         {/* Image Carousel */}
//         <div className="w-full py-12">
//           <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-4">
//             {images.map((img, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-64 sm:w-72 h-80 rounded-xl overflow-hidden snap-center"
//               >
//                 <img
//                   src={img}
//                   alt={`slide-${index}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Parallax Big Image 2 */}
//         <div
//           className="h-[50vh] md:h-[70vh] w-full bg-fixed bg-center bg-cover"
//           style={{ backgroundImage: `url(${bigImg2})` }}
//         ></div>

//         {/* Next Project Section */}
//         <section className="relative bg-[#111] text-white py-20 px-6">
//           <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
//             {/* Left Side */}
//             <div className="text-center md:text-left">
//               <p className="uppercase tracking-[3px] text-sm text-gray-400 mb-3">
//                 Next Project
//               </p>
//               <h2 className="text-2xl md:text-5xl font-bold">
//                 Luxury Glassware
//               </h2>
//             </div>

//             {/* Right Side */}
//             <div className="relative">
//               <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
//                 <svg
//                   viewBox="0 0 200 200"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="absolute inset-0 w-full h-full text-gray-400"
//                   fill="none"
//                 >
//                   <path
//                     d="M100,10 
//                       C120,20 180,20 190,100 
//                       C180,180 120,180 100,190 
//                       C80,180 20,180 10,100 
//                       C20,20 80,20 100,10Z"
//                     stroke="currentColor"
//                     strokeWidth="1"
//                   />
//                 </svg>
//                 <a
//                   href="#"
//                   className="relative flex flex-col items-center justify-center text-sm font-medium tracking-wide"
//                 >
//                   <span className="mb-1 text-lg">↗</span>
//                   NEXT PROJECT
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </>
//   );
// }

import { Star } from 'lucide-react'
import React from 'react'
import Navbar from '../components/Navbar';

export default function PortfolioDetails() {

  const videos = [
  "https://www.socialee.in/wp-content/uploads/2024/08/1.mp4",
  "https://www.socialee.in/wp-content/uploads/2024/08/4.mp4",
  "https://www.socialee.in/wp-content/uploads/2024/08/7.mp4",
  "https://www.socialee.in/wp-content/uploads/2024/08/3.mp4",
  "https://www.socialee.in/wp-content/uploads/2024/08/1.mp4",
  "https://www.socialee.in/wp-content/uploads/2024/08/4.mp4",
  "https://www.socialee.in/wp-content/uploads/2024/08/7.mp4",
  "https://www.socialee.in/wp-content/uploads/2024/08/3.mp4",
];
  return (
    <>


<Navbar/>
     <div className="bg-white text-black px-6 md:px-20 py-20 sm:py-52">



      
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Info */}
        <div>
          <div className="mb-6">
            <p className="text-gray-500 text-sm">Client</p>
            <p className="font-bold text-lg">Haus of Handmade</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Category</p>
            <p className="font-bold text-lg">Fashion <br /> Ecommerce</p>
          </div>
        </div>

        {/* Right Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            About <span className="text-orange-500 font-bold">The Brand</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Haus of Handmade is a fashion e-commerce brand that effortlessly
            blends Western allure with ethnic roots. As a digital agency, we've
            had the privilege of spearheading their digital media marketing and
            social media campaigns. Our journey with Haus of Handmade has been
            about translating their unique blend of style and finesse into a
            captivating online presence. From strategically curated social media
            content to targeted digital campaigns, we've aimed to elevate the
            brand's visibility and engagement.
          </p>
        </div>
      </div>



      

<Devider/>


<div className="bg-white px-6 md:px-12 py-10 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((src, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md bg-black"
          >
            <video
              src={src}
              controls
              muted
              loop
              autoPlay
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>

    <Devider/>
    

       <div className="bg-white px-6 md:px-16 py-12 max-w-7xl mx-auto">
      {/* --- Top Grid (Mockup style) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/13.webp?resize=800%2C566&ssl=1"
          alt="Showcase 1"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/43754-HOH-24-03-1-1.webp?fit=1080%2C1080&ssl=1"
          alt="Showcase 2"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/296103-HOH-29-03-1.webp?fit=1080%2C1080&ssl=1"
          alt="Showcase 3"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/470299-HOH-12-03-1-1.webp?fit=1080%2C1080&ssl=1"
          alt="Showcase 4"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/484739-HOH-Ads-2-1.webp?fit=1080%2C1080&ssl=1"
          alt="Showcase 5"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/514001-HOH-22-03-1-1.webp?fit=1080%2C1080&ssl=1"
          alt="Showcase 6"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* --- Bottom Row (Optional if you want more editorial/product style) --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/43754-HOH-24-03-1-1.webp?fit=1080%2C1080&ssl=1"
          alt="Bottom 1"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/296103-HOH-29-03-1.webp?fit=1080%2C1080&ssl=1"
          alt="Bottom 2"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/470299-HOH-12-03-1-1.webp?fit=1080%2C1080&ssl=1"
          alt="Bottom 3"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/484739-HOH-Ads-2-1.webp?fit=1080%2C1080&ssl=1"
          alt="Bottom 4"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
    <Devider/>

        <div className='mx-auto max-w-7xl'>
          <img src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2024/07/3-5.webp?resize=1200%2C686&ssl=1" alt="" />
        </div>

    <Devider/>

<div className="bg-white px-6 md:px-16 py-12 max-w-7xl mx-auto">
  {/* --- Top Image (Centered) --- */}
  <div className="mb-16 flex justify-center">
    <img
      src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/13.webp?resize=800%2C566&ssl=1"
      alt="Showcase 1"
      className="rounded-xl shadow-md mx-auto"
    />
  </div>

  {/* --- Bottom Row (Editorial/Product style) --- */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <img
      src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/43754-HOH-24-03-1-1.webp?fit=1080%2C1080&ssl=1"
      alt="Bottom 1"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/296103-HOH-29-03-1.webp?fit=1080%2C1080&ssl=1"
      alt="Bottom 2"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/470299-HOH-12-03-1-1.webp?fit=1080%2C1080&ssl=1"
      alt="Bottom 3"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2023/12/484739-HOH-Ads-2-1.webp?fit=1080%2C1080&ssl=1"
      alt="Bottom 4"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>




        


      {/* Divider */}
     



    </div>
    </>
  )
}




export  function Devider() {
  return (
    <div>

      <div className="flex items-center justify-center mt-12">
        <div className="flex-1 border-t border-dashed border-gray-400"></div>
        <Star className="mx-4 text-orange-500 fill-orange-500 w-6 h-6" />
        <div className="flex-1 border-t border-dashed border-gray-400"></div>
      </div>
    </div>
  )
}
