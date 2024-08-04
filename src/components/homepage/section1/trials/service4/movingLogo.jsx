"use client";
import React from 'react';
import { MdTouchApp } from "react-icons/md";
import { motion, useTransform, useSpring, useViewportScroll } from 'framer-motion';

const ScrollTracker = () => {
    const { scrollY } = useViewportScroll();
    const scale = useTransform(scrollY, [2879, 2950], [0.5, 1]);
    const y = useTransform(scrollY, [2879, 2950], ['100%', '0%']);
    const opacity = useTransform(scrollY, [2879, 2950], [0, 1]);
 
    const springScale = useSpring(scale, { stiffness: 400, damping: 30 });
    const springY = useSpring(y, { stiffness: 400, damping: 30 });
    const springOpacity = useSpring(opacity, { stiffness: 400, damping: 30 });

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="z-10 p-2 ">
                <motion.div
                    style={{
                        scale: springScale,
                        y: springY,
                        opacity: springOpacity,
                    }}
                    className='flex flex-row items-center'
                >
                    <MdTouchApp size={50} className="text-xl sm:text-3xl text-y4" />
                    <h1 className="px-2 text-xl sm:text-3xl text-y4">Technology Selection and Deployment</h1>
                </motion.div>
            </div>
        </div>
    );
};

export default ScrollTracker;
