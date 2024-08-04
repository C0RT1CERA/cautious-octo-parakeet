import React from 'react';
import ArticleCard1 from './ArticleCard1';
import ArticleCard2 from './ArticleCard2';
import Paginate from '@/components/extras/articles/paginate';
import DemoCompo from './DemoCompo';
import MainHead from './mainhead1';
const Section23 = () => {
  return (
    <div className='z-25 min-h-screen'> {/* Adjust pt-[135px] based on your navbar height */}
      <div>    
          <div className='flex flex-col md:flex-row items-start justify-center h-full'>
            {/* Left Section (Mobile and Tablet) */}
            <div className="w-full md:w-1/2 bg-zinc-50 border-4 border-blk1 flex flex-col">
              <MainHead />

              <div className="p-4 md:p-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Latest</h1>
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-700">Read the latest Opinion...</h2>
              </div>

              <div className="p-4 md:p-8"> {/* Adjust padding for mobile */}
                <ArticleCard1 />
                <div className="mt-4">
                  <Paginate/>
                </div>
                
              </div>
              
            </div>

            {/* Right Section (Desktop) */}
            <div className="relative hidden md:block w-full md:w-1/2 bg-wit4 h-[2924px]">
              <div className="p-4 pt-[25px] md:pt-0 pb-[100px]"> {/* Padding for ArticleCard2 */}
                <div className="md:text-left mt-5">
                   <h1 className="text-4xl md:text-5xl font-bold mb-2">Discover</h1>
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-700">From the RevMedSYNC! archives</h2>
                </div>

                <ArticleCard2 />
              </div>

              {/* DemoCompo with sticky positioning */}
              <div className='sticky top-[120px]'>
                <DemoCompo />
              </div>

            </div>
            
          </div>
          
      </div>
    </div>
  );
};

export default Section23;
