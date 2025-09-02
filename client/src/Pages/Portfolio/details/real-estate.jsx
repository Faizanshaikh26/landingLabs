import { Star } from 'lucide-react'
import React from 'react'
  ;
import Navbar from '../../../components/Navbar';
import Footer from '../../../Footer';

import image1 from "../../../assets/images/portfolio/real-estate/_Real Estate Agency Logos (1).png"
import image2 from "../../../assets/images/portfolio/real-estate/_Real Estate Agency Logos (2).png"
import image3 from "../../../assets/images/portfolio/real-estate/_Real Estate Agency Logos (3).png"
import image4 from "../../../assets/images/portfolio/real-estate/_Real Estate Agency Logos (4).png"
import image5 from "../../../assets/images/portfolio/real-estate/_Real Estate Agency Logos.png"


import poster1 from "../../../assets/images/portfolio/real-estate/Real Estate - P1.png"
import poster2 from "../../../assets/images/portfolio/real-estate/Real Estate - P2.png"
import poster3 from "../../../assets/images/portfolio/real-estate/Real Estate - P3.png"
import poster4 from "../../../assets/images/portfolio/real-estate/Real Estate - P4.png"
import poster5 from "../../../assets/images/portfolio/real-estate/Real Estate - P5.png"

import Banner1 from "../../../assets/images/portfolio/real-estate/Screenshot 2025-08-29 182853.png"
import Banner2 from "../../../assets/images/portfolio/real-estate/Screenshot 2025-08-29 182741.png"
import Banner3 from "../../../assets/images/portfolio/real-estate/Screenshot 2025-08-29 182822.png"
import Banner4 from "../../../assets/images/portfolio/real-estate/Screenshot 2025-08-29 182928.png"
import Banner5 from "../../../assets/images/portfolio/real-estate/Screenshot 2025-08-29 182955.png"
import Banner6 from "../../../assets/images/portfolio/real-estate/Screenshot 2025-08-29 183020.png"
import Banner7 from "../../../assets/images/portfolio/real-estate/Screenshot 2025-08-29 183048.png"



import video1 from "../../../assets/images/portfolio/real-estate/video/Leonara video - 1.mp4"
import video2 from "../../../assets/images/portfolio/real-estate/video/Real estate video - 2.mp4"
import video3 from "../../../assets/images/portfolio/real-estate/video/Real estate video - 3.mp4"
import video4 from "../../../assets/images/portfolio/real-estate/video/Real estate video - 4 (1).mp4"
import video5 from "../../../assets/images/portfolio/real-estate/video/Real estate video - 4.mp4"
import video6 from "../../../assets/images/portfolio/real-estate/video/Real estate video - 6.mp4"
import video7 from "../../../assets/images/portfolio/real-estate/video/Real estate video - 7.mp4"
import video8 from "../../../assets/images/portfolio/real-estate/video/Rent Real Estate Mobile Video- 1.mp4"
import video9 from "../../../assets/images/portfolio/real-estate/video/Rent Real Estate Mobile Video- 1new.mp4"



export default function RealEstateDetails() {

  const videos = [
   video1,video2,video3,video4,video5,video6,video7,video8,video9
  ];
  return (
    <>


      <Navbar />



      <div className="bg-white text-black px-6 md:px-20 py-28 sm:py-52">




        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Info */}
          <div>
            <div className="mb-6">
              <p className="text-gray-500 text-sm">Client</p>
              <p className="font-bold text-lg">OLMA RealEstate</p>
              <p className="font-bold text-lg">Kyrie Petrakis RealEstate</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Category</p>
              <p className="font-bold text-lg">Real Estate</p>
            </div>
          </div>

          {/* Right Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              About <span className="text-orange-500 font-bold">The Brand</span>
            </h2>
           <p className="text-gray-700 leading-relaxed">
  Real estate is more than just property—it’s about creating lasting value and 
  meaningful spaces. Our focus is on driving impactful real estate marketing campaigns 
  that connect buyers, investors, and developers with opportunities that matter. 
  Every project is about showcasing properties in their best light, building trust 
  through engaging storytelling, and crafting digital strategies that stand out in a 
  competitive market. From captivating property showcases to targeted ad campaigns, 
  the goal is to turn interest into investments and leads into loyal clients.
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

        <Devider />


        <div className="bg-white px-6 md:px-16 py-12 max-w-7xl mx-auto">
          {/* --- Top Grid (Mockup style) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            <img
              src={image1}
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={image2}
              alt="Showcase 2"
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={image3}
              alt="Showcase 3"
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={image4}
              alt="Showcase 4"
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={image5}
              alt="Showcase 5"
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={poster5}
              alt="Showcase 6"
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* --- Bottom Row (Optional if you want more editorial/product style) --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img
              src={poster1}
              alt="Bottom 1"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={poster2}
              alt="Bottom 2"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={poster3}
              alt="Bottom 3"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={poster4}
              alt="Bottom 4"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <Devider />

        <div className="mx-auto max-w-4xl py-10">
          <img src={Banner3} alt="" className="w-full h-auto" />
        </div>


        <Devider />

        <div className="bg-white px-6 md:px-16 py-12 max-w-7xl mx-auto">
          {/* --- Top Image (Centered) --- */}
          <div className="mb-16 flex justify-center mx-auto max-w-5xl">
            <img
              src={Banner1}
              alt="Showcase 1"
              className="rounded-xl shadow-md mx-auto"
            />
          </div>

          {/* --- Bottom Row (Editorial/Product style) --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img
              src={Banner2}
              alt="Bottom 1"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={Banner3}
              alt="Bottom 2"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={Banner5}
              alt="Bottom 3"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={Banner7}
              alt="Bottom 4"
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>







        {/* Divider */}




      </div>


      <Footer />
    </>
  )
}




export function Devider() {
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
