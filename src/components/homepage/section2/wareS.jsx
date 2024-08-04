import React from 'react';

const WareS = () => {
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
    <div className="bg-blk3 text-white py-8">
      <h1 className="text-3xl text-center mb-8">Expertise on 30+ EMRs and Billing Platforms</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 mx-auto max-w-7xl px-2">
        {images.map((imageUrl, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img 
              src={imageUrl} 
              alt={`Image ${index + 1}`} 
              className="object-cover w-full h-24 sm:h-32 md:h-40 lg:h-48" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WareS;
