

import { Star } from 'lucide-react'
import React from 'react'


import Navbar from '../../../components/Navbar';
import Footer from '../../../Footer';
import image1 from  '../../../assets/images/portfolio/ecomerce/1.png'
import image2 from  '../../../assets/images/portfolio/ecomerce/2.png'
import image3 from  '../../../assets/images/portfolio/ecomerce/3.png'
import image4 from  '../../../assets/images/portfolio/ecomerce/4.png'
import image5 from  '../../../assets/images/portfolio/ecomerce/5.png'
import image6 from  '../../../assets/images/portfolio/ecomerce/6.png'
import image7 from  '../../../assets/images/portfolio/ecomerce/gayatri/1.png'
import image8 from  '../../../assets/images/portfolio/ecomerce/gayatri/2.png'
import image9 from  '../../../assets/images/portfolio/ecomerce/gayatri/3.png'
import image10 from  '../../../assets/images/portfolio/ecomerce/gayatri/4.png'
import image11 from  '../../../assets/images/portfolio/ecomerce/gayatri/5.png'
import image12 from  '../../../assets/images/portfolio/ecomerce/threadlino/1.png'
import image13 from  '../../../assets/images/portfolio/ecomerce/threadlino/2.png'
import image14 from  '../../../assets/images/portfolio/ecomerce/SOOTHING.png'


export default function EcomerceDetails() {

    

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
     <div className="bg-white text-black px-6 md:px-20 py-28 sm:py-52">



      
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Info */}
        <div>
          <div className="mb-6">
            <p className="text-gray-500 text-sm">Client</p>
            <p className="font-bold text-lg">Madake jewellers</p>
            <p className="font-bold text-lg">PrintifyTshirt</p>
            <p className="font-bold text-lg">Threadlino</p>
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
  E-commerce is more than convenience—it’s about creating seamless shopping 
  experiences that inspire trust and excitement. From carefully designed product 
  showcases to user-friendly interfaces, every detail plays a role in guiding 
  customers from discovery to purchase. The focus is on blending storytelling 
  with strategy, building connections that go beyond transactions. Through 
  engaging content, personalized campaigns, and data-driven solutions, the goal 
  is to elevate brand visibility, boost customer loyalty, and transform online 
  shopping into a memorable journey.
</p>

        </div>
      </div>



      

{/* <Devider/> */}


{/* <div className="bg-white px-6 md:px-12 py-10 mx-auto max-w-7xl">
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
    </div> */}

    <Devider/>
    

       <div className="bg-white px-6 md:px-16 py-12 max-w-7xl mx-auto">
      {/* --- Top Grid (Mockup style) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

        <img
          src={image1}
          alt="Showcase 1"
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
          src={image6}
          alt="Showcase 6"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* --- Bottom Row (Optional if you want more editorial/product style) --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <img
          src={image12}
          alt="Bottom 1"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={image13}
          alt="Bottom 2"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={image14 }
          alt="Bottom 3"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={image10}
          alt="Bottom 4"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
    <Devider/>

         <div className="mx-auto max-w-7xl py-10">
                                <img src={image14} className="rounded-xl shadow-md mx-auto w-full h-[80vh]" />
                              </div>
    <Devider/>

<div className="bg-white px-6 md:px-16 py-12 max-w-7xl mx-auto">
  {/* --- Top Image (Centered) --- */}
  <div className="mb-16 flex justify-center">
    <img
      src={image11}
      alt="Showcase 1"
      className="rounded-xl shadow-md mx-auto"
    />
  </div>

  {/* --- Bottom Row (Editorial/Product style) --- */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <img
      src={image10}
      alt="Bottom 1"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src={image9}
      alt="Bottom 2"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src={image8}
      alt="Bottom 3"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src={image7}
      alt="Bottom 4"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>




        


      {/* Divider */}
     



    </div>


    <Footer/>
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