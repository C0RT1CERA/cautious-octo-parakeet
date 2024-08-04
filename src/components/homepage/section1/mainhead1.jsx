import React from 'react';
import RevealLinks from "./RevealLinks";
const MainHead = () => {
    return (
        <section className="bg-blk1 text-zinc-50">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="max-w-lg">
  <div className="">
    <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold">WELCOME</h2>
  </div>
  <div className="">
    <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold">TO</h2>
  </div>
  <div className="w-full">
    <h2 className="text-5xl text-y4 sm:text-5xl md:text-7xl font-bold"><RevealLinks /></h2>
  </div>
  <div className="">
    <h2 className="text-2xl text-y2 uppercase sm:text-2xl md:text-3xl font-bold">we have got you Covered!</h2>
  </div>

  
</div>
<p className="text-xl uppercase sm:text-xl mt-4 font-normal text-stone-500">
     <span className='text-wit2 underline'>Optimize</span> costs, <span className='text-wit2 underline'>boost</span> productivity, and <span className='text-wit2 underline'>enhance</span> patient care with our advanced RCM solutions.
  </p>
                
               
                
               <div className="mt-12 text-center">
                 <a
                   href="#"
                   className="inline-block rounded bg-y3 px-12 py-3 text-sm font-medium text-white transition hover:bg-y22 focus:outline-none focus:ring focus:ring-yellow-400"
                 >
                   Get Started Today
                 </a>
               </div>
             </div>
</section>

    );
};

export default MainHead;
