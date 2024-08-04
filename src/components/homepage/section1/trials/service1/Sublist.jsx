"use client";
import React from 'react';
import { motion, useTransform, useSpring, useScroll } from 'framer-motion';
import { GoDotFill } from "react-icons/go";

const AnimatedText = ({ children, index }) => {
    const { scrollY } = useScroll();
    const start = 750 + index * 20;
    const end = start + 25;

    const scale = useTransform(scrollY, [start, end], [0.5, 1]);
    const y = useTransform(scrollY, [start, end], ['100%', '0%']);
    const opacity = useTransform(scrollY, [start, end], [0, 1]);

    const springScale = useSpring(scale, { stiffness: 400, damping: 30 });
    const springY = useSpring(y, { stiffness: 400, damping: 30 });
    const springOpacity = useSpring(opacity, { stiffness: 400, damping: 30 });

    return (
        <motion.h1
            style={{
                scale: springScale,
                y: springY,
                opacity: springOpacity,
            }}
            className='text-wit4 text-md mt-2 justify-center items-center '
        >
            {children}
        </motion.h1>
    );
};

const Sublist = () => {
    const solutionPoints = [
        "Patient registration & scheduling",
        "Insurance verification & authorization",
        "Charge capture and coding",
        "Claim Submission",
        "Payment Posting",
        "Denial Management",
        "Patient Billing Collection",
        "Report and Analytics",
        "Compliance and Regulation Management",
        "Technology Integration",
        "Customer Service and Support",
    ];

    return (
        <div className="flex flex-col sticky top-[80px] items-center">
            {solutionPoints.map((point, index) => (
                <AnimatedText key={index} index={index}>
                    <div className='flex flex-row items-center justify-center'>
                        <GoDotFill size={10} className='mr-2' />
                        {point}
                    </div>
                </AnimatedText>
            ))}
        </div>
    );
};

export default Sublist;
