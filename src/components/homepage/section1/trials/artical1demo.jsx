"use client";
import React, { useEffect, useState } from 'react';
import Logo1 from "./service1/movingLogo";
import Sublist1 from "./service1/AnimatedText1";
import Logo2 from "./service2/movingLogo";
import Sublist2 from "./service2/AnimatedText2";
import Logo3 from "./service3/movingLogo";
import Sublist3 from "./service3/AnimatedText3";
import Logo4 from "./service4/movingLogo";
import Sublist4 from "./service4/AnimatedText4";
import Logo5 from "./service5/movingLogo";
import Sublist5 from "./service5/AnimatedText5";

const ScrollTracker = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <article>
            <div>
                {/* <div className='sticky top-[140px] z-99 t-[10px] r-[10px] bg-wit4 p-2 border border-blk1'>
                    <h1>Scroll Position: {Math.floor(scrollY)}px</h1>
                </div> */}
                <div className="h-[1000px] bg-blk1 ">
                    <div className='sticky top-[200px] flex flex-col gap-2'>
                        <Logo1 />
                        <Sublist1 />
                    </div>
                </div>

                <div className="h-[700px] bg-blk1 ">
                    <div className='sticky top-[200px] flex flex-col gap-2'>
                        <Logo2 />
                        <Sublist2 />
                    </div>
                </div>

                <div className="h-[500px] bg-blk1 ">
                    <div className='sticky top-[200px] flex flex-col gap-2'>
                        <Logo3 />
                        <Sublist3 />
                    </div>
                </div>

                <div className="h-[600px] bg-blk1 ">
                    <div className='sticky top-[200px] flex flex-col gap-2'>
                        <Logo4 />
                        <Sublist4 />
                    </div>
                </div>

                <div className="h-[650px] bg-blk1 ">
                    <div className='sticky top-[200px] flex flex-col gap-2'>
                        <Logo5 />
                        <Sublist5 />
                    </div>
                </div>
                
            </div>
        </article>
    );
};

export default ScrollTracker;
