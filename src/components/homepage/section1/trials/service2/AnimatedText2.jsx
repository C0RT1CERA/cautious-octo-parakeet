import { motion, useTransform, useSpring, useScroll } from 'framer-motion';
import { GoDotFill } from "react-icons/go";


const AnimatedText = ({ children, index }) => {
    const { scrollY } = useScroll();
    const start = 1800 + index * 20;
    const end = start + 25;

    const scale = useTransform(scrollY, [start, end], [0.5, 1]);
    const y = useTransform(scrollY, [start, end], ['100%', '0%']);
    const opacity = useTransform(scrollY, [start, end], [0, 1]);

    const springScale = useSpring(scale, { stiffness: 200, damping: 75 });
const springY = useSpring(y, { stiffness: 200, damping: 75 });
const springOpacity = useSpring(opacity, { stiffness: 200, damping: 75 });
    return (
        <motion.h1
            style={{
                scale: springScale,
                y: springY,
                opacity: springOpacity,
            }}
            className='text-wit4 text-md mt-2'
        >
            {children}
        </motion.h1>
    );
};

const Sublist = () => {
    const solutionPoints = [
        "Comprehensive Credentialing Services",
        "Expertise Across Payer Networks",
        "Efficiency and Timeliness",
        "Compliance and Accuracy",
        "Client Support and Communication",
        "Customized Solutions",
        "Track Record of Success",
        "Continued Support",
    ];

    return (
        <div className="flex flex-col">
            {solutionPoints.map((point, index) => (
                <AnimatedText key={index} index={index}>
                    <div className='flex flex-row'>
                        <GoDotFill size={10} className='m-[7px]' />
                        {point}
                    </div>
                </AnimatedText>
            ))}
        </div>
    );
};

export default Sublist;