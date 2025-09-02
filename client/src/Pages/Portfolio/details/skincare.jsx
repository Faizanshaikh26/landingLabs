import { Star } from "lucide-react";
import React from "react";

import Navbar from "../../../components/Navbar";
import Footer from "../../../Footer";

import image1 from "../../../assets/images/portfolio/skin-care/insta-post/1.png";
import image2 from "../../../assets/images/portfolio/skin-care/insta-post/2.png";
import image3 from "../../../assets/images/portfolio/skin-care/insta-post/3.png";
import image4 from "../../../assets/images/portfolio/skin-care/insta-post/4.png";
import image5 from "../../../assets/images/portfolio/skin-care/insta-post/5.png";

import image6 from "../../../assets/images/portfolio/skin-care/no8.png";
import image7 from "../../../assets/images/portfolio/skin-care/no9.png";

import image8 from "../../../assets/images/portfolio/skin-care/no.png";
import image9 from "../../../assets/images/portfolio/skin-care/no1.png";
import image10 from "../../../assets/images/portfolio/skin-care/no2.png";
import image11 from "../../../assets/images/portfolio/skin-care/no3.png";
import image12 from "../../../assets/images/portfolio/skin-care/no4.png";
import image13 from "../../../assets/images/portfolio/skin-care/no5.png";
import image14 from "../../../assets/images/portfolio/skin-care/no6.png";
import image15 from "../../../assets/images/portfolio/skin-care/no7.png";

export default function SkincareDetails() {
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
      <Navbar />

      <div className="bg-white text-black px-6 md:px-20 py-20 sm:py-52">
        {/* Brand Info Section */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Info */}
          <div>
            <div className="mb-6">
              <p className="text-gray-500 text-sm">Client</p>
              <p className="font-bold text-lg">Haus of Handmade</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Category</p>
              <p className="font-bold text-lg">
                Fashion <br /> Ecommerce
              </p>
            </div>
          </div>

          {/* Right Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              About <span className="text-orange-500 font-bold">The Brand</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Haus of Handmade is a fashion e-commerce brand that effortlessly
              blends Western allure with ethnic roots. As a digital agency,
              we've had the privilege of spearheading their digital media
              marketing and social media campaigns. Our journey with Haus of
              Handmade has been about translating their unique blend of style
              and finesse into a captivating online presence. From strategically
              curated social media content to targeted digital campaigns, we've
              aimed to elevate the brand's visibility and engagement.
            </p>
          </div>
        </div>

        <Devider />

        {/* Videos Grid */}
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

        {/* Top Images */}
        <div className="bg-white px-6 md:px-16 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <img src={image1} alt="Showcase 1" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={image2} alt="Showcase 2" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={image3} alt="Showcase 3" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={image4} alt="Showcase 4" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={image5} alt="Showcase 5" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={image14} alt="Showcase 6" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 h-115" />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img src={image8} alt="Bottom 1" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={image11} alt="Bottom 2" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={image9} alt="Bottom 3" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={image10} alt="Bottom 4" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        <Devider />

        {/* Large Image */}
        <div className="mx-auto max-w-7xl">
          <img src={image7} alt="Full Showcase" className="rounded-xl shadow-md mx-auto" />
        </div>

        <Devider />

        {/* Final Image Grid */}
        <div className="bg-white px-6 md:px-16 py-12 max-w-7xl mx-auto">
          <div className="mb-16 flex justify-center">
            <img src={image12} alt="Center Showcase" className="rounded-xl shadow-md mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img src={image6} alt="Grid 1" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={image13} alt="Grid 2" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={image15} alt="Grid 3" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
            <img src={image7} alt="Grid 4" className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

// Divider Component
export function Devider() {
  return (
    <div>
      <div className="flex items-center justify-center mt-12">
        <div className="flex-1 border-t border-dashed border-gray-400"></div>
        <Star className="mx-4 text-orange-500 fill-orange-500 w-6 h-6" />
        <div className="flex-1 border-t border-dashed border-gray-400"></div>
      </div>
    </div>
  );
}
