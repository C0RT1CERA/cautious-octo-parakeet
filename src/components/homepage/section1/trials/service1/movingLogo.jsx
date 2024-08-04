"use client";
import React from 'react';
import { SiMoneygram } from "react-icons/si";
import { motion, useTransform, useSpring, useViewportScroll } from 'framer-motion';

const ScrollTracker = () => {
    const { scrollY } = useViewportScroll();
    const scale = useTransform(scrollY, [710, 785], [0.5, 1]);
    const y = useTransform(scrollY, [710, 785], ['100%', '0%']);
    const opacity = useTransform(scrollY, [710, 785], [0, 1]);

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
                    <SiMoneygram size={50} className="text-xl sm:text-3xl text-y4" />
                    <h1 className="px-2 text-xl sm:text-3xl text-y4">End-to-End RCM Solution</h1>
                </motion.div>
            </div>
        </div>
    );
};

export default ScrollTracker;