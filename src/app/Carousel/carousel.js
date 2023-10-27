import Image from 'next/image';
import React from 'react';

const ProductCarousel = () => {
  const imagesData = [
    {
      name: 'Lipsticks',
      price: '$50',
      src: '/images/Lipstick.png', // Replace with the actual path to your image
    },
    {
      name: 'Lipsticks',
      price: '$40',
      src: '/images/Liquidlip.png', // Replace with the actual path to your image
    },
    {
      name: 'Mascara',
      price: '$70',
      src: '/images/Mascara.png', // Replace with the actual path to your image
    },
    {
      name: 'Nailpaint',
      price: '$65',
      src: '/images/Nailpaint.png', // Replace with the actual path to your image
    },
  ];

  return (
    <div className="text-center mt-8 px-8">
      <h1 className="text-3xl font-bold mb-4 font-serif text-black">Our Products</h1>
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-center md:space-x-4 mt-10">
        {imagesData.map((image, index) => (
          <div key={index} className="relative text-center">
            <Image 
              src={image.src} 
              alt={image.name} 
              height={305}
              width={350}
              className="w-350 h-305 object-cover rounded-lg" 
            />
            <p className="mt-2 text-black font-semibold">{image.name}</p>
            <p className="text-gray-500">{image.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
