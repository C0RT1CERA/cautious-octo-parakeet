import React from 'react';
import ArticleCard1 from '@/components/articles/ArticleCard1';
import ArticleCard2 from '@/components/articles/ArticleCard2';
import Paginate from '@/components/articles/paginate';
import DemoCompo from '@/components/articles/DemoCompo';
import MainHead from '@/components/articles/MainHead';

const Home = () => {
  return (
    <div className='z-25 min-h-screen pt-[135px]'> {/* Adjust pt-[135px] based on your navbar height */}
      <div className='flex flex-col md:flex-row items-start justify-center h-full'>
        {/* Left Section (Mobile and Tablet) */}
        <div className="relative w-full md:w-1/2 bg-zinc-50 border-r-4 border-l-4 border-b-4 border-stone-800 flex items-start justify-start flex-col">
        <div>
            <MainHead />
          </div>
        
          <div className="p-4 md:p-6 md:text-left">
          
            <h1 className="subpixel-antialiased text-3xl md:text-5xl font-bold mb-2">Latest</h1>
            <h2 className="subpixel-antialiased text-3xl md:text-xl font-bold mb-2 text-gray-700">Read the latest Opinion....</h2>
          </div>
          <div className=" px-4 md:p-8"> {/* Reduced padding for mobile */}
            {/* Article section 1 */}
            
            <ArticleCard1 />
            <div className="mt-4"> {/* Added margin top for spacing */}
              <Paginate/>
            </div>
          </div>
        </div>

        {/* Right Section (Desktop) */}
        <div className="relative hidden md:block w-full md:w-1/2 bg-zinc-50 border-r-4 border-b-4 border-stone-800">
          <div className="p-4 pt-[25px] md:pt-0 pb-[100px]"> {/* Padding for ArticleCard2 */}
            <div className="md:text-left mt-5">
              <h1 className="subpixel-antialiased text-3xl md:text-5xl font-bold mb-2">Discover</h1>
              <h2 className="subpixel-antialiased text-3xl md:text-xl font-bold mb-2 text-gray-700">From the RevMedSYNC! archives</h2>
            </div>

            <ArticleCard2 />
          </div>

          {/* DemoCompo without padding */}
          <div>
            <DemoCompo />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
