import { Star } from 'lucide-react'

import Navbar from '../../../components/Navbar';
import Footer from '../../../Footer';
import Bottom1 from '../../../assets/images/portfolio/food/republic-day/1.png'
import Bottom2 from '../../../assets/images/portfolio/food/republic-day/2.png'
import Bottom3 from '../../../assets/images/portfolio/food/republic-day/3.png'
import Bottom4 from '../../../assets/images/portfolio/food/republic-day/4.png'
import img1 from '../../../assets/images/portfolio/food/kiara-cocktails/1.png'
import img2 from '../../../assets/images/portfolio/food/kiara-cocktails/2.png'
import img3 from '../../../assets/images/portfolio/food/kiara-cocktails/3.png'
import img4 from '../../../assets/images/portfolio/food/kiara-cocktails/3 (2).png'
import img5 from '../../../assets/images/portfolio/food/kiara-cocktails/5.png'
import showcase1 from '../../../assets/images/portfolio/food/123-456-7890 (1).png'
import showcase2 from '../../../assets/images/portfolio/food/Chicken (1).png'
import showcase3 from '../../../assets/images/portfolio/food/drinks on mrp.png'
import showcase4 from '../../../assets/images/portfolio/food/ORDER TODAY!.png'
import showcase5 from '../../../assets/images/portfolio/food/panipuri.png'
import showcase6 from '../../../assets/images/portfolio/food/papdichat.png'
import showcase7 from '../../../assets/images/portfolio/food/PIZZZA AND BEER (1).png'
import showcase8 from '../../../assets/images/portfolio/food/poha (2).png'
import showcase9 from '../../../assets/images/portfolio/food/samosa.png'


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


            <Navbar />
     <div className="bg-white text-black px-6 md:px-20 py-28 sm:py-52">



                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {/* Left Info */}
                    <div>
                        <div className="mb-6">
                            <p className="text-gray-500 text-sm">Client</p>
                            <p className="font-bold text-lg">Kiara</p>
                            <p className="font-bold text-lg">City Samosa</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">Category</p>
                            <p className="font-bold text-lg">Food</p>
                        </div>
                    </div>

                    {/* Right Info */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            About <span className="text-orange-500 font-bold">The Brand</span>
                        </h2>
                      <p className="text-gray-700 leading-relaxed">
  Food is more than nourishment—it’s an experience that brings people together. 
  From farm-fresh ingredients to carefully crafted recipes, every detail plays a 
  role in creating flavors that inspire and delight. The focus is on celebrating 
  authentic taste, telling stories through dishes, and capturing the essence of 
  culture on every plate. Through engaging content, mouth-watering visuals, and 
  targeted campaigns, the goal is to spark cravings, build lasting connections 
  with food lovers, and transform simple meals into memorable moments.
</p>

                    </div>
                </div>





                {/* <Devider /> */}


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

                <Devider />


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
                            className="rounded-xl shadow-md h-91 w-full hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src={showcase4}
                            alt="Showcase 4"
                            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src={showcase5}
                            alt="Showcase 5"
                            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src={showcase6}
                            alt="Showcase 6"
                            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src={showcase7}
                            alt="Showcase 7"
                            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src={showcase8}
                            alt="Showcase 8"
                            className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src={showcase9}
                            alt="Showcase 9"
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
                            src={img5}
                            alt="Bottom 5"
                            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                        />

                    </div>
                </div>
                <Devider />

                <div className="mx-auto max-w-7xl py-10">
                    <img src={img4} className="rounded-xl shadow-md mx-auto w-full h-[80vh] object-contain" />
                </div>
                <Devider />

                <div className="bg-white px-6 md:px-16 py-12 max-w-7xl mx-auto">
                    {/* --- Top Image (Centered) --- */}
                    <div className="mb-16 flex justify-center">
                        <img
                            src={showcase1}
                            alt="Showcase 1"
                            className="rounded-xl shadow-md mx-auto w-full h-[80vh]"
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