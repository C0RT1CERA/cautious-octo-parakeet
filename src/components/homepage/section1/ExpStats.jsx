import { FaRegCalendarCheck } from "react-icons/fa6";
import { PiMapPinAreaBold } from "react-icons/pi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

const ExpStats = () => {
    return (
        <div className="py-12 flex flex-row justify-evenly">
            <div className='flex gap-2 flex-col items-center py-5'>
                <PiMapPinAreaBold size={30}/>
                <h1 className="text-lg md:text-xl font-bold">32+</h1>
                <h1 className="flex flex-col items-center text-[10px]  sm:text-sm md:text-base font-bold uppercase"><span>jurisdictions</span><span>served</span> </h1>
            </div>
            <div className='flex gap-2 flex-col items-center py-5'>
                <TbDeviceDesktopAnalytics size={30}/>
                <h1 className="text-lg md:text-xl font-bold">12+</h1>
                <h1 className="flex flex-col items-center text-[10px] sm:text-sm md:text-base font-bold uppercase">
                    <span>TECHNOLOGIES</span>
                    <span>MASTERED</span>
                    </h1>
            </div>
            <div className='flex gap-2 flex-col items-center py-5'>
                <FaRegCalendarCheck size={30}/>
                <h1 className="text-lg md:text-xl font-bold">9+</h1>
                <h1 className="flex flex-col items-center text-[10px] sm:text-sm md:text-base font-bold">
                    <span>YEARS</span>
                    <span>OF</span>
                    <span>EXPERIENCE</span>
                    </h1>
            </div>
        </div>
    );
};
     
export default ExpStats;
