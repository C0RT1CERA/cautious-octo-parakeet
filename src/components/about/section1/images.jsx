import Image from 'next/image';

const images = [
  { src: '/speciality/img1.png', alt: 'Image 1', name: 'Large Hospital System' },
  { src: '/speciality/img2.png', alt: 'Image 2', name: 'Specialty Clinics' },
  { src: '/speciality/img3.png', alt: 'Image 3', name: 'Primary Care Practice' },
  { src: '/speciality/img4.png', alt: 'Image 4', name: 'Urgent Care Centers' },
  { src: '/speciality/img5.png', alt: 'Image 5', name: 'Radiology Centers' },
  { src: '/speciality/img10.png', alt: 'Image 6', name: 'Orthopaedic Groups' },
  { src: '/speciality/img6.png', alt: 'Image 7', name: 'Behavioral Health' },
  { src: '/speciality/img7.png', alt: 'Image 8', name: 'Surgical Centers' },
  { src: '/speciality/img8.png', alt: 'Image 9', name: 'Homehealth Care' },
  { src: '/speciality/img9.png', alt: 'Image 10', name: 'Multi-specialty Groups' },
];

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative bg-white rounded-xl overflow-hidden shadow-md border border-gray-300 flex flex-col items-center"
        >
          <div className="w-full h-40 md:h-56 lg:h-64 relative">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-sm font-medium text-gray-700">{image.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
