import React from 'react';
import Image from 'next/image';

const Section2 = () => {
  // Array of image URLs (replace with your actual image URLs)
  const images = [
    '/img/wares/admd.png',
    '/img/wares/cerner.png',
    '/img/wares/eclinicalworks.png',
    '/img/wares/epic.png',
    '/img/wares/allscripts.png',
    '/img/wares/practicefusion.png',
    '/img/wares/athenahealth.png',
    '/img/wares/kareo.png',
  ];

  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block bg-y22 text-blk1 py-8">
        <h1 className="text-3xl text-center mb-8">Expertise on 30+ EMRs and Billing Platforms</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 mx-auto max-w-7xl px-2">
          {images.map((imageUrl, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md bg-white p-4">
              <Image 
                src={imageUrl} 
                alt={`Image ${index + 1}`} 
                width={300} // Adjust width as per your design
                height={200} // Adjust height as per your design
                className="object-contain w-full h-full" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden bg-y22 text-blk1 py-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Expertise on 30+ EMRs and Billing Platforms
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-auto max-w-7xl px-2">
          {images.map((imageUrl, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md bg-white p-2">
              <Image 
                src={imageUrl} 
                alt={`Image ${index + 1}`} 
                width={150} // Adjust width as per your design
                height={100} // Adjust height as per your design
                className="object-contain w-full h-24 sm:h-32 md:h-40" 
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section2;
