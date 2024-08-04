import Image from 'next/image';
import ImageGallery from './images';
import USmap from "./USmap";

const Serve = () => {
    return (
        <div className="w-11/12" style={{ margin: "0 auto", marginTop: "200px" }}>
            {/* section-1 start */}
            <div className="flex flex-wrap lg:flex-nowrap mb-28">
                <div className="w-full lg:w-7/12 px-4">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold mt-2">
                        Who We Serve?
                    </h1>
                    <h2 className="text-sm sm:text-lg md:text-xl tracking-wide mt-4 lg:mt-10 w-full lg:w-11/12">
                        At REVMEDSYNC, we are dedicated to providing
                        comprehensive support to a wide range of medical
                        practices. Our specialized services are designed to
                        streamline operations, enhance efficiency, and ensure
                        compliance across various healthcare sectors. From large
                        hospital systems to niche specialty clinics, our expertise
                        helps healthcare providers focus on what matters most –
                        delivering exceptional patient care
                    </h2>
                    <button className="mt-8 lg:mt-11 bg-blue-500 text-white py-3 text-lg sm:text-xl md:text-2xl px-8 sm:px-16 md:px-24 border-2 border-black rounded-full">
                        Schedule a Demo
                    </button>
                </div>
                <div className="w-full lg:w-5/12 flex items-center justify-center mt-10 lg:mt-0">
                    <div className="hexagon overflow-hidden w-full h-96 lg:h-full max-h-full">
                        <USmap />
                    </div>
                </div>
            </div>
            {/* section-1 end */}
            {/* section-2 start */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold mt-2">
                Healthcare Specialties
            </h1>
            <div>
                <div className="bg-gray-100 flex h-auto">
                    <div className="grid gap-2 p-4 w-full">
                        <ImageGallery />
                    </div>
                </div>
            </div>
            {/* section-2 end */}
        </div>
    );
};

export default Serve;
