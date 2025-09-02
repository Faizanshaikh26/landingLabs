import { Star } from 'lucide-react'
import React from 'react'
import Navbar from '../../../components/Navbar';
import Footer from '../../../Footer';
import Bottom1 from '../../../assets/images/portfolio/health-care/insta-post/1.png'
import Bottom2 from '../../../assets/images/portfolio/health-care/insta-post/2.png'
import Bottom3 from '../../../assets/images/portfolio/health-care/insta-post/3.png'
import Bottom4 from '../../../assets/images/portfolio/health-care/insta-post/4.png'
import img1 from '../../../assets/images/portfolio/health-care/insta-post1/1.png'
import img2 from '../../../assets/images/portfolio/health-care/insta-post1/2.png'
import img3 from '../../../assets/images/portfolio/health-care/insta-post1/3.png'
import img4 from '../../../assets/images/portfolio/health-care/insta-post1/4.png'
import showcase1 from '../../../assets/images/portfolio/health-care/1.png'
import showcase2 from '../../../assets/images/portfolio/health-care/2.png'
import showcase3 from '../../../assets/images/portfolio/health-care/3.png'
import showcase4 from '../../../assets/images/portfolio/health-care/4.png'
import showcase5 from '../../../assets/images/portfolio/health-care/SwaraliPoster-1.png'


export default function FoodDetails() {

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
          src={showcase1}
          alt="Showcase 1"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={showcase2}
          alt="Showcase 2"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={showcase3}
          alt="Showcase 3"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={showcase4}
          alt="Showcase 4"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={showcase5}
          alt="Showcase 5"
          className="rounded-xl shadow-md h-90 w-full hover:scale-105 transition-transform duration-300"
        />
         <img
          src={showcase2}
          alt="Showcase 6"
          className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
     
      </div>

      {/* --- Bottom Row (Optional if you want more editorial/product style) --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <img
          src={img1}
          alt="Bottom 1"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={img2}
          alt="Bottom 2"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={img3}
          alt="Bottom 3"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        <img
          src={img4}
          alt="Bottom 4"
          className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
        
      </div>
    </div>
    <Devider/>

        <div className='mx-auto max-w-7xl'>
          <img src={img3} alt="" />
        </div>

    <Devider/>

<div className="bg-white px-6 md:px-16 py-12 max-w-7xl mx-auto">
  {/* --- Top Image (Centered) --- */}
  <div className="mb-16 flex justify-center">
    <img
      src={showcase1}
      alt="Showcase 1"
      className="rounded-xl shadow-md mx-auto"
    />
  </div>

  {/* --- Bottom Row (Editorial/Product style) --- */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <img
      src={Bottom1}
      alt="Bottom 1"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src={Bottom2}
      alt="Bottom 2"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src={Bottom3}
      alt="Bottom 3"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
    <img
      src={Bottom4}
      alt="Bottom 4"
      className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    />
  </div>
</div>




        


      {/* Divider */}
     

<Footer/>


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
