import React from 'react';
import ArticleCard1 from './trials/artical1demo';
import ArticleCard2 from './ArticleCard2';
import Paginate from '@/components/extras/articles/paginate';
import DemoCompo from './DemoCompo';
import MainHead from './mainhead1';
import ExpStats from "./ExpStats";
const Section23 = () => {
  return (
    <div className='z-25 min-h-screen'> {/* Adjust pt-[135px] based on your navbar height */}
      <div>    
          <div className='flex flex-col md:flex-row items-start justify-center h-full'>
            {/* Left Section (Mobile and Tablet) */}
            <div className="w-full md:w-3/4 bg-wit4 flex flex-col">
              <MainHead />
            <ExpStats/>
            
              

              <div className=""> {/* Adjust padding for mobile */}
                <ArticleCard1 />
              </div>
              
            </div>

            {/* Right Section (Desktop) */}
            <div className="relative hidden md:block w-full md:w-1/2 bg-wit4 h-[4260px]">
              <div className="p-6 md:pt-0 pb-[42px]"> {/* Padding for ArticleCard2 */}
                <div className="md:text-left ">
                   <h1 className="mt-5 text-4xl md:text-5xl font-bold mb-2">Discover</h1>
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-700">From the RevMedSYNC! archives</h2>
                </div>
                <div className=''>
                <ArticleCard2 />
                </div>
                
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
