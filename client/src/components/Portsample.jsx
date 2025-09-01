// src/components/Portsample.jsx
import React from 'react';

const Portsample = () => {
  const gridImages1 = [
    'https://i0.wp.com/www.socialee.in/wp-content/uploads/2024/07/2-3.webp?fit=1200%2C1200&ssl=1',
    'https://i0.wp.com/www.socialee.in/wp-content/uploads/2024/07/1-4.webp?fit=1200%2C1200&ssl=1',
    'https://i0.wp.com/www.socialee.in/wp-content/uploads/2024/07/2-3.webp?fit=1200%2C1200&ssl=1',
    'https://i0.wp.com/www.socialee.in/wp-content/uploads/2024/07/2-3.webp?fit=1200%2C1200&ssl=1',
    'https://i0.wp.com/www.socialee.in/wp-content/uploads/2024/07/2-3.webp?fit=1200%2C1200&ssl=1',
    'https://i0.wp.com/www.socialee.in/wp-content/uploads/2024/07/2-3.webp?fit=1200%2C1200&ssl=1'
  ];

  const gridImages2 = [
    '/assets/salad-7.jpg',
    '/assets/salad-8.jpg',
    '/assets/salad-9.jpg',
    '/assets/salad-10.jpg',
    '/assets/salad-11.jpg',
    '/assets/salad-12.jpg'
  ];

  const finalImages = [
    '/assets/final-1.jpg',
    '/assets/final-2.jpg',
    '/assets/final-3.jpg',
    '/assets/final-4.jpg'
  ];

  const videos = [
    '15-03-1.mp4',
    'Slyce-March-Ad-2.mp4',
    '29-02-Reel.mp4',
    'Sylce-march-Ad-1.mp4'
  ];

  return (
    <div className="px-6 md:px-20 py-12 font-sans text-gray-800">
      {/* Client Name */}
      <div className="mb-4">
        <p className="text-lg text-gray-500">Client</p>
        <h1 className="text-2xl font-bold text-black">Slyce</h1>
      </div>

      {/* Brand Introduction */}
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Brand Introduction</h2>
        <p className="text-lg leading-7 text-gray-700">
          Slyce is Gujarat's premier online destination for gourmet products. It aims to revolutionize the way consumers access high-quality, artisanal food items.
          With an expansive catalogue that includes fresh exotic fruits and vegetables, artisanal cheeses, nut butters, and dairy and vegan products, Slyce caters to diverse culinary needs.
          The platform prides itself on offering an exceptional range of handpicked products, ensuring the best quality at the most affordable prices.
        </p>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-gray-200 relative">
        <span className="absolute left-1/2 transform -translate-x-1/2 -top-3 bg-white px-2 text-orange-500 text-xl">★</span>
      </div>

      {/* Section: 4 Videos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {videos.map((video, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm">
            <video
              src={`https://www.socialee.in/wp-content/uploads/2024/07/${video}`}
              controls
              autoPlay
              muted
              className="w-full aspect-video object-cover"
            />
          </div>
        ))}
      </div>

      {/* Section: 1 Wide Image */}
      <div className="mb-10">
        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2024/07/banner-1.webp?w=1024&ssl=1"
          alt="Wide"
          className="w-full h-auto rounded-lg shadow"
        />
      </div>

      {/* Section: 6 Grid Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {gridImages1.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Grid ${idx + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        ))}
      </div>

      {/* Section: 1 Big Horizontal Banner */}
      <div className="mb-10">
        <img
          src="https://i0.wp.com/www.socialee.in/wp-content/uploads/2024/07/3-5.webp?w=1400&ssl=1"
          alt="Big Banner"
          className="w-full h-auto rounded-lg shadow"
        />
      </div>

      {/* Section: Another 6 Grid Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {gridImages2.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Salad ${idx + 7}`}
            className="w-full h-64 object-cover rounded-lg shadow"
          />
        ))}
      </div>

      {/* Section: Final 4 Horizontal Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {finalImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Final ${idx + 1}`}
            className="w-full h-40 object-cover rounded-md shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default Portsample;
